# Project Rules

Эти правила нужны для проектов, где макеты собираются по Figma с использованием текущей дизайн-системы.

## Главный принцип

Проект должен воспроизводить Figma через реальные компоненты дизайн-системы, токены и структуру слоев.

Мы не верстаем по PNG и не переносим raw-значения из инспектора как финальную реализацию. PNG/screenshot или PNG-контекст из Figma используется только для визуального parity-pass после того, как структура уже снята по нодам: можно сверять, так ли выглядят компоненты, похожи ли отступы, пропорции, состояния и общая композиция. Источник верстки всегда один: данные Figma layers/nodes, auto-layout, constraints, variables, variants и properties.

## Preflight перед реализацией экрана

Перед первым кодом нужно зафиксировать базовые факты:

- `npm view borrom-ds-test version` возвращает доступную версию пакета.
- В `package.json` проекта зависимость указана как обычный npm package: `"borrom-ds-test": "*"`, `latest` или конкретная версия.
- Импорты остаются без версии: `import { Button } from "borrom-ds-test";`.
- Если npm возвращает `404` или `ENEEDAUTH`, это `install/access blocker`, а не повод менять импорт на git/file/link workaround без решения пользователя.
- `react`, `react-dom`, `@types/react`, `@types/react-dom` совместимы с peer/runtime ожиданиями DS.
- Если после старта виден белый экран, сначала проверяем совместимость React/React DOM/types с установленной версией `borrom-ds-test`, затем очищаем Vite cache и пересобираем проект. Не начинаем менять компоненты DS до этой проверки.
- После изменения версий React или `borrom-ds-test` очищен Vite cache: `node_modules/.vite`.
- `src/styles/fonts.css` подключен до `src/tokens/index.css`, `src/styles/global.css` и `borrom-ds-test/styles.css`.
- Тема экрана определена до верстки: `themes_dark` или `themes_light`.
- Для ключевых Figma-компонентов проверены Code Connect, docs и Git links.
- Снята геометрия из Figma metadata: ширины контейнеров, высоты блоков, gaps, padding, constraints, fill/hug.
- Составлена короткая geometry map по ключевым расстояниям: `figma px -> token variable -> class`.

## Компоненты

- Сначала всегда ищем готовый компонент в дизайн-системе `borrom-ds-test`.
- Если Figma-компонент содержит Git link, Code Connect или ссылку на документацию, используем ее как основной источник.
- Не создаем локальный компонент-дубликат, если компонент уже есть в дизайн-системе.
- Не изменяем исходники компонентов дизайн-системы ради конкретного экрана. Если компонент корректно работает в playground/Storybook, проблему ищем в page-level композиции, props, слотах, теме, контейнерах и overflow вокруг компонента.
- Локальная обертка допустима только для page-level composition: раскладка, связка данных, адаптация слотов.
- Если компонента в дизайн-системе нет, фиксируем это как blocker и переходим к реализации по слоям Figma.
- При использовании DS-компонента проверяем не только имя компонента, но и intended composition: slots, actions, label/inline режимы, sizes, disabled/error/active states.
- Для каждого Figma component instance переносим точные `componentProperties`, `variantProperties`, swaps и text properties в runtime props. Не выбираем `size`, `type`, `color` или `iconOnly` по визуальной похожести, если Figma уже отдала явное значение.
- Если Figma-компонент подключен к Code Connect/docs/Git link, эти данные первичнее визуального предположения.
- Для компактных компонентов (`Label`, `Counter`, `Button`, `IconButton`, `CheckBox`, `Input`, `TabsOverflow`) особенно проверяем `size`, `type`, `color`, icon swaps и state props: один неверный prop меняет сразу spacing, typography, icon size и radius.

## Принятые решения из отчетов

- `Label` и похожие компактные компоненты реализуем по явным Figma variants/properties. Пример: если Figma показывает `Type=Flat`, `Color=Danger`, `Size=Md`, `iconOnly=Off`, то в коде используем `type="flat"`, `color="danger"`, `size="md"` и нужный icon prop, даже если `sm` визуально кажется близким.
- Если DS-компонент есть, но его готовая композиция не совпадает с экранной структурой Figma, не переписываем компонент. Собираем page-level fallback по Figma layers, сохраняя DS controls и tokens. Пример: таблицу можно собрать как page-level grid/table, если текущий `Table` добавляет toolbar/top-slot spacing, которого нет в макете.
- Если у компонента несколько intended compositions, выбираем ту, которая соответствует Figma instance. Пример: для `HeaderInside` с notification + avatar используем штатный action/account контур (`showNotification`, `accountMenu`), а не произвольный `children`.
- Для radio/checkbox/input-like элементов проверяем режим композиции: field label через prop и inline-композиция `control + text` дают разную геометрию и не взаимозаменяемы.
- Если DS preset отличается от конкретной Figma-ноды по пропорциям, не меняем компонент глобально. Фиксируем page-level `Temporary mapping` с причиной. Пример: прямоугольная зона загрузки поверх `InputImg`, если DS preset квадратный.
- Static mock data допустима только когда задача просит реализовать видимый экран, а не подключить реальные данные. Это фиксируется как assumption в отчете.

