# Popover

Документация для связи Figma-компонента `Popover` с runtime-компонентом `Popover`.

```text
src/components/Popover/Popover.docs.md
```

Парный Code Connect файл:

```text
src/components/Popover/Popover.figma.js
```

## Machine-readable summary

```yaml
component: Popover
package: borrom-ds-test
import: import { Popover, PopoverSurface } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Popover/Popover.tsx
types: src/components/Popover/Popover.types.ts
localExport: src/components/Popover/index.ts
publicExport: src/index.ts
storybook: src/stories/Popover.stories.tsx
figmaComponent: Popover
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=400-9517
figmaNodeId: 400:9517
codeConnect: src/components/Popover/Popover.figma.js
```

## Public usage

```tsx
import { Popover, PopoverSurface } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Popover>
      <Popover.Trigger>
        <button type="button">Open</button>
      </Popover.Trigger>
      <Popover.Content>
        <PopoverSurface>
          <div className="p-3">Content</div>
        </PopoverSurface>
      </Popover.Content>
    </Popover>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Popover/Popover.tsx` |
| Public props | `src/components/Popover/Popover.types.ts` |
| Local export | `src/components/Popover/index.ts` |
| Content sizing utils | `src/components/Popover/Popover.utils.ts` |
| Content UI | `src/components/Popover/ui/PopoverContent.tsx` |
| Scroll area UI | `src/components/Popover/ui/PopoverScrollArea.tsx` |
| Storybook | `src/stories/Popover.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `<slotContent>` | `children` внутри `PopoverSurface` | `ReactNode` | - | Слот контента поповера |
| `Size= Xs / Sm / Md` | нет прямого prop | runtime layout | - | Размер в runtime задается отступами/контентом, а не отдельным `size` prop |

## Supported behavior

| Behavior | Supported in code | How to use |
| --- | --- | --- |
| Открытие/закрытие | Yes | `open`, `onOpenChange` или внутренний state |
| Привязка к триггеру | Yes | `Popover.Trigger` + `Popover.Content` |
| Ограничение ширины по триггеру | Yes | `matchTriggerWidth` |
| Ограничение высоты/скролл | Yes | `Popover.ScrollArea` + `maxHeight` |
| Lazy load при скролле | Yes | `onScrollEnd`, `scrollEndOffset` |
| Mobile поведение | Yes | На mobile `Popover.Content` рендерится через `Modal` |

## Desktop vs mobile

- В десктопной версии это popover-позиционирование (`@radix-ui/react-popover`).
- В мобильной версии `Popover.Content` переключается в `Modal` (shutter-подобный паттерн).
- Поэтому Figma desktop `Popover` и mobile `Shutter` могут быть разными компонентами в макете, но в runtime это единая логика через `Popover`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Size` из Figma | отступы внутри slot-контента (`p-2/p-3/p-4`) | В `Popover` нет публичного `size` prop | Если появится `size` API, заменить mapping на прямой prop |
| `node-id=400:9517` | агрегирующий узел (набор размеров) | Свойства slot/size получены с дочерних узлов `400:9377`, `2020:2121`, `2020:2417` | При публикации component set можно привязать один master-node |
