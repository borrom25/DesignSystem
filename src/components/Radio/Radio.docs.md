# Radio

Документ для привязки Figma-компонента `Radio-button` к runtime-компоненту `Radio`.

```text
src/components/Radio/Radio.docs.md
```

Парный Code Connect файл:

```text
src/components/Radio/Radio.figma.js
```

## Machine-readable summary

```yaml
component: Radio
package: borrom-ds-test
import: import { Radio } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Radio/Radio.tsx
types: src/components/Radio/Radio.types.ts
localExport: src/components/Radio/index.ts
publicExport: src/index.ts
storybook: src/stories/Radio.stories.tsx
figmaComponent: Radio-button
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1425-3260
codeConnect: src/components/Radio/Radio.figma.js
```

## Public usage

```tsx
import { Radio } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <Radio size="md" />;
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Radio/Radio.tsx` |
| Public props | `src/components/Radio/Radio.types.ts` |
| Local export | `src/components/Radio/index.ts` |
| Styles entry | `src/components/Radio/styles/index.ts` |
| Storybook | `src/stories/Radio.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Checked` | `checked` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Disable` | `disabled` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Title` + `textTitle` | `label` | `string` | - | Если `Title=On`, то `label=textTitle`; иначе label не передается |
| `State` | - | - | `Default` | `Selected` и `Disable` транслируются в `checked/disabled`; `Hover` — runtime CSS |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | без специальных props |
| Selected | Yes | `checked` |
| Disabled | Yes | `disabled` |
| Hover / focus / pressed | Runtime CSS | отдельные props не требуются |

## Design matching notes

- В `Radio` есть поле `label` через `BaseFieldProps`, поэтому текстовая подпись из Figma маппится в prop `label`.
- Вариант `State` дублирует часть логики `Checked/Disable`; приоритет отдан явным props `checked` и `disabled`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `State=Hover` | не маппится в prop | Hover задается CSS состоянием `:hover` | Не требуется |
| `State=Selected/Disable` | дублирует `Checked/Disable` | В Figma и variants, и state описывают одно и то же | При желании упростить Figma-модель |

## Examples

### Basic

```tsx
<Radio size="sm" />
```

### With label

```tsx
<Radio size="md" label="Вариант" />
```

### Checked and disabled

```tsx
<Radio size="xs" checked disabled />
```
