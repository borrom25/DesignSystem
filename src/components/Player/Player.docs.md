# Player

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Player
package: borrom-ds-test
import: import { Player } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Player/Player.tsx
types: src/components/Player/Player.types.ts
localExport: src/components/Player/index.ts
publicExport: src/index.ts
storybook: src/stories/Player.stories.tsx
figmaComponent: Player
figmaNodeId: 8456:863
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=8456-863
codeConnect: src/components/Player/Player.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Player } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Player src="/example.mp4" title="Видео" />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Player/Player.tsx](Player.tsx) |
| Props / shared types | [src/components/Player/Player.types.ts](Player.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Player.stories.tsx](../../stories/Player.stories.tsx) |
| Code Connect | [src/components/Player/Player.figma.js](Player.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `src` | `string` | required (зависит от union) | См. типы и пример выше |
| `videoType` | `string \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `titleVariant` | `TextVariant \| undefined` | optional | См. типы и пример выше |
| `labelVariant` | `TextVariant \| undefined` | optional | См. типы и пример выше |
| `labelPosition` | `PlayerLabelPosition \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Main Controls` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Desktop, Mobile | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: provide the real video src in the application.
Runtime owns responsive layout and control visibility after mouse activity.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Публикация исполняемого template не подтверждена; ограничение MCP описано в docs/figma-publication.md.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
