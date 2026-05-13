# PinInput

Документ для привязки Figma-компонента `PinInput` к runtime-компоненту `PinInput`.

```text
src/components/PinInput/PinInput.docs.md
```

Парный Code Connect файл:

```text
src/components/PinInput/PinInput.figma.js
```

## Machine-readable summary

```yaml
component: PinInput
package: borrom-ds-test
import: import { PinInput } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/PinInput/PinInput.tsx
types: src/components/PinInput/PinInput.types.ts
localExport: src/components/PinInput/index.ts
publicExport: src/index.ts
storybook: src/stories/PinInput.stories.tsx
figmaComponent: PinInput
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1199-5009
codeConnect: src/components/PinInput/PinInput.figma.js
```

## Public usage

```tsx
import { PinInput, PinInputType } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <PinInput size="md" type={PinInputType.Default} />;
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/PinInput/PinInput.tsx` |
| Public props | `src/components/PinInput/PinInput.types.ts` |
| Local export | `src/components/PinInput/index.ts` |
| Styles entry | `src/components/PinInput/styles/index.ts` |
| Storybook | `src/stories/PinInput.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Mask` | `type` | `default`, `masked` | `default` | `Off -> default`, `On -> masked` |
| `Error` | `error` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Result` | `error` | `boolean` | `false` | `Error -> true`, `Normal -> false` |
| `Filled` | `value` | `string` | `""` | `On -> "9"` (временный демо-value), `Off -> ""` |
| `State` | partial | - | `Default` | `Disablet -> disabled`; `Mask/Filled` усиливают `value/type`; `Hover/Selected` это runtime CSS/focus |
| `pinInputItem` | - | - | - | Temporary mapping: нет соответствующего публичного prop |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | без специальных props |
| Hover | Runtime CSS | отдельный prop не нужен |
| Selected | Runtime focus | состояние фокуса через interaction |
| Filled | Yes | передать `value` |
| Disablet | Yes | `disabled` |
| Mask | Yes | `type="masked"` и `value` |
| Error | Yes | `error` |

## Design matching notes

- `PinInput` в коде реализован как **одна ячейка** (`maxLength={1}`).
- Многоячеечный PIN/OTP в проекте собирается композицией нескольких `PinInput` (см. `CodeInput` в `src/stories/PinInput.stories.tsx`).
- Поэтому Figma-сет с несколькими ячейками нужно маппить на внешний layout + набор экземпляров `PinInput`, а не на отдельный runtime-компонент группы.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Filled=On` | `value="9"` | В Figma текстовый символ не вынесен в editable property | Если появится property для символа, маппить напрямую |
| `pinInputItem` | не маппится | Нет соответствующего prop в `PinInputProps` | Уточнить назначение property в Figma |
| `State=Selected` | не маппится в prop | Выбранность это focus/interaction состояние | Не требуется |

## Examples

### Single cell

```tsx
<PinInput size="md" value="5" />
```

### Masked

```tsx
<PinInput size="md" type={PinInputType.Masked} value="9" />
```

### OTP group (composition)

```tsx
<div className="flex gap-2">
  {["", "", "", ""].map((digit, idx) => (
    <PinInput key={idx} value={digit} />
  ))}
</div>
```
