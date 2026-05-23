# Header

Документация для связи Figma component `Header / mainPage` с runtime-компонентом `Header`.

`Header` - это основной верхний header приложения: меню, логотип/название продукта, опциональный контент в центре, уведомления и account menu справа. Для внутренней страницы со стрелкой назад используется отдельный компонент `HeaderInside`.

## Machine-readable summary

```yaml
component: Header
package: borrom-ds-test
import: import { Header } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Header/Header.tsx
types: src/components/Header/Header.types.ts
localExport: src/components/Header/index.ts
publicExport: src/index.ts
storybook: src/stories/Header.stories.tsx
figmaComponent: Header / mainPage
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=621-3442
figmaNodeId: 621:3442
codeConnect: src/components/Header/Header.figma.js
```

## Public usage

```tsx
import { useState } from "react";
import { AccountMenu, Header, TabsOverflow } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Header
      title="Платформа"
      showMenuButton
      showNotification
      onMenuClick={() => {}}
      onNotificationClick={() => {}}
      accountMenu={
        <AccountMenu
          src="https://i.pravatar.cc/160?img=68"
          fullName="Name User"
        />
      }
    >
      <TabsOverflow
        size="sm"
        value={activeTab}
        onValueChange={setActiveTab}
        items={[
          { label: "Overview", value: "overview" },
          { label: "Activity", value: "activity" },
          { label: "Files", value: "files" },
        ]}
      />
    </Header>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Header/Header.tsx` |
| Public props | `src/components/Header/Header.types.ts` |
| Layout helper | `src/components/Header/Header.utils.ts` |
| UI parts | `src/components/Header/ui/*` |
| Local export | `src/components/Header/index.ts` |
| Styles entry | `src/components/Header/styles/index.ts` |
| Storybook | `src/stories/Header.stories.tsx` |
| Code Connect | `src/components/Header/Header.figma.js` |

## Figma to props mapping

| Figma property / layer | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Media` | provider-driven | `Desktop`, `Mobile` | - | Runtime derives layout from `ScreenProvider`; do not pass media as prop |
| `APP / logo` text | `title` | `ReactNode` | `платформа` | Figma text is nested in logo component; Code Connect uses `title="Платформа"` |
| Menu button icon | `showMenuButton`, `onMenuClick` | `boolean`, callback | `true` | Main header has menu button; this is not a back arrow |
| `tabList` + `<slotTablist>` | `children` | `ReactNode` | - | Usually `TabsOverflow` |
| Notification button | `showNotification`, `onNotificationClick` | `boolean`, callback | `true` | Runtime owns bell button |
| Avatar/action area | `accountMenu` | `AccountMenuElement` | - | Runtime injects avatar trigger into `AccountMenu` |
| `slotInfo` / `<slotInfo>` | no direct prop | - | - | Runtime has no generic info slot in `Header` |
| `slotAction` / `<slotAction>` | partial via `accountMenu` | `AccountMenuElement` | - | Runtime right action area supports notification + account menu, not arbitrary action slot |
| `slotHead` | `logo`, `title` | `ReactNode` | title default | Use `logo` for custom logo node, `title` for product name |

## Supported behavior

| Behavior | Supported in code | How to use |
| --- | --- | --- |
| Main page header | Yes | `<Header />` |
| Menu button | Yes | `showMenuButton`, `onMenuClick` |
| Custom logo | Yes | `logo={<... />}` |
| Product title | Yes | `title="Платформа"` |
| Tabs/content area | Yes | pass `children`, usually `TabsOverflow` |
| Notification button | Yes | `showNotification`, `onNotificationClick` |
| Account menu | Yes | `accountMenu={<AccountMenu ... />}` |
| Mobile layout | Yes | automatic via `ScreenProvider` |
| Back arrow | No | Use `HeaderInside`, not `Header` |

## Design matching notes

- `Header` corresponds to Figma node `621:3442` / `Header / mainPage`.
- `Header` is not the same component as `HeaderInside`: it has a menu button, not a back button.
- `children` is the only central content slot in runtime. Figma tab slot should be implemented with `TabsOverflow`.
- Right actions are intentionally constrained to notification and `AccountMenu`.
- Divider visibility is computed in `getHeaderLayoutState` and depends on children, notification visibility and mobile state.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Media` | metadata only | Runtime layout is provider-driven, not prop-driven | Test desktop/mobile through `ScreenProvider` |
| `slotInfo` | not emitted | No matching public prop in `HeaderProps` | Add public slot only if product needs it |
| `slotAction` | demo `AccountMenu` | Runtime action area supports account menu, not arbitrary JSX | Keep action flows in `AccountMenu` |
| Figma logo asset | `title` text + runtime logo slot | Logo component is a nested Figma asset, not a public exported runtime logo component | Pass custom `logo` if a product logo node is needed |

## Examples

### Basic

```tsx
<Header title="Платформа" />
```

### With Tabs

```tsx
<Header title="Платформа">
  <TabsOverflow
    size="sm"
    value="overview"
    onValueChange={() => {}}
    items={[
      { label: "Overview", value: "overview" },
      { label: "Activity", value: "activity" },
    ]}
  />
</Header>
```

### With Account Menu

```tsx
<Header
  title="Платформа"
  accountMenu={
    <AccountMenu
      src="https://i.pravatar.cc/160?img=68"
      fullName="Name User"
    />
  }
/>
```
