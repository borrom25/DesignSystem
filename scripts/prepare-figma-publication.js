// Build a reviewable publication queue; this script never writes to Figma.
import fs from "node:fs";
const inventory = JSON.parse(fs.readFileSync("docs/figma-current-inventory.json", "utf8"));
const manifest = JSON.parse(fs.readFileSync(".cache/figma-snippets/manifest.json", "utf8"));
const registry = JSON.parse(fs.readFileSync("docs/public-component-api.json", "utf8"));
const queue = [];
const seen = new Set();
for (const item of manifest) {
  // The old DataTable path stays available, but Table owns the shared node.
  if (item.template === "src/components/DataTable/DataTable.figma.js") continue;
  const template = fs.readFileSync(item.template, "utf8");
  const nodeId = template.match(/^\/\/ url=.*node-id=([\d-]+)/m)?.[1].replace("-", ":");
  const page = inventory.pages.find((p) => p.nodes.some((n) => n.id === nodeId));
  const node = page?.nodes.find((n) => n.id === nodeId);
  if (!node || !["CURRENT", "CHANGED"].includes(node.publishStatus)) throw new Error(`Unconfirmed published component: ${item.template}`);
  if (seen.has(nodeId)) throw new Error(`Duplicate primary template: ${nodeId}`);
  seen.add(nodeId);
  const runtime = template.match(/^\/\/ source=(.+)$/m)?.[1].trim();
  const entry = registry.find((r) => r.component === item.component);
  if (!runtime || !entry || !fs.existsSync(entry.docs)) throw new Error(`Missing runtime/docs: ${item.template}`);
  queue.push({ nodeId, pageId: page.pageId, component: item.component, templatePath: item.template, docs: entry.docs,
    documentationUrl: `https://github.com/borrom25/DesignSystem/blob/main/${entry.docs}`,
    source: `https://github.com/borrom25/DesignSystem/blob/main/${runtime}`,
    label: "React", template,
    templateDataJson: JSON.stringify({ isParserless: true, imports: item.imports, nestable: item.metadata.nestable ?? true }),
  });
}
fs.mkdirSync(".cache/figma-publication", { recursive: true });
fs.writeFileSync(".cache/figma-publication/queue.json", JSON.stringify(queue, null, 2) + "\n");
const specific = {
  "19175:2069": "Button / Link: публичный Button не имеет link type; отдельная семантика ссылки не подтверждена. Стили и API не выдумываются.",
  "19396:2123": "Button / Dashed: публичный Button не имеет dashed type. Требуется согласование API со следующей версией GitLab.",
  "11486:26770": "Runtime Space существует, но не экспортируется из публичного src/index.ts. Внутренние импорты в Code Connect запрещены.",
  "3741:11025": "Figma Uploader — строка загрузки файла; runtime Uploader — drop zone. Совпадение имени не является корректным mapping.",
  "10971:20947": "Preview photo — миниатюра вложения; публичный Photo — модальный просмотрщик. Прямого соответствия нет.",
  "150:24": "Loader — внутренний компонент без публичного export; AppLoader имеет другую реализацию.",
  "5221:862": "Gradient area chart не поддержан текущим публичным LineChart API.",
  "19494:2166": "Внутренний overflow trigger; отдельного публичного runtime нет, используется внутри TabsOverflow.",
};
const components = inventory.pages.flatMap((p) => p.nodes.map((n) => {
  const item = queue.find((q) => q.nodeId === n.id);
  return { nodeId: n.id, name: n.name, page: p.page, publishStatus: n.publishStatus,
    component: item?.component ?? null, template: item?.templatePath ?? null,
    status: item ? "ready-for-publication" : "blocked",
    blocker: item ? null : n.publishStatus === "UNPUBLISHED" ? "Figma component не опубликован; публикация библиотеки не входит в задачу." : specific[n.id] ?? "Нет подтверждённого отдельного соответствия публичному runtime. Это внутренний элемент, неподдерживаемый продуктовый блок или компонент с иным API; mapping по имени не создаётся.",
  };
}));
fs.writeFileSync("docs/figma-publication-coverage.json", JSON.stringify({ checkedAt: inventory.checkedAt, components }, null, 2) + "\n");
console.log(`${queue.length} primary templates ready; ${components.filter((c) => c.status === "blocked").length} explicit blockers. No Figma writes performed.`);
