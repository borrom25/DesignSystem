import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import ts from "typescript";

const baseline = "a07ec23eb9bf4c5677a3f837c49179274ddcd86e";
const git = (args) => execFileSync("git", ["-c", "core.safecrlf=false", "-c", "core.autocrlf=false", ...args], { encoding: "utf8", maxBuffer: 20 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"] });
const oldFile = (file) => { try { return git(["show", `${baseline}:${file}`]); } catch { return ""; } };
function names(source) {
  return ts.createSourceFile("index.ts", source, ts.ScriptTarget.Latest).statements
    .filter(ts.isExportDeclaration).flatMap((node) => node.exportClause?.elements?.map((e) => e.name.text) ?? []);
}
const before = names(oldFile("src/index.ts"));
const after = names(fs.readFileSync("src/index.ts", "utf8"));
const previous = JSON.parse(oldFile("package.json"));
const current = JSON.parse(fs.readFileSync("package.json", "utf8"));
const deps = [];
for (const group of ["dependencies", "devDependencies", "peerDependencies"]) {
  for (const [name, version] of Object.entries(current[group] ?? {})) {
    if (previous[group]?.[name] !== version) deps.push(`| ${name} | ${previous[group]?.[name] ?? "—"} | ${version} | ${group} |`);
  }
}
const changed = git(["diff", "--name-only", "--ignore-space-at-eol", baseline, "--", "src"]).trim().split("\n").filter(Boolean);
const props = [];
function declarations(source) {
  const file = ts.createSourceFile("props.ts", source, ts.ScriptTarget.Latest, true);
  const result = new Map();
  for (const node of file.statements) {
    if ((ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) && /Props$/.test(node.name.text)) {
      result.set(node.name.text, node.getText(file).replace(/\s+/g, " "));
    }
  }
  return result;
}
for (const file of changed.filter((f) => /(?:types|\.types)\.ts$/i.test(f))) {
  if (!fs.existsSync(file)) continue;
  const a = declarations(oldFile(file));
  const b = declarations(fs.readFileSync(file, "utf8"));
  const changes = [...b].filter(([name, value]) => a.has(name) && a.get(name) !== value).map(([name]) => name);
  if (changes.length) props.push(`| [${file}](../${file}) | ${changes.map((n) => `\`${n}\``).join(", ")} |`);
}
const componentsBefore = new Set(git(["ls-tree", "--name-only", `${baseline}:src/components`]).trim().split("\n"));
const componentsAfter = fs.readdirSync("src/components", { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
const text = ["# Инвентаризация обновления из GitLab", "", `База GitHub: \`${baseline}\`. Источник GitLab: \`c277eef53c8f0b655064d3c67855f2df70ddfccd\`.`, "", "## Каталоги новых компонентов", "", componentsAfter.filter((name) => !componentsBefore.has(name)).map((n) => `\`${n}\``).join(", "), "", "## Изменения публичного entrypoint", "", `Добавлены: ${after.filter((n) => !before.includes(n)).map((n) => `\`${n}\``).join(", ")}.`, "", `Удалены отдельные exports: ${before.filter((n) => !after.includes(n)).map((n) => `\`${n}\``).join(", ")}.`, "", "## Изменённые объявления Props", "", "Это структурный список для ревью, включая внутренние props. Он дополняет [инструкцию миграции](migration-gitlab-c277eef5.md) и [актуальный публичный API](public-components.md).", "", "| Исходник | Изменённые объявления |", "| --- | --- |", ...props, "", "## Зависимости", "", "| Пакет | До | После | Группа |", "| --- | --- | --- | --- |", ...deps, "", "## Токены и общая инфраструктура", "", ...changed.filter((f) => f.startsWith("src/tokens/") || f.startsWith("src/providers/") || f.startsWith("src/styles/")).map((f) => `- \`${f}\``), "", "Проверка соответствия GitLab выполняется по исходникам с нормализацией переводов строк. Локальная адаптация runtime: InputTag xs использует существующий токен `--generic-spacing-05` вместо несуществующего `--generic-spacing-0.5`. Документация и Code Connect являются локальными дополнениями.", ""].join("\n");
fs.writeFileSync(path.join("docs", "gitlab-update-inventory.md"), text);
console.log(`${props.length} changed prop declaration files, ${deps.length} dependency changes.`);
