# Tab

Документация для связи Figma-компонента `Tab` с runtime-компонентом `Tab`.

Важно: это документ только про одиночный `Tab` (узел `19446:1451`).  
Для группы табов с кнопкой `Ещё` используется отдельный компонент `TabsOverflow` и отдельная документация.

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
figmaComponent: Tab
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19446-1451
figmaNodeId: 19446:1451
codeConnect: src/components/Tab/Tab.figma.js
```

## Public usage

```tsx
import { Tab } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Tab type="fill" size="sm" selected>
      Tab
    </Tab>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Tab/Tab.tsx` |
| Public props | `src/components/Tab/Tab.types.ts` |
| Local export | `src/components/Tab/index.ts` |
| Styles entry | `src/components/Tab/styles/index.ts` |
| Storybook | `src/stories/Tab.stories.tsx` |
| Code Connect | `src/components/Tab/Tab.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `↳ Text` | text | `children` | `ReactNode` | `Tab` | Текст таба |
| `Type` | `Fill`, `Ghost`, `Outline` | `type` | `fill`, `ghost`, `outline` | `fill` | Полный one-to-one mapping |
| `Size` | `Xs`, `Sm`, `Md` | `size` | `xs`, `sm`, `md` | `md` | Полный one-to-one mapping |
| `Selected` | `Off`, `On` | `selected` | `false`, `true` | `false` | Явный флаг выбранности |
| `State` | `Selected` | `selected` | `true` | `false` | Поддерживается как дублирующий сигнал selected |
| `State` | `Disable` | `disabled` | `true` | `false` | Нативный disabled |
| `State` | `Default`, `Hover` | - | runtime/CSS state | - | Hover не отдельный prop |
| `Icon-left` | boolean | `iconLeft` | `LucideIcon` | - | Берется из `↳ Icon-left` instance swap |
| `↳ Icon-left` | instance swap | `iconLeft` | `LucideIcon` | - | Через `executeTemplate()` если у вложенной иконки есть Code Connect |
| `Counter` | boolean | `count` | `number` | - | Temporary mapping: `true -> count={1}` |
| `iconOnly` | `Off`, `On` | `iconLeft`, `children` | icon + empty text | `Off` | Temporary mapping: у runtime нет отдельного `iconOnly` prop |
| `↳ iconOnly` | instance swap | `iconLeft` | `LucideIcon` | - | Используется для `iconOnly=On` |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | omit state props |
| Hover | Yes | runtime CSS hover behavior |
| Selected | Yes | `<Tab selected />` |
| Disable | Yes | `<Tab disabled />` |
| Type Fill/Ghost/Outline | Yes | `type="fill" \| "ghost" \| "outline"` |
| Icon left | Yes | `iconLeft={Icon}` |
| Counter | Partial | `count={number}`; Figma дает только boolean |
| Icon only | Partial | mapping через `iconLeft` и пустой label |

## Design matching notes

- Этот документ относится только к Figma-узлу `Tab` (`19446:1451`) с матрицей вариантов `Type/State/Size/iconOnly/Selected`.
- `tabsOverflow` (узел `19497:1623`) — отдельный компонент и отдельный слой API (`TabsOverflow`).
- Runtime `Tab` уже поддерживает все три типа (`fill`, `ghost`, `outline`) и все размеры (`xs`, `sm`, `md`).
- `State=Hover` не должен становиться публичным prop — это визуальное CSS-состояние.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Counter=true` | `count={1}` | Figma хранит только видимость, а runtime требует число | Добавить в Figma numeric property для счетчика |
| `iconOnly=On` | `iconLeft` + empty `children` | В runtime нет отдельного `iconOnly` prop | Если нужен явный API, добавить `iconOnly` в `TabProps` |
| Nested icon swap | only if nested icon has Code Connect | `iconLeft` ждет `LucideIcon` | Привязать lucide-иконки через Code Connect consistently |

## Examples

### Basic

```tsx
<Tab type="fill" size="sm">
  Tab
</Tab>
```

### Selected outline

```tsx
<Tab type="outline" size="md" selected>
  Tab
</Tab>
```

### With counter

```tsx
<Tab type="ghost" size="sm" count={3}>
  Tab
</Tab>
```
