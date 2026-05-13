# InputNumber

Документация для связи Figma-компонента `🚧 InputNumber` с runtime-компонентом `InputNumber`.

```text
src/components/InputNumber/InputNumber.docs.md
```

Парный Code Connect файл:

```text
src/components/InputNumber/InputNumber.figma.js
```

## Machine-readable summary

```yaml
component: InputNumber
package: borrom-ds-test
import: import { InputNumber } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InputNumber/InputNumber.tsx
types: src/components/InputNumber/InputNumber.types.ts
localExport: src/components/InputNumber/index.ts
publicExport: src/index.ts
storybook: src/stories/InputNumber.stories.tsx
figmaComponent: 🚧 InputNumber
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4602-2205
figmaNodeId: 4602:2205
codeConnect: src/components/InputNumber/InputNumber.figma.js
```

## Public usage

```tsx
import { InputNumber } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <InputNumber size="md" label="Количество" value={5} min={0} max={100} />;
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/InputNumber/InputNumber.tsx` |
| Public props | `src/components/InputNumber/InputNumber.types.ts` |
| Local export | `src/components/InputNumber/index.ts` |
| Styles entry | `src/components/InputNumber/styles/index.ts` |
| Storybook | `src/stories/InputNumber.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Error` | `error` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Disable` | `disabled` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Label` + `textLabel` | `label` | `string` | - | При `Label=On` используется `textLabel` |
| `requiredMark` | `required` | `boolean` | `false` | required mark через `FieldLabel` |
| `Hint` + `textHint` / `textError` | `hint` / `hintError` | `string` | - | При `Error=On` используется `hintError` |
| `State=Selected` | `autoFocus` | `boolean` | `false` | Temporary mapping для focus-состояния |
| `Filled` + `textFilled` | `value` | `number` | - | При Filled/Input text берется число из `textFilled` |
| `State=Input text` / `Filled in` | `value` | `number` | - | Отражает заполненное поле |
| `textPlaceholder` | `placeholder` | `string` | - | Placeholder текст поля |
| `InputNumberButton` block | internal stepper | - | - | Уже встроен в runtime `InputNumber` |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | без специальных props |
| Hover | Runtime CSS | отдельный prop не нужен |
| Selected | Partial | `autoFocus` для начального фокуса |
| Input text | Yes | `value` |
| Filled in | Yes | `value` |
| Filled in Hover | Runtime CSS + value | `value` |
| Disabled | Yes | `disabled` |
| Error | Yes | `error` + `hintError` |

## Design matching notes

- Это отдельный компонент `InputNumber`, а не режим `Input`.
- Кнопки increment/decrement (`StepperButtons`) встроены внутри `InputNumberField`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `slotLeft`, `<slotLeft>` | не маппится | В `InputNumberProps` нет публичного `prefix`/slot API | Если нужен slot, расширить API отдельной задачей |
| `icon-left`, `↳ Icon-left` | не маппится | В `InputNumberProps` нет `iconLeft` | Если нужен левый icon, расширить API |
| `State=Selected` | `autoFocus` | Нет отдельного selected-state prop | Управлять фокусом на уровне интеграции |

## Examples

### Basic

```tsx
<InputNumber value={10} onChange={() => {}} />
```

### With range

```tsx
<InputNumber value={5} min={0} max={10} step={1} onChange={() => {}} />
```

### Error

```tsx
<InputNumber error hintError="Некорректное значение" value={1} onChange={() => {}} />
```
