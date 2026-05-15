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

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Calendar/Calendar.tsx` |
| Public props | `src/components/Calendar/Calendar.types.ts` |
| State hook | `src/components/Calendar/hooks/useCalendarState.ts` |
| Header / grid views | `src/components/Calendar/ui/*` |
| Local export | `src/components/Calendar/index.ts` |
| Styles entry | `src/components/Calendar/styles/index.ts` |
| Storybook | `src/stories/Calendar.stories.tsx` |
| Code Connect | `src/components/Calendar/Calendar.figma.js` |

## Figma to props mapping

По MCP для node `643:5569` верхнеуровневый Figma API содержит только один variant:

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `State` | `Standard` | `mode`, `pickerType` | `mode="single"`, `pickerType="full"` | `single`, `full` | Обычный календарь выбора дня |
| `State` | `Range` | `mode`, `defaultValue` | `mode="range"`, `{ from, to }` | `single` | Диапазон задается значением календаря, не отдельными слотами |
| `State` | `Month` | `mode`, `pickerType` | `mode="single"`, `pickerType="month"` | `full` | Режим выбора месяца |
| `State` | `Year` | `mode`, `pickerType` | `mode="single"`, `pickerType="year"` | `full` | Режим выбора года |
| Header text | `Пятница, 20 февраля` | `defaultValue` | `new Date(2026, 1, 20)` | today | Assumption: 20 февраля 2026 - пятница и попадает в диапазон `2020-2031` |
| Visible month | February 2026 | `displayMonth` | `new Date(2026, 1, 1)` | derived | Фиксируется в snippet, чтобы Dev Mode не зависел от текущей даты |

## Internal Figma layers

Эти Figma-слои не маппятся на публичные props напрямую:

| Figma layer | Runtime equivalent | Notes |
| --- | --- | --- |
| `Headings` | `CalendarHeader` | Внутренний header, управляется `displayMonth`, `pickerType`, view state |
| `Item` | `MonthsView` / `YearsView` items | Генерируется runtime-компонентом |
| `Day` | `CalendarGrid` day cell | Генерируется по календарной сетке |
| `Range` | range classes in `CalendarGrid` | Управляется `mode="range"` и `defaultValue/value` |
| `Icon-button` | navigation buttons in `CalendarHeader` | Внутренние кнопки навигации |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Single date | Yes | `<Calendar mode="single" />` |
| Date range | Yes | `<Calendar mode="range" />` |
| Multiple dates | Yes | `<Calendar mode="multiple" />`; отдельного Figma state нет |
| Month picker | Yes | `<Calendar pickerType="month" />` |
| Year picker | Yes | `<Calendar pickerType="year" />` |
| Disabled dates | Yes | `disabled`, `minDate`, `maxDate` |
| Several visible months | Yes | `numberOfMonths` |
| Hidden selected date header | Yes | `showSelectedDate={false}` |

## Design matching notes

- Figma node `643:5569` - опубликованный component set `Calendar` с variant `State`.
- Это не `DatePicker` и не `DateRange`: здесь нет input field и popover trigger, только календарная поверхность.
- Runtime `Calendar` date-driven: публичный API принимает даты и режимы, а не отдельные слоты для `Headings`, `Day`, `Range` и `Item`.
- Размер поверхности сейчас задан в `src/components/Calendar/styles/base.ts`: `w-[324px] h-[374px]`.
- Визуальные состояния вложенных day/range/month/year cells строятся внутри `CalendarGrid`, `MonthsView` и `YearsView`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `State=Standard` | `mode="single"`, `pickerType="full"` | Runtime не имеет prop `state="standard"` | Оставить как основной mapping |
| `State=Range` | `mode="range"` + example range value | Figma range visuals задаются вложенными `Range` слоями, runtime управляется датами | Добавить Figma text/date props, если нужны точные даты из макета |
| Header `Пятница, 20 февраля` | `new Date(2026, 1, 20)` | В тексте нет года; 20.02.2026 совпадает с пятницей и диапазоном `2020-2031` | Уточнить год в Figma, если это должно быть не demo-состояние |
| Nested `Day` / `Range` / `Item` | internal runtime UI | Public API намеренно не slot-driven | Не расширять API без продуктового запроса |

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
