# BarMenu

Документация для связи Figma node `bottombar` с runtime-компонентом `BarMenu`.

Ссылку из Figma можно вести на этот файл как на reference-документацию до восстановления автоматического Code Connect mapping.

## Machine-readable summary

```yaml
component: BarMenu
package: borrom-ds-test
import: import { BarMenu } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/BarMenu/BarMenu.tsx
types: src/components/BarMenu/BarMenu.types.ts
localExport: src/components/BarMenu/index.ts
publicExport: src/index.ts
storybook: missing
figmaComponent: bottombar
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4423-5773
figmaNodeId: 4423:5773
codeConnect: blocked
```

## Public usage

```tsx
import { Home, Search, Settings } from "lucide-react";
import { BarMenu } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
import { useState } from "react";

export function Example() {
  const [activeId, setActiveId] = useState("home");

  return (
    <BarMenu
      value={activeId}
      onSelect={setActiveId}
      onMoreClick={() => console.log("open more")}
      items={[
        { id: "home", icon: Home, label: "Главная" },
        { id: "search", icon: Search, label: "Поиск" },
        { id: "settings", icon: Settings, label: "Настройки" },
      ]}
    />
  );
}
```

## Source files

| Purpose           | Path                                      |
| ----------------- | ----------------------------------------- |
| Runtime component | `src/components/BarMenu/BarMenu.tsx`      |
| Public props      | `src/components/BarMenu/BarMenu.types.ts` |
| Local export      | `src/components/BarMenu/index.ts`         |
| Styles entry      | `src/components/BarMenu/styles/index.ts`  |
| Storybook         | `missing`                                 |
| Code Connect      | `blocked`                                 |

## Figma to props mapping

| Figma property / variant     | Code prop          | Code values               | Default  | Notes                                                             |
| ---------------------------- | ------------------ | ------------------------- | -------- | ----------------------------------------------------------------- |
| `Bottom items` (inferred)    | `items`            | `BarMenuItem[]`           | required | Assumption: each icon item in bottombar maps to one `BarMenuItem` |
| `Selected item` (inferred)   | `value`            | `string`                  | -        | Controlled selected state                                         |
| `Tap on item` (inferred)     | `onSelect`         | `(value: string) => void` | required | Runtime callback receives selected `id`                           |
| `Overflow / more` (inferred) | `onMoreClick`      | `() => void`              | required | Trigger for hidden overflowed items                               |
| `Disabled item` (inferred)   | `items[].disabled` | `boolean`                 | `false`  | Maps to disabled `ListItem` trigger                               |

## Supported states

| State         | Supported in code | How to use                                            |
| ------------- | ----------------- | ----------------------------------------------------- |
| Default       | Yes               | provide `items`                                       |
| Selected item | Yes               | control via `value` + `onSelect`                      |
| Disabled item | Yes               | set `disabled: true` on item                          |
| Overflow      | Yes               | runtime auto-collapses items and shows `more` trigger |

## Design matching notes

- `BarMenu` renders icon-only `ListItem` triggers and relies on `useOverflowLayout` for adaptive overflow.
- Overflowed items are hidden from the main row; `onMoreClick` should open your overflow UI.
- Component is data-driven and expects stable `id` per item.
- Runtime currently uses fixed `Size.Md` for visible triggers.

## Temporary mappings / assumptions

| Item             | Current mapping              | Reason                                                                                                                              | Follow-up                                                                                        |
| ---------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Figma properties | inferred by runtime API only | Figma MCP is unavailable in current session (`Transport channel closed` on `get_context_for_code_connect` and `get_design_context`) | Re-run Figma extraction and create `src/components/BarMenu/BarMenu.figma.js` once MCP is healthy |
| Storybook        | `missing`                    | `src/stories/BarMenu.stories.tsx` does not exist                                                                                    | Add Storybook story before finalizing full design-to-code coverage                               |
| `codeConnect`    | blocked                      | Cannot read Figma properties safely now                                                                                             | Create parserless Code Connect mapping after successful Figma sync                               |

## Blocker

`BarMenu.figma.js` intentionally not created in this pass because Figma properties for node `4423:5773` were unavailable due MCP transport error. This follows the repository rule: do not create Code Connect when Figma properties are unavailable.
