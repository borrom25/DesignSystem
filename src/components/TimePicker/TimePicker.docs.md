# TimePicker

Документация для связи Figma component set `TimePicker` с runtime-компонентом `TimePicker`.

`TimePicker` - это поле ввода времени на базе `Input`, которое открывает `TimeBar` в `Popover`. Компонент поддерживает ручной ввод, выбор времени в поповере, очистку значения, ошибки, disabled-состояние, обязательную отметку, подсказки и правый slot.

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
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4654-4915
figmaNodeId: 4654:4915
codeConnect: src/components/TimePicker/TimePicker.figma.js
```

## Public usage

```tsx
import { useState } from "react";
import { TimePicker, type TimeValue } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  const [value, setValue] = useState("");
  const [time, setTime] = useState<TimeValue | undefined>();

  return (
    <TimePicker
      size="md"
      label="Время начала"
      placeholder="ЧЧ:ММ"
      value={value}
      time={time}
      showSeconds={false}
      onChangeValue={(nextValue) => setValue(nextValue ?? "")}
      onChangeTime={setTime}
      onClear={() => {
        setValue("");
        setTime(undefined);
      }}
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/TimePicker/TimePicker.tsx` |
| Public props | `src/components/TimePicker/TimePicker.types.ts` |
| Value hook | `src/components/TimePicker/hooks/useTimePickerValue.ts` |
| Local export | `src/components/TimePicker/index.ts` |
| Styles entry | `src/components/TimePicker/styles/index.ts` |
| Storybook | `src/stories/TimePicker.stories.tsx` |
| Code Connect | `src/components/TimePicker/TimePicker.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Size` | `Xs`, `Sm`, `Md` | `size` | `xs`, `sm`, `md` | `md` | Code Connect always emits `size` to match selected Figma variant |
| `Error` | `Off`, `On` | `error` | `boolean` | `false` | Changes field error styling; error text comes from `hintError` |
| `Disable` | `Off`, `On` | `disabled` | `boolean` | `false` | Blocks input, clear action and popover interaction |
| `Filled` | `Off`, `On` | `value`, `time` | `string`, `TimeValue` | - | Filled visual maps to a controlled value sample |
| `State` | `Default` | - | - | - | Basic visual state |
| `State` | `Hover` | runtime CSS | - | - | Hover is handled by field styles, not by a public prop |
| `State` | `Selected` | runtime interaction | - | - | Focus/open state is managed by `Input` and `Popover` |
| `State` | `Input text` | `value` | `string` | - | Typing state maps to a controlled string value |
| `State` | `Filled in` | `value`, `time` | `string`, `TimeValue` | - | Filled state maps to a selected time |
| `State` | `Filled in Hover` | `value`, runtime CSS | `string` | - | Value is mapped, hover remains CSS-driven |
| `Label` + `textLabel` | boolean + text | `label` | `string` | `Время` | Label is emitted only when `Label=On` |
| `Placeholder` + `textPlaceholder` | boolean + text | `placeholder` | `string` | `ЧЧ:ММ` | Placeholder is emitted only when `Placeholder=On` |
| `requiredMark` | boolean | `required` | `boolean` | `false` | Renders required mark through shared field API |
| `Hint` + `textHint` | boolean + text | `hint` | `string` | - | Used when `Error=Off` |
| `Hint` + `textError` | boolean + text | `hintError` | `string` | - | Used when `Error=On` |
| `slotRight` + `<slotRight>` | boolean + slot | `rightSlot` | `ReactNode` | - | Optional content after clock/clear affordance |
| Clock icon instance | nested icon | internal suffix | - | `Clock` | Runtime owns the default empty-state icon |
| Close icon instance | nested icon | internal clear | - | `CloseBtn` | Runtime shows clear button when there is a value |
| Popover content | not in this Figma node | `TimeBar` props | `showSeconds`, `use24Hour`, buttons | see defaults | `TimePicker` renders `TimeBar` internally inside `PopoverSurface` |

## Supported behavior

| Behavior | Supported in code | How to use |
| --- | --- | --- |
| Manual input | Yes | `value`, `onChangeValue`, `format` |
| Time selection in popover | Yes | `time`, `onChangeTime`; popover renders `TimeBar` |
| Controlled value | Yes | `value` + `onChangeValue` |
| Controlled structured time | Yes | `time` + `onChangeTime` |
| Clear action | Yes | `onClear`; runtime shows `CloseBtn` when value is non-empty |
| Disabled | Yes | `<TimePicker disabled />` |
| Error | Yes | `<TimePicker error hintError="..." />` |
| Required mark | Yes | `<TimePicker required />` |
| HH:MM:SS | Yes | omit `showSeconds` or set `showSeconds={true}` |
| HH:MM | Yes | `<TimePicker showSeconds={false} format="HH:mm" />` |
| 24-hour mode | Yes | omit `use24Hour` or set `use24Hour={true}` |
| Right slot | Yes | `rightSlot={<Button ... />}` |
| Custom popover button text | Yes | `nowButtonText`, `confirmButtonText` |

## Runtime behavior

- `TimePicker` renders `Input` as the trigger and `TimeBar` inside `Popover.Content`.
- The displayed value is formatted by `format`; if `format` is not provided, runtime uses `HH:mm:ss` when `showSeconds=true` and `HH:mm` when `showSeconds=false`.
- Manual input and selection in `TimeBar` are synchronized through `useTimePickerValue`.
- `onChangeValue` receives the formatted string, while `onChangeTime` receives `{ hours, minutes, seconds }`.
- `onClear` clears both string and structured time in the internal hook; controlled consumers should clear both external states too.
- The clock icon and clear button are internal suffix behavior, so they should not be manually reimplemented in usage code.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `State=Hover`, `State=Filled in Hover` | runtime CSS | Runtime has no persistent hover prop | Verify visually in Storybook/browser after style changes |
| `State=Selected` | interaction/open state | Focus and popover opening are controlled by user interaction | Use real focus/click interaction in the app |
| `State=Input text` | sample `value="12:30"` | Figma visual represents typing, but runtime API receives a plain string | Replace sample with product state in real screens |
| `Filled=On` / `textFilled` | `value` plus `time` sample | Figma text can be placeholder-like; runtime needs a valid time string for reliable examples | Use a valid product value such as `12:30` |
| `slotRight` fallback | `<Button size="xs">Button</Button>` | Slot content can be empty or not connected to Code Connect | Replace with the actual action node in product code |
| Seconds mode | Code Connect emits `showSeconds={false}` for HH:MM visual | Figma field shows `ЧЧ:ММ`, while runtime default popover supports seconds | Add a Figma property if seconds visibility must be generated from design |

## Examples

### Basic

```tsx
<TimePicker size="md" label="Время" placeholder="ЧЧ:ММ" showSeconds={false} />
```

### Filled

```tsx
<TimePicker
  size="md"
  label="Время начала"
  value="12:30"
  time={{ hours: 12, minutes: 30, seconds: 0 }}
  showSeconds={false}
  onChangeValue={(nextValue) => setValue(nextValue ?? "")}
  onChangeTime={setTime}
/>
```

### Error

```tsx
<TimePicker
  error
  label="Время"
  hintError="Проверьте время"
  placeholder="ЧЧ:ММ"
  showSeconds={false}
/>
```

### With Right Slot

```tsx
<TimePicker
  label="Время"
  showSeconds={false}
  rightSlot={<Button size="xs">Button</Button>}
/>
```
