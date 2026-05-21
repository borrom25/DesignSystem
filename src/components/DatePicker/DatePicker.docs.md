# DatePicker

Документация для связи Figma component set `DatePicker` с runtime-компонентом `DatePicker`.

`DatePicker` - это поле даты на базе `Input`, которое открывает `Calendar` в `Popover`, поддерживает ручной ввод по формату и выбор даты из календаря.

## Machine-readable summary

```yaml
component: DatePicker
package: borrom-ds-test
import: import { DatePicker } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/DatePicker/DatePicker.tsx
types: src/components/DatePicker/DatePicker.types.ts
localExport: src/components/DatePicker/index.ts
publicExport: src/index.ts
storybook: src/stories/DatePicker.stories.tsx
figmaComponent: DatePicker
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4698-9891
figmaNodeId: 4698:9891
codeConnect: src/components/DatePicker/DatePicker.figma.js
```

## Public usage

```tsx
import { useState } from "react";
import { DatePicker } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  const [value, setValue] = useState("");

  return (
    <DatePicker
      size="md"
      label="Дата"
      placeholder="ДД.ММ.ГГГГ"
      hint="Выберите дату"
      value={value}
      onChangeInput={(nextValue) => setValue(nextValue ?? "")}
      onChangeDate={(nextDate) => {
        console.log(nextDate);
      }}
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/DatePicker/DatePicker.tsx` |
| Public props | `src/components/DatePicker/DatePicker.types.ts` |
| Value hook | `src/components/DatePicker/hooks/useDatePickerValue.ts` |
| Local export | `src/components/DatePicker/index.ts` |
| Styles entry | `src/components/DatePicker/styles/index.ts` |
| Storybook | `src/stories/DatePicker.stories.tsx` |
| Code Connect | `src/components/DatePicker/DatePicker.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Size` | `Xs`, `Sm`, `Md` | `size` | `xs`, `sm`, `md` | `sm` | Runtime default differs from many Figma examples, so Code Connect always emits `size` |
| `Error` | `Off`, `On` | `error` | `boolean` | `false` | Changes input border and hint color |
| `Disable` | `Off`, `On` | `disabled` | `boolean` | `false` | Blocks input and popover opening |
| `Filled` | `Off`, `On` | `value` | `string` | - | Code Connect uses `textFilled` when filled-state is selected |
| `State` | `Default` | - | - | - | Basic visual state |
| `State` | `Hover` | runtime CSS | - | - | Separate prop is not needed |
| `State` | `Selected` | runtime interaction | - | - | Focus/open state is managed by input and popover |
| `State` | `Input text` | `value` | `string` | - | Demo value follows Figma typing state |
| `State` | `Filled in` | `value` | `string` | - | Filled state maps to a controlled string value |
| `State` | `Filled in Hover` | `value` + runtime CSS | `string` | - | Hover stays CSS-driven |
| `Label` + `textLabel` | boolean + text | `label` | `string` | `Дата` | Label is emitted only when `Label=On` |
| `Placeholder` + `textPlaceholder` | boolean + text | `placeholder` | `string` | - | Placeholder is emitted only when `Placeholder=On` |
| `requiredMark` | boolean | `required` | `boolean` | `false` | Also sets `aria-required` internally |
| `Hint` + `textHint` | boolean + text | `hint` | `string` | - | Used when `Error=Off` |
| `Hint` + `textError` | boolean + text | `hintError` | `string` | - | Used when `Error=On` |
| `slotRight` + `<slotRight>` | boolean + slot | `rightSlot` | `ReactNode` | - | Optional content after the calendar/clear icon |
| Calendar icon instance | nested icon | `icon` | `LucideIcon` | `CalendarIcon` | Runtime owns default calendar icon |
| Clear icon instance | nested icon | internal clear | - | - | Runtime shows `CloseBtn` when there is a value |

## Supported behavior

| Behavior | Supported in code | How to use |
| --- | --- | --- |
| Manual input | Yes | `value`, `onChangeInput`, `format` |
| Calendar selection | Yes | `onChangeDate`; internal `Calendar` writes formatted string |
| Controlled value | Yes | `value` + `onChangeInput` |
| Clear action | Yes | `onClear`; runtime shows clear button when value is non-empty |
| Disabled | Yes | `disabled` |
| Error | Yes | `error`, `hintError` |
| Required mark | Yes | `required` |
| Custom icon | Yes | `icon={Calendar}` or another `LucideIcon` |
| Right slot | Yes | `rightSlot={<Button ... />}` |
| Clear input variant | Yes | `variant={InputVariant.Clear}`; Figma does not expose this variant here |

## Runtime behavior

- `DatePicker` renders `Input` as the trigger and `Calendar` inside `Popover.Content`.
- The displayed value is a string formatted by `format`, default `dd.MM.yyyy`.
- Manual input strips letters, keeps only date separators/numbers and clamps day/month ranges.
- When the input length matches the format length, the hook parses a `Date` and calls `onChangeDate`.
- Selecting a date in `Calendar` updates both the string value and `onChangeDate`.
- `rightSlot` is rendered beside the calendar/clear affordance, not instead of the date input.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `State=Selected` | metadata only | Runtime does not expose a persistent selected/focused prop | Use real focus/open interaction in the app |
| `State=Hover`, `State=Filled in Hover` | runtime CSS | Hover is not a public prop | Verify in Storybook/browser if visual behavior changes |
| `State=Input text` | `value="12.0"` fallback when needed | Figma visual shows partial typed date; runtime value is a plain string | Replace with product value in real usage |
| `slotRight` fallback | `<Button size="xs">Button</Button>` | Figma slot can be empty or not connected to code | Replace with project-specific action node |
| Nested calendar/clear icons | runtime-owned | Default icon and clear behavior already exist in `DatePicker` | Use `icon` prop only for a deliberate custom icon |

## Examples

### Basic

```tsx
<DatePicker size="md" label="Дата" placeholder="ДД.ММ.ГГГГ" />
```

### Filled

```tsx
<DatePicker
  size="md"
  label="Дата"
  value="27.04.2026"
  onChangeInput={(nextValue) => setValue(nextValue ?? "")}
/>
```

### Error

```tsx
<DatePicker
  error
  hintError="Проверьте дату"
  label="Дата"
  placeholder="ДД.ММ.ГГГГ"
/>
```

### With Right Slot

```tsx
<DatePicker
  label="Дата"
  rightSlot={<Button size="xs">Button</Button>}
/>
```
