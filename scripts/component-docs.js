// Generates reference docs from the public TypeScript API and the read-only
// Figma property snapshot. Live publication is never inferred from names.
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const write = process.argv.includes("--write");
const config = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
const program = ts.createProgram(parsed.fileNames.filter((f) => !f.includes(".stories.")), parsed.options);
const checker = program.getTypeChecker();
const entry = program.getSourceFile(path.join(root, "src/index.ts"));
const exports = checker.getExportsOfModule(checker.getSymbolAtLocation(entry));
const manifestPath = path.join(root, ".cache/figma-snippets/manifest.json");
const examples = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, "utf8")) : [];
const audit = JSON.parse(fs.readFileSync("docs/figma-live-audit.json", "utf8")).components;
const inventoryPath = "docs/figma-current-inventory.json";
const currentNodes = fs.existsSync(inventoryPath) ? JSON.parse(fs.readFileSync(inventoryPath, "utf8")).pages.flatMap((p) => p.nodes) : [];
const publicationPath = "docs/figma-publication-results.json";
const publication = fs.existsSync(publicationPath) ? JSON.parse(fs.readFileSync(publicationPath, "utf8")).components : [];
const relative = (file) => path.relative(root, file).replaceAll("\\", "/");
const cell = (value) => String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
const rows = [];
const generated = [];
const summaries = [];
function save(file, content) {
  content = content.replace(/[\t ]+$/gm, "");
  for (let attempt = 0; ; attempt++) {
    try { fs.writeFileSync(file, content); return; }
    catch (error) {
      if (attempt >= 8) throw error;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 150);
    }
  }
}

function sample(type, name, depth = 0) {
  if (type.flags & ts.TypeFlags.TypeParameter) return sample(checker.getBaseConstraintOfType(type) ?? checker.getStringType(), name, depth + 1);
  if (/LucideIcon|ForwardRefExoticComponent/.test(checker.typeToString(type))) return "Check";
  if (name === "children" || name === "title" || name === "label") return '"Пример"';
  if (name === "src" || name === "url") return '"/example.png"';
  if (depth > 3) return "{}";
  if (type.isUnion()) {
    const concrete = type.types.filter((t) => !(t.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)));
    const preferred = concrete.find((t) => t.flags & (ts.TypeFlags.StringLiteral | ts.TypeFlags.String | ts.TypeFlags.Number | ts.TypeFlags.BooleanLiteral));
    return sample(preferred ?? concrete[0], name, depth + 1);
  }
  if (type.flags & ts.TypeFlags.StringLiteral) return JSON.stringify(type.value);
  if (type.flags & ts.TypeFlags.NumberLiteral) return String(type.value);
  if (type.flags & ts.TypeFlags.String) return '"example"';
  if (type.flags & ts.TypeFlags.Number) return "1";
  if (type.flags & ts.TypeFlags.BooleanLike) return "false";
  if (type.getCallSignatures().length) {
    const signature = type.getCallSignatures()[0];
    const result = checker.typeToString(checker.getReturnTypeOfSignature(signature));
    return result === "void" ? "() => {}" : result.includes("Element") ? "() => <span />" : result === "boolean" ? "() => false" : result === "string" ? '() => "example"' : "() => undefined";
  }
  if (checker.isArrayType(type) || checker.isTupleType(type)) return "[]";
  if (checker.typeToString(type) === "Date") return "new Date(2026, 9, 30)";
  const required = type.getProperties().filter((p) => !(p.flags & ts.SymbolFlags.Optional));
  return `{ ${required.slice(0, 12).map((p) => `${JSON.stringify(p.name)}: ${sample(checker.getTypeOfSymbolAtLocation(p, p.valueDeclaration ?? p.declarations[0]), p.name, depth + 1)}`).join(", ")} }`;
}

