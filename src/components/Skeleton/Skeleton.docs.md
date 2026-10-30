# Skeleton

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Skeleton
package: borrom-ds-test
import: import { Skeleton } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Skeleton/Skeleton.tsx
types: src/components/Skeleton/Skeleton.types.ts
localExport: src/components/Skeleton/index.ts
publicExport: src/index.ts
storybook: src/stories/Skeleton.stories.tsx
figmaComponent: Skeleton
figmaNodeId: 10527:8723
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=10527-8723
codeConnect: src/components/Skeleton/Skeleton.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Skeleton } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Skeleton loading />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Skeleton/Skeleton.tsx](Skeleton.tsx) |
| Props / shared types | [src/components/Skeleton/Skeleton.types.ts](Skeleton.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Skeleton.stories.tsx](../../stories/Skeleton.stories.tsx) |
| Code Connect | [src/components/Skeleton/Skeleton.figma.js](Skeleton.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `loading` | `boolean \| undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | optional | См. типы и пример выше |
| `width` | `number \| undefined` | optional | См. типы и пример выше |
| `height` | `number \| undefined` | optional | См. типы и пример выше |
| `borderRadius` | `number \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Property 1` | Default | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `loading`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: the sole Figma variant is a loading placeholder.
Width, height and radius are application layout choices, not Figma properties.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
