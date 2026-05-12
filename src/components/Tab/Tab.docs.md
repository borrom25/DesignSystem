# Tab

Документация для связи Figma component `tabsOverflow.item` с runtime-компонентом `Tab`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Tab.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: Tab
package: borrom-ds-test
import: import { Tab } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Tab/Tab.tsx
types: src/components/Tab/Tab.types.ts
localExport: src/components/Tab/index.ts
publicExport: src/index.ts
storybook: src/stories/Tab.stories.tsx
figmaComponent: tabsOverflow.item
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19494-1683
figmaNodeId: 19494:1683
sourceFigmaSelection: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=621-3442
codeConnect: src/components/Tab/Tab.figma.js
```

## Public usage

```tsx
import { Tab } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Tab size="sm" selected>
      Tab
    </Tab>
  );
}
```

## Source files

| Purpose           | Path                                 |
| ----------------- | ------------------------------------ |
| Runtime component | `src/components/Tab/Tab.tsx`         |
| Public props      | `src/components/Tab/Tab.types.ts`    |
| Local export      | `src/components/Tab/index.ts`        |
| Styles entry      | `src/components/Tab/styles/index.ts` |
| Storybook         | `src/stories/Tab.stories.tsx`        |
| Code Connect      | `src/components/Tab/Tab.figma.js`    |

## Figma to props mapping

| Figma property / variant | Figma values     | Code prop  | Code values       | Default | Notes                                                                        |
| ------------------------ | ---------------- | ---------- | ----------------- | ------- | ---------------------------------------------------------------------------- |
| `↳ Text`                 | text             | `children` | `ReactNode`       | `Tab`   | Direct text content                                                          |
| `Size`                   | `Xs`, `Sm`, `Md` | `size`     | `xs`, `sm`, `md`  | `md`    | Direct enum mapping                                                          |
| `Selected`               | `Off`, `On`      | `selected` | `false`, `true`   | `false` | `On` maps to `selected`                                                      |
| `State`                  | `Selected`       | `selected` | `true`            | `false` | Duplicates `Selected=On`; Code Connect treats either as selected             |
| `State`                  | `Disable`        | `disabled` | `true`            | `false` | Uses native button `disabled` prop from `ButtonHTMLAttributes`               |
| `State`                  | `Default`        | -          | runtime default   | -       | No extra prop                                                                |
| `State`                  | `Hover`          | -          | CSS runtime state | -       | Not exposed as a public prop                                                 |
| `Icon left`              | boolean          | `iconLeft` | `LucideIcon`      | -       | Requires nested icon Code Connect to output an icon prop                     |
| `↳ Icon-left`            | instance swap    | `iconLeft` | `LucideIcon`      | -       | Uses `executeTemplate()` only when swapped icon has Code Connect             |
| `Counter`                | boolean          | `count`    | `number`          | -       | Temporary mapping: Figma exposes visibility only, code needs a numeric value |
| `iconOnly`               | `Off`            | -          | -                 | `Off`   | Figma exposes only `Off`; `Tab` has no icon-only mode                        |

## Supported states

| State     | Supported in code | How to use                                                      |
| --------- | ----------------- | --------------------------------------------------------------- |
| Default   | Yes               | omit state props                                                |
| Hover     | Yes               | runtime CSS hover styles, no prop                               |
| Selected  | Yes               | `<Tab selected>Tab</Tab>`                                       |
| Disable   | Yes               | `<Tab disabled>Tab</Tab>`                                       |
| Icon left | Yes               | `<Tab iconLeft={Icon}>Tab</Tab>`                                |
| Counter   | Partial           | `<Tab count={3}>Tab</Tab>`; Figma property has no numeric count |
| Icon only | No                | Current Figma component has only `iconOnly=Off`                 |

## Design matching notes

- Figma `tabsOverflow.item` maps to the public `Tab` export from `borrom-ds-test`.
- Runtime visual values come from tokenized styles in `src/components/Tab/styles`.
- `Tab` also supports `type="fill" | "ghost" | "outline"`, but this Figma component does not expose a `Type` variant. Code Connect relies on the runtime default `type="fill"`.
- `State=Hover` is intentionally not a prop. It should be represented by CSS hover behavior in runtime.
- Nested lucide icons are separate Figma components. Code Connect will output `iconLeft` only after those icon components receive their own Code Connect mapping.

## Temporary mappings / assumptions

| Item                   | Current mapping                             | Reason                                                                                       | Follow-up                                                                            |
| ---------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `Counter=true`         | `count={1}` in Code Connect                 | Figma exposes only visibility, but code requires a numeric `count`                           | Add numeric Figma text/property for counter value or document fixed default          |
| Nested lucide icon     | omitted unless nested icon has Code Connect | `Tab.iconLeft` requires `LucideIcon`, but current icon Figma components may not be connected | Add Code Connect for lucide icon components or define a stable icon mapping strategy |
| Missing `Type` variant | runtime default `type="fill"`               | Figma component has no `Type` property, while `Tab` supports `fill`, `ghost`, `outline`      | Add `Type` variant in Figma if non-fill tabs should generate code                    |

## Examples

### Basic

```tsx
<Tab size="sm">Tab</Tab>
```

### Selected

```tsx
<Tab size="sm" selected>
  Tab
</Tab>
```

### Disabled

```tsx
<Tab size="sm" disabled>
  Tab
</Tab>
```

### With counter

```tsx
<Tab size="sm" count={3}>
  Tab
</Tab>
```

### With icon

```tsx
import { EyeOff } from "lucide-react";

<Tab size="sm" iconLeft={EyeOff}>
  Tab
</Tab>;
```
