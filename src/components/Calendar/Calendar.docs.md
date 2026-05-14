# Calendar

Документация для связи Figma component set `Calendar` с runtime-компонентом `Calendar`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Calendar.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: Calendar
package: borrom-ds-test
import: import { Calendar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Calendar/Calendar.tsx
types: src/components/Calendar/Calendar.types.ts
localExport: src/components/Calendar/index.ts
publicExport: src/index.ts
storybook: src/stories/Calendar.stories.tsx
figmaComponent: Calendar
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=643-5569
figmaNodeId: 643:5569
codeConnect: src/components/Calendar/Calendar.figma.js
```

## Public usage

```tsx
import { Calendar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Calendar
      mode="single"
      defaultValue={new Date(2026, 1, 20)}
      displayMonth={new Date(2026, 1, 1)}
    />
  );
}
```

## Source files

| Purpose             | Path                                                |
| ------------------- | --------------------------------------------------- |
| Runtime component   | `src/components/Calendar/Calendar.tsx`              |
| Public props        | `src/components/Calendar/Calendar.types.ts`         |
| State hook          | `src/components/Calendar/hooks/useCalendarState.ts` |
| Header / grid views | `src/components/Calendar/ui/*`                      |
| Local export        | `src/components/Calendar/index.ts`                  |
| Styles entry        | `src/components/Calendar/styles/index.ts`           |
| Storybook           | `src/stories/Calendar.stories.tsx`                  |
| Code Connect        | `src/components/Calendar/Calendar.figma.js`         |

## Figma to props mapping

| Figma property / variant | Figma values                              | Code prop                        | Code values                          | Default                    | Notes                                                                           |
| ------------------------ | ----------------------------------------- | -------------------------------- | ------------------------------------ | -------------------------- | ------------------------------------------------------------------------------- |
| `State`                  | `Standard`                                | `mode`, `pickerType`             | `mode="single"`, `pickerType="full"` | `single`, `full`           | Основной календарь дней                                                         |
| `State`                  | `Range`                                   | `mode`, `defaultValue`           | `mode="range"`, `{ from, to }`       | `single`                   | Runtime range state строится через `mode="range"` и range value                 |
| `State`                  | `Month`                                   | `pickerType`                     | `pickerType="month"`                 | `full`                     | Отображает выбор месяца                                                         |
| `State`                  | `Year`                                    | `pickerType`                     | `pickerType="year"`                  | `full`                     | Отображает выбор года                                                           |
| Heading date             | `Пятница, 20 февраля`                     | `defaultValue`                   | `new Date(2026, 1, 20)`              | today                      | Assumption: 20 февраля 2026 - пятница и попадает в Figma year range `2020–2031` |
| Current visible month    | February 2026                             | `displayMonth`                   | `new Date(2026, 1, 1)`               | derived from value / today | Фиксирует месяц в snippet, чтобы Dev Mode не зависел от текущей даты            |
| Disabled days            | nested `Day State=Disabled`               | `disabled`, `minDate`, `maxDate` | boolean, Date[], predicate           | `false`                    | В Figma это состояние отдельных day-items, не property всего calendar set       |
| Current day              | nested `Day State=Current`                | CSS today state                  | runtime date comparison              | today                      | Не отдельный public prop                                                        |
| Selected day / range     | nested `Day State=Selected`, `Range Type` | `defaultValue` / `value`         | Date / DateRange                     | -                          | Контролируется значением календаря                                              |

## Supported states

| State                       | Supported in code | How to use                                                                       |
| --------------------------- | ----------------- | -------------------------------------------------------------------------------- |
| Single date                 | Yes               | `<Calendar mode="single" />`                                                     |
| Date range                  | Yes               | `<Calendar mode="range" />`                                                      |
| Multiple dates              | Yes               | `<Calendar mode="multiple" />`; Figma state is not exposed in this component set |
| Month picker                | Yes               | `<Calendar pickerType="month" />`                                                |
| Year picker                 | Yes               | `<Calendar pickerType="year" />`                                                 |
| Disabled dates              | Yes               | `disabled`, `minDate`, `maxDate`                                                 |
| Several visible months      | Yes               | `numberOfMonths`                                                                 |
| Hidden selected date header | Yes               | `showSelectedDate={false}`                                                       |

## Design matching notes

- Figma node `643:5569` is a calendar component set with variants `State=Standard`, `State=Range`, `State=Month`, `State=Year`.
- The selected Figma node is not `DatePicker` or `DateRange`: it has no input field or popover trigger, only the calendar surface.
- Runtime dimensions match the Figma surface: `324px` width and `374px` height from `src/components/Calendar/styles/base.ts`.
- Figma includes nested atoms (`Headings`, `Item`, `Day`, `Range`, icon buttons). Runtime keeps these as internal UI pieces in `src/components/Calendar/ui`.
- Figma component name is `Calendar`. The stable connection point is node `643:5569` plus `State` variants.

## Temporary mappings / assumptions

| Item                                       | Current mapping                         | Reason                                                                                         | Follow-up                                                                           |
| ------------------------------------------ | --------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `State=Standard`                           | `mode="single"`, `pickerType="full"`    | Runtime has no `state="standard"` prop; standard is default full single-date calendar          | Keep mapping unless Figma adds a clearer variant name                               |
| `State=Range`                              | `mode="range"` with example range value | Figma range visuals are generated from nested `Range` items; runtime uses selected range value | Add explicit Figma date/range properties if designers need exact generated snippets |
| Heading `Пятница, 20 февраля`              | `new Date(2026, 1, 20)`                 | Figma exposes text but not a year; 20 Feb 2026 is Friday and matches year range `2020–2031`    | Clarify target year in Figma if this should be static                               |
| Nested `Day` / `Range` / `Item` components | internal runtime UI                     | Public API is date-driven, not slot-driven                                                     | Do not expose nested slots unless product needs custom day rendering                |

## Examples

### Standard

```tsx
<Calendar
  mode="single"
  defaultValue={new Date(2026, 1, 20)}
  displayMonth={new Date(2026, 1, 1)}
/>
```

### Range

```tsx
<Calendar
  mode="range"
  defaultValue={{
    from: new Date(2026, 1, 18),
    to: new Date(2026, 1, 24),
  }}
  displayMonth={new Date(2026, 1, 1)}
/>
```

### Month Picker

```tsx
<Calendar
  mode="single"
  pickerType="month"
  defaultValue={new Date(2026, 1, 1)}
  displayMonth={new Date(2026, 1, 1)}
/>
```

### Year Picker

```tsx
<Calendar
  mode="single"
  pickerType="year"
  defaultValue={new Date(2026, 1, 20)}
  displayMonth={new Date(2026, 1, 1)}
/>
```
