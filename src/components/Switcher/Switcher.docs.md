# Switcher

Документ для привязки Figma-компонента `Switch` к runtime-компоненту `Switcher`.

```text
src/components/Switcher/Switcher.docs.md
```

Парный Code Connect файл:

```text
src/components/Switcher/Switcher.figma.js
```

## Machine-readable summary

```yaml
component: Switcher
package: borrom-ds-test
import: import { Switcher } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Switcher/Switcher.tsx
types: src/components/Switcher/Switcher.types.ts
localExport: src/components/Switcher/index.ts
publicExport: src/index.ts
storybook: src/stories/Switcher.stories.tsx
figmaComponent: Switch
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1425-3616
codeConnect: src/components/Switcher/Switcher.figma.js
```

## Public usage

```tsx
import { Switcher } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <Switcher size="sm" checked />;
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Switcher/Switcher.tsx` |
| Public props | `src/components/Switcher/Switcher.types.ts` |
| Local export | `src/components/Switcher/index.ts` |
| Styles entry | `src/components/Switcher/styles/index.ts` |
| Storybook | `src/stories/Switcher.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `sm` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Checked` | `checked` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Indefinite` | `type` | `default`, `minus` | `default` | `Off -> default`, `On -> minus` |
| `Disable` | `disabled` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `State` | - | - | `Default` | `Hover` и `Selected` покрываются runtime CSS и `checked`; `Disable` дублирует `Disable=On` |
| `Title` | - | - | `false` | Temporary mapping: текстовый заголовок не является prop `Switcher` |
| `textTitle` | - | - | empty | Temporary mapping: текст заголовка вне API `Switcher` |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | `type="default"` и `checked={false}` |
| Selected | Yes | `checked` |
| Indefinite | Yes | `type="minus"` |
| Disabled | Yes | `disabled` |
| Hover / focus / pressed | Runtime CSS | отдельные props не требуются |

## Design matching notes

- Для `Switcher` нет встроенного slot/prop для подписи справа, поэтому `Title/textTitle` остаются внешней обвязкой на уровне layout.
- В режиме `type="minus"` компонент принудительно остаётся в визуально активном состоянии и рендерит иконку `Minus`.
- Визуальные состояния `State=Hover` и `State=Selected` не добавляют новый API: это поведение current styles.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Title`, `textTitle` | не маппятся в props | В `SwitcherProps` нет `label`/`children` для подписи | Если нужен встроенный label, расширить API отдельной задачей |
| `State` | используется только как fallback для `disabled` | Состояние уже выводится из `checked/disabled` и CSS | Синхронизировать модель состояний в Figma при следующем ревью |

## Examples

### Basic

```tsx
<Switcher size="sm" />
```

### Checked

```tsx
<Switcher size="md" checked />
```

### Minus type

```tsx
<Switcher size="sm" type="minus" />
```

### Disabled

```tsx
<Switcher size="xs" disabled />
```
