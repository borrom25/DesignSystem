# <Component>

Этот документ можно прикреплять к Figma-компоненту вместо Code Connect, если нужна понятная ссылка на реализацию и правила использования.

В поле ссылки у Figma-компонента указывай готовый документ:

```text
src/components/<Component>/<Component>.docs.md
```

Если для этого же компонента нужен автоматический JSX в Figma Dev Mode, рядом должен быть Code Connect файл:

```text
src/components/<Component>/<Component>.figma.js
```

Документ должен быть достаточно строгим, чтобы по нему можно было понять:

- какой компонент импортировать;
- из какого пакета импортировать;
- какие props соответствуют Figma variants/properties;
- какие состояния уже поддержаны кодом;
- где смотреть runtime, types и Storybook.

## Machine-readable summary

Этот блок нужен для разработчиков и AI-инструментов. Не удаляй его.

```yaml
component: <Component>
package: borrom-ds-test
import: import { <Component> } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/<Component>/<Component>.tsx
types: src/components/<Component>/<Component>.types.ts
localExport: src/components/<Component>/index.ts
publicExport: src/index.ts
storybook: src/stories/<Component>.stories.tsx
figmaComponent: <Figma component name>
figmaUrl: <https://www.figma.com/design/...?...node-id=...>
codeConnect: src/components/<Component>/<Component>.figma.js
```

## Public usage

```tsx
import { <Component> } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <<Component>
      size="md"
    >
      Label
    </<Component>>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/<Component>/<Component>.tsx` |
| Public props | `src/components/<Component>/<Component>.types.ts` |
| Local export | `src/components/<Component>/index.ts` |
| Styles entry | `src/components/<Component>/styles/index.ts` |
| Storybook | `src/stories/<Component>.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `<Label>` | `children` | `ReactNode` | - | Text content |
| `<Size>` | `size` | `xs`, `sm`, `md` | `md` | Match values from `*.types.ts` |
| `<Type>` | `type` | `fill`, `outline`, `flat`, `ghost` | `fill` | Use public enum/union |
| `<Color>` | `color` | `brand`, `action`, `danger`, `positive`, `warning`, `neutral` | `brand` | Use semantic values |
| `<Disabled>` | `disabled` | `boolean` | `false` | Runtime state |
| `<Loading>` | `loading` | `boolean` | `false` | Runtime state |
| `<Icon left>` | `iconLeft` | `LucideIcon` | - | If supported by API |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | omit state props |
| Disabled | Yes/No | `<Component disabled />` |
| Loading | Yes/No | `<Component loading />` |
| Error | Yes/No | `<Component error />` or document mismatch |
| Selected / active | Yes/No | document prop if supported |
| Hover / focus / pressed | Runtime CSS | do not expose as props unless API supports it |

## Design matching notes

- Figma variants must map to existing public props from `<Component>.types.ts`.
- Visual values should come from tokens and local style helpers, not raw Figma values.
- If a Figma value has no exact prop or token, write `Temporary mapping` or `Assumption` here.
- If the component is composed from nested components, list each nested component and its import.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `<Figma item>` | `<Code value>` | `<Why this is temporary>` | `<What to clarify or implement>` |

## Examples

### Basic

```tsx
<<Component> size="md">Label</<Component>>
```

### With state

```tsx
<<Component> size="md" disabled>
  Label
</<Component>>
```

### With icon or slot

```tsx
import { Plus } from "lucide-react";

<<Component> iconLeft={Plus}>Label</<Component>>
```

## When to use Code Connect instead

Use Code Connect when Figma Dev Mode should generate a JSX snippet automatically from the selected component instance.

Use this document when the goal is navigation, documentation, implementation guidance, or a stable reference for humans and AI tools.

For Figma-connected public components, keep both files side by side and keep their mapping tables consistent:

```text
src/components/<Component>/<Component>.docs.md
src/components/<Component>/<Component>.figma.js
```
