# Select

Документация для связи Figma component `🚧 Selected / Single` с runtime-компонентом `Select`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Select.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: Select
package: borrom-ds-test
import: import { Select } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Select/Select.tsx
types: src/components/Select/types/index.ts
localExport: src/components/Select/index.ts
publicExport: src/index.ts
storybook: src/stories/Select.stories.tsx
figmaComponent: 🚧 Selected / Single
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4607-9923
figmaNodeId: 4607:9923
codeConnect: src/components/Select/Select.figma.js
```

## Public usage

```tsx
import { Select } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Select
      label="Fruit"
      placeholder="Select a fruit..."
      options={[
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "orange", label: "Orange" },
      ]}
    />
  );
}
```

## Source files

| Purpose           | Path                                    |
| ----------------- | --------------------------------------- |
| Runtime component | `src/components/Select/Select.tsx`      |
| Public props      | `src/components/Select/types/index.ts`  |
| Local export      | `src/components/Select/index.ts`        |
| Styles entry      | `src/components/Select/styles/index.ts` |
| Shared primitives | `src/shared/Select`                     |
| Storybook         | `src/stories/Select.stories.tsx`        |
| Code Connect      | `src/components/Select/Select.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values                              | Code prop            | Code values       | Default     | Notes                                                                        |
| ------------------------ | ----------------------------------------- | -------------------- | ----------------- | ----------- | ---------------------------------------------------------------------------- |
| `Size`                   | `Xs`, `Sm`, `Md`                          | `size`               | `xs`, `sm`, `md`  | `md`        | Direct enum mapping                                                          |
| `textPlaceholder`        | text                                      | `placeholder`        | `string`          | `Select...` | Direct text mapping                                                          |
| `Label`                  | boolean                                   | `label`              | `ReactNode`       | -           | When true, uses `textLabel`                                                  |
| `textLabel`              | text                                      | `label`              | `ReactNode`       | -           | Used only when `Label=true`                                                  |
| `requiredMark`           | boolean                                   | `required`           | `boolean`         | `false`     | Direct boolean mapping                                                       |
| `Hint`                   | boolean                                   | `hint` / `hintError` | `string`          | -           | When true, chooses normal or error hint by `Error`                           |
| `textHint`               | text                                      | `hint`               | `string`          | -           | Used when `Hint=true` and `Error=Off`                                        |
| `textError`              | text                                      | `hintError`          | `string`          | -           | Used when `Hint=true` and `Error=On`                                         |
| `Error`                  | `Off`, `On`                               | `error`              | `false`, `true`   | `false`     | Direct enum-to-boolean mapping                                               |
| `Disable`                | `Off`, `On`                               | `disabled`           | `false`, `true`   | `false`     | Direct enum-to-boolean mapping                                               |
| `State`                  | `Disable`                                 | `disabled`           | `true`            | `false`     | Duplicates `Disable=On`                                                      |
| `Filled`                 | `Off`, `On`                               | `defaultValue`       | option value      | -           | Temporary mapping: `On` selects the generated `selected` option              |
| `State`                  | `Filled in`, `Filled in Hover`, `Disable` | `defaultValue`       | `selected`        | -           | Temporary mapping from visual filled state                                   |
| `textFilled`             | text                                      | `options[0].label`   | `ReactNode`       | -           | Temporary mapping: selected value becomes first generated option             |
| `State`                  | `Selected`                                | `defaultOpen`        | `true`            | `false`     | Represents open trigger state                                                |
| `State`                  | `Hover`, `Filled in Hover`                | -                    | CSS runtime state | -           | Not exposed as a public prop                                                 |
| `Placeholder`            | boolean                                   | -                    | -                 | -           | Figma controls placeholder layer visibility; runtime uses value/defaultValue |

## Supported states

| State                   | Supported in code | How to use                                       |
| ----------------------- | ----------------- | ------------------------------------------------ |
| Default                 | Yes               | omit state props                                 |
| Hover                   | Yes               | runtime CSS hover styles, no prop                |
| Open / selected trigger | Yes               | `<Select defaultOpen />`                         |
| Filled                  | Yes               | Set `value` or `defaultValue` to an option value |
| Disabled                | Yes               | `<Select disabled />`                            |
| Error                   | Yes               | `<Select error hintError="..." />`               |
| Required                | Yes               | `<Select required />`                            |
| Hint                    | Yes               | `<Select hint="..." />`                          |

## Design matching notes

- Figma `🚧 Selected / Single` maps to the public `Select` export from `borrom-ds-test`.
- Runtime `Select` is data-driven: dropdown items are passed through `options` or manually composed from `SelectItem`.
- Figma node describes the field trigger state, not the full dropdown menu. Code Connect therefore emits a runnable placeholder `options` array.
- Runtime visual values come from `src/components/Select/styles`, `src/shared/Select`, `src/components/Field/styles`, and `Popover`.
- The clear button appears automatically in runtime when a value is selected. It should not be mapped as a separate public prop.

## Temporary mappings / assumptions

| Item                              | Current mapping                                      | Reason                                                    | Follow-up                                                                         |
| --------------------------------- | ---------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Dropdown options                  | Generated `selected`, `option-2`, `option-3` options | Figma component does not expose item list properties      | Replace options with product data after insertion or add item properties in Figma |
| `textFilled`                      | First generated option label                         | Runtime selected value must correspond to an option       | Add explicit selected option/value properties if needed                           |
| `Placeholder` visibility          | Derived from value/defaultValue                      | Runtime does not expose placeholder visibility separately | Keep using value/defaultValue as source of truth                                  |
| `State=Hover` / `Filled in Hover` | Runtime CSS hover state                              | Hover is not a public prop                                | No code prop needed                                                               |

## Examples

### Basic

```tsx
<Select
  label="Fruit"
  placeholder="Select a fruit..."
  options={[
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ]}
/>
```

### Filled

```tsx
<Select
  label="Fruit"
  defaultValue="banana"
  options={[
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ]}
/>
```

### Error With Hint

```tsx
<Select
  label="Fruit"
  error
  hintError="Please select a fruit"
  options={[
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
  ]}
/>
```

### Disabled

```tsx
<Select
  label="Fruit"
  disabled
  options={[
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
  ]}
/>
```
