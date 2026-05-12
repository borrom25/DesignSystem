# ListItem

Документация для связи Figma component `ListItem` с runtime-компонентом `ListItem`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `ListItem.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: ListItem
package: borrom-ds-test
import: import { ListItem } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/ListItem/ListItem.tsx
types: src/components/ListItem/ListItem.types.ts
localExport: src/components/ListItem/index.ts
publicExport: src/index.ts
storybook: src/stories/ListItem.stories.tsx
figmaComponent: ListItem
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=400-1335
figmaNodeId: 400:1335
codeConnect: src/components/ListItem/ListItem.figma.js
```

## Public usage

```tsx
import { ListItem } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <ListItem title="Title" size="xs" />;
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/ListItem/ListItem.tsx` |
| Public props | `src/components/ListItem/ListItem.types.ts` |
| Local export | `src/components/ListItem/index.ts` |
| Styles entry | `src/components/ListItem/styles/index.ts` |
| Storybook | `src/stories/ListItem.stories.tsx` |
| Code Connect | `src/components/ListItem/ListItem.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `↳ textTitle` | text | `title` or `children` | `string` / `ReactNode` | - | Use `title` for plain text; use `children` for custom content. Do not pass both. |
| `Size` | `Xs`, `Sm`, `Md` | `size` | `xs`, `sm`, `md` | `xs` | Direct enum mapping from Figma title case to code lowercase. |
| `State` | `Default` | - | - | - | Default runtime state; omit state props. |
| `State` | `Selected` | `selected` | `true` | `false` | Figma also has separate `selected`; both map to the same code prop. |
| `Selected` | `Off`, `On` | `selected` | `boolean` | `false` | Controls `aria-pressed` and selected visual state when `visualSelected` is enabled. |
| `State` | `Hover` | - | CSS runtime state | - | Hover is implemented by runtime CSS and is not exposed as a prop. |
| `State` | `Disable` | `disabled` | `true` | `false` | Maps to the button `disabled` attribute and `aria-disabled`. |
| `iconOnly` | `Off`, `On` | `iconOnly` | `boolean` | `false` | In icon-only mode text is visually hidden/collapsed; provide an accessible label. |
| `Error` | `Off`, `On` | `variant` | `danger` when `On`, `default` when `Off` | `default` | Temporary mapping: runtime API uses `variant`, Figma exposes an `Error` variant. |
| `Icon-left` | boolean | `iconLeft` | `LucideIcon` | - | Requires passing a lucide icon component, for example `Settings`. |
| `↳ Icon-left` | instance swap | `iconLeft` | `LucideIcon` | - | Code Connect outputs this only when the nested icon has Code Connect. |
| `Icon-right` | boolean | `iconRight` | `LucideIcon` | - | Requires passing a lucide icon component, for example `ChevronRight`. |
| `↳ Icon-right` | instance swap | `iconRight` | `LucideIcon` | - | Code Connect outputs this only when the nested icon has Code Connect. |
| `Avatar` | boolean | `avatar` | `Omit<AvatarProps, "size" \| "style">` | - | Temporary mapping: Figma only controls visibility; Code Connect emits placeholder avatar data. |
| `Actions-left` | boolean | `checkbox` | `boolean` | `false` | Temporary mapping: Figma left action currently maps to built-in checkbox behavior. |
| `↳ Actions-left` | instance swap | - | - | - | Runtime supports only the built-in read-only `CheckBox`, not arbitrary left action slot. |
| `Actions-right` | boolean | - | - | - | Not supported as a dedicated prop in runtime. |
| `↳ Actions-right` | instance swap | - | - | - | Use `suffix` only for right-side text/content; there is no right action checkbox slot. |
| `Suffix` | boolean | `suffix` | `ReactNode` | - | Use with `↳ textSuffix` for the visible suffix text. |
| `↳ textSuffix` | text | `suffix` | `ReactNode` | - | Pass the text as `suffix="Suffix"` or a custom React node. |
| `Subtitle` | boolean | - | - | - | Not supported by current runtime API. |
| `↳ textSubtitle` | text | - | - | - | Not supported because `ListItem` renders a single title/content line. |
| `Counter` | boolean | - | - | - | Not supported by current runtime API. |
| `visualSelected` | not in Figma | `visualSelected` | `boolean` | `true` | Runtime-only escape hatch for `aria-pressed` visual behavior. |
| `hideSelectedOutline` | not in Figma | `hideSelectedOutline` | `boolean` | `false` | Runtime-only variant of selected/disabled background behavior. |
| `asChild` | not in Figma | `asChild` | `boolean` | `false` | Runtime-only composition mode via Radix Slot. |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | `<ListItem title="Title" />` |
| Hover | Yes | Runtime CSS hover styles, no prop |
| Selected | Yes | `<ListItem title="Title" selected />` |
| Disabled | Yes | `<ListItem title="Title" disabled />` |
| Error / danger | Partial | `<ListItem title="Title" variant="danger" />` |
| Icon left | Yes | `<ListItem title="Title" iconLeft={Settings} />` |
| Icon right | Yes | `<ListItem title="Title" iconRight={ChevronRight} />` |
| Icon only | Yes | `<ListItem iconOnly iconLeft={Settings} aria-label="Settings">Settings</ListItem>` |
| Checkbox left action | Yes | `<ListItem title="Title" checkbox selected />` |
| Avatar | Partial | `<ListItem title="Title" avatar={{ src, alt }} />`; Figma has visibility only |
| Suffix | Yes | `<ListItem title="Title" suffix="Suffix" />` |
| Subtitle | No | No runtime prop yet |
| Counter | No | No runtime prop yet |
| Right action checkbox | No | No runtime prop yet |

## Design matching notes

- Figma `ListItem` maps to the public `ListItem` export from `borrom-ds-test`.
- Runtime visual values come from `src/components/ListItem/styles` and shared tokens/classes, not from raw Figma fallback CSS.
- Figma `Error=On` should currently be represented as `variant="danger"`. This is an assumption because runtime does not expose an `error` prop.
- Figma `State=Hover` should stay a CSS state in runtime and should not become a public prop.
- Figma icon instance swaps need a manual lucide-react icon mapping until icon components have their own Code Connect strategy.
- `avatar`, `actionsLeft`, `suffix`, and icon visibility are structural options in Figma; runtime needs concrete React props or nodes for the rendered content.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Error=On` | `variant="danger"` | Code uses `ListItemVariant.Danger`; Figma exposes an `Error` variant | Decide whether to add `error` prop or keep documenting it as danger variant |
| `Subtitle` / `↳ textSubtitle` | Not mapped | Runtime renders one text slot and has no subtitle API | Add subtitle support or remove subtitle from Figma mapping for this component |
| `Counter=On` | Not mapped | Runtime has no counter/count prop | Add a counter prop or compose counter content through a new slot |
| `Actions-right=On` | Not mapped | Runtime has no right action slot | Add a right action prop if this is required by product layouts |
| `↳ Actions-left` instance swap | `checkbox` only | Runtime supports only built-in checkbox behavior | Add a left action slot or keep Figma limited to checkbox |
| `Avatar=On` | `avatar={{ src: "", alt: "Avatar", initials: "AB" }}` | Figma visibility does not provide runtime image data | Define default avatar data in usage examples or connect Avatar separately |
| `↳ Icon-left` / `↳ Icon-right` instance swap | omitted unless nested icon has Code Connect | `ListItem` props require `LucideIcon`, but current icon Figma components may not be connected | Add Code Connect or a stable icon mapping strategy for lucide icons |

