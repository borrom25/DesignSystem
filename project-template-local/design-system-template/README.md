# Design System Project Template

Шаблон для проектов, которые реализуют Figma-макеты на базе `borrom-ds-test`.

## Документация

- `AGENTS.md` - короткие обязательные правила для Codex/агента.
- `Инструкции.md` - полный рабочий мануал: промпт, снятие Figma data, Code Connect, tokens, geometry map, fallback, отчеты, проверки.

Все подробные правила собраны в `Инструкции.md`, чтобы не читать россыпь отдельных документов.

## Что внутри

- `src/tokens/*` - CSS tokens, синхронизированные с Figma.
- `src/styles/*` - global styles, Tailwind theme aliases, shared classes.
- `src/styles/fonts.template.css` - подключение `Roboto Flex`.
- `src/providers/*` - `KitProvider`, `ThemeProvider`, `ScreenProvider`.
- `scripts/init-project.js` - инициализация проекта из template-файлов.
- `scripts/start-dev-server.ps1` / `scripts/stop-dev-server.ps1` - запуск и остановка dev server.
- `scripts/check-text-encoding.js` - проверка markdown/source файлов на mojibake.
- `.editorconfig.template` - UTF-8 guardrail для markdown в Windows-окружении.
- `package.template.json`, `vite.config.template.ts`, `tsconfig.template.json`, `eslint.config.template.js` - стартовые конфиги.
- `.gitignore.template` - базовый `.gitignore`.
- `src/main.template.tsx`, `src/App.template.tsx` - минимальная стартовая точка Vite/React.

## Создание проекта

1. Создай новую папку проекта.
2. Скопируй содержимое `design-system-template` в новую папку.
3. Запусти инициализацию:

```bash
node scripts/init-project.js --name=my-project
```

Можно сразу установить зависимости:

```bash
node scripts/init-project.js --name=my-project --install
```

Можно сразу создать git-репозиторий:

```bash
node scripts/init-project.js --name=my-project --git
```

## Imports

Импорт компонентов всегда остается из публичного пакета:

```tsx
import { Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
```

Не указывай версию в import path. Версия живет только в `package.json` / lockfile.

## Preflight

Перед реализацией Figma-экрана:

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

## CSS order

В `src/main.tsx` стили должны подключаться так:

```tsx
import "./styles/fonts.css";
import "./tokens/index.css";
import "./styles/global.css";
import "borrom-ds-test/styles.css";
```

## Server

```bash
npm run server:start
npm run server:stop
```

## Git

```bash
git init
git add .
git commit -m "initial project template"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

Перед первым коммитом проверь `.gitignore`: `node_modules`, `dist`, `.env*`, `*.log`, `.dev-server.state.json` должны быть исключены.
