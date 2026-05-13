# MultiSelect

Документация для связи Figma-компонента `🚧 Selected / Multiple` с runtime-компонентом `MultiSelect`.

```text
src/components/MultiSelect/MultiSelect.docs.md
```

Парный Code Connect файл:

```text
src/components/MultiSelect/MultiSelect.figma.js
```

## Machine-readable summary

```yaml
component: MultiSelect
package: borrom-ds-test
import: import { MultiSelect } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/MultiSelect/MultiSelect.tsx
types: src/components/MultiSelect/MultiSelect.types.ts
localExport: src/components/MultiSelect/index.ts
publicExport: src/index.ts
storybook: src/stories/MultiSelect.stories.tsx
figmaComponent: 🚧 Selected / Multiple
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=5351-1298
figmaNodeId: 5351:1298
codeConnect: src/components/MultiSelect/MultiSelect.figma.js
```

## Public usage

```tsx
import { MultiSelect } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <MultiSelect
      size="md"
      label="Выбери теги"
      placeholder="Select items..."
      options={[
        { value: "react", label: "React" },
        { value: "ts", label: "TypeScript" },
        { value: "storybook", label: "Storybook" },
      ]}
      defaultValue={["react", "ts"]}
      clearable
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/MultiSelect/MultiSelect.tsx` |
| Public props | `src/components/MultiSelect/MultiSelect.types.ts` |
| Local export | `src/components/MultiSelect/index.ts` |
| Hooks | `src/components/MultiSelect/hooks` |
| Styles | `src/components/MultiSelect/styles` |
| Storybook | `src/stories/MultiSelect.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Error` | `error` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Disable` / `State=Disable` | `disabled` | `boolean` | `false` | `On -> true` |
| `Label` + `textLabel` | `label` | `ReactNode` | - | При `Label=On` используется `textLabel` |
| `requiredMark` | `required` | `boolean` | `false` | Required mark в label |
| `Hint` + `textHint` / `textError` | `hint` / `hintError` | `string` | - | При `Error=On` используется `hintError=textError` |
| `Placeholder` + `textPlaceholder` | `placeholder` | `string` | `Select items...` | При `Placeholder=On` используется `textPlaceholder` |
| `Filled` + `textFilled` | `defaultValue` | `string[]` | `[]` | Temporary mapping на массив выбранных значений |
| `State=Selected` | `defaultOpen` | `boolean` | `false` | Открытое состояние триггера |
| `State=Filled in Hover` | `clearable` | `boolean` | `false` | Temporary mapping по наличию кнопки очистки |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | без специальных props |
| Hover | Runtime CSS | отдельный prop не нужен |
| Selected | Yes | `defaultOpen` |
| Filled in | Yes | `value`/`defaultValue` (массив) |
| Filled in Hover | Partial | `value/defaultValue` + `clearable` + runtime CSS |
| Disable | Yes | `disabled` |
| Error | Yes | `error` + `hintError` |

## Single vs Multiple

- `Select` и `MultiSelect` в библиотеке — это **разные runtime-компоненты**.
- Figma `🚧 Selected / Single` маппится на `Select`.
- Figma `🚧 Selected / Multiple` (этот узел) маппится на `MultiSelect`.
- Это не один и тот же компонент с простым флагом `single/multiple`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `textFilled` | первый выбранный label в generated options | В Figma нет структурного списка выбранных values | Если добавятся properties для списка, заменить на точный mapping |
| Filled-state value | `defaultValue={["selected", "option-2"]}` | Для MultiSelect нужно `string[]`, а Figma даёт только текстовый маркер | Уточнить формат данных selected items |
| Counter/clear icon | `clearable` только для `Filled in Hover` | В Figma это визуальные инстансы без явных boolean-свойств | Добавить явные boolean properties в Figma при необходимости |
