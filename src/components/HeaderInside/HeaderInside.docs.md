# HeaderInside

Документация для связи Figma node `headerpage` с runtime-компонентом `HeaderInside`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `HeaderInside.figma.js`, если нужен Code Connect.

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
figmaComponent: headerpage
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=658-11298
figmaNodeId: 658:11298
codeConnect: src/components/HeaderInside/HeaderInside.figma.js
```

## Public usage

```tsx
import { HeaderInside, TabsOverflow } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
import { Settings } from "lucide-react";
import { useState } from "react";

export function Example() {
  const [tab, setTab] = useState("tab-1");

  return (
    <HeaderInside
      title="Название страницы"
      subtitle="Название страницы"
      showActionButton
      actionIcon={Settings}
      showNotification
    >
      <TabsOverflow
        size="sm"
        value={tab}
        onValueChange={setTab}
        items={[
          { label: "Tab", value: "tab-1" },
          { label: "Tab", value: "tab-2" },
          { label: "Tab", value: "tab-3" },
        ]}
      />
    </HeaderInside>
  );
}
```

## Source files

| Purpose           | Path                                                |
| ----------------- | --------------------------------------------------- |
| Runtime component | `src/components/HeaderInside/HeaderInside.tsx`      |
| Public props      | `src/components/HeaderInside/HeaderInside.types.ts` |
| Local export      | `src/components/HeaderInside/index.ts`              |
| Styles entry      | `src/components/HeaderInside/styles/index.ts`       |
| Storybook         | `src/stories/HeaderInside.stories.tsx`              |
| Code Connect      | `src/components/HeaderInside/HeaderInside.figma.js` |

## Figma to props mapping

| Figma property / variant     | Code prop                                         | Code values                       | Default                 | Notes                                        |
| ---------------------------- | ------------------------------------------------- | --------------------------------- | ----------------------- | -------------------------------------------- |
| `Title` (inferred)           | `title`                                           | `ReactNode`                       | required                | Page title text                              |
| `Subtitle` (inferred)        | `subtitle`                                        | `ReactNode`                       | -                       | Optional second line                         |
| `Back` (inferred)            | `onBackClick`                                     | `() => void`                      | -                       | Back button action                           |
| `Settings action` (inferred) | `showActionButton`, `actionIcon`, `onActionClick` | `boolean`, `LucideIcon`, callback | `showActionButton=true` | Action icon near title                       |
| `Notification` (inferred)    | `showNotification`, `onNotificationClick`         | `boolean`, callback               | `showNotification=true` | Right notification button                    |
| `Avatar/account` (inferred)  | `accountMenu`                                     | `AccountMenuElement`              | -                       | Optional account menu                        |
| `Tabs row` (inferred)        | `children`                                        | `ReactNode`                       | -                       | Use `TabsOverflow` or custom content slot    |
| `Mobile/Desktop` (inferred)  | -                                                 | provider-driven                   | -                       | Runtime derives layout from `ScreenProvider` |

## Supported states

| State                | Supported in code | How to use                        |
| -------------------- | ----------------- | --------------------------------- |
| Default              | Yes               | required `title`                  |
| With subtitle        | Yes               | pass `subtitle`                   |
| With action icon     | Yes               | `showActionButton` + `actionIcon` |
| Without action icon  | Yes               | `showActionButton={false}`        |
| With tabs/content    | Yes               | pass `children`                   |
| With notification    | Yes               | `showNotification={true}`         |
| Without notification | Yes               | `showNotification={false}`        |
| Mobile layout        | Yes               | automatic via `ScreenProvider`    |

## Design matching notes

- `HeaderInside` is a fixed top banner with back button, title block, optional action icon, optional tabs row, and right actions.
- Runtime separates left section (`BackButton`, `ImageSlot`, `TitleSection`, optional action) from right section (`HeaderActions`).
- Divider visibility is computed in `getHeaderInsideLayoutState` and depends on children, action icon, and screen size.
- Runtime visual values come from tokenized styles in `src/components/HeaderInside/styles`.

## Temporary mappings / assumptions

| Item             | Current mapping                   | Reason                                                                                                                              | Follow-up                                                                            |
| ---------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Figma properties | inferred from runtime API         | Figma MCP is unavailable in current session (`Transport channel closed` on `get_context_for_code_connect` and `get_design_context`) | Re-run Figma extraction and refine `HeaderInside.figma.js` to property-level mapping |
| Tabs row         | emitted as `TabsOverflow` snippet | Exact nested node mapping is unavailable without Figma metadata                                                                     | Replace placeholder tabs with mapped values after MCP recovery                       |
| Account menu     | omitted in Code Connect snippet   | Trigger/content details are not available from Figma metadata now                                                                   | Add `accountMenu` mapping once metadata is readable                                  |

## Examples

### Basic

```tsx
<HeaderInside title="Название страницы" />
```

### With Subtitle And Action

```tsx
import { Settings } from "lucide-react";

<HeaderInside
  title="Название страницы"
  subtitle="Название страницы"
  showActionButton
  actionIcon={Settings}
/>;
```

### With Tabs

```tsx
<HeaderInside title="Название страницы">
  <TabsOverflow
    size="sm"
    value="tab-1"
    onValueChange={() => {}}
    items={items}
  />
</HeaderInside>
```