## Imports

Компоненты дизайн-системы импортируем из публичного пакета:

```tsx
import { Button, Input, AppLayout } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
```

Не указываем версию в import path. Версия пакета живет только в `package.json` / lockfile.

Если `npm view borrom-ds-test` возвращает 404, это означает, что пакет не опубликован или недоступен в текущем registry. Это не меняет import path. В отчете нужно явно написать:

```text
Install/access blocker: borrom-ds-test is not available from current npm registry.
Imports remain "borrom-ds-test"; package delivery must be fixed separately.
```

Иконки:

```tsx
import { Search, Settings } from "lucide-react";
```

Локальные helpers проекта:

```tsx
import { PageShell } from "@/layouts/PageShell";
```

## Figma fallback

Если готовой runtime-реализации нет:

1. Открываем Figma node через MCP.
2. Изучаем структуру слоев, auto-layout, constraints, variants, slots, text styles и variables.
3. Снимаем реализацию по реальным node/layer properties.
4. Не используем PNG/screenshot как источник размеров, цветов или spacing. PNG-контекст из Figma можно использовать только для визуального сравнения результата с макетом.
5. Для спорных мест фиксируем `Temporary mapping` или `Assumption`.

Если отдельный внутренний node не открывается через `get_design_context`, используем комбинацию:

- root `get_design_context` для Code Connect сигналов;
- `get_metadata` для геометрии и иерархии;
- Figma Plugin API read-only для полного дерева/geometry, если root-контекст слишком сжат;
- ручная page-level композиция поверх DS-компонентов.

## Tokens

- Используем те же токены, что и в Figma.
- Цвета, отступы, радиусы, типографика и размеры должны идти через CSS variables / Tailwind theme aliases из `src/tokens` и `src/styles/global.css`.
- Запрещены raw hex/rgb/hsl, произвольные `px` и ручные font values, если есть соответствующий token.
- Если точного токена нет, выбираем ближайший semantic token и фиксируем `Temporary mapping`.
- Тема должна активироваться через классы на `document.documentElement`:

```text
Value spacings typography TypoComponent br-md br_size themes_light
Value spacings typography TypoComponent br-md br_size themes_dark
```

## Fonts

- Основной шрифт проекта: `Roboto Flex`.
- Figma parity считается неполным, если проект рендерится системным fallback-шрифтом.
- `src/styles/fonts.css` должен подключаться до `src/tokens/index.css` и `src/styles/global.css`.
- Для быстрых прототипов допустим Google Fonts import из `fonts.template.css`.
- Для стабильной реализации лучше положить локальный файл `RobotoFlex.woff2` в `src/assets/fonts/` и заменить import на `@font-face`.
- Имя семейства должно оставаться ровно `"Roboto Flex"`, потому что токены и `global.css` ожидают это имя.

## Layout

- Page-level layout собирается отдельно от компонентов.
- Для layout используем tokens: container width, spacing, radius, background, typography.
- Повторяющиеся раскладки оформляем как layout recipe, а не как новый UI-компонент.
- Ключевые gap/offset нельзя выбирать "на глаз". Для каждого важного расстояния фиксируем соответствие Figma px, CSS token и class.
- Сохраняем Figma auto-layout модель:
  - `fill` остается растягиваемым;
  - `hug` остается по контенту;
  - fixed применяется только если fixed указан в Figma или зафиксирован как `Temporary mapping`.
- Типовые места для recipes:

```text
src/layouts/
src/pages/
src/shared/layout-recipes/
docs/layout-recipes/
```

## Geometry map and spacing parity

Перед версткой каждого экрана нужно составить короткую геометрическую карту по ключевым узлам.

Минимальный набор:

- width основного контейнера;
- высота header/content-блоков;
- вертикальные gap между основными секциями;
- горизонтальные gap между колонками;
- padding основных контейнеров;
- расстояние `PageHeader -> next section` на desktop;
- все места, где визуально "воздух" влияет на композицию.

Для каждого значения фиксируй связку:

```text
figma px -> token variable -> tailwind/class
```

Пример:

```text
40px -> --generic-spacing-15 -> gap-15
22px -> --generic-spacing-10 -> gap-10
```

Если в Figma значение `40px`, нельзя заменять его на ближайший визуально похожий `gap-10`, потому что в текущей scale `gap-10 = 22px`, а `gap-15 = 40px`.

