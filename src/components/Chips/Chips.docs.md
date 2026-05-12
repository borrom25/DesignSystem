# Chips

Документация для связи Figma component `Chips` с runtime-компонентом `Chips`.

В коде этот компонент называется `Chips`. Он реализован, лежит в `src/components/Chips` и публично экспортируется из `borrom-ds-test`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Chips.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: Chips
package: borrom-ds-test
import: import { Chips } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Chips/Chips.tsx
types: src/components/Chips/Chips.types.ts
localExport: src/components/Chips/index.ts
publicExport: src/index.ts
storybook: src/stories/Chips.stories.tsx
figmaComponent: Chips
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21552-2622
figmaNodeId: 21552:2622
codeConnect: src/components/Chips/Chips.figma.js
```

## Public usage

```tsx
import { Check, X } from "lucide-react";
import { Chips } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Chips type="fill" size="sm" iconLeft={Check} iconRight={X}>
      Chips
    </Chips>
  );
}
```

## Source files

| Purpose           | Path                                   |
| ----------------- | -------------------------------------- |
| Runtime component | `src/components/Chips/Chips.tsx`       |
| Public props      | `src/components/Chips/Chips.types.ts`  |
| Local export      | `src/components/Chips/index.ts`        |
| Styles entry      | `src/components/Chips/styles/index.ts` |
| Storybook         | `src/stories/Chips.stories.tsx`        |
| Code Connect      | `src/components/Chips/Chips.figma.js`  |

## Figma to props mapping

| Figma property / variant | Figma values      | Code prop   | Code values       | Default | Notes                                                                               |
| ------------------------ | ----------------- | ----------- | ----------------- | ------- | ----------------------------------------------------------------------------------- |
| `↳ Text`                 | text              | `children`  | `ReactNode`       | -       | Direct text content                                                                 |
| `Type`                   | `Fill`, `Outline` | `type`      | `fill`, `outline` | `fill`  | Direct enum mapping                                                                 |
| `Size`                   | `Xs`, `Sm`, `Md`  | `size`      | `xs`, `sm`, `md`  | `md`    | Direct enum mapping                                                                 |
| `Selected`               | `Off`, `On`       | `selected`  | `false`, `true`   | `false` | Direct enum-to-boolean mapping                                                      |
| `State`                  | `Selected`        | `selected`  | `true`            | `false` | Duplicates `Selected=On`                                                            |
| `State`                  | `Disable`         | `disabled`  | `true`            | `false` | Direct state mapping                                                                |
| `State`                  | `Hover`           | -           | CSS runtime state | -       | Not exposed as a public prop                                                        |
| `Icon-left`              | boolean           | `iconLeft`  | `LucideIcon`      | -       | Code Connect emits `Check` when enabled                                             |
| `↳ Icon-left`            | instance swap     | `iconLeft`  | `LucideIcon`      | -       | Temporary mapping: swapped icon component is not converted to a component reference |
| `Icon-right`             | boolean           | `iconRight` | `LucideIcon`      | -       | Code Connect emits `X` when enabled                                                 |
| `↳ Icon-right`           | instance swap     | `iconRight` | `LucideIcon`      | -       | Temporary mapping: swapped icon component is not converted to a component reference |
| `iconOnly`               | `Off`, `On`       | `iconOnly`  | `LucideIcon`      | -       | When `On`, children are omitted and Code Connect emits `Plus`                       |
| `↳ iconOnly`             | instance swap     | `iconOnly`  | `LucideIcon`      | -       | Temporary mapping: swapped icon component is not converted to a component reference |
| `Counter`                | boolean           | `count`     | `number`          | -       | Temporary mapping: Figma exposes visibility only, code needs a numeric value        |

## Supported states

| State      | Supported in code | How to use                                                            |
| ---------- | ----------------- | --------------------------------------------------------------------- |
| Default    | Yes               | omit state props                                                      |
| Hover      | Yes               | runtime CSS hover styles, no prop                                     |
| Selected   | Yes               | `<Chips selected>Chips</Chips>`                                       |
| Disabled   | Yes               | `<Chips disabled>Chips</Chips>`                                       |
| Fill       | Yes               | `<Chips type="fill">Chips</Chips>`                                    |
| Outline    | Yes               | `<Chips type="outline">Chips</Chips>`                                 |
| Icon left  | Yes               | `<Chips iconLeft={Check}>Chips</Chips>`                               |
| Icon right | Yes               | `<Chips iconRight={X}>Chips</Chips>`                                  |
| Icon only  | Yes               | `<Chips iconOnly={Plus} aria-label="Add" />`                          |
| Counter    | Partial           | `<Chips count={3}>Chips</Chips>`; Figma property has no numeric count |

## Design matching notes

- Figma `Chips` maps to the public `Chips` export from `borrom-ds-test`.
- Runtime visual values come from `src/components/Chips/styles` and shared scaling classes.
- `Chips` is a single chip item, not a chips group/list.
- `iconOnly` changes the public API branch: when `iconOnly` is passed, `children` must be omitted.
- Runtime uses `aria-pressed={selected}` to expose selected state.
- `count` renders the shared `Counter` component with `CounterVariant.White`.

## Temporary mappings / assumptions

| Item           | Current mapping             | Reason                                                                     | Follow-up                                                                   |
| -------------- | --------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `↳ Icon-left`  | `iconLeft={Check}`          | Runtime prop expects a `LucideIcon`; Figma nested icon is an instance swap | Add stable icon-name mapping strategy for lucide components                 |
| `↳ Icon-right` | `iconRight={X}`             | Runtime prop expects a `LucideIcon`; Figma nested icon is an instance swap | Add stable icon-name mapping strategy for lucide components                 |
| `↳ iconOnly`   | `iconOnly={Plus}`           | Runtime prop expects a `LucideIcon`; Figma nested icon is an instance swap | Add stable icon-name mapping strategy for lucide components                 |
| `Counter=true` | `count={1}` in Code Connect | Figma exposes only visibility, but code requires a numeric `count`         | Add numeric Figma text/property for counter value or edit generated snippet |

## Examples

### Basic

```tsx
<Chips type="fill" size="sm">
  Chips
</Chips>
```

### Selected

```tsx
<Chips type="fill" size="sm" selected>
  Chips
</Chips>
```

### With Icons

```tsx
import { Check, X } from "lucide-react";

<Chips type="fill" size="sm" iconLeft={Check} iconRight={X}>
  Chips
</Chips>;
```

### Icon Only

```tsx
import { Plus } from "lucide-react";

<Chips iconOnly={Plus} type="fill" size="sm" aria-label="Add" />;
```

### With Counter

```tsx
<Chips type="fill" size="sm" count={3}>
  Chips
</Chips>
```
