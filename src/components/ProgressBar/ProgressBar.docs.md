# ProgressBar

Документация для связи Figma component set `Progress` с runtime-компонентом `ProgressBar`.

`ProgressBar` показывает линейный прогресс в одном из трех вариантов: с заголовком, со статусом рядом с полосой или как чистая полоса без label. Компонент также поддерживает segmented view через массив `segmentedItems`.

## Machine-readable summary

```yaml
component: ProgressBar
package: borrom-ds-test
import: import { ProgressBar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/ProgressBar/ProgressBar.tsx
types: src/components/ProgressBar/ProgressBar.types.ts
localExport: src/components/ProgressBar/index.ts
publicExport: src/index.ts
storybook: src/stories/ProgressBar.stories.tsx
figmaComponent: Progress
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1274-160
figmaNodeId: 1274:160
codeConnect: src/components/ProgressBar/ProgressBar.figma.js
```

## Public usage

```tsx
import { ProgressBar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <ProgressBar
      title="Прогресс заполнения"
      progress={65}
      status="loading"
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/ProgressBar/ProgressBar.tsx` |
| Public props | `src/components/ProgressBar/ProgressBar.types.ts` |
| Width/status helpers | `src/components/ProgressBar/ProgressBar.utils.ts` |
| UI parts | `src/components/ProgressBar/ui/*` |
| Local export | `src/components/ProgressBar/index.ts` |
| Styles entry | `src/components/ProgressBar/styles/index.ts` |
| Storybook | `src/stories/ProgressBar.stories.tsx` |
| Code Connect | `src/components/ProgressBar/ProgressBar.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `View` | `Line` | `progress` | `number` | `0` | Single progress track |
| `View` | `Segments` | `segmentedItems` | `ProgressSegmentItem[]` | - | Runtime renders each segment as a separate `ProgressBarItem` |
| `Type` | `Head` | `title`, `showStatusLabel` | `string`, `true` | - / `true` | Header row with icon, title and status label |
| `Type` | `Status` | `showStatusLabel` | `true` | `true` | No title; status label is rendered beside the track |
| `Type` | `Clear` | `showStatusLabel` | `false` | `true` | Pure progress track without status label |
| `State` | `Default` | `status`, `progress` | `loading`, `0` | `loading`, `0` | Empty/loading start state |
| `State` | `Progress` | `status`, `progress` | `loading`, `65` | `loading`, `0` | In-progress state; product code should pass the real percent |
| `State` | `Done` | `status`, `progress` | `success`, `100` | `loading`, `0` | Runtime forces success width to `100%` |
| `State` | `Error` | `status`, `progress` | `error`, `100` | `loading`, `0` | Runtime forces error width to `100%` |
| `Head` | boolean | `title` | `string` | - | Used with `Type=Head`; Figma does not expose title text as a component text property |
| `Icon` | `On` | `icon` | default `ChartPie` | `ChartPie` | Runtime default icon already matches the head variant |
| `Icon` | `Off` | no safe mapping | - | - | Current public type is `icon?: LucideIcon`; hiding the icon would require API support for `null` or a boolean |
| `<slotprogressDone>` / `<slotprogressError>` | slots | `segmentedItems` | array items | - | Runtime does not accept segment slots; segments are data-driven |

## Supported behavior

| Behavior | Supported in code | How to use |
| --- | --- | --- |
| Empty/default progress | Yes | `<ProgressBar progress={0} status="loading" />` |
| In-progress state | Yes | `<ProgressBar progress={65} status="loading" />` |
| Success state | Yes | `<ProgressBar progress={100} status="success" />` |
| Error state | Yes | `<ProgressBar progress={100} status="error" />` |
| Header with title | Yes | `title="Прогресс заполнения"` |
| Status label | Yes | `showStatusLabel` |
| Clear bar without label | Yes | `showStatusLabel={false}` |
| Segmented progress | Yes | `segmentedItems={[{ status: "success" }, { progress: 35, status: "loading" }]}` |
| Custom icon | Yes | `icon={SomeLucideIcon}` |
| Hide icon only | No exact public prop | See temporary mapping below |

## Runtime behavior

- `ProgressBar` clamps `progress` to the `0..100` range.
- `status="loading"` uses the real clamped progress width and shows a percent label.
- `status="success"` and `status="error"` are terminal states: the filled track width becomes `100%`.
- If `title` is provided, the status label is rendered in the header row. Without `title`, it is rendered beside the progress track.
- `showStatusLabel={false}` hides the label and leaves only the track.
- When `segmentedItems` is passed, `progress` is used only for fallback; the visual track is built from the segment array.
- For segmented progress, an item with `status="success"` counts as `100` when the total status label percent is calculated.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| Figma component name `Progress` | Runtime `ProgressBar` | Codebase public component is named `ProgressBar` | Keep docs/codeconnect under `src/components/ProgressBar` |
| `Icon=Off` | omitted from generated snippet | Runtime default icon appears when `title` exists and `icon` is `undefined`; public type does not allow `null` | Add `showIcon?: boolean` or allow `icon?: LucideIcon | null` if icon hiding must be code-generated |
| Figma title text | sample `title="Прогресс заполнения"` | Title is a nested text layer, not a top-level Figma text property | Add a Figma text property if title should be generated dynamically |
| Segment slots | `segmentedItems` sample array | Runtime uses data items, not React slots, for segment rendering | Keep segment composition data-driven unless product needs custom segment slots |
| `State=Default` | `status="loading" progress={0}` | Runtime has no separate `default` status | Use product progress value in screens |
| `State=Progress` | `status="loading" progress={65}` | Figma state expresses an example percent, not a public enum | Replace sample percent with real product state |

## Examples

### Head

```tsx
<ProgressBar title="Прогресс заполнения" progress={65} status="loading" />
```

### Status

```tsx
<ProgressBar progress={65} status="loading" />
```

### Clear

```tsx
<ProgressBar progress={65} status="loading" showStatusLabel={false} />
```

### Done

```tsx
<ProgressBar title="Прогресс заполнения" progress={100} status="success" />
```

### Error

```tsx
<ProgressBar title="Прогресс заполнения" progress={100} status="error" />
```

### Segments

```tsx
<ProgressBar
  title="Прогресс заполнения"
  status="loading"
  segmentedItems={[
    { status: "success" },
    { progress: 35, status: "loading" },
    { progress: 0, status: "loading" },
    { progress: 0, status: "loading" },
  ]}
/>
```
