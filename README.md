# borrom-ds-test

React UI kit / design system package.

Исходники обновлены из GitLab `redesign`, commit `c277eef5` от 28.10.2026. Наш репозиторий — [GitHub borrom25/DesignSystem](https://github.com/borrom25/DesignSystem). Имя npm-пакета: `borrom-ds-test`.

Документация и примеры рассчитаны на `borrom-ds-test@0.0.72`. Выпуск ещё в обработке; команды установки ниже предназначены для использования после завершения публикации. Обновление GitHub само по себе не публикует пакет в npm.

## Локальный запуск и проверки

```bash
yarn install --frozen-lockfile
yarn storybook
# Отдельное приложение документации и плейграунда:
yarn dev:docs
```

```bash
yarn lint
yarn build
yarn build-storybook
yarn check:docs
yarn build:docs
yarn figma:check
yarn docs:check
npm pack --dry-run
```

Используется Yarn 1.22.22 (`corepack yarn`, если команда `yarn` отсутствует в PATH). Команды `server:start` / `server:stop` сохранены для фонового Storybook.

Документация:

- [Миграция с прежней версии](docs/migration-gitlab-c277eef5.md).
- [Все публичные компоненты](docs/public-components.md).
- [Состояние docs и Code Connect](docs/figma-component-connections.md).
- [Инвентаризация различий с исходной версией GitHub](docs/gitlab-update-inventory.md).
- [Проверки и ограничения обновления](docs/gitlab-redesign-update.md).

Документация компонентов размещается в поле **Link** Figma component set; Code Connect публикуется отдельно как исполняемый React template. Локальные `.figma.js` и `.docs.md` сами по себе ничего не публикуют. [Текущая сверка и статус публикации](docs/figma-publication.md).

## Install

```bash
npm install borrom-ds-test@0.0.72
```

## Usage

```tsx
import { Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <Button>Action</Button>;
}
```

## Publish

This package is published to the public npm registry as `borrom-ds-test`.

```bash
corepack enable
yarn publish:check
npm login
yarn publish:npm
```

If npm requires 2FA during publish:

```bash
yarn publish:check
npm publish --access public --otp=123456
```

Replace `123456` with the current one-time code from your authenticator app.

See `docs/npm-publishing.md` for the full publishing workflow.
