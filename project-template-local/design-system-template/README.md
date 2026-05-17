# Design System Project Template

Локальный черновик шаблона для проектов, которые реализуют Figma-макеты на базе `borrom-ds-test`.

Шаблон лежит в `project-template-local/design-system-template`. Если родительская папка игнорируется git, новые файлы шаблона нужно добавлять явно.

## Что внутри

- `PROJECT_RULES.md` - главные правила реализации макетов.
- `AGENTS.md` - короткие инструкции для агента в новом проекте.
- `src/tokens/*` - CSS tokens, синхронизированные с Figma.
- `src/styles/*` - global styles, Tailwind theme aliases, shared classes.
- `src/styles/fonts.template.css` - подключение `Roboto Flex` для совпадения с Figma.
- `src/providers/*` - `UIKitProvider`, `ThemeProvider`, `ScreenProvider`.
- `docs/templates/*` - шаблоны для Figma docs и Code Connect.
- `docs/templates/geometry-map.template.md` - шаблон карты ключевых размеров и gap перед версткой.
- `docs/templates/implementation-report.template.md` - шаблон отчета, где проблема и принятое решение фиксируются в одном файле.
- `scripts/start-dev-server.ps1` / `scripts/stop-dev-server.ps1` - запуск и остановка локального dev server.
- `scripts/init-project.js` - инициализация проекта из template-файлов.
- `scripts/check-text-encoding.js` - проверка markdown/source файлов на mojibake.
- `.editorconfig.template` - guardrail для UTF-8 BOM в русскоязычных markdown-документах.
- `package.template.json`, `vite.config.template.ts`, `tsconfig.template.json`, `eslint.config.template.js` - стартовые конфиги.
- `.gitignore.template` - базовый `.gitignore` для нового проекта.
- `src/main.template.tsx`, `src/App.template.tsx` - минимальная стартовая точка Vite/React.

## Как создать проект из шаблона

1. Создать новую папку проекта.
2. Скопировать содержимое `design-system-template` в новую папку.
3. Запустить инициализацию:

```bash
node scripts/init-project.js --name=my-project
```

Можно сразу установить зависимости:

```bash
node scripts/init-project.js --name=my-project --install
```

Важно: импорт компонентов всегда остается `borrom-ds-test`, без версии в import path:

```tsx
import { Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
```

В `package.json` зависимость указана как `"borrom-ds-test": "*"`, то есть без пина на конкретную версию. Установка пакета зависит от фактического доступа к npm registry. Если пакет недоступен, `init-project.js` явно сообщает об этом как об install/access blocker.

Можно сразу создать git-репозиторий:

```bash
node scripts/init-project.js --name=my-project --git
```

## Preflight после инициализации

Перед реализацией Figma-экрана проверь:

```bash
npm view borrom-ds-test version
npm run encoding:check
npm run lint
npm run build
```

Если менялись `react`, `react-dom` или `borrom-ds-test`, очисти Vite cache:

```powershell
Remove-Item -Recurse -Force node_modules/.vite
```

Если после запуска виден белый экран, сначала проверь совместимость React/React DOM/types с `borrom-ds-test`, затем очисти Vite cache и пересобери проект. Не начинай с правки компонентов дизайн-системы.

## Порядок CSS

В `src/main.tsx` стили должны подключаться в таком порядке:

```tsx
import "./styles/fonts.css";
import "./tokens/index.css";
import "./styles/global.css";
import "borrom-ds-test/styles.css";
```

## Как запускать сервер

```bash
cd <project-path>
npm run server:start
```

Остановить:

```bash
npm run server:stop
```

## Как инициализировать git

```bash
cd <project-path>
git init
git add .
git commit -m "initial project template"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

Перед первым коммитом проверь `.gitignore`: `node_modules`, `dist`, `.env*`, `*.log`, `.dev-server.state.json` должны быть исключены.

## Главные правила реализации

- Используем компоненты из `borrom-ds-test`, если они уже есть.
- Не создаем локальные дубликаты компонентов дизайн-системы.
- Не меняем исходники DS-компонентов ради одного экрана; проблемы overflow/позиционирования сначала решаем на уровне page-level композиции, контейнеров, slots и props.
- Используем Figma Code Connect / docs / Git links как основной источник связи дизайн -> код.
- Точные Figma component properties/variants/swaps переносим в props DS-компонента, не угадываем `size`, `type`, `color` по картинке.
- Токены берем из Figma-compatible CSS variables, а не из raw values.
- Шрифт проекта - `Roboto Flex`.
- Если компонента нет, реализуем fallback по Figma layers/nodes через MCP, не по PNG.
- PNG-контекст из Figma можно использовать для визуального сравнения компонентов, отступов, пропорций и состояний, но верстаем всегда по данным Figma.
- Иконки берем из `lucide-react`.
- Перед версткой фиксируем geometry map: `figma px -> token variable -> class`, особенно для критических gap.
- Перед финалом делаем parity-pass локального экрана против Figma screenshot.
- Отдельно делаем `Critical spacing parity check`, чтобы не терять gap вроде `40px -> --generic-spacing-15 -> gap-15`.
- Отчеты должны в том же файле содержать симптом, причину, принятое решение, что изменено и как упредить повторение.
- Документационные `.md` с русским текстом сохраняем как UTF-8 with BOM; отчет и инструкции должны оставаться читаемыми без mojibake.

Полные правила: `PROJECT_RULES.md`.
