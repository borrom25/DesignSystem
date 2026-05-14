# TimeBar

Документация для связи Figma-компонента `timebar` с runtime-компонентом `TimeBar`.

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
figmaComponent: timebar
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
      value={{ hours: 9, minutes: 30, seconds: 0 }}
      onChange={(next) => console.log(next)}
      onConfirm={(next) => console.log("confirm", next)}
      showSeconds
      use24Hour
      showNowButton
      showConfirmButton
      nowButtonText="Сейчас"
      confirmButtonText="Ок"
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

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| Time value | `value` / `defaultValue` | `{ hours, minutes, seconds }` | current time | Controlled/uncontrolled mode |
| `Show seconds` (expected) | `showSeconds` | `boolean` | `true` | Показывает/скрывает колонку секунд |
| `24 hour` (expected) | `use24Hour` | `boolean` | `true` | `false` переключает колонку часов на 12-часовой набор |
| `Disabled` (expected) | `disabled` | `boolean` | `false` | Блокирует прокрутку и кнопки |
| `Show now button` (expected) | `showNowButton` | `boolean` | `true` | Показывает кнопку "Сейчас" |
| `Show confirm button` (expected) | `showConfirmButton` | `boolean` | `true` | Показывает кнопку "Ок" |
| `Now button text` (expected) | `nowButtonText` | `string` | `"Сейчас"` | Кастомный текст кнопки "Сейчас" |
| `Confirm button text` (expected) | `confirmButtonText` | `string` | `"Ок"` | Кастомный текст кнопки подтверждения |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| HH:MM:SS | Yes | `showSeconds={true}` |
| HH:MM | Yes | `showSeconds={false}` |
| 24-hour mode | Yes | `use24Hour={true}` |
| 12-hour-like hours list | Yes | `use24Hour={false}` |
| Disabled | Yes | `disabled` |
| Custom footer | Yes | `footerSlot` |

## Design matching notes

- `TimeBar` управляет только выбором времени, без поля ввода и поповера (они находятся в `TimePicker`).
- Кнопки `Сейчас` и `Ок` контролируются через `showNowButton` / `showConfirmButton` и текстовые пропы.
- Для интеграции в layout со fixed height есть `columnsFillHeight`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| Точные имена Figma properties | В docs указаны ожидаемые property names (`Show seconds`, `24 hour`, ...) | Figma MCP сейчас недоступен (ошибка инициализации клиента), получить реальные property keys узла `1670:1000` не удалось | После восстановления MCP перечитать node properties и синхронизировать таблицу + `TimeBar.figma.js` |
| Code Connect для property reads | Временный статический snippet без `instance.get*` | Без точных property keys нельзя безопасно собрать автоматический mapping | Добавить `instance.getBoolean/getString/getEnum` после доступа к Figma properties |

## Examples

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
