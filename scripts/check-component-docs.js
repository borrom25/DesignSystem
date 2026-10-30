import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const cache = path.join(root, ".cache/component-docs");
fs.mkdirSync(cache, { recursive: true });
const files = [];
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) walk(file);
    else if (item.name.endsWith(".docs.md")) files.push(file);
  }
}
walk(path.join(root, "src/components"));
files.push(path.join(root, "docs/migration-gitlab-c277eef5.md"));
files.push(path.join(root, "docs/using-design-system.md"));
const labels = new Map();
const generated = [];
for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(/\]\(([^)]+)\)/g)) {
    const target = match[1].split("#")[0];
    if (!target || /^(?:https?:|mailto:)/.test(target)) continue;
    if (!fs.existsSync(path.resolve(path.dirname(file), decodeURIComponent(target)))) throw new Error(`${path.relative(root, file)}: broken link ${target}`);
  }
  const snippets = [...source.matchAll(/```tsx\r?\n([\s\S]*?)```/g)];
  for (const [index, match] of snippets.entries()) {
    const target = path.join(cache, `example-${generated.length}.tsx`);
    const code = match[1];
    fs.writeFileSync(target, code);
    generated.push(target);
    labels.set(path.normalize(target), `${path.relative(root, file)} [example ${index + 1}]`);
  }
}
const config = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
const program = ts.createProgram([...generated, path.join(root, "src/vite-env.d.ts")], {
  ...parsed.options,
  noEmit: true,
  noUnusedLocals: false,
  noUnusedParameters: false,
  paths: { ...parsed.options.paths, "borrom-ds-test": [process.argv.includes("--package") ? "dist/index.d.ts" : "src/index.ts"] },
});
const diagnostics = ts.getPreEmitDiagnostics(program);
for (const diagnostic of diagnostics) {
  const file = diagnostic.file?.fileName;
  const label = (file && labels.get(path.normalize(file))) ?? file ?? "configuration";
  console.error(`${label}: TS${diagnostic.code} ${ts.flattenDiagnosticMessageText(diagnostic.messageText, " ")}`);
}
console.log(`${files.length} documents, ${generated.length} TSX examples, ${diagnostics.length} errors.`);
process.exitCode = diagnostics.length ? 1 : 0;
