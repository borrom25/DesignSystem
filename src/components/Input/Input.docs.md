# Input

Документация для связи Figma component `Search/Autocomplete` с runtime-компонентом `Input`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Input.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: Input
package: borrom-ds-test
import: import { Input } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Input/Input.tsx
types: src/components/Input/Input.types.ts
localExport: src/components/Input/index.ts
publicExport: src/index.ts
storybook: src/stories/Input.stories.tsx
figmaComponent: Search/Autocomplete
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=18-2407
figmaNodeId: 18:2407
codeConnect: src/components/Input/Input.figma.js
```

## Public usage

```tsx
import { Search } from "lucide-react";
import { Input } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Input type="search" size="sm" placeholder="Search" iconLeft={Search} />
  );
}
```

## Source files

| Purpose                 | Path                                   |
| ----------------------- | -------------------------------------- |
| Runtime component       | `src/components/Input/Input.tsx`       |
| Public props            | `src/components/Input/Input.types.ts`  |
| Local export            | `src/components/Input/index.ts`        |
| Styles entry            | `src/components/Input/styles/index.ts` |
| Shared input primitives | `src/shared/Input`                     |
| Storybook               | `src/stories/Input.stories.tsx`        |
| Code Connect            | `src/components/Input/Input.figma.js`  |

## Figma to props mapping

| Figma property / variant | Figma values                   | Code prop      | Code values                  | Default | Notes                                                                |
| ------------------------ | ------------------------------ | -------------- | ---------------------------- | ------- | -------------------------------------------------------------------- |
| `Size`                   | `Xs`, `Sm`, `Md`               | `size`         | `xs`, `sm`, `md`             | `md`    | Direct enum mapping                                                  |
| `State`                  | `Default`                      | -              | runtime default              | -       | No extra prop                                                        |
| `State`                  | `Hover`                        | -              | CSS runtime state            | -       | Not exposed as a public prop                                         |
| `State`                  | `Selected`                     | `autoFocus`    | `true`                       | `false` | Temporary mapping: Figma selected state means focused visual state   |
| `State`                  | `Filled`                       | `defaultValue` | `string`                     | -       | Temporary mapping: Figma text is not exposed as a component property |
| `State`                  | `Disable`                      | `disabled`     | `true`                       | `false` | Direct state mapping                                                 |
| `Hint`                   | boolean                        | `hint`         | `string`                     | -       | Temporary mapping: Figma hint text is nested inside `HintComponent`  |
| Search icon              | nested `lucide/general/search` | `iconLeft`     | `Search` from `lucide-react` | -       | Direct semantic mapping                                              |
| Clear icon               | nested `Icon-button`           | `clearable`    | `true`                       | `true`  | Runtime shows clear button automatically when value exists           |

## Supported states

| State                 | Supported in code | How to use                                                    |
| --------------------- | ----------------- | ------------------------------------------------------------- |
| Default               | Yes               | `<Input type="search" iconLeft={Search} />`                   |
| Hover                 | Yes               | runtime CSS hover styles, no prop                             |
| Selected / focused    | Partial           | `autoFocus` for initial focus only                            |
| Filled                | Yes               | set `value` or `defaultValue`                                 |
| Disabled              | Yes               | `<Input disabled />`                                          |
| Hint                  | Yes               | `<Input hint="..." />`                                        |
| Clear button          | Yes               | shown automatically when `clearable` and value exists         |
| Autocomplete dropdown | No                | compose behavior outside `Input` or add a dedicated component |

## Design matching notes

- Figma `Search/Autocomplete` maps to the public `Input` export from `borrom-ds-test`.
- Runtime visual values come from `src/components/Input/styles`, `src/shared/Input`, and `src/components/Field/styles`.
- The search icon is represented by `iconLeft={Search}` from `lucide-react`.
- `InputField` currently sets `autoComplete="off"` internally, so browser autocomplete is not configurable through the public API.
- The Figma component name includes `Autocomplete`, but the current runtime API only covers the search input shell. It does not provide dropdown suggestions, filtering, highlighted options, or keyboard listbox behavior.

## Temporary mappings / assumptions

| Item                     | Current mapping                 | Reason                                                                           | Follow-up                                                                     |
| ------------------------ | ------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `State=Selected`         | `autoFocus`                     | Runtime has focus behavior, not a persistent selected-state prop                 | Use controlled focus in consuming app if needed                               |
| `State=Filled`           | `defaultValue="Search query"`   | Figma text layer is not exposed as a top-level text property                     | Add a Figma text property for the field value or edit snippet manually        |
| `Hint=true`              | `hint="Start typing to search"` | Hint text is nested inside `HintComponent`, not exposed on `Search/Autocomplete` | Add a top-level hint text property in Figma                                   |
| Autocomplete suggestions | not generated                   | No public autocomplete/listbox component exists for this Figma node              | Add a dedicated Autocomplete component or compose Input with Popover/ListItem |

## Examples

### Basic Search

```tsx
import { Search } from "lucide-react";

<Input type="search" size="sm" placeholder="Search" iconLeft={Search} />;
```

### Filled

```tsx
import { Search } from "lucide-react";

<Input
  type="search"
  size="sm"
  placeholder="Search"
  iconLeft={Search}
  defaultValue="Search query"
/>;
```

### Disabled

```tsx
import { Search } from "lucide-react";

<Input
  type="search"
  size="sm"
  placeholder="Search"
  iconLeft={Search}
  disabled
/>;
```

### With Hint

```tsx
import { Search } from "lucide-react";

<Input
  type="search"
  size="sm"
  placeholder="Search"
  iconLeft={Search}
  hint="Start typing to search"
/>;
```
