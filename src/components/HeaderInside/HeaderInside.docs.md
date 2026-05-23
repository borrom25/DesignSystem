# HeaderInside

Документация для связи Figma component `Header / insidePage` с runtime-компонентом `HeaderInside`.

`HeaderInside` - это header внутренней страницы. Главное отличие от `Header`: здесь есть стрелка назад (`BackButton`) и обязательный title страницы.

## Machine-readable summary

```yaml
component: HeaderInside
package: borrom-ds-test
import: import { HeaderInside } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/HeaderInside/HeaderInside.tsx
types: src/components/HeaderInside/HeaderInside.types.ts
localExport: src/components/HeaderInside/index.ts
publicExport: src/index.ts
storybook: src/stories/HeaderInside.stories.tsx
figmaComponent: Header / insidePage
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=658-11298
figmaNodeId: 658:11298
codeConnect: src/components/HeaderInside/HeaderInside.figma.js
```

## Public usage

```tsx
import { useState } from "react";
import { Settings } from "lucide-react";
import { HeaderInside, TabsOverflow } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  const [tab, setTab] = useState("overview");

  return (
    <HeaderInside
      title="Название страницы"
      subtitle="Описание страницы"
      showActionButton
      actionIcon={Settings}
      showNotification
      onBackClick={() => {}}
      onActionClick={() => {}}
      onNotificationClick={() => {}}
    >
      <TabsOverflow
        size="sm"
        value={tab}
        onValueChange={setTab}
        items={[
          { label: "Overview", value: "overview" },
          { label: "Activity", value: "activity" },
          { label: "Files", value: "files" },
        ]}
      />
    </HeaderInside>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/HeaderInside/HeaderInside.tsx` |
| Public props | `src/components/HeaderInside/HeaderInside.types.ts` |
| Layout helper | `src/components/HeaderInside/HeaderInside.utils.ts` |
| UI parts | `src/components/HeaderInside/ui/*` |
| Local export | `src/components/HeaderInside/index.ts` |
| Styles entry | `src/components/HeaderInside/styles/index.ts` |
| Storybook | `src/stories/HeaderInside.stories.tsx` |
| Code Connect | `src/components/HeaderInside/HeaderInside.figma.js` |

## Figma to props mapping

| Figma property / layer | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Media` | provider-driven | `Desktop`, `Mobile` | - | Runtime derives layout from `ScreenProvider`; do not pass media as prop |
| Arrow-left icon | `onBackClick` | `() => void` | - | Runtime always renders `BackButton`; this is the back arrow |
| `↳ titlePage` | `title` | `ReactNode` | required | Page title |
| `subtitlePage` + `↳ subtitlePage` | `subtitle` | `ReactNode` | - | Subtitle is emitted only when `subtitlePage=On` |
| `imageSlot` + `<slotImage>` | `imageSrc` | `string` | - | Runtime supports image by URL, not arbitrary image slot JSX |
| `titleButton` | `showActionButton`, `actionIcon`, `onActionClick` | `boolean`, `LucideIcon`, callback | `showActionButton=true` | Action button near title |
| `tabList` + `<slotTablist>` | `children` | `ReactNode` | - | Usually `TabsOverflow` |
| Notification button | `showNotification`, `onNotificationClick` | `boolean`, callback | `true` | Runtime owns bell button |
| Avatar/action area | `accountMenu` | `AccountMenuElement` | - | Runtime injects avatar trigger into `AccountMenu` |
| `slotInfo` / `<slotInfo>` | partial via `accountMenu` | `AccountMenuElement` | - | Runtime has no generic info slot; account flow belongs to `accountMenu` |

## Supported behavior

| Behavior | Supported in code | How to use |
| --- | --- | --- |
| Inside page header | Yes | `<HeaderInside title="..." />` |
| Back arrow | Yes | `onBackClick` |
| Page title | Yes | `title` |
| Subtitle | Yes | `subtitle` |
| Image slot | Yes | `imageSrc` |
| Action icon near title | Yes | `showActionButton`, `actionIcon`, `onActionClick` |
| Tabs/content area | Yes | pass `children`, usually `TabsOverflow` |
| Notification button | Yes | `showNotification`, `onNotificationClick` |
| Account menu | Yes | `accountMenu={<AccountMenu ... />}` |
| Mobile layout | Yes | automatic via `ScreenProvider` |
| Main page menu button | No | Use `Header`, not `HeaderInside` |

## Design matching notes

- `HeaderInside` corresponds to Figma node `658:11298` / `Header / insidePage`.
- `HeaderInside` is not the same component as `Header`: use this component when the page needs a back arrow.
- Runtime separates left section (`BackButton`, `ImageSlot`, `TitleSection`, optional action) from right section (`HeaderActions`).
- Divider visibility is computed in `getHeaderInsideLayoutState` and depends on children, action icon and mobile state.
- `children` is the central content area. Figma tab slot should be implemented with `TabsOverflow`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Media` | metadata only | Runtime layout is provider-driven, not prop-driven | Test desktop/mobile through `ScreenProvider` |
| `<slotImage>` | `imageSrc` demo URL | Runtime accepts image URL, not arbitrary slot content | Pass product image URL in real usage |
| `<slotInfo>` | optional `accountMenu` | Runtime has constrained right action area | Keep account controls in `AccountMenu` |
| `<slotHead>` | not emitted | Runtime owns back button and title layout | Use `title`, `subtitle`, `imageSrc`, `actionIcon` props instead |

## Examples

### Basic

```tsx
<HeaderInside title="Название страницы" onBackClick={() => {}} />
```

### With Subtitle And Action

```tsx
import { Settings } from "lucide-react";

<HeaderInside
  title="Название страницы"
  subtitle="Описание страницы"
  showActionButton
  actionIcon={Settings}
  onBackClick={() => {}}
/>;
```

### With Tabs

```tsx
<HeaderInside title="Название страницы" onBackClick={() => {}}>
  <TabsOverflow
    size="sm"
    value="overview"
    onValueChange={() => {}}
    items={items}
  />
</HeaderInside>
```
