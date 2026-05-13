# CheckBox

Документ для привязки Figma-компонента `Сheckbox` к runtime-компоненту `CheckBox`.

```text
src/components/CheckBox/CheckBox.docs.md
```

Парный Code Connect файл:

```text
src/components/CheckBox/CheckBox.figma.js
```

## Machine-readable summary

```yaml
component: CheckBox
package: borrom-ds-test
import: import { CheckBox } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/CheckBox/CheckBox.tsx
types: src/components/CheckBox/CheckBox.types.ts
localExport: src/components/CheckBox/index.ts
publicExport: src/index.ts
storybook: src/stories/CheckBox.stories.tsx
figmaComponent: Сheckbox
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1422-8581
codeConnect: src/components/CheckBox/CheckBox.figma.js
```

## Public usage

```tsx
import { CheckBox } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <CheckBox size="md" />;
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/CheckBox/CheckBox.tsx` |
| Public props | `src/components/CheckBox/CheckBox.types.ts` |
| Local export | `src/components/CheckBox/index.ts` |
| Styles entry | `src/components/CheckBox/styles/index.ts` |
| Storybook | `src/stories/CheckBox.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Checked` | `checked` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Disable` | `disabled` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Indefinite` | `indeterminate` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Title` + `textTitle` | `label` | `string` | - | Если `Title=On`, то `label=textTitle`; иначе label не передается |
| `State` | - | - | `Default` | `Selected` и `Disable` дублируются через `checked/disabled`; `Hover` — runtime CSS |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | без специальных props |
| Selected | Yes | `checked` |
| Indefinite | Yes | `indeterminate` |
| Disabled | Yes | `disabled` |
| Hover / focus / pressed | Runtime CSS | отдельные props не требуются |

## Design matching notes

- `CheckBox` поддерживает поле `label` через `BaseFieldProps`, поэтому текст из Figma можно маппить напрямую.
- `Indefinite` в runtime задается prop `indeterminate` у input.
- В библиотеке есть отдельный `MinusCheckBox`; для узла `Сheckbox` текущий mapping строится на `CheckBox`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `State=Hover` | не маппится в prop | Hover задается CSS состоянием | Не требуется |
| `State=Selected/Disable` | дублирует `Checked/Disable` | В Figma и variants, и state описывают одно состояние | При желании упростить Figma-модель |

## Examples

### Basic

```tsx
<CheckBox size="sm" />
```

### Checked

```tsx
<CheckBox size="md" checked />
```

### Indefinite

```tsx
<CheckBox size="md" indeterminate />
```

### With label

```tsx
<CheckBox size="sm" label="Опция" />
```
