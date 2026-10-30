// Executes local parserless templates against synthetic property values and
// type-checks their output against the real public package entrypoint.
// This checks code compatibility, not publication or live Figma property names.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const cache = path.join(root, ".cache", "figma-snippets");
fs.mkdirSync(cache, { recursive: true });
const files = [];
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) walk(file);
    else if (file.endsWith(".figma.js")) files.push(file);
  }
}
walk(path.join(root, "src/components"));
const generated = [];
const labels = new Map();
const examples = [];
const auditPath = path.join(root, "docs/figma-live-audit.json");
const audit = fs.existsSync(auditPath) ? JSON.parse(fs.readFileSync(auditPath, "utf8")).components : [];
const inventoryPath = path.join(root, "docs/figma-current-inventory.json");
const currentNodes = fs.existsSync(inventoryPath) ? JSON.parse(fs.readFileSync(inventoryPath, "utf8")).pages.flatMap((p) => p.nodes) : [];
let failures = 0;
for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const nodeId = source.match(/^\/\/ url=.*node-id=([\d-]+)/m)?.[1].replace("-", ":");
  const live = currentNodes.find((entry) => entry.id === nodeId) ?? audit.find((entry) => entry.template === path.relative(root, file).replaceAll("\\", "/"));
  const definitions = Object.values(live?.properties ?? {});
  function property(name, type) {
    if (!definitions.length) return undefined;
    const found = definitions.find((p) => p.name === name);
    if (!found || (type && found.type !== type)) throw new Error(`Figma property ${name}: expected ${type ?? "existing property"}`);
    return found;
  }
  const runtime = source.match(/^\/\/ source=(.+)$/m)?.[1].trim();
  if (!runtime || !fs.existsSync(path.join(root, runtime))) {
    console.error(`${path.relative(root, file)}: missing runtime ${runtime}`);
    failures++;
    continue;
  }
  const enums = new Map();
  const booleans = new Set();
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  function visit(node) {
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
      const method = node.expression.name.text;
      const [name, values] = node.arguments;
      if (name && ts.isStringLiteral(name)) {
        if (method === "getBoolean") booleans.add(name.text);
        if (method === "getEnum" && values && ts.isObjectLiteralExpression(values)) {
          enums.set(name.text, values.properties.map((p) => p.name.text));
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  const scenarios = [{ label: "default", props: {} }];
  for (const [name, values] of enums) {
    for (const value of values) scenarios.push({ label: `${name}=${value}`, props: { [name]: value } });
    const liveDefault = definitions.find((p) => p.name === name)?.defaultValue;
    if (liveDefault === "" && !values.includes("")) scenarios.push({ label: `${name}=empty-live-default`, props: { [name]: "" } });
  }
  for (const name of booleans) scenarios.push({ label: `${name}=true`, props: { [name]: true } });
  scenarios.push({ label: "all-booleans", props: Object.fromEntries([...booleans].map((name) => [name, true])) });
  const seen = new Set();
  for (const scenario of scenarios) {
    const instance = {
      getString: (name) => { property(name, "TEXT"); return "Пример"; },
      getBoolean: (name) => { property(name, "BOOLEAN"); return scenario.props[name] ?? false; },
      getEnum: (name, values) => {
        const definition = property(name, "VARIANT");
        const missing = definition?.variantOptions?.filter((v) => !(v in values));
        if (missing?.length) throw new Error(`Figma ${name}: unmapped values ${missing.join(", ")}`);
        return values[scenario.props[name] ?? definition?.variantOptions?.[0] ?? Object.keys(values)[0]];
      },
      getInstanceSwap: (name) => { property(name, "INSTANCE_SWAP"); return undefined; },
      getSlot: (name) => { property(name, "SLOT"); return undefined; },
      getPropertyValue: (name) => { property(name); return scenario.props[name]; },
      findInstance: () => undefined,
      findText: () => ({ characters: "Пример", textContent: "Пример" }),
      findLayers: () => [],
    };
    const figma = {
      selectedInstance: instance,
      tsx: (parts, ...values) => parts.reduce((result, part, i) => result + part + (values[i] ?? ""), ""),
    };
    const context = { require: () => figma, __templateOutput: undefined };
    try {
      vm.runInNewContext(source.replace(/export default/, "__templateOutput ="), context, { timeout: 1000 });
      const { imports, example } = context.__templateOutput;
      if (scenario.label === "default") examples.push({ template: path.relative(root, file).replaceAll("\\", "/"), component: source.match(/^\/\/ component=(.+)$/m)?.[1].trim(), imports, example, metadata: context.__templateOutput.metadata ?? {} });
      if (seen.has(example)) continue;
      seen.add(example);
      const index = generated.length;
      const target = path.join(cache, `snippet-${index}.tsx`);
      const content = `${imports.join(";\n")};\nexport const Example = () => (${example});\n`;
      fs.writeFileSync(target, content);
      generated.push(target);
      labels.set(target, `${path.relative(root, file)} [${scenario.label}]`);
    } catch (error) {
      console.error(`${path.relative(root, file)} [${scenario.label}]: ${error.message}`);
      failures++;
    }
  }
}
const config = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
fs.writeFileSync(path.join(cache, "manifest.json"), JSON.stringify(examples, null, 2));
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
const program = ts.createProgram([...generated, path.join(root, "src/vite-env.d.ts")], {
  ...parsed.options,
  noEmit: true,
  noUnusedLocals: false,
  noUnusedParameters: false,
  paths: { ...parsed.options.paths, "borrom-ds-test": ["src/index.ts"] },
});
const diagnostics = ts.getPreEmitDiagnostics(program);
for (const diagnostic of diagnostics) {
  const file = diagnostic.file?.fileName;
  const label = (file && labels.get(path.normalize(file))) ?? (file ? path.relative(root, file) : "configuration");
  const position = file && diagnostic.start !== undefined
    ? diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)
    : undefined;
  console.error(`${label}${position ? `:${position.line + 1}` : ""}: TS${diagnostic.code} ${ts.flattenDiagnosticMessageText(diagnostic.messageText, " ")}`);
}
console.log(`${files.length} templates, ${generated.length} distinct snippets, ${diagnostics.length + failures} errors. Property definitions checked against the read-only Figma snapshot; snippet values are synthetic.`);
process.exitCode = diagnostics.length + failures ? 1 : 0;
