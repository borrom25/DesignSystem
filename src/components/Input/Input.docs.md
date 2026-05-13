# Input

Документация для связи Figma-компонента `🚧 Input` с runtime-компонентом `Input`.

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
figmaComponent: 🚧 Input
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4296-4114
figmaNodeId: 4296:4114
codeConnect: src/components/Input/Input.figma.js
```

## Public usage

```tsx
import { Input } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Input
      size="md"
      label="Label"
      placeholder="Placeholder"
      hint="Hint"
      required
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Input/Input.tsx` |
| Public props | `src/components/Input/Input.types.ts` |
| Local export | `src/components/Input/index.ts` |
| Styles entry | `src/components/Input/styles/index.ts` |
| Storybook | `src/stories/Input.stories.tsx` |
| Code Connect | `src/components/Input/Input.figma.js` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Error` | `error` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Disable` | `disabled` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Label` + `textLabel` | `label` | `string` | - | При `Label=On` используется `textLabel` |
| `requiredMark` | `required` | `boolean` | `false` | Показывает required-mark через API поля |
| `Hint` + `textHint`/`textError` | `hint` / `hintError` | `string` | - | При `Error=On` используется `hintError=textError`, иначе `hint=textHint` |
| `Placeholder` + `textPlaceholder` | `placeholder` | `string` | - | При `Placeholder=On` используется `textPlaceholder` |
| `Filled` + `textFilled` | `defaultValue` | `string` | - | При `Filled=On` используется `textFilled` |
| `Counter` | `count`, `maxCount` | `number` | - | Temporary mapping: демо-значения `count=4`, `maxCount=10` |
| `icon-left`, `↳ Icon-left` | `iconLeft` | `LucideIcon` | - | Temporary mapping на `Check` |
| `Icon-right`, `↳ Icon-right` | `iconRight` | `LucideIcon` | - | Temporary mapping на `Check` |
| `slotLeft`, `<slotLeft>` | `prefix` | `ReactNode` | - | Temporary mapping: демо-узел `<span>Slot left</span>` |
| `slotRight`, `<slotRight>` | `suffix` | `ReactNode` | - | Temporary mapping: демо-узел `<span>Slot right</span>` |
| `State` | partial | - | `Default` | `Selected -> autoFocus`; `Hover/Input text/Filled in Hover` — runtime CSS/interaction |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | без специальных props |
| Hover | Runtime CSS | отдельный prop не нужен |
| Selected | Partial | `autoFocus` только для стартового фокуса |
| Input text | Yes | `defaultValue`/`value` |
| Filled in | Yes | `defaultValue`/`value` |
| Filled in Hover | Runtime CSS + value | `defaultValue`/`value` |
| Disabled | Yes | `disabled` |
| Error | Yes | `error` + `hintError` |

## Search preset

`Input` можно использовать как search:

```tsx
import { Search } from "lucide-react";
import { Input } from "borrom-ds-test";

<Input type="search" iconLeft={Search} placeholder="Поиск" />;
```

Это не отдельный runtime-компонент `Search`, а пресет на базе `Input`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `↳ Icon-left`, `↳ Icon-right` | `Check` из `lucide-react` | API ожидает `LucideIcon`, а Figma swap не дает прямой code-value для импорта | При появлении стабильного icon mapping обновить на точный импорт |
| `slotLeft`, `slotRight` | демо `prefix/suffix` | SLOT-поля в Figma не дают прямой runtime-snippet | При необходимости заменить вручную на проектный узел |
| `Counter` | `count=4`, `maxCount=10` | В Figma нет отдельных числовых properties | Добавить numeric properties в Figma для точного mapping |
| `State=Selected` | `autoFocus` | В API нет персистентного selected-state prop | Управлять фокусом на уровне интеграции |

## Examples

### Basic

```tsx
<Input size="sm" label="Label" placeholder="Placeholder" />
```

### Error

```tsx
<Input error hintError="Ошибка валидации" />
```

### With adornments

```tsx
import { Check } from "lucide-react";

<Input
  iconLeft={Check}
  iconRight={Check}
  prefix={<span>Before</span>}
  suffix={<span>After</span>}
/>;
```