for (const publicSymbol of exports) {
  if (publicSymbol.declarations?.some((decl) => ts.isExportSpecifier(decl) && (decl.isTypeOnly || decl.parent.parent.isTypeOnly))) continue;
  const name = publicSymbol.name;
  if (!/^[A-Z]/.test(name)) continue;
  const symbol = publicSymbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(publicSymbol) : publicSymbol;
  const declaration = symbol.valueDeclaration;
  if (!declaration) continue;
  const runtime = relative(declaration.getSourceFile().fileName);
  if (!runtime.startsWith("src/components/") || !runtime.endsWith(".tsx")) continue;
  const valueType = checker.getTypeOfSymbolAtLocation(symbol, declaration);
  const signature = valueType.getCallSignatures()[0];
  if (!signature || !/Element|ReactNode|ReactPortal/.test(checker.typeToString(checker.getReturnTypeOfSignature(signature)))) continue;
  const parameter = signature.getParameters()[0];
  if (!parameter) continue;
  const allPropsType = checker.getTypeOfSymbolAtLocation(parameter, declaration);
  const branches = allPropsType.isUnion() ? allPropsType.types : [allPropsType];
  const propsType = branches.find((branch) => !branch.getProperty("asChild") || branch.getProperty("asChild").flags & ts.SymbolFlags.Optional) ?? branches[0];
  const dir = path.dirname(runtime);
  const link = (file) => path.relative(dir, file).replaceAll("\\", "/");
  let localExport = `${dir}/index.ts`;
  while (!fs.existsSync(localExport) && path.dirname(localExport) !== "src") localExport = `${path.dirname(path.dirname(localExport))}/index.ts`;
  const filename = `${dir}/${name === "Table" ? "DataTable" : name}.docs.md`;
  const old = fs.existsSync(filename) ? fs.readFileSync(filename, "utf8") : "";
  const template = examples.find((e) => e.template === `${dir}/${name}.figma.js`) ?? examples.find((e) => e.component === name);
  const templateSource = template ? fs.readFileSync(template.template, "utf8") : "";
  const figmaUrl = templateSource.match(/^\/\/ url=(.+)$/m)?.[1]?.trim();
  const nodeId = figmaUrl?.match(/node-id=([\d-]+)/)?.[1].replace("-", ":");
  const live = template ? currentNodes.find((item) => item.id === nodeId) ?? audit.find((item) => item.template === template.template) : undefined;
  const published = publication.filter((item) => item.component === name && item.codeConnect?.verified);
  const properties = new Map();
  for (const branch of branches) {
    for (const prop of branch.getProperties()) {
      const decl = prop.valueDeclaration ?? prop.declarations?.[0];
      if (!decl || !relative(decl.getSourceFile().fileName).startsWith("src/")) continue;
      const type = checker.getTypeOfSymbolAtLocation(prop, decl);
      properties.set(prop.name, { name: prop.name, type: checker.typeToString(type, decl, ts.TypeFormatFlags.NoTruncation), optional: Boolean(prop.flags & ts.SymbolFlags.Optional), source: relative(decl.getSourceFile().fileName), comment: ts.displayPartsToString(prop.getDocumentationComment(checker)) });
    }
  }
  let usage;
  if (template) usage = `${template.imports.join(";\n")};\nimport "borrom-ds-test/styles.css";\n\n${template.example.trim().startsWith("function ") ? template.example.trim() : `export function Example() {\n  return (${template.example.trim()});\n}`}`;
  else {
    const required = propsType.getProperties().filter((p) => !(p.flags & ts.SymbolFlags.Optional));
    const attrs = required.map((p) => `${p.name}={${sample(checker.getTypeOfSymbolAtLocation(p, p.valueDeclaration ?? p.declarations[0]), p.name)}}`).join(" ");
    usage = `import { ${name} } from "borrom-ds-test";\nimport "borrom-ds-test/styles.css";\n${attrs.includes("Check") ? 'import { Check } from "lucide-react";\n' : ""}\nexport function Example() {\n  return <${name} ${attrs} />;\n}`;
    if (name === "Player") usage = usage.replace('"/example.png"', '"/example.mp4"');
  }
  const story = fs.existsSync(`src/stories/${name}.stories.tsx`) ? `src/stories/${name}.stories.tsx` : fs.existsSync(`src/stories/${path.basename(runtime, ".tsx")}.stories.tsx`) ? `src/stories/${path.basename(runtime, ".tsx")}.stories.tsx` : null;
  const types = [...new Set([...properties.values()].map((p) => p.source))];
  const hints = { Size: "size", Color: "color", Type: "type", Disable: "disabled", Error: "error", Label: "label", Hint: "hint / hintError", requiredMark: "required", textLabel: "label", textHint: "hint", textError: "hintError", textPlaceholder: "placeholder", "↳ textPlaceholder": "placeholder", textButton: "children", Text: "children", "↳ Text": "children", "↳ textTab": "children", "↳ textChips": "children", "Icon-left": "iconLeft", "Icon-right": "iconRight", iconOnly: "iconOnly", Loader: "loading", Editing: "showEditBadge", Initials: "initials", Order: "position", Open: "defaultOpen", Checked: "checked", More: "moreLabel", "<slotBody>": "children" };
  const mapping = live?.properties ? ["Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.", "", "| Figma property | Тип / значения | Runtime API / ограничение |", "| --- | --- | --- |", ...Object.values(live.properties).map((p) => {
    const hint = hints[p.name];
    const supported = hint && hint.split(" / ").every((key) => properties.has(key));
    return `| \`${p.name}\` | ${cell(p.variantOptions?.join(", ") ?? p.type)} | ${supported ? `\`${hint}\`; значения см. template` : "Композиция / нет прямого prop; см. template и Temporary mappings"} |`;
  })].join("\n") : undefined;
  const notes = [...templateSource.matchAll(/\/\/ Temporary mapping[^\n]*(?:\n\/\/[^\n]*)*/g)].map((match) => match[0].replace(/^\/\/ ?/gm, "")).join("\n\n");
  const lines = [
    `# ${name}`, "", `Актуальный публичный компонент пакета \`borrom-ds-test\`. API сверено с GitLab \`c277eef5\`; документация предназначена для ссылки из Figma и использования библиотеки.`, "",
    "## Machine-readable summary", "", "```yaml", `component: ${name}`, "package: borrom-ds-test", `import: import { ${name} } from "borrom-ds-test";`, 'stylesImport: import "borrom-ds-test/styles.css";', `runtime: ${runtime}`, `types: ${types[0] ?? runtime}`, `localExport: ${dir}/index.ts`, "publicExport: src/index.ts", `storybook: ${story ?? "null"}`, `figmaUrl: ${figmaUrl ?? "null"}`, `codeConnect: ${template?.template ?? "null"}`, "apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd", "validation: TypeScript public API and synthetic Code Connect scenarios", "liveFigmaMetadata: unavailable", "```", "",
    "## Public usage", "", "Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.", "", "```tsx", usage, "```", "",
    "## Source files", "", "| Назначение | Путь |", "| --- | --- |", `| Runtime | [${runtime}](../../../${runtime}) |`, ...types.map((f) => `| Props / shared types | [${f}](../../../${f}) |`), `| Public export | [src/index.ts](../../index.ts) |`, ...(story ? [`| Storybook | [${story}](../../../${story}) |`] : []), ...(template ? [`| Code Connect | [${template.template}](./${path.basename(template.template)}) |`] : []), "",
    "## Public API", "", "Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.", "", "| Prop | Тип | Обязательность в объявлении | Описание |", "| --- | --- | --- | --- |", ...[...properties.values()].map((p) => `| \`${p.name}\` | \`${cell(p.type)}\` | ${p.optional ? "optional" : "required (зависит от union)"} | ${cell(p.comment || "См. типы и пример выше")} |`), "",
    "## Figma to props mapping", "", mapping ?? "Подтверждённые Figma properties для этого компонента недоступны. Mapping и `.figma.js` не создаются по имени или внешнему сходству.", "",
    "## Supported states", "", ...["disabled", "loading", "error", "selected", "open", "value", "defaultValue"].filter((p) => properties.has(p)).map((p) => `- \`${p}\`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.`), "- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.", "",
    "## Design matching notes", "", "Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.", "",
    "## Temporary mappings / assumptions", "", ...(notes ? [notes, ""] : []), template ? "Сохранённые Figma properties использованы как исторический контракт. Сгенерированные snippets проверяются командой `yarn figma:check`; проверка не подтверждает публикацию компонента или актуальность properties в Figma." : "**Blocker Code Connect:** нет подтверждённых properties и опубликованного Figma component. Инструмент Figma `get_context_for_code_connect` вернул `Unknown tool`; требуется повторная проверка после восстановления подключения.", "", "Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.", "",
  ];
  const content = lines.join("\n");
  const blocker = name === "Uploader"
    ? "**Blocker Code Connect:** Figma Uploader (3741:11025) — строка загруженного файла с прогрессом; runtime Uploader — drop zone выбора файлов. Подтверждённые properties State=Loading/Positive/Error не имеют корректного прямого mapping к этому API. Связка не создаётся по совпадению имени."
    : "**Blocker Code Connect:** для этого публичного компонента не подтверждена отдельная опубликованная Figma-связь. После поиска в библиотеке нельзя безопасно выдать mapping только по имени. Требуется точный опубликованный Figma component и его properties.";
  const liveText = template ? `Properties сверены с текущим снимком Figma MCP; snippets проверяются командой \`yarn figma:check\`. ${published.length ? `Code Connect опубликован и прочитан обратно для ${published.length} Figma node; подробности в docs/figma-publication-results.json.` : "Публикация текущего template ещё не подтверждена."}` : blocker;
  const corrected = content.replace(`localExport: ${dir}/index.ts`, `localExport: ${localExport}`)
    .replace(`figmaUrl: ${figmaUrl ?? "null"}`, `figmaComponent: ${live?.name?.trim() ?? "null"}\nfigmaNodeId: ${live?.id ?? live?.nodeId ?? "null"}\nfigmaUrl: ${figmaUrl ?? "null"}`)
    .replace("liveFigmaMetadata: unavailable", `liveFigmaMetadata: ${live ? "verified 2026-10-30" : "no confirmed mapping"}`)
    .replace("Сохранённые Figma properties использованы как исторический контракт. Сгенерированные snippets проверяются командой `yarn figma:check`; проверка не подтверждает публикацию компонента или актуальность properties в Figma.", liveText)
    .replace("**Blocker Code Connect:** нет подтверждённых properties и опубликованного Figma component. Инструмент Figma `get_context_for_code_connect` вернул `Unknown tool`; требуется повторная проверка после восстановления подключения.", liveText)
    .replace("Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.", "Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.")
    .replaceAll(`](../../../${runtime})`, `](${link(runtime)})`)
    .replaceAll("](../../index.ts)", `](${link("src/index.ts")})`);
  let finalContent = corrected;
  if (template) finalContent = finalContent.replaceAll(`](./${path.basename(template.template)})`, `](${link(template.template)})`);
  for (const file of [...types, ...(story ? [story] : [])]) finalContent = finalContent.replaceAll(`](../../../${file})`, `](${link(file)})`);
  if (write) {
    save(filename, finalContent);
    // Preserve the existing Figma-facing Table URL as a supported alias page.
    if (name === "Table") save("src/components/Table/Table.docs.md", finalContent.replace(/\]\(([^)]+)\)/g, (match, target) => /^(?:https?:|mailto:|#)/.test(target) ? match : `](${path.relative("src/components/Table", path.resolve(dir, target)).replaceAll("\\", "/")})`));
  }
  rows.push({ component: name, runtime, docs: filename, story, codeConnect: template?.template ?? null, props: [...properties.values()] });
  generated.push({ file: filename, code: usage });
  summaries.push(`| ${name} | [docs](../${filename}) | ${template ? "есть; synthetic snippets проверены отдельно" : "blocker: нет подтверждённых Figma properties"} |`);
}
if (write) {
  fs.mkdirSync(".cache", { recursive: true });
  fs.writeFileSync(".cache/component-docs-examples.json", JSON.stringify(generated, null, 2));
  fs.writeFileSync("docs/public-component-api.json", JSON.stringify(rows, null, 2) + "\n");
  fs.writeFileSync("docs/public-components.md", ["# Публичные компоненты", "", "Сводка публичного entrypoint GitLab c277eef5. Наличие Code Connect и проверка TypeScript не подтверждают live Figma metadata. Для деталей см. [отчёт обновления](gitlab-redesign-update.md).", "", "| Компонент | Документация | Code Connect |", "| --- | --- | --- |", ...summaries, ""].join("\n"));
}
console.log(`${rows.length} public React components${write ? ": docs written" : ""}.`);
