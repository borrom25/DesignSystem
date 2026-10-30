# Loader

Внутренний компонент из GitLab `c277eef5`, реализован в `src/components/Loader/Loader.tsx`. В публичном entrypoint `borrom-ds-test` export `Loader` отсутствует.

## Temporary mappings / assumptions

**Blocker Code Connect:** опубликованный Figma component `150:24` подтверждён через MCP, но корректный публичный import `Loader` невозможен. `.figma.js` не создаётся. Для загрузки страницы используйте публичные `AppLoader` / `AppLoaderInContainer`; это отдельные сценарии, а не точный mapping Figma Loader.

Источник Figma (только чтение): https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=150-24

Для проверки внутреннего Loader доступен `src/stories/Loader.stories.tsx`.
