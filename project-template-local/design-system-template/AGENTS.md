# AGENTS.md

Работай в этом репозитории как в проекте реализации Figma-макетов на базе дизайн-системы `borrom-ds-test`.

Главный источник правил: `PROJECT_RULES.md`. Перед реализацией экрана или блока сначала прочитай его и выполни preflight.

## Обязательные правила

- Отвечай на русском, если пользователь пишет на русском.
- Перед началом реализации проверь доступность `borrom-ds-test` как npm-пакета: `npm view borrom-ds-test version`.
- Если пакет недоступен из текущего registry, не меняй import path на git/file workaround без явного решения пользователя. Зафиксируй это как `install/access blocker`.
- Используй готовые компоненты из `borrom-ds-test`, если они уже есть.
- Не создавай локальные дубликаты компонентов дизайн-системы.
- Не меняй исходники компонентов дизайн-системы ради конкретного экрана. Если компонент работает в playground/Storybook, ищи проблему в page-level композиции, props, слотах, теме, контейнерах и overflow вокруг компонента.
- Если у Figma-компонента есть Git link, Code Connect или ссылка на docs, используй их как основной источник.
- Для Figma component instance переносим точные `componentProperties`, `variantProperties`, swaps и text properties в runtime props. Не выбирай `size`, `type`, `color` или `iconOnly` по визуальной похожести.
- Всегда используй те же токены, что и в Figma: CSS variables из `src/tokens` и aliases из `src/styles/global.css`.
- Перед page-level версткой составь geometry map для ключевых gap/offset: `figma px -> token variable -> class`.
- Основной шрифт - `Roboto Flex`; проверь, что `src/styles/fonts.css` подключен до токенов и global styles.
- Не используй raw hex/rgb/hsl, произвольные `px`, ручные font-size/line-height/radius, если есть token.
- Если точного токена или компонента нет, фиксируй `Temporary mapping` или `Assumption`.
- Иконки бери из `lucide-react`.
- Если готовой реализации компонента нет, проваливайся по Figma layers/nodes через MCP и снимай точную структуру по нодам.
- Никогда не реализуй макет по PNG как источнику размеров, цветов или отступов. PNG-контекст из Figma можно использовать только для визуального сравнения: так ли выглядят компоненты, похожи ли отступы, пропорции, состояния и общая композиция. Верстка всегда строится по данным Figma: layers/nodes, auto-layout, constraints, variables, variants и properties.
- Не меняй `node_modules`, `dist`, `.storybook-static` и другие сгенерированные артефакты.
- Для поиска используй `rg` или `rg --files`.
- Для ручных правок используй `apply_patch`.
- Все текстовые файлы сохраняй как UTF-8 без mojibake. Документационные `.md` с русским текстом в Windows-окружении сохраняй как UTF-8 with BOM. Перед финалом запускай `npm run encoding:check`.

## Запуск проекта

Проект должен запускаться и останавливаться командами:

```bash
cd <project-path>
npm run server:start
npm run server:stop
```

Если нужно проверить вручную:

```bash
npm run lint
npm run build
```

После изменения React/React DOM или DS-пакета очищай Vite cache:

```bash
Remove-Item -Recurse -Force node_modules/.vite
```

## Реализация по Figma

1. Проверь npm-доступность `borrom-ds-test` и фактическую установленную версию.
2. Проверь peer/runtime версии React, React DOM и types; они должны быть совместимы с DS.
3. Зафиксируй тему экрана (`themes_dark` или `themes_light`) до старта верстки.
4. Проверь Code Connect / docs / Git link у Figma-компонентов.
5. Подставь готовые компоненты из `borrom-ds-test`.
6. Layout собирай через page-level композицию и tokens.
7. Перед выбором `gap-*` / spacing class сопоставь Figma px с `--generic-spacing-*`; не подбирай gap на глаз.
8. Переноси auto-layout, constraints, text styles, variables и variants по данным Figma layers.
9. Сохраняй модель размера Figma: `fill` остается `fill`, `hug` остается `hug`.
10. Проверяй slot composition компонентов: слоты, actions, labels, inline/field режимы должны соответствовать Figma и docs.
11. Если DS-компонент не совпадает с конкретной экранной композицией, не переписывай компонент. Используй page-level fallback по Figma layers, сохраняя DS controls и tokens, и зафиксируй `Temporary mapping`.
12. Все временные расхождения фиксируй рядом с кодом или в отчете.
13. В отчете в том же файле указывай симптом, причину, принятое решение, что изменено, как упредить повторение и пройденные проверки.
14. Сделай отдельный parity-pass: Figma screenshot / PNG-контекст против локального экрана. Используй его для визуального сравнения компонентов, отступов, пропорций и состояний, но не как источник CSS-значений.
15. Сделай `Critical spacing parity check` по ключевым gap/offset из geometry map.
16. Перед финалом выполни `npm run lint`, `npm run build` и проверку текстовой кодировки.

## Git

Для нового проекта:

```bash
git init
git add .
git commit -m "initial project template"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

Перед коммитом проверь, что `.env*`, `node_modules`, `dist`, `*.log` и `.dev-server.state.json` не попали в git.
