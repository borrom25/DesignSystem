# DateRange

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: DateRange
package: borrom-ds-test
import: import { DateRange } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/DateRange/DateRange.tsx
types: src/components/DateRange/DateRange.types.ts
localExport: src/components/DateRange/index.ts
publicExport: src/index.ts
storybook: src/stories/DateRange.stories.tsx
figmaComponent: DateRange
figmaNodeId: 4762:11608
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4762-11608
codeConnect: src/components/DateRange/DateRange.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { DateRange } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<DateRange
      size="xs"
      placeholderStart="Дата начала"
      placeholderEnd="Дата конца"






    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/DateRange/DateRange.tsx](DateRange.tsx) |
| Props / shared types | [src/components/DateRange/DateRange.types.ts](DateRange.types.ts) |
| Props / shared types | [src/types/field.ts](../../types/field.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/DateRange.stories.tsx](../../stories/DateRange.stories.tsx) |
| Code Connect | [src/components/DateRange/DateRange.figma.js](DateRange.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `id` | `string \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showTimeBar` | `boolean \| undefined` | optional | См. типы и пример выше |
| `value` | `DateRangeValue \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `DateRangeValue \| undefined` | optional | См. типы и пример выше |
| `onChange` | `DateRangeChangeHandler \| undefined` | optional | См. типы и пример выше |
| `onClear` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `placeholderStart` | `string \| undefined` | optional | См. типы и пример выше |
| `placeholderEnd` | `string \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `fieldClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `startError` | `boolean \| undefined` | optional | См. типы и пример выше |
| `endError` | `boolean \| undefined` | optional | См. типы и пример выше |
| `timeBarFooter` | `ReactNode` | optional | См. типы и пример выше |
| `required` | `boolean \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |
| `hintError` | `string \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `textHint` | TEXT | `hint`; значения см. template |
| `Hint` | BOOLEAN | `hint / hintError`; значения см. template |
| `textError` | TEXT | `hintError`; значения см. template |
| `requiredMark` | BOOLEAN | `required`; значения см. template |
| `Label` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default, Hover, Selected, Filled in, Input text, Filled in Hover | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Error` | Off, On | `error`; значения см. template |
| `Disable` | Off, On | `disabled`; значения см. template |
| `Filled` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping:
Figma exposes "Дата начала" / "Дата конца" as fixed text layers, while
DateRange runtime defaults are domain-specific placeholders. Pass explicit
placeholders so generated snippets match the published Figma component.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
