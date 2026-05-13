# InputPhone

Документация для связи Figma-компонента `🚧 InputPhone` с runtime-компонентом `InputPhone`.

```text
src/components/InputPhone/InputPhone.docs.md
```

Парный Code Connect файл:

```text
src/components/InputPhone/InputPhone.figma.js
```

## Machine-readable summary

```yaml
component: InputPhone
package: borrom-ds-test
import: import { InputPhone } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InputPhone/InputPhone.tsx
types: src/components/InputPhone/InputPhone.types.ts
localExport: src/components/InputPhone/index.ts
publicExport: src/index.ts
storybook: src/stories/InputPhone.stories.tsx
figmaComponent: 🚧 InputPhone
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4602-3679
figmaNodeId: 4602:3679
codeConnect: src/components/InputPhone/InputPhone.figma.js
```

## Public usage

```tsx
import { InputPhone } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <InputPhone
      size="md"
      label="Телефон"
      placeholder="900 000-00-00"
      defaultValue="9991234567"
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/InputPhone/InputPhone.tsx` |
| Public props | `src/components/InputPhone/InputPhone.types.ts` |
| Local export | `src/components/InputPhone/index.ts` |
| Styles entry | `src/components/InputPhone/styles/index.ts` |
| Storybook | `src/stories/InputPhone.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Error` | `error` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Disable` | `disabled` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Label` + `textLabel` | `label` | `string` | - | При `Label=On` используется `textLabel` |
| `requiredMark` | `required` | `boolean` | `false` | Required mark через `FieldLabel` |
| `Hint` + `textHint` / `textError` | `hint` / `hintError` | `string` | - | При `Error=On` используется `hintError=textError` |
| `textPlaceholder` | `placeholder` | `string` | - | Placeholder поля ввода |
| `Filled` + `textFilled` | `defaultValue` | `string` | - | При Filled/Input text передается строка телефона |
| `State=Selected` | `autoFocus` | `boolean` | `false` | Temporary mapping для focus-состояния |
| `slotLeft` | `showFlagIsland` | `boolean` | `true` | Temporary mapping: префикс в runtime фиксирован |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | без специальных props |
| Hover | Runtime CSS | отдельный prop не нужен |
| Selected | Partial | `autoFocus` для стартового фокуса |
| Input text | Yes | `value`/`defaultValue` |
| Filled in | Yes | `value`/`defaultValue` |
| Filled in Hover | Runtime CSS + value | `value`/`defaultValue` |
| Disabled | Yes | `disabled` |
| Error | Yes | `error` + `hintError` |

## Design matching notes

- В runtime используется фиксированный телефонный формат `+7` и маска отображения `900 000-00-00`.
- `InputPhone` — отдельный компонент, не просто `Input` пресет.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `slotLeft` | `showFlagIsland` | В API нет свободного slot для префикса: слева всегда `+7` (island/текст) | Если нужен произвольный slot, расширить API |
| `State=Selected` | `autoFocus` | Нет персистентного selected-state prop | Управлять фокусом на уровне интеграции |
| `textFilled` | `defaultValue` | Значение телефона в Figma хранится как text layer | Если будет отдельный property value, маппить напрямую |
