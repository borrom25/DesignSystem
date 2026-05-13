# TabsOverflow

Документация для связи Figma-компонента `tabsOverflow` с runtime-компонентом `TabsOverflow`.

Важно: это документ только про `TabsOverflow` (узел `19497:1623`).  
Одиночный `Tab` документируется отдельно в `src/components/Tab/Tab.docs.md`.

## Machine-readable summary

```yaml
component: TabsOverflow
package: borrom-ds-test
import: import { TabsOverflow } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/TabsOverflow/TabsOverflow.tsx
types: src/components/TabsOverflow/TabsOverflow.types.ts
localExport: src/components/TabsOverflow/index.ts
publicExport: src/index.ts
storybook: src/stories/TabsOverflow.stories.tsx
figmaComponent: tabsOverflow
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19497-1623
figmaNodeId: 19497:1623
codeConnect: src/components/TabsOverflow/TabsOverflow.figma.js
```

## Public usage

```tsx
import { TabsOverflow } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
import { useState } from "react";

const items = [
  { value: "tab-1", label: "Tab" },
  { value: "tab-2", label: "Tab" },
  { value: "tab-3", label: "Tab" },
  { value: "tab-4", label: "Tab" },
  { value: "tab-5", label: "Tab" },
];

export function Example() {
  const [value, setValue] = useState("tab-1");

  return (
    <div className="w-[300px]">
      <TabsOverflow items={items} value={value} onValueChange={setValue} size="sm" />
    </div>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/TabsOverflow/TabsOverflow.tsx` |
| Public props | `src/components/TabsOverflow/TabsOverflow.types.ts` |
| Local export | `src/components/TabsOverflow/index.ts` |
| Styles entry | `src/components/TabsOverflow/styles/index.ts` |
| Storybook | `src/stories/TabsOverflow.stories.tsx` |
| Code Connect | `src/components/TabsOverflow/TabsOverflow.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Size` | `Xs`, `Sm`, `Md` | `size` | `xs`, `sm`, `md` | `md` | Полный one-to-one mapping |
| `<slotTabsOverflow.item>` | slot | `items` | `TabsOverflowItem[]` | required | Основной slot маппится на список элементов |
| `<slotTabsOverflow.item>2` | slot | `items` | `TabsOverflowItem[]` | required | Второй slot в Figma тоже сводится к `items` |
| `Ещё` | boolean | `items` length / container width | overflow on/off | - | Temporary mapping: runtime не имеет отдельного `showMore` prop |
| More button label | text layer | `moreLabel` | `string` | `"Ещё"` | В Figma текст фиксированный, в runtime настраиваемый |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | передать `items`, `value`, `onValueChange` |
| Different sizes | Yes | `size="xs" \| "sm" \| "md"` |
| Overflow with More | Yes | ограничить ширину контейнера и передать много `items` |
| No overflow | Yes | достаточно широкий контейнер или мало `items` |
| Disabled all tabs | Yes | `disabled` |
| Disabled item | Yes | `items[i].disabled = true` |
| Counter per tab | Yes | `items[i].counter` |

## Design matching notes

- `TabsOverflow` — контейнер поверх отдельных `Tab`, который сам решает, какие элементы поместились, а какие уйдут в `Ещё`.
- Состояние overflow зависит от фактической ширины контейнера (`useOverflowLayout`), а не от отдельного булевого пропса.
- Поэтому Figma-переключатель `Ещё` в runtime выражается косвенно: через ширину + количество элементов.
- `Tab` внутри `TabsOverflow` — это отдельный компонент с отдельной документацией и Code Connect (`Tab`).

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Ещё=false` | меньше элементов / нет overflow | В API нет `showMore` пропса | Если потребуется, добавить runtime-флаг принудительного скрытия |
| Slot content | маппинг в `items[]` | Runtime data-driven, а не slot-driven | При необходимости расширить структуру `TabsOverflowItem` |

## Examples

### With overflow

```tsx
<div className="w-[240px]">
  <TabsOverflow
    size="sm"
    value="tab-1"
    onValueChange={() => {}}
    items={[
      { value: "tab-1", label: "Tab" },
      { value: "tab-2", label: "Tab" },
      { value: "tab-3", label: "Tab" },
      { value: "tab-4", label: "Tab" },
      { value: "tab-5", label: "Tab" },
      { value: "tab-6", label: "Tab" },
    ]}
  />
</div>
```

### With counters

```tsx
import { Counter } from "borrom-ds-test";

<TabsOverflow
  size="sm"
  value="tab-1"
  onValueChange={() => {}}
  items={[
    { value: "tab-1", label: "Tab", counter: <Counter count={3} size="xs" /> },
    { value: "tab-2", label: "Tab" },
    { value: "tab-3", label: "Tab", counter: <Counter count={1} size="xs" /> },
  ]}
/>
```
