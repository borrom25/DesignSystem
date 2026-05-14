# TimeBar

Документация для связи Figma component `Time bar` с runtime-компонентом `TimeBar`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `TimeBar.figma.js`, если нужен Code Connect.

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
figmaSourceSelectionUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=453-51032
figmaSourceSelectionNodeId: 453:51032
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

| Purpose               | Path                                              |
| --------------------- | ------------------------------------------------- |
| Runtime component     | `src/components/TimeBar/TimeBar.tsx`              |
| Public props          | `src/components/TimeBar/TimeBar.types.ts`         |
| State hook            | `src/components/TimeBar/hooks/useTimeBarState.ts` |
| UI columns / controls | `src/components/TimeBar/ui/*`                     |
| Local export          | `src/components/TimeBar/index.ts`                 |
| Styles entry          | `src/components/TimeBar/styles/index.ts`          |
| Storybook             | `src/stories/TimeBar.stories.tsx`                 |
| Code Connect          | `src/components/TimeBar/TimeBar.figma.js`         |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop                            | Code values                            | Default        | Notes                                                                                 |
| ------------------------ | ------------ | ------------------------------------ | -------------------------------------- | -------------- | ------------------------------------------------------------------------------------- |
| `Property 1`             | `Default`    | -                                    | -                                      | `Default`      | Единственный опубликованный variant; runtime API не требует prop для него             |
| `<slottimeСolumn>`       | slot         | -                                    | generated hours column                 | -              | Runtime сам генерирует колонку часов через `generateHours(use24Hour)`                 |
| `<slottimeСolumn>2`      | slot         | -                                    | generated minutes column               | -              | Runtime сам генерирует колонку минут через `generateMinutes()`                        |
| `<slottimeСolumn>3`      | slot         | `showSeconds`                        | `true`                                 | `true`         | Наличие третьей Figma-колонки соответствует дефолтному `showSeconds={true}`           |
| Selected time in design  | `04:04:04`   | `defaultValue`                       | `{ hours: 4, minutes: 4, seconds: 4 }` | current time   | Code Connect uses `defaultValue` to reproduce the selected row from the Figma example |
| Button 1 text            | `Сейчас`     | `nowButtonText`                      | `string`                               | `"Сейчас"`     | Совпадает с runtime default, поэтому в snippet можно не передавать                    |
| Button 2 text            | `Ок`         | `confirmButtonText`                  | `string`                               | `"Ок"`         | Совпадает с runtime default, поэтому в snippet можно не передавать                    |
| Action bar visibility    | visible      | `showNowButton`, `showConfirmButton` | `true`, `true`                         | `true`, `true` | Figma не выводит отдельные boolean properties для скрытия кнопок                      |

## Supported states

| State                   | Supported in code | How to use                                     |
| ----------------------- | ----------------- | ---------------------------------------------- |
| HH:MM:SS                | Yes               | omit `showSeconds` or set `showSeconds={true}` |
| HH:MM                   | Yes               | `<TimeBar showSeconds={false} />`              |
| 24-hour mode            | Yes               | omit `use24Hour` or set `use24Hour={true}`     |
| 12-hour-like hours list | Yes               | `<TimeBar use24Hour={false} />`                |
| Disabled                | Yes               | `<TimeBar disabled />`                         |
| Custom button text      | Yes               | `nowButtonText`, `confirmButtonText`           |
| Custom footer           | Yes               | `footerSlot`                                   |
| Fill parent height      | Yes               | `columnsFillHeight`                            |

## Design matching notes

- Figma node `453:51032` is a canvas/frame wrapper. The published component set used for Code Connect is `1670:1000`.
- `TimeBar` управляет только выбором времени, без поля ввода и поповера. Поле ввода и поповер находятся в `TimePicker`.
- Figma показывает три колонки и action bar. В runtime это дефолтное состояние: `showSeconds`, `showNowButton` и `showConfirmButton` равны `true`.
- Колонки в Figma представлены slots, но публичный `TimeBar` не принимает slots для часов, минут и секунд. Эти части генерируются внутренними `TimeColumn`.
- Визуальное соответствие поддерживается через `src/components/TimeBar/styles` и токены `line-basic-generic`, `background/basic/generic`, component size и typography tokens.

## Temporary mappings / assumptions

| Item                 | Current mapping                                                     | Reason                                                                                          | Follow-up                                                                 |
| -------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Figma column slots   | Runtime-generated `TimeColumn` instances                            | Public API intentionally does not expose column slots; values are generated from time utilities | Add public slots only if product use case requires custom column content  |
| `Property 1=Default` | no runtime prop                                                     | Single Figma variant does not represent a user-facing API choice                                | Add mapping if Figma receives real variants such as size/state/layout     |
| Button visibility    | runtime defaults `showNowButton={true}`, `showConfirmButton={true}` | Figma component does not expose booleans for action bar buttons                                 | Add Figma booleans if designers need Dev Mode snippets for hidden buttons |

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

### With custom footer

```tsx
<TimeBar
  footerSlot={
    <div className="flex justify-end gap-2 p-2">
      <button type="button">Cancel</button>
      <button type="button">Apply</button>
    </div>
  }
/>
```
