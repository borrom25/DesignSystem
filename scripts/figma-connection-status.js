import { readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registry = JSON.parse(await readFile(path.join(root, "docs/public-component-api.json"), "utf8"));
const audit = JSON.parse(await readFile(path.join(root, "docs/figma-live-audit.json"), "utf8"));
async function exists(file) {
  if (!file) return false;
  try { return (await stat(path.join(root, file))).isFile(); } catch { return false; }
}
const rows = await Promise.all(registry.map(async (entry) => {
  const [runtime, docs, story, figma] = await Promise.all([entry.runtime, entry.docs, entry.story, entry.codeConnect].map(exists));
  const live = audit.components.find((item) => item.template === entry.codeConnect);
  return { ...entry, runtimeExists: runtime, docsExists: docs, storyExists: story, figmaExists: figma, live: Boolean(live?.properties) };
}));
rows.sort((a, b) => a.component.localeCompare(b.component, "en"));
const mark = (value) => value ? "да" : "нет";
const lines = [
  "# Статус связки компонентов с Figma", "",
  "Источник списка — публичный TypeScript entrypoint пакета, а не имена папок. Compound subcomponents описаны в документах родительских компонентов; отдельно экспортируемые компоненты имеют отдельные строки.", "",
  `Публичных React-компонентов: ${rows.length}. Документы: ${rows.filter((r) => r.docsExists).length}. Основные Code Connect templates: ${rows.filter((r) => r.figmaExists).length}.`, "",
  "Наличие файлов не означает успешной проверки или публикации. Проверки содержимого: `yarn docs:check` и `yarn figma:check`. Последний результат и ограничения перечислены в [отчёте обновления](gitlab-redesign-update.md). Figma использовалась только для чтения.", "",
  "В таблице MCP означает наличие прочитанного контракта properties в `figma-live-audit.json`. Это не статус публикации локального template в Figma. Отсутствие отдельной story допустимо для составных и вспомогательных компонентов; их API проверяется через документацию и stories родительского компонента.", "",
  "Обновление: сначала `yarn figma:check`, затем `node scripts/component-docs.js --write`, затем `yarn figma:status:write`.", "",
  "| Компонент | Runtime | Story | Docs | figma.js | MCP properties | Статус файлов |", "| --- | --- | --- | --- | --- | --- | --- |",
  ...rows.map((r) => `| ${r.component} | ${mark(r.runtimeExists)} | ${mark(r.storyExists)} | [${mark(r.docsExists)}](../${r.docs}) | ${mark(r.figmaExists)} | ${mark(r.live)} | ${r.docsExists && r.figmaExists ? "оба артефакта" : r.docsExists ? "docs; blocker/ограничение Code Connect в документе" : "нет документации"} |`), "",
  "Дополнительные сохранённые ссылки: [Table](../src/components/Table/Table.docs.md), [Search / Autocomplete](../src/components/Input/InputSearch.docs.md), [внутренний Loader](../src/components/Loader/Loader.docs.md). Для Table также сохранён `Table/Table.figma.js`; для SearchAutocomplete сохранён путь `Input/InputSearch.figma.js`.", "",
];
const text = lines.join("\n");
if (process.argv.includes("--write")) {
  await writeFile(path.join(root, "docs/figma-component-connections.md"), text);
  console.log("Updated docs/figma-component-connections.md");
} else console.log(text);
