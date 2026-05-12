# Accordion

Документация для связи Figma component `accordeon` с runtime-компонентом `Accordion`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Accordion.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: Accordion
package: borrom-ds-test
import: import { Accordion } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Accordion/Accordion.tsx
types: src/components/Accordion/Accordion.types.ts
localExport: src/components/Accordion/index.ts
publicExport: src/index.ts
storybook: src/stories/Accordion.stories.tsx
figmaComponent: accordeon
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1282-1912
figmaNodeId: 1282:1912
codeConnect: src/components/Accordion/Accordion.figma.js
```

## Public usage

```tsx
import { Accordion } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Accordion title="Accordion" subtitle="Subtitle" position="start">
      Content
    </Accordion>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Accordion/Accordion.tsx` |
| Public props | `src/components/Accordion/Accordion.types.ts` |
| Local export | `src/components/Accordion/index.ts` |
| Styles entry | `src/components/Accordion/styles/index.ts` |
| Storybook | `src/stories/Accordion.stories.tsx` |
| Code Connect | `src/components/Accordion/Accordion.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| Text layer `title` | text | `title` | `string` | required | Temporary mapping: Figma title is a text layer, not a component property. |
| `Subtitle` | boolean | `subtitle` | `ReactNode` | - | When `true`, Code Connect reads `↳ Subtitle`. |
| `↳ Subtitle` | text | `subtitle` | `ReactNode` | - | Direct subtitle content. |
| `Order` | `Start`, `Mid`, `End` | `position` | `start`, `mid`, `end` | `start` | Direct enum mapping. |
| `State` | `Default` | - | - | - | Default runtime state. |
| `State` | `Hover` | - | CSS runtime state | - | Hover is implemented by runtime CSS and is not exposed as a prop. |
| `State` | `Disable` | `disabled` | `true` | `false` | Maps to disabled behavior and disabled styles. |
| `Open` | `On`, `Off` | - | - | - | Not supported by current runtime API; open state is internal uncontrolled state. |
| `Type` | `Clear` | - | - | - | Only one Figma value; no runtime prop. |
| `Size` | `Md` | - | - | - | Only one Figma value; no runtime prop. |
| `Icon Left` | boolean | `iconLeft` | `LucideIcon` | - | Requires a lucide icon component. |
| `↳ Icon Left` | instance swap | `iconLeft` | `LucideIcon` | - | Code Connect outputs this only when the nested icon has Code Connect. |
| `Actions` | boolean | `headSlot` | `ReactElement` | - | Temporary mapping: Code Connect emits a placeholder `Button` as `headSlot`. |
| `<slotAction>` | slot | `headSlot` | `ReactElement` | - | Runtime accepts one `headSlot` element; arbitrary Figma slot content is not extracted yet. |
| `<slotContent>` | slot | `children` | `ReactNode` | required | Temporary mapping: Code Connect emits placeholder content. |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default closed | Yes | `<Accordion title="Accordion">Content</Accordion>` |
| Open | Partial | User toggles open at runtime; no public controlled/default-open prop |
| Hover | Yes | Runtime CSS hover styles, no prop |
| Disabled | Yes | `<Accordion title="Accordion" disabled>Content</Accordion>` |
| Start order | Yes | `<Accordion position="start" ... />` |
| Mid order | Yes | `<Accordion position="mid" ... />` |
| End order | Yes | `<Accordion position="end" ... />` |
| Icon left | Yes | `<Accordion iconLeft={Check} ... />` |
| Header action slot | Yes | `<Accordion headSlot={<Button>Action</Button>} ... />` |
| Content slot | Yes | Use `children` |

## Design matching notes

- Figma component is named `accordeon`, but runtime export is `Accordion`.
- Runtime `Accordion` is a single accordion row with internal open state. It is not a controlled accordion group.
- `Order` controls spacing and separator behavior through `position`.
- Figma `Open=On` cannot be represented in the initial generated JSX without adding a `defaultOpen` or controlled API.
- Runtime visual values come from `src/components/Accordion/styles`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| Text layer `title` | read with `findText("title")`, fallback `"Accordion"` | Figma title is not exposed as a TEXT component property | Expose title as a Figma text property |
| `Open=On` | metadata only | Runtime open state is internal and starts closed | Add `defaultOpen` / controlled props if Figma open state should generate code |
| `Actions=true` | placeholder `headSlot={<Button size="xs">headSlot</Button>}` | Figma slot content is not extracted into a React element | Define slot extraction or expose action props |
| `<slotContent>` | placeholder text child | Figma slot cannot map directly to `children` without slot extraction | Define Code Connect slot strategy |
| `↳ Icon Left` | omitted unless nested icon has Code Connect | `Accordion` prop requires `LucideIcon` | Add Code Connect or stable icon mapping for lucide icons |

## Examples

### Basic

```tsx
<Accordion title="Accordion" subtitle="Subtitle" position="start">
  Content
</Accordion>
```

### Disabled

```tsx
<Accordion title="Accordion" subtitle="Subtitle" disabled>
  Content
</Accordion>
```

### With Icon

```tsx
import { Check } from "lucide-react";

<Accordion title="Accordion" iconLeft={Check}>
  Content
</Accordion>
```

### With Header Action

```tsx
import { Accordion, Button } from "borrom-ds-test";

<Accordion title="Accordion" headSlot={<Button size="xs">headSlot</Button>}>
  Content
</Accordion>
```

## When to use Code Connect instead

Use Code Connect when Figma Dev Mode should generate a JSX snippet automatically from the selected component instance.

For `Accordion`, keep Code Connect and this document consistent. Current Code Connect includes temporary mappings for `Open`, `Actions`, `<slotAction>`, `<slotContent>`, and title text extraction.
