# IconButton

Документация для связи Figma component `Icon-button` с runtime-компонентом `IconButton`.

В коде этот компонент называется `IconButton`. Он реализован, лежит в `src/components/IconButton` и публично экспортируется из `borrom-ds-test`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `IconButton.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: IconButton
package: borrom-ds-test
import: import { IconButton } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/IconButton/IconButton.tsx
types: src/components/IconButton/IconButton.types.ts
localExport: src/components/IconButton/index.ts
publicExport: src/index.ts
storybook: src/stories/IconButton.stories.tsx
figmaComponent: Icon-button
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19405-2038
figmaNodeId: 19405:2038
codeConnect: src/components/IconButton/IconButton.figma.js
```

## Public usage

```tsx
import { X } from "lucide-react";
import { IconButton } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <IconButton
      icon={X}
      type="flat"
      color="brand"
      size="sm"
      aria-label="Close"
    />
  );
}
```

## Source files

| Purpose           | Path                                            |
| ----------------- | ----------------------------------------------- |
| Runtime component | `src/components/IconButton/IconButton.tsx`      |
| Public props      | `src/components/IconButton/IconButton.types.ts` |
| Local export      | `src/components/IconButton/index.ts`            |
| Styles entry      | `src/components/IconButton/styles/index.ts`     |
| Storybook         | `src/stories/IconButton.stories.tsx`            |
| Code Connect      | `src/components/IconButton/IconButton.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values                                                          | Code prop   | Code values                                                           | Default  | Notes                                                         |
| ------------------------ | --------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------- | -------- | ------------------------------------------------------------- |
| `Type`                   | `Ghost`, `Flat`, `Icon`                                               | `type`      | `ghost`, `flat`, `icon`                                               | `flat`   | Direct enum mapping                                           |
| `Color`                  | `Inverse`, `Brand`, `Danger`, `Positive`, `Action`, `Warning`, `Info` | `color`     | `inverse`, `brand`, `danger`, `positive`, `action`, `warning`, `info` | `brand`  | Direct enum mapping                                           |
| `Size`                   | `Xs`, `Sm`, `Md`                                                      | `size`      | `xs`, `sm`, `md`                                                      | `sm`     | Direct enum mapping                                           |
| `State`                  | `Default`                                                             | -           | runtime default                                                       | -        | No extra prop                                                 |
| `State`                  | `Hover`                                                               | -           | CSS runtime state                                                     | -        | Not exposed as a public prop                                  |
| `State`                  | `Disable`                                                             | `disabled`  | `true`                                                                | `false`  | Duplicates `Disable=On`                                       |
| `Disable`                | `Off`, `On`                                                           | `disabled`  | `false`, `true`                                                       | `false`  | Direct enum-to-boolean mapping                                |
| `Badge`                  | boolean                                                               | `showBadge` | `false`, `true`                                                       | `false`  | Runtime renders an empty accent `Counter` badge               |
| `↳ Icon`                 | instance swap                                                         | `icon`      | `LucideIcon`                                                          | required | Temporary mapping: Code Connect emits `X` from `lucide-react` |

## Supported states

| State    | Supported in code | How to use                                                        |
| -------- | ----------------- | ----------------------------------------------------------------- |
| Default  | Yes               | omit state props                                                  |
| Hover    | Yes               | runtime CSS hover styles, no prop                                 |
| Disabled | Yes               | `<IconButton disabled />`                                         |
| Badge    | Yes               | `<IconButton showBadge />`                                        |
| Size     | Yes               | `size="xs"`, `size="sm"`, `size="md"`                             |
| Type     | Yes               | `type="flat"`, `type="ghost"`, `type="icon"`                      |
| Color    | Yes               | semantic `Color` values except `contrastDark`, `contrastLight`, and `generic` |
| Rounded  | Runtime only      | `<IconButton rounded />`; not exposed in this Figma component     |
| asChild  | Runtime only      | Use when styling a custom child element such as a link            |

## Design matching notes

- Figma `Icon-button` maps to the public `IconButton` export from `borrom-ds-test`.
- Runtime visual values come from `src/components/IconButton/styles`.
- `IconButton` requires an `icon` prop when `asChild` is not used. If `icon` is missing, runtime returns `null`.
- Figma nested lucide icons are separate components. Current Code Connect emits `X` as a safe default because the public prop expects a `LucideIcon` component reference, not a rendered JSX node.
- `count` exists in runtime types, but Storybook marks numeric counter as disabled for `IconButton`. Use `showBadge` for the Figma `Badge` property.

## Temporary mappings / assumptions

| Item                     | Current mapping            | Reason                                                                                                              | Follow-up                                                                              |
| ------------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `↳ Icon` instance swap   | `icon={X}`                 | Runtime prop expects a `LucideIcon`; parserless nested icon snippets usually produce JSX, not a component reference | Add a stable icon-name mapping strategy or Code Connect metadata for lucide components |
| Missing accessible label | `aria-label="Icon button"` | Figma component has no top-level label text property                                                                | Replace with action-specific label in product code                                     |
| `State=Hover`            | runtime CSS hover state    | Hover is not a public prop                                                                                          | No code prop needed                                                                    |

## Examples

### Basic

```tsx
import { X } from "lucide-react";

<IconButton icon={X} type="flat" color="brand" size="sm" aria-label="Close" />;
```

### Ghost

```tsx
import { Settings } from "lucide-react";

<IconButton
  icon={Settings}
  type="ghost"
  color="inverse"
  size="sm"
  aria-label="Settings"
/>;
```

### With Badge

```tsx
import { Bell } from "lucide-react";

<IconButton
  icon={Bell}
  type="flat"
  color="brand"
  size="sm"
  showBadge
  aria-label="Notifications"
/>;
```

### Disabled

```tsx
import { Trash2 } from "lucide-react";

<IconButton
  icon={Trash2}
  type="icon"
  color="danger"
  size="sm"
  disabled
  aria-label="Delete"
/>;
```
