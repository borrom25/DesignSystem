# MultiTag

Документация для связи Figma-компонента `🚧 MultipleTag` с runtime-компонентом `MultiTag`.

```text
src/components/MultiTag/MultiTag.docs.md
```

Парный Code Connect файл:

```text
src/components/MultiTag/MultiTag.figma.js
```

## Machine-readable summary

```yaml
component: MultiTag
package: borrom-ds-test
import: import { MultiTag } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/MultiTag/MultiTag.tsx
types: src/components/MultiTag/types/index.ts
localExport: src/components/MultiTag/index.ts
publicExport: src/index.ts
storybook: src/stories/MultiTag.stories.tsx
figmaComponent: 🚧 MultipleTag
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4680-4452
figmaNodeId: 4680:4452
codeConnect: src/components/MultiTag/MultiTag.figma.js
```

## Public usage

```tsx
import { MultiTag } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <MultiTag
      size="md"
      label="Теги"
      placeholder="Выберите..."
      options={[
        { value: "react", label: "React" },
        { value: "typescript", label: "TypeScript" },
        { value: "storybook", label: "Storybook" },
      ]}
      defaultValue={["react", "typescript"]}
      clearable
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/MultiTag/MultiTag.tsx` |
| Public props | `src/components/MultiTag/types/index.ts` |
| Local export | `src/components/MultiTag/index.ts` |
| State hook | `src/components/MultiTag/hooks/useMultiTagState.ts` |
| UI | `src/components/MultiTag/ui` |
| Storybook | `src/stories/MultiTag.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Error` | `error` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Disable` | `disabled` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Label` + `textLabel` | `label` | `ReactNode` | - | При `Label=On` используется `textLabel` |
| `requiredMark` | `required` | `boolean` | `false` | Required mark в `FieldLabel` |
| `Hint` + `textHint` / `textError` | `hint` / `hintError` | `string` | - | При `Error=On` используется `hintError=textError` |
| `Placeholder` + `textPlaceholder` | `placeholder` | `string` | `Выберите...` | При `Placeholder=On` используется `textPlaceholder` |
| `Filled` / `State=Filled in` | `defaultValue` | `string[]` | `[]` | Temporary mapping: generated выбранные значения |
| `State=Filled in Hover` | `clearable` | `boolean` | `false` | Temporary mapping по наличию кнопки очистки |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | без специальных props |
| Hover | Runtime CSS | отдельный prop не нужен |
| Filled in | Yes | `value`/`defaultValue` |
| Filled in Hover | Partial | `value/defaultValue` + `clearable` + runtime CSS |
| Disable | Yes | `disabled` |
| Error | Yes | `error` + `hintError` |
| Selected | Partial | открытие контролируется внутренним состоянием (`open` не публичный prop) |
| Adding tag | Partial | нет отдельного публичного prop для Figma-state |

## Single vs Multiple

- `Select` и `MultiTag` — разные компоненты.
- `MultiTag` отвечает за множественный выбор с отображением выбранных значений тегами в триггере.
- Этот Figma узел (`🚧 MultipleTag`) нужно связывать именно с `MultiTag`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| Filled-state values | `defaultValue={["selected", "option-2"]}` | Figma не передает структурный список значений | При добавлении списка значений в properties обновить mapping |
| `State=Selected` | не маппится в prop | В `MultiTagProps` нет публичного `open/defaultOpen` | Если нужен внешний контроль открытия, расширить API |
| `State=Adding tag` | не маппится в prop | Runtime не имеет отдельного публичного state-переключателя | Уточнить с фронтом необходимость отдельного control-prop |
