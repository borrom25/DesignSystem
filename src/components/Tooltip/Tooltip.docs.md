# Tooltip

Документация для связи Figma-компонента `Tooltip` с runtime-компонентом `Tooltip`.

```text
src/components/Tooltip/Tooltip.docs.md
```

Парный Code Connect файл:

```text
src/components/Tooltip/Tooltip.figma.js
```

## Machine-readable summary

```yaml
component: Tooltip
package: borrom-ds-test
import: import { Tooltip } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Tooltip/Tooltip.tsx
types: src/components/Tooltip/Tooltip.types.ts
localExport: src/components/Tooltip/index.ts
publicExport: src/index.ts
storybook: src/stories/Tooltip.stories.tsx
figmaComponent: Tooltip
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=2277-2530
figmaNodeId: 2277:2530
codeConnect: src/components/Tooltip/Tooltip.figma.js
```

## Public usage

```tsx
import { Tooltip, Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <Button size="sm">Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content
        title="Title"
        subTitle="Subtitle"
        side="top"
        align="center"
      />
    </Tooltip>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime root | `src/components/Tooltip/Tooltip.tsx` |
| Public props | `src/components/Tooltip/Tooltip.types.ts` |
| Content layout | `src/components/Tooltip/ui/TooltipContent.tsx` |
| Trigger wrapper | `src/components/Tooltip/ui/TooltipTrigger.tsx` |
| Surface wrapper | `src/components/Tooltip/ui/TooltipSurface.tsx` |
| Storybook | `src/stories/Tooltip.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Direction` | `side` | `bottom`, `top`, `left`, `right` | `top` | `Bot -> bottom`, `Top -> top`, `Left -> left`, `Right -> right` |
| `Position` | `align` | `start`, `center`, `end` | `center` | Для `top/bottom`: `Left/Centre/Right`; для `left/right`: `Top/Centre/Bot` |
| `icon` + `↳ Icon` | `icon` | `LucideIcon` | - | Temporary mapping: `icon=On -> Info` |
| `buttonsGroup` | `actionSlot` | `ReactNode` | - | Temporary mapping: demo-кнопки в actionSlot |

## Supported behavior

| Behavior | Supported in code | How to use |
| --- | --- | --- |
| Open state control | Yes | `open`, `defaultOpen`, `onOpenChange` |
| Direction | Yes | `side` |
| Position / alignment | Yes | `align`, `alignOffset` |
| Arrow | Yes | `showArrow`, `arrowWidth`, `arrowHeight` |
| Max width | Yes | `maxWidth` |
| Optional icon | Yes | `icon={LucideIcon}` |
| Optional action block | Yes | `actionSlot={<.../>}` |

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `icon`/`↳ Icon` | `icon={Info}` | Runtime ждет `LucideIcon`, а Figma swap не дает прямой импорт | Заменить на точный icon import при ручной вставке |
| `buttonsGroup` | demo `actionSlot` с двумя `Button` | В Figma это отдельный вложенный компонент, без явного runtime API для кнопок | Подменять на проектный actionSlot |
| Title/subtitle text | `title="Title"`, `subTitle="Subtitle"` | Текст в текущем узле не отдан как верхнеуровневые text-properties | При появлении text-properties маппить напрямую |
