# Segmented

Документация для связи Figma component `Segmented` с runtime-компонентом `Segmented`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Segmented.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: Segmented
package: borrom-ds-test
import: import { Segmented } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Segmented/Segmented.tsx
types: src/components/Segmented/Segmented.types.ts
localExport: src/components/Segmented/index.ts
publicExport: src/index.ts
storybook: src/stories/Segmented.stories.tsx
figmaComponent: Segmented
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1777-27
figmaNodeId: 1777:27
codeConnect: src/components/Segmented/Segmented.figma.js
```

## Public usage

```tsx
import { Segmented } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Segmented
      options={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Pineapple", value: "pineapple" },
      ]}
      defaultValue="apple"
      position="horizontal"
      shape="default"
    />
  );
}
```

## Source files

| Purpose           | Path                                          |
| ----------------- | --------------------------------------------- |
| Runtime component | `src/components/Segmented/Segmented.tsx`      |
| Public props      | `src/components/Segmented/Segmented.types.ts` |
| Local export      | `src/components/Segmented/index.ts`           |
| Styles entry      | `src/components/Segmented/styles/index.ts`    |
| Storybook         | `src/stories/Segmented.stories.tsx`           |
| Code Connect      | `src/components/Segmented/Segmented.figma.js` |

## Figma to props mapping

| Figma property / variant      | Figma values                     | Code prop            | Code values              | Default      | Notes                                                         |
| ----------------------------- | -------------------------------- | -------------------- | ------------------------ | ------------ | ------------------------------------------------------------- |
| `Direction`                   | `↔`, `↕`                         | `position`           | `horizontal`, `vertical` | `horizontal` | Direct enum mapping                                           |
| `borderRadius`                | `Sm`, `Lg`                       | `shape`              | `default`, `round`       | `default`    | `Lg` maps to `round`; `Sm` maps to `default`                  |
| Nested `Button 1..6` Tab text | text inside nested Tab instances | `options`            | `SegmentedOption[]`      | required     | Temporary mapping: Code Connect emits a static options array  |
| Nested Tab selected state     | `Selected=Off`, `Selected=On`    | `defaultValue`       | option value             | first option | Temporary mapping: generated snippet selects the first option |
| Nested Tab disabled state     | not exposed on main component    | `options[].disabled` | `boolean`                | `false`      | Not mapped unless runtime options are edited manually         |
| `Label`                       | boolean                          | `aria-label`         | `string`                 | `Segmented`  | Runtime has no visual label prop                              |
| `textLabel`                   | text                             | `aria-label`         | `string`                 | `Segmented`  | Used only as accessible label in Code Connect                 |

## Supported states

| State          | Supported in code | How to use                                                  |
| -------------- | ----------------- | ----------------------------------------------------------- |
| Horizontal     | Yes               | `<Segmented position="horizontal" />`                       |
| Vertical       | Yes               | `<Segmented position="vertical" />`                         |
| Default radius | Yes               | `<Segmented shape="default" />`                             |
| Round radius   | Yes               | `<Segmented shape="round" />`                               |
| Selected item  | Yes               | Set `value` or `defaultValue` to an option value            |
| Disabled item  | Yes               | Add `disabled: true` to an option                           |
| Visual label   | No                | Use an external label; Code Connect emits `aria-label` only |

## Design matching notes

- Figma `Segmented` maps to the public `Segmented` export from `borrom-ds-test`.
- Runtime renders each option through `SegmentedItem`, which composes `Tab` with `type="ghost"` and `size="sm"`.
- Runtime visual values come from `src/components/Segmented/styles` and `src/components/Tab/styles`.
- The runtime API is data-driven: segment labels, values, selected state, and disabled state live in `options`, `value`, and `defaultValue`.
- Figma exposes the repeated segment buttons as nested Tab instances, not as top-level array properties. The generated Code Connect snippet therefore uses a static options array that developers should rename after insertion.

## Temporary mappings / assumptions

| Item                       | Current mapping           | Reason                                                                                | Follow-up                                                                     |
| -------------------------- | ------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Nested segment labels      | `Tab 1`, `Tab 2`, `Tab 3` | Figma nested Tab text is not exposed as a top-level repeated property for `Segmented` | Add explicit Figma properties for segment labels or maintain options manually |
| Selected nested Tab        | `defaultValue="tab-1"`    | Runtime selection is controlled by option value, not by child component state         | Add a Figma property for selected option or edit generated snippet manually   |
| `Label=true` / `textLabel` | `aria-label`              | Runtime has no visual label prop                                                      | Keep external label in layout or add a wrapper component if needed            |
| `borderRadius=Lg`          | `shape="round"`           | Runtime has only `default` and `round` shape names                                    | Confirm if Figma `Lg` should remain semantically equal to `round`             |

## Examples

### Horizontal

```tsx
<Segmented
  options={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Pineapple", value: "pineapple" },
  ]}
  defaultValue="apple"
  position="horizontal"
/>
```

### Vertical

```tsx
<Segmented
  options={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Pineapple", value: "pineapple" },
  ]}
  defaultValue="banana"
  position="vertical"
/>
```

### Round shape

```tsx
<Segmented
  options={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Pineapple", value: "pineapple" },
  ]}
  defaultValue="pineapple"
  shape="round"
/>
```

### With disabled item

```tsx
<Segmented
  options={[
    { label: "Active", value: "active" },
    { label: "Disabled", value: "disabled", disabled: true },
    { label: "Also active", value: "also" },
  ]}
  defaultValue="active"
/>
```
