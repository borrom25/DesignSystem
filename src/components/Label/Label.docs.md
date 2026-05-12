# Label

Документация для связи Figma component `Label` с runtime-компонентом `Label`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Label.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: Label
package: borrom-ds-test
import: import { Label } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Label/Label.tsx
types: src/components/Label/Label.types.ts
localExport: src/components/Label/index.ts
publicExport: src/index.ts
storybook: src/stories/Label.stories.tsx
figmaComponent: Label
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21461-952
figmaNodeId: 21461:952
codeConnect: src/components/Label/Label.figma.js
```

## Public usage

```tsx
import { Label } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Label type="fill" color="brand" size="sm">
      Label
    </Label>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Label/Label.tsx` |
| Public props | `src/components/Label/Label.types.ts` |
| Local export | `src/components/Label/index.ts` |
| Styles entry | `src/components/Label/styles/index.ts` |
| Storybook | `src/stories/Label.stories.tsx` |
| Code Connect | `src/components/Label/Label.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Text` | text | `children` | `ReactNode` | - | Direct text content when `iconOnly=Off`. |
| `Type` | `Fill`, `Outline`, `Flat`, `Text` | `type` | `fill`, `outline`, `flat`, `text` | `fill` | Direct enum mapping. |
| `Color` | `Brand`, `Danger`, `Positive`, `Action`, `Warning`, `Info`, `Inverse` | `color` | `brand`, `danger`, `positive`, `action`, `warning`, `info`, `inverse` | `brand` | Direct enum mapping. |
| `Color` | `Disable` | `disabled` | `true` | `false` | Temporary mapping: current API has `disabled`, not `color="disable"`. |
| `Color` | `contrastDark`, `contrastLight` | `color` | `inverse` | - | Temporary mapping: `LabelColor` excludes `contrastDark` and `contrastLight`. |
| `Size` | `Xs`, `Sm`, `Md` | `size` | `xs`, `sm`, `md` | `md` | Direct enum mapping. |
| `iconOnly` | `Off`, `On` | `iconOnly` | `LucideIcon` | - | When `On`, Code Connect emits icon-only label only if nested icon has Code Connect. |
| `Icon-left` | boolean | `iconLeft` | `LucideIcon` | - | Used only when `iconOnly=Off`. |
| `↳ Icon-left` | instance swap | `iconLeft` | `LucideIcon` | - | Code Connect outputs this only when the nested icon has Code Connect. |
| `Icon-right` | boolean | `iconRight` | `LucideIcon` | - | Used only when `iconOnly=Off`. |
| `↳ Icon-right` | instance swap | `iconRight` | `LucideIcon` | - | Code Connect outputs this only when the nested icon has Code Connect. |
| `↳ Icon-only` | instance swap | `iconOnly` | `LucideIcon` | - | Used when `iconOnly=On`; otherwise ignored. |
| Rounded pill | not exposed in Figma | `rounded` | `boolean` | `false` | Runtime-only prop. |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | `<Label>Label</Label>` |
| Disabled | Yes | `<Label disabled>Label</Label>` |
| Fill | Yes | `<Label type="fill">Label</Label>` |
| Outline | Yes | `<Label type="outline">Label</Label>` |
| Flat | Yes | `<Label type="flat">Label</Label>` |
| Text | Yes | `<Label type="text">Label</Label>` |
| Icon left | Yes | `<Label iconLeft={Check}>Label</Label>` |
| Icon right | Yes | `<Label iconRight={X}>Label</Label>` |
| Icon only | Yes | `<Label iconOnly={Plus} aria-label="Label" />` |
| Rounded | Yes | `<Label rounded>Label</Label>` |

## Design matching notes

- Figma `Label` maps to the public `Label` export from `borrom-ds-test`.
- Runtime visual values come from tokenized styles in `src/components/Label/styles`.
- `Color=Disable` should map to the runtime `disabled` prop, not to a new color value.
- `Color=contrastDark` and `Color=contrastLight` are present in common `Color`, but intentionally excluded from `LabelColor`; Code Connect maps them to `inverse` until the public API decision is made.
- Figma nested lucide icons need their own Code Connect mappings before icon props can be generated automatically.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Color=Disable` | `disabled` with `color="brand"` fallback internally | `LabelColor` does not include `disable`; disabled styling is controlled by `aria-disabled` classes | Keep as state or add explicit disabled color token/API |
| `Color=contrastDark` | `color="inverse"` | `LabelColor` excludes `contrastDark` | Decide whether label should support contrast colors |
| `Color=contrastLight` | `color="inverse"` | `LabelColor` excludes `contrastLight` | Decide whether label should support contrast colors |
| Nested icons | omitted unless nested icon has Code Connect | `Label` props require `LucideIcon` values | Add Code Connect or a stable mapping strategy for lucide icons |
| `rounded` | not mapped | Figma component does not expose a rounded property | Add Figma property if rounded labels must be generated |

## Examples

### Basic

```tsx
<Label type="fill" color="brand" size="sm">
  Label
</Label>
```

### Disabled

```tsx
<Label type="fill" color="brand" size="sm" disabled>
  Label
</Label>
```

### With Icons

```tsx
import { Check, X } from "lucide-react";

<Label type="outline" color="positive" size="sm" iconLeft={Check} iconRight={X}>
  Label
</Label>
```

### Icon Only

```tsx
import { Plus } from "lucide-react";

<Label type="flat" color="brand" size="sm" iconOnly={Plus} aria-label="Label" />
```

### Rounded

```tsx
<Label type="fill" color="brand" size="sm" rounded>
  Label
</Label>
```

## When to use Code Connect instead

Use Code Connect when Figma Dev Mode should generate a JSX snippet automatically from the selected component instance.

For `Label`, keep Code Connect and this document consistent. Current Code Connect includes temporary mappings for `Disable`, `contrastDark`, `contrastLight`, and nested icon instance swaps.