## Examples

### Basic

```tsx
<ListItem title="Title" size="xs" />
```

### Selected

```tsx
<ListItem title="Title" size="sm" selected />
```

### Disabled

```tsx
<ListItem title="Title" size="md" disabled />
```

### Danger

```tsx
import { ListItem, ListItemVariant } from "borrom-ds-test";

<ListItem title="Title" variant={ListItemVariant.Danger} />
```

### With checkbox

```tsx
<ListItem title="Title" checkbox selected />
```

### With avatar

```tsx
<ListItem
  title="Title"
  avatar={{
    src: "https://example.com/avatar.png",
    alt: "User avatar",
  }}
/>
```

### With icons and suffix

```tsx
import { ChevronRight, Settings } from "lucide-react";

<ListItem
  title="Title"
  iconLeft={Settings}
  iconRight={ChevronRight}
  suffix="Suffix"
/>
```

### Icon only

```tsx
import { Settings } from "lucide-react";

<ListItem iconOnly iconLeft={Settings} aria-label="Settings">
  Settings
</ListItem>
```

## When to use Code Connect instead

Use Code Connect when Figma Dev Mode should generate a JSX snippet automatically from the selected component instance.

For `ListItem`, keep Code Connect and this document consistent. Current Code Connect includes temporary mappings for `Avatar`, `Actions-left`, `Subtitle`, `Counter`, `Actions-right`, and nested icon instance swaps.
