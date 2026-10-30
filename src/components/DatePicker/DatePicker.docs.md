# DatePicker

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: DatePicker
package: borrom-ds-test
packageVersion: 0.0.72
import: import { DatePicker } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/DatePicker/DatePicker.tsx
types: src/components/DatePicker/DatePicker.types.ts
localExport: src/components/DatePicker/index.ts
publicExport: src/index.ts
storybook: src/stories/DatePicker.stories.tsx
figmaComponent: DatePicker
figmaNodeId: 4698:9891
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4698-9891
codeConnect: src/components/DatePicker/DatePicker.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { DatePicker, Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<DatePicker
      size="xs"
      format="dd.MM.yyyy"








    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/DatePicker/DatePicker.tsx](DatePicker.tsx) |
| Props / shared types | [src/components/DatePicker/DatePicker.types.ts](DatePicker.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/DatePicker.stories.tsx](../../stories/DatePicker.stories.tsx) |
| Code Connect | [src/components/DatePicker/DatePicker.figma.js](DatePicker.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `label` | `string \| undefined` | optional | См. типы и пример выше |
| `value` | `string \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `string \| undefined` | optional | См. типы и пример выше |
| `onChangeInput` | `((value?: string) => void) \| undefined` | optional | См. типы и пример выше |
| `onChangeDate` | `((date?: Date) => void) \| undefined` | optional | См. типы и пример выше |
| `placeholder` | `string \| undefined` | optional | См. типы и пример выше |
| `icon` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `rightSlot` | `ReactNode` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `hintError` | `string \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `required` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onClear` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `variant` | `InputVariant \| undefined` | optional | См. типы и пример выше |
| `format` | `string \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |
| `minDate` | `string \| Date \| undefined` | optional | См. типы и пример выше |
| `maxDate` | `string \| Date \| undefined` | optional | См. типы и пример выше |
| `calendarProps` | `Omit<CalendarBaseProps, "className"> \| undefined` | optional | См. типы и пример выше |

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
Figma exposes focus/hover/typing states visually, while DatePicker runtime
handles them through Input CSS, user input and Popover interaction.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