Перед сдачей выполняй отдельный checkpoint:

```text
Critical spacing parity check
```

На этом checkpoint проверяются только ключевые gap/offset без остального визуального шума. Если расхождение осознанное, фиксируй `Temporary mapping` с причиной.

## Visual parity

Перед финалом нужен отдельный parity-pass:

- локальный экран открыт через `npm run server:start`;
- выполнен screenshot локального экрана;
- локальный screenshot сравнен с Figma screenshot;
- PNG-контекст из Figma использован только как визуальный референс для проверки похожести компонентов, отступов, пропорций и состояний;
- проверены header, cards, avatar positions, input/radio states, spacing, пропорции и тема;
- отдельно проверены критические gap/offset из geometry map;
- расхождения исправлены или зафиксированы как `Temporary mapping` / `Assumption`.

Storybook показывает компонент в изолированном сценарии. Экран в приложении - это композиция компонентов, темы, контейнеров, слотов и auto-layout. Поэтому совпадение Storybook не равно совпадению всего экрана.

Если в playground/Storybook отдельные input/select/popover-like компоненты работают корректно, а на экране есть clipping, overflow или неверное позиционирование, сначала проверяем обертки и контейнеры экрана: `Modal`, scroll-container, `overflow-hidden/auto`, fixed height, z-index, slot composition и props вроде `maxHeight`, `side`, `align`, `contentClassName`. Компонент дизайн-системы не меняем без отдельной задачи на DS.

## Reports and decisions

Отчеты в `docs/*.md` должны быть не только списком проблем. В том же файле обязательно фиксируются:

- симптом;
- причина;
- принятое решение;
- что изменено в коде или почему изменение не делалось;
- как упредить повторение;
- `Assumption` / `Temporary mapping`, если решение временное;
- какие проверки прошли (`lint`, `build`, parity-pass, encoding check).

Если во время реализации найдено новое правило процесса, добавь его в отчет экрана и предложи перенести в `PROJECT_RULES.md` / `AGENTS.md`. Решение не должно жить только в чате.

## Server commands

Проект должен поддерживать запуск и остановку локального сервера:

```bash
cd <project-path>
npm run server:start
npm run server:stop
```

Скрипты используют:

```text
scripts/start-dev-server.ps1
scripts/stop-dev-server.ps1
```

`server:start` должен поднять Vite на `localhost` и записать состояние в `.dev-server.state.json`.
`server:stop` должен остановить только сервер текущего проекта.

## Encoding

- Все `.md`, `.js`, `.ts`, `.tsx`, `.json`, `.css` файлы сохраняются в UTF-8.
- Документационные `.md` файлы с русским текстом в Windows-окружении сохраняем как UTF-8 with BOM. `.editorconfig` должен закреплять для `*.md`: `charset = utf-8-bom`.
- Перед завершением задачи запускай `npm run encoding:check` и проверяй текстовые файлы на mojibake-маркеры.
- Если в отчете или инструкциях видны такие маркеры, файл считается битым и должен быть переписан нормальным UTF-8.
- Отчет о реализации должен быть человекочитаемым; нельзя оставлять документ, который выглядит как сбитая кодировка.

## Git initialization

Для нового проекта:

```bash
cd <project-path>
git init
git add .
git commit -m "initial project template"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

Перед первым коммитом проверить:

- `node_modules` отсутствует в git;
- `.dev-server.state.json` и `*.log` игнорируются;
- токены, инструкции и конфиги лежат в репозитории;
- локальные secrets и `.env*` не добавлены.

## Definition of done for screen implementation

- Использованы готовые компоненты из `borrom-ds-test`, если они есть.
- Доступность npm-пакета проверена и зафиксирована.
- Версии React совместимы с DS; после изменения зависимостей очищен Vite cache.
- Все цвета, spacing, radius и typography идут через tokens.
- Критические gap/offset сверены по geometry map: `figma px -> token variable -> class`.
- Иконки взяты из `lucide-react`.
- Figma fallback выполнен по слоям, не по PNG.
- Сохранены fill/hug/constraints и slot composition.
- Точные Figma component properties/variants/swaps перенесены в props DS-компонентов, а не угаданы визуально.
- Если DS-компонент не подошел по композиции экрана, применен page-level fallback без изменения исходников компонента.
- Спорные места зафиксированы как `Temporary mapping` / `Assumption`.
- Локальный сервер запускается через `npm run server:start`.
- Выполнены `npm run lint` и `npm run build`, если проект уже установлен.
- В отчетах указаны принятые решения и профилактика повторения, а не только найденные проблемы.
- Отчет и инструкции сохранены в нормальном UTF-8 без mojibake.
