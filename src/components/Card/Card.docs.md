# Card

Документация для связи Figma component set `Card` с runtime-компонентом `Card`.

`Card` - это контейнерный компонент: он задает фон, радиус и внутренние отступы, а содержимое передается через `children`.

## Machine-readable summary

```yaml
component: Card
package: borrom-ds-test
import: import { Card } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Card/Card.tsx
types: src/components/Card/Card.types.ts
localExport: src/components/Card/index.ts
publicExport: src/index.ts
storybook: src/stories/Card.stories.tsx
figmaComponent: Card
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4436-8329
figmaNodeId: 4436:8329
codeConnect: src/components/Card/Card.figma.js
```

## Public usage

```tsx
import { Card } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Card size="md">
      <div>Content</div>
    </Card>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Card/Card.tsx` |
| Public props | `src/components/Card/Card.types.ts` |
| Local export | `src/components/Card/index.ts` |
| Styles entry | `src/components/Card/styles/index.ts` |
| Size styles | `src/components/Card/styles/sizes.ts` |
| Storybook | `src/stories/Card.stories.tsx` |
| Code Connect | `src/components/Card/Card.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `<slotBody>` | slot | `children` | `ReactNode` | - | Основное содержимое карточки |
| `Size` | `Xs`, `Sm`, `Md` | `size` | `xs`, `sm`, `md` | `md` | Прямой mapping на `Size` из `src/types` |
| `Type` | `Basic` | - | - | `Basic` | Runtime default: `bg-generic` |
| `Type` | `Secondary` | `className` | `bg-generic-medium` | - | Temporary mapping: в runtime API нет `type`/`variant` для карточки |
| HTML attributes | - | `...restProps` | `HTMLAttributes<HTMLDivElement>` | - | `className`, `style`, `id`, `data-*`, handlers |

## Runtime styles

| Code prop | Runtime classes | Notes |
| --- | --- | --- |
| Base | `rounded-scale-3xl bg-generic` | Общий фон и радиус |
| `size="xs"` | `p-3` | Компактные отступы |
| `size="sm"` | `p-6` | Средние отступы |
| `size="md"` | `py-7 px-9` | Дефолтные отступы |

## Supported behavior

| Behavior | Supported in code | How to use |
| --- | --- | --- |
| Basic container | Yes | `<Card>...</Card>` |
| Size variants | Yes | `size="xs"`, `size="sm"`, `size="md"` |
| Arbitrary content | Yes | Pass any `ReactNode` as `children` |
| Custom classes | Yes | `className="..."` |
| Secondary background | Partial | `className="bg-generic-medium"` until a public `type` prop exists |
| Interaction state | Via HTML props | Use standard `onClick`, `tabIndex`, `role`, etc. if needed |

## Design matching notes

- Figma node `4436:8329` exposes only `Type`, `Size` and `<slotBody>`.
- Runtime `Card` intentionally does not know about header, footer, title, actions or loading state. These are consumer content inside `children`.
- `Card` should not duplicate nested components from the slot. Use real runtime children: `UserItem`, `Alert`, `Skeleton`, text blocks, layout wrappers and so on.
- `Type=Secondary` is visually a background change only. Current runtime API does not expose this as a first-class prop.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Type=Secondary` | `className="bg-generic-medium"` | `CardProps` has no `type`/`variant`; `className` is the only public extension point | Add `type?: "basic" | "secondary"` only if product needs it as stable API |
| `<slotBody>` empty state | `<div>Content</div>` fallback in Code Connect | Figma slot can be empty when selected component has no connected children | Replace with real children in product code |
| Figma fixed width/slot height | not mapped | Runtime Card is content-driven and should not force width/height | Set layout constraints in consumer layout when needed |

## Examples

### Basic

```tsx
<Card size="md">
  <div>Content</div>
</Card>
```

### Secondary

```tsx
<Card size="md" className="bg-generic-medium">
  <div>Secondary content</div>
</Card>
```

### With Design System Content

```tsx
<Card size="sm">
  <UserItem size="sm">
    <UserItem.Content>
      <UserItem.Text>
        <UserItem.Title>Name User</UserItem.Title>
        <UserItem.Subtitle>Role</UserItem.Subtitle>
      </UserItem.Text>
    </UserItem.Content>
  </UserItem>
</Card>
```
