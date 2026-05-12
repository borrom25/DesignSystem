# Sidebar

Документация для связи Figma component `sideMenu` с runtime-компонентом `Sidebar`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Sidebar.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: Sidebar
package: borrom-ds-test
import: import { Sidebar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Sidebar/Sidebar.tsx
types: src/components/Sidebar/Sidebar.types.ts
localExport: src/components/Sidebar/index.ts
publicExport: src/index.ts
storybook: src/stories/Sidebar.stories.tsx
figmaComponent: sideMenu
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=788-7497
figmaNodeId: 788:7497
codeConnect: src/components/Sidebar/Sidebar.figma.js
```

## Public usage

```tsx
import { Sidebar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
import { BarChart3, Home, Plus, Settings } from "lucide-react";

export function Example() {
  return (
    <Sidebar
      title="Меню"
      activeItemId="home"
      items={[
        { id: "home", icon: Home, label: "Главная" },
        { id: "analytics", icon: BarChart3, label: "Аналитика" },
        { id: "settings", icon: Settings, label: "Настройки" },
      ]}
      action={{ icon: Plus, label: "Создать", ariaLabel: "Создать" }}
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Sidebar/Sidebar.tsx` |
| Public props | `src/components/Sidebar/Sidebar.types.ts` |
| Local export | `src/components/Sidebar/index.ts` |
| Styles entry | `src/components/Sidebar/styles/index.ts` |
| Storybook | `src/stories/Sidebar.stories.tsx` |
| Code Connect | `src/components/Sidebar/Sidebar.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Media` | `Desktop`, `Mobile` | - | - | - | Runtime switches desktop/mobile through `ScreenProvider`, not through a public prop. |
| `Close` | `Off`, `On` | `defaultCollapsed` | `false`, `true` | `false` | Temporary mapping: `Close=On` maps to initially collapsed desktop sidebar. |
| `bottomSlotAction` | boolean | `action` | `SidebarAction` | - | `true` emits a placeholder action in Code Connect. Runtime needs `icon`, `label`, optional `ariaLabel` and `buttonProps`. |
| `<slotBody>` | slot | `items` | `SidebarItem[]` | required | Temporary mapping: Figma uses visual slot content; runtime uses data-driven `items`. |
| Nested `ListItem` instances | visual children | `items[].label`, `items[].icon`, `items[].disabled`, `activeItemId` | `SidebarItem[]`, `string` | - | Code Connect emits canonical placeholder items until item extraction strategy is defined. |
| Nested `Button / Main` bottom action | visual child | `action` | `SidebarAction` | - | Code Connect does not read nested button props; it maps action visibility only. |
| Header text `Меню` | text layer | `title` | `ReactNode` | - | Temporary mapping: title is not exposed as a Figma text property, so Code Connect emits `title="Меню"`. |
| Active item | not exposed on root component | `activeItemId` | `string` | - | Runtime-only controlled state. Code Connect emits `activeItemId="home"`. |
| Navigation click | not in Figma | `onItemClick` | `(item: string) => void` | - | Runtime-only callback. |
| Sidebar trigger type | not in Figma | `type` | `main`, `inside`, `process` | `main` | Used by mobile trigger. Not represented by this Figma component. |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Desktop expanded | Yes | `<Sidebar defaultCollapsed={false} />` or omit `defaultCollapsed` |
| Desktop collapsed | Yes | `<Sidebar defaultCollapsed />` |
| Mobile | Yes | Runtime chooses mobile layout through `ScreenProvider` |
| Items | Yes | Pass `items: SidebarItem[]` |
| Active item | Yes | Pass `activeItemId` |
| Disabled item | Yes | Set `disabled: true` on an item |
| Link item | Yes | Set `href` or `href` with `asChild` on an item |
| Bottom action | Yes | Pass `action` |
| Arbitrary slot body | No | Runtime API is data-driven and does not accept `children` |

## Design matching notes

- Figma `sideMenu` maps to the public `Sidebar` export from `borrom-ds-test`.
- Runtime layout is fixed under the header and uses tokenized classes from `src/components/Sidebar/styles`.
- `Sidebar` composes `ListItem`, `Button`, `Modal`, and mobile `SidebarTrigger`.
- Figma `Media` should not become a public prop. Desktop/mobile is derived from screen state.
- Figma `<slotBody>` is a design slot, but code requires structured `items`. Treat item generation as a temporary mapping until there is a stable extraction strategy.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Close=On` | `defaultCollapsed` | Runtime uses collapsed state, Figma variant is named `Close` | Confirm naming with design or rename Figma variant to `Collapsed` |
| `Media=Mobile` | no prop | Runtime uses `ScreenProvider` responsive state | Keep responsive behavior in runtime; do not add `media` prop |
| `<slotBody>` | placeholder `items` array | Figma slot content cannot map directly to `SidebarItem[]` without a custom item extraction strategy | Define Code Connect item extraction or expose item data properties in Figma |
| Header text `Меню` | `title="Меню"` | Title is a text layer, not a component property | Expose title as a Figma text property if it must be dynamic |
| `bottomSlotAction=true` | placeholder `action={{ icon: Plus, label: "Создать" }}` | Figma exposes only visibility at root level | Expose action text/icon as root properties or map nested Button with Code Connect |
| Nested icons | static lucide placeholders | Runtime `SidebarItem.icon` needs `LucideIcon` values | Add stable icon Code Connect strategy or item property mapping |

## Examples

### Basic

```tsx
import { BarChart3, Home, Settings } from "lucide-react";

<Sidebar
  title="Меню"
  activeItemId="home"
  items={[
    { id: "home", icon: Home, label: "Главная" },
    { id: "analytics", icon: BarChart3, label: "Аналитика" },
    { id: "settings", icon: Settings, label: "Настройки" },
  ]}
/>
```

### Collapsed

```tsx
<Sidebar title="Меню" items={items} activeItemId="home" defaultCollapsed />
```

### With Action

```tsx
import { Plus } from "lucide-react";

<Sidebar
  title="Меню"
  items={items}
  action={{ icon: Plus, label: "Создать", ariaLabel: "Создать" }}
/>
```

### With Links

```tsx
<Sidebar
  title="Меню"
  activeItemId="home"
  items={[
    { id: "home", icon: Home, label: "Главная", href: "#home" },
    { id: "settings", icon: Settings, label: "Настройки", href: "#settings" },
  ]}
/>
```

## When to use Code Connect instead

Use Code Connect when Figma Dev Mode should generate a JSX snippet automatically from the selected component instance.

For `Sidebar`, keep Code Connect and this document consistent. Current Code Connect includes temporary mappings for `<slotBody>`, title, action data, and item icons.
