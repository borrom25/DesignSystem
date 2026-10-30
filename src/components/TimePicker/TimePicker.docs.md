# TimePicker

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: TimePicker
package: borrom-ds-test
import: import { TimePicker } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/TimePicker/TimePicker.tsx
types: src/components/TimePicker/TimePicker.types.ts
localExport: src/components/TimePicker/index.ts
publicExport: src/index.ts
storybook: src/stories/TimePicker.stories.tsx
figmaComponent: TimePicker
figmaNodeId: 4654:4915
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4654-4915
codeConnect: src/components/TimePicker/TimePicker.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { TimePicker, Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<TimePicker
      size="xs"
      showSeconds={false}
      format="HH:mm"









    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/TimePicker/TimePicker.tsx](TimePicker.tsx) |
| Props / shared types | [src/components/TimePicker/TimePicker.types.ts](TimePicker.types.ts) |
| Props / shared types | [src/types/field.ts](../../types/field.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/TimePicker.stories.tsx](../../stories/TimePicker.stories.tsx) |
| Code Connect | [src/components/TimePicker/TimePicker.figma.js](TimePicker.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `id` | `string \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `value` | `string \| undefined` | optional | См. типы и пример выше |
| `time` | `TimeValue \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `string \| undefined` | optional | См. типы и пример выше |
| `defaultTime` | `TimeValue \| undefined` | optional | См. типы и пример выше |
| `onChangeValue` | `((value?: string) => void) \| undefined` | optional | См. типы и пример выше |
| `onChangeTime` | `((value?: TimeValue) => void) \| undefined` | optional | См. типы и пример выше |
| `onClear` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `placeholder` | `string \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `fieldClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `format` | `string \| undefined` | optional | См. типы и пример выше |
| `minTime` | `string \| TimeValue \| undefined` | optional | См. типы и пример выше |
| `maxTime` | `string \| TimeValue \| undefined` | optional | См. типы и пример выше |
| `showSeconds` | `boolean \| undefined` | optional | См. типы и пример выше |
| `use24Hour` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showNowButton` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showConfirmButton` | `boolean \| undefined` | optional | См. типы и пример выше |
| `nowButtonText` | `string \| undefined` | optional | См. типы и пример выше |
| `confirmButtonText` | `string \| undefined` | optional | См. типы и пример выше |
| `rightSlot` | `ReactNode` | optional | См. типы и пример выше |
| `label` | `string \| undefined` | optional | См. типы и пример выше |
| `subtitle` | `string \| undefined` | optional | См. типы и пример выше |
| `required` | `boolean \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |
| `hintError` | `string \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotRight>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textHint` | TEXT | `hint`; значения см. template |
| `Hint` | BOOLEAN | `hint / hintError`; значения см. template |
| `slotRight` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textError` | TEXT | `hintError`; значения см. template |
| `requiredMark` | BOOLEAN | `required`; значения см. template |
| `textPlaceholder` | TEXT | `placeholder`; значения см. template |
| `textLabel` | TEXT | `label`; значения см. template |
| `textFilled` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Placeholder` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Label` | BOOLEAN | `label`; значения см. template |
| `State` | Default, Hover, Selected, Input text, Filled in, Filled in Hover | Композиция / нет прямого prop; см. template и Temporary mappings |
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
Figma exposes focus/hover/typing states visually, while TimePicker runtime
handles them through Input CSS, typed value and Popover + TimeBar interaction.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
