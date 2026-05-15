# TimeBar

Документация для связи Figma-компонента `Time bar` с runtime-компонентом `TimeBar`.

```text
src/components/TimeBar/TimeBar.docs.md
```

Парный Code Connect файл:

```text
src/components/TimeBar/TimeBar.figma.js
```

## Machine-readable summary

```yaml
component: TimeBar
package: borrom-ds-test
import: import { TimeBar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/TimeBar/TimeBar.tsx
types: src/components/TimeBar/TimeBar.types.ts
localExport: src/components/TimeBar/index.ts
publicExport: src/index.ts
storybook: src/stories/TimeBar.stories.tsx
figmaComponent: Time bar
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1670-1000
figmaNodeId: 1670:1000
codeConnect: src/components/TimeBar/TimeBar.figma.js
```

## Public usage

```tsx
import { TimeBar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <TimeBar
      defaultValue={{ hours: 4, minutes: 4, seconds: 4 }}
      onChange={(next) => console.log(next)}
      onConfirm={(next) => console.log("confirm", next)}
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/TimeBar/TimeBar.tsx` |
| Public props | `src/components/TimeBar/TimeBar.types.ts` |
| State hook | `src/components/TimeBar/hooks/useTimeBarState.ts` |
| UI columns / controls | `src/components/TimeBar/ui/*` |
| Local export | `src/components/TimeBar/index.ts` |
| Styles entry | `src/components/TimeBar/styles/index.ts` |
| Storybook | `src/stories/TimeBar.stories.tsx` |
| Code Connect | `src/components/TimeBar/TimeBar.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Property 1` | `Default` | - | - | `Default` | Единственный опубликованный variant; runtime API не требует prop для него |
| `<slottimeСolumn>` | slot | - | generated hours column | - | Runtime генерирует колонку часов через `generateHours(use24Hour)` |
| `<slottimeСolumn>2` | slot | - | generated minutes column | - | Runtime генерирует колонку минут через `generateMinutes()` |
| `<slottimeСolumn>3` | slot | `showSeconds` | `true` | `true` | Наличие третьей Figma-колонки соответствует дефолтному `showSeconds={true}` |
| Selected time in design | `04:04:04` | `defaultValue` | `{ hours: 4, minutes: 4, seconds: 4 }` | current time | Code Connect использует `defaultValue` для воспроизведения выбранного состояния |
| Button 1 text | `Сейчас` | `nowButtonText` | `string` | `"Сейчас"` | Совпадает с runtime default, можно не передавать явно |
| Button 2 text | `Ок` | `confirmButtonText` | `string` | `"Ок"` | Совпадает с runtime default, можно не передавать явно |
| Action bar visibility | visible | `showNowButton`, `showConfirmButton` | `true`, `true` | `true`, `true` | В Figma нет отдельных boolean properties для скрытия кнопок |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| HH:MM:SS | Yes | omit `showSeconds` or set `showSeconds={true}` |
| HH:MM | Yes | `<TimeBar showSeconds={false} />` |
| 24-hour mode | Yes | omit `use24Hour` or set `use24Hour={true}` |
| 12-hour-like hours list | Yes | `<TimeBar use24Hour={false} />` |
| Disabled | Yes | `<TimeBar disabled />` |
| Custom button text | Yes | `nowButtonText`, `confirmButtonText` |
| Custom footer | Yes | `footerSlot` |
| Fill parent height | Yes | `columnsFillHeight` |

## Design matching notes

- Проверено по Figma node `1670:1000`: верхнеуровневые properties — `Property 1` и три SLOT-свойства (`<slottimeСolumn>`, `<slottimeСolumn>2`, `<slottimeСolumn>3`).
- `TimeBar` управляет только выбором времени, без поля ввода и поповера; эти части находятся в `TimePicker`.
- Колонки в Figma представлены как slots, но публичный `TimeBar` не принимает slots для часов/минут/секунд. Эти части генерируются внутренними `TimeColumn`.
- Визуальное соответствие поддерживается через `src/components/TimeBar/styles` и токены.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| Figma column slots | Runtime-generated `TimeColumn` instances | Публичный API сознательно не экспонирует column slots | Добавлять slots в API только при подтвержденном продуктовым запросом use-case |
| `Property 1=Default` | no runtime prop | Единственный variant в Figma не отражает пользовательский выбор в API | Добавить mapping при появлении реальных variants (size/state/layout) |
| Button visibility | runtime defaults `showNowButton={true}`, `showConfirmButton={true}` | Figma компонент не экспонирует booleans для кнопок | Добавить properties в Figma, если нужен автоген для скрытых кнопок |

## Examples

### Basic

```tsx
<TimeBar />
```

### Match current Figma example

```tsx
<TimeBar defaultValue={{ hours: 4, minutes: 4, seconds: 4 }} />
```

### Compact HH:MM

```tsx
<TimeBar showSeconds={false} />
```
