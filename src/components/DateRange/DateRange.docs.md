# DateRange

Документация для связи опубликованного Figma component set `DateRange` с runtime-компонентом `DateRange`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `DateRange.figma.js`, если нужен Code Connect в Dev Mode.

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
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4762-11608
figmaNodeId: 4762:11608
codeConnect: src/components/DateRange/DateRange.figma.js
```

## Public usage

```tsx
import { useState } from "react";
import { DateRange, type DateRangeValue } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  const [value, setValue] = useState<DateRangeValue>({});

  return (
    <DateRange
      size="md"
      label="Период"
      placeholderStart="Дата начала"
      placeholderEnd="Дата конца"
      hint="Выберите диапазон дат"
      value={value}
      onChange={setValue}
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/DateRange/DateRange.tsx` |
| Public props | `src/components/DateRange/DateRange.types.ts` |
| Value hook | `src/components/DateRange/hooks/useDateRangeValue.ts` |
| Interaction hook | `src/components/DateRange/hooks/useDateRangeInteraction.ts` |
| Field UI | `src/components/DateRange/ui/DateRangeField.tsx` |
| Calendar UI | `src/components/DateRange/ui/DateRangeCalendar.tsx` |
| Local export | `src/components/DateRange/index.ts` |
| Styles entry | `src/components/DateRange/styles/index.ts` |
| Storybook | `src/stories/DateRange.stories.tsx` |
| Code Connect | `src/components/DateRange/DateRange.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Size` | `Xs`, `Sm`, `Md` | `size` | `xs`, `sm`, `md` | `md` | Прямое соответствие `Size` из `src/types` |
| `Error` | `Off`, `On` | `error` | `boolean` | `false` | Общая ошибка поля; точечные `startError`/`endError` в Figma не вынесены |
| `Disable` | `Off`, `On` | `disabled` | `boolean` | `false` | Блокирует открытие поповера, очистку и изменение значения |
| `Filled` | `Off`, `On` | `defaultValue` / `value` | `{ start?: Date; end?: Date }` | `{}` | В Code Connect filled-состояние показано demo-значением `27.04.2026` |
| `State` | `Default` | - | - | - | Базовый runtime state |
| `State` | `Hover` | runtime CSS | - | - | Отдельный prop не нужен |
| `State` | `Selected` | runtime interaction | - | - | Открытие и активный bound управляются внутренним `Popover` |
| `State` | `Input text` | `defaultValue` | `{ start, end }` | - | Используется как визуальное заполненное demo-состояние |
| `State` | `Filled in` | `defaultValue` | `{ start, end }` | - | Используется как заполненный диапазон |
| `State` | `Filled in Hover` | `defaultValue` + runtime CSS | `{ start, end }` | - | Значение задается кодом, hover остается CSS-состоянием |
| `Label` | `boolean` | `label` | `string` | - | В Figma это visibility toggle; текст label в component set не вынесен отдельной property |
| `requiredMark` | `boolean` | `required` | `boolean` | `false` | Показывает required mark через общий API поля |
| `Hint` + `textHint` | `boolean` + `string` | `hint` | `string` | - | При `Error=Off` используется как обычный hint |
| `Hint` + `textError` | `boolean` + `string` | `hintError` | `string` | - | При `Error=On` используется error hint |
| Fixed placeholder text | `Дата начала`, `Дата конца` | `placeholderStart`, `placeholderEnd` | `string` | `Дата поступления`, `Дата закрытия` | Code Connect явно передает Figma-тексты, потому что runtime defaults отличаются |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Empty | Yes | `<DateRange />` |
| Filled | Yes | `defaultValue={{ start: date, end: date }}` or controlled `value` |
| Disabled | Yes | `<DateRange disabled />` |
| Error | Yes | `<DateRange error hintError="Ошибка" />` |
| Start/end error | Yes | `<DateRange startError />`, `<DateRange endError />` |
| Required | Yes | `<DateRange required label="Период" />` |
| Hint | Yes | `<DateRange hint="Выберите диапазон" />` |
| Clear action | Yes | Runtime shows clear button when at least one bound has value |
| Date + time | Yes | `<DateRange showTimeBar />` |
| Hover/focus/selected | Runtime interaction | Управляются CSS и внутренним `Popover`, отдельного prop нет |

## Runtime behavior

- `DateRange` состоит из trigger-поля, `Popover`, `DateRangeCalendar` и опционального `TimeBar`.
- Без `showTimeBar` поповер показывает календарь на два месяца и форматирует значения как `dd.MM.yyyy`.
- С `showTimeBar` поповер показывает один месяц и панель времени; формат значения становится `dd.MM.yyyy - HH:mm:ss`.
- Значение можно вести controlled через `value`/`onChange` или uncontrolled через `defaultValue`.
- При выборе конца раньше начала компонент переставляет границы диапазона так, чтобы диапазон оставался корректным.
- Иконка календаря и кнопка очистки являются внутренней частью runtime-компонента; отдельные Figma icon instances не нужно маппить в consumer API.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Label` text | `label="Период"` в Code Connect demo | Figma содержит toggle `Label`, но не содержит отдельный text property для label поля | Добавить text property в Figma, если нужен точный label из макета |
| Placeholder layers | `placeholderStart="Дата начала"`, `placeholderEnd="Дата конца"` | В Figma тексты фиксированы слоями, а runtime defaults отличаются | Оставить явные props в snippet или синхронизировать runtime defaults отдельной задачей |
| `State=Selected` | metadata only | Runtime не принимает prop для принудительно открытого selected state | Управлять открытием через пользовательское взаимодействие |
| `State=Hover`, `State=Filled in Hover` | runtime CSS | Hover не должен быть публичным prop компонента | Проверять визуально в Storybook/browser |
| Filled date | `new Date(2026, 3, 27)` | Figma sample показывает `27.04.2026`; месяц в JS zero-based | При появлении date properties в Figma заменить demo-дату на реальные значения |

## Examples

### Empty

```tsx
<DateRange
  size="md"
  placeholderStart="Дата начала"
  placeholderEnd="Дата конца"
/>
```

### Filled

```tsx
<DateRange
  size="md"
  placeholderStart="Дата начала"
  placeholderEnd="Дата конца"
  defaultValue={{
    start: new Date(2026, 3, 27),
    end: new Date(2026, 3, 27),
  }}
/>
```

### Error With Hint

```tsx
<DateRange
  error
  hintError="Проверьте диапазон дат"
  placeholderStart="Дата начала"
  placeholderEnd="Дата конца"
/>
```

### Date And Time

```tsx
<DateRange
  showTimeBar
  placeholderStart="Дата начала"
  placeholderEnd="Дата конца"
/>
```
