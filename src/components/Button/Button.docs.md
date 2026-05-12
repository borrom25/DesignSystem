# Button

Документация для связи Figma component `Button / Main` с runtime-компонентом `Button`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Button.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: Button
package: borrom-ds-test
import: import { Button } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Button/Button.tsx
types: src/components/Button/Button.types.ts
localExport: src/components/Button/index.ts
publicExport: src/index.ts
storybook: src/stories/Button.stories.tsx
figmaComponent: Button / Main
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19105-18
figmaNodeId: 19105:18
codeConnect: src/components/Button/Button.figma.js
```

## Public usage

```tsx
import { Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Button type="fill" color="brand" size="md">
      Button
    </Button>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Button/Button.tsx` |
| Public props | `src/components/Button/Button.types.ts` |
| Local export | `src/components/Button/index.ts` |
| Styles entry | `src/components/Button/styles/index.ts` |
| Storybook | `src/stories/Button.stories.tsx` |
| Code Connect | `src/components/Button/Button.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `textButton` | text | `children` | `ReactNode` | `Button` | Direct text content |
| `Type` | `Fill`, `Outline`, `Ghost`, `Flat` | `type` | `fill`, `outline`, `ghost`, `flat` | `fill` | Direct enum mapping |
| `Color` | `Brand`, `Danger`, `Positive`, `Action`, `Warning`, `Info`, `Inverse`, `contrastDark`, `contrastLight` | `color` | `brand`, `danger`, `positive`, `action`, `warning`, `info`, `inverse`, `contrastDark`, `contrastLight` | `brand` | Direct enum mapping |
| `Color` | `Generic` | `color` | `brand` | - | Temporary mapping: `Generic` does not exist in current `Color` API |
| `Size` | `Xs`, `Sm`, `Md` | `size` | `xs`, `sm`, `md` | `md` | Direct enum mapping |
| `Loader` | `Off`, `On` | `loading` | `false`, `true` | `false` | `On` maps to `loading` |
| `State` | `Loader` | `loading` | `true` | `false` | Duplicates `Loader=On`; Code Connect treats either as loading |
| `Disable` | `Off`, `On` | `disabled` | `false`, `true` | `false` | `On` maps to `disabled` |
| `State` | `Disable` | `disabled` | `true` | `false` | Duplicates `Disable=On`; Code Connect treats either as disabled |
| `State` | `Hover` | - | CSS runtime state | - | Not exposed as a public prop |
| `Icon-left` | boolean | `iconLeft` | `LucideIcon` | - | Requires nested icon Code Connect to output an icon prop |
| `↳ Icon-left` | instance swap | `iconLeft` | `LucideIcon` | - | Uses `executeTemplate()` only when swapped icon has Code Connect |
| `Icon-right` | boolean | `iconRight` | `LucideIcon` | - | Requires nested icon Code Connect to output an icon prop |
| `↳ Icon-right` | instance swap | `iconRight` | `LucideIcon` | - | Uses `executeTemplate()` only when swapped icon has Code Connect |
| `iconOnly` | `Off`, `On` | `iconOnly` | `LucideIcon` | - | Requires nested icon Code Connect to output `iconOnly` |
| `↳ iconOnly` | instance swap | `iconOnly` | `LucideIcon` | - | Uses `executeTemplate()` only when swapped icon has Code Connect |
| `Counter` | boolean | `count` | `number` | - | Temporary mapping: Figma exposes visibility only, code needs a numeric value |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | omit state props |
| Hover | Yes | runtime CSS hover styles, no prop |
| Loader | Yes | `<Button loading />` |
| Disable | Yes | `<Button disabled />` |
| Icon left | Yes | `<Button iconLeft={Icon}>Label</Button>` |
| Icon right | Yes | `<Button iconRight={Icon}>Label</Button>` |
| Icon only | Yes | `<Button iconOnly={Icon} aria-label="Label" />` |
| Counter | Partial | `<Button count={3}>Label</Button>`; Figma property has no numeric count |

## Design matching notes

- Figma `Button / Main` maps to the public `Button` export from `borrom-ds-test`.
- Runtime visual values come from shared tokenized styles in `src/components/Button/styles` and `src/styles/variants`.
- `State=Hover` is intentionally not a prop. It should be represented by CSS hover behavior in runtime.
- Figma nested lucide icons are separate Figma components. Code Connect will output icon props only after those icon components receive their own Code Connect mapping.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Color=Generic` | `color="brand"` | `generic` is not present in `src/types/variants.ts` `Color` | Decide whether to add `generic` to public API or remove/rename the Figma variant |
| `Counter=true` | `count={1}` in Code Connect | Figma exposes only visibility, but code requires a numeric `count` | Add numeric Figma text/property for counter value or document fixed default |
| Nested lucide icons | omitted unless nested icon has Code Connect | `Button` props require `LucideIcon`, but current icon Figma components are not connected | Add Code Connect for lucide icon components or define a stable icon mapping strategy |

## Examples

### Basic

```tsx
<Button type="fill" color="brand" size="md">
  Button
</Button>
```

### Loading

```tsx
<Button type="fill" color="brand" size="md" loading>
  Button
</Button>
```

### Disabled

```tsx
<Button type="fill" color="brand" size="md" disabled>
  Button
</Button>
```

### With counter

```tsx
<Button type="fill" color="brand" size="md" count={3}>
  Button
</Button>
```

### With icon

```tsx
import { Check } from "lucide-react";

<Button type="fill" color="brand" size="md" iconLeft={Check}>
  Button
</Button>
```

### Icon only

```tsx
import { Plus } from "lucide-react";

<Button type="fill" color="brand" size="md" iconOnly={Plus} aria-label="Add" />
```

