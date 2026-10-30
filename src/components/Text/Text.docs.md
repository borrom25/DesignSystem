# Text

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Text
package: borrom-ds-test
import: import { Text } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Text/Text.tsx
types: src/components/Text/Text.types.ts
localExport: src/components/Text/index.ts
publicExport: src/index.ts
storybook: src/stories/Text.stories.tsx
figmaComponent: Text
figmaNodeId: 5477:3926
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=5477-3926
codeConnect: src/components/Text/Text.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Text } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<div>
    <Text variant="h4" align="center">Пример</Text>




  </div>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Text/Text.tsx](Text.tsx) |
| Props / shared types | [src/components/Text/Text.types.ts](Text.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Text.stories.tsx](../../stories/Text.stories.tsx) |
| Code Connect | [src/components/Text/Text.figma.js](Text.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `children` | `ReactNode` | required (зависит от union) | См. типы и пример выше |
| `as` | `ElementType \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `variant` | `TextVariant \| undefined` | optional | См. типы и пример выше |
| `weight` | `TextWeight \| undefined` | optional | См. типы и пример выше |
| `color` | `TextColor \| undefined` | optional | См. типы и пример выше |
| `shade` | `TextShade \| undefined` | optional | См. типы и пример выше |
| `align` | `TextAlign \| undefined` | optional | См. типы и пример выше |
| `overflow` | `TextOverflow \| undefined` | optional | См. типы и пример выше |
| `decoration` | `TextDecoration \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotCaption>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Caption` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Subtitle 1` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `тextTitle` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `тextSubtitle 1` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotLabel>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `slotLabel` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textSubtitle 2` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Subtitle 2` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | H4, H3, H2, H1 | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Direction` | Centre, Left | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma Text is a composed text block; use multiple Texts.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
