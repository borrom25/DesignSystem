# InputTag

Документация для связи Figma-компонента `🚧 InputTag` с runtime-компонентом `InputTag`.

```text
src/components/InputTag/InputTag.docs.md
```

Парный Code Connect файл:

```text
src/components/InputTag/InputTag.figma.js
```

## Machine-readable summary

```yaml
component: InputTag
package: borrom-ds-test
import: import { InputTag } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InputTag/InputTag.tsx
types: src/components/InputTag/InputTag.types.ts
localExport: src/components/InputTag/index.ts
publicExport: src/index.ts
storybook: src/stories/InputTag.stories.tsx
figmaComponent: 🚧 InputTag
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4560-2817
figmaNodeId: 4560:2817
codeConnect: src/components/InputTag/InputTag.figma.js
```

## Public usage

```tsx
import { InputTag } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <InputTag
      size="md"
      label="Теги"
      hint="Введите тег и нажмите Enter"
      value={["React", "TypeScript"]}
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/InputTag/InputTag.tsx` |
| Public props | `src/components/InputTag/InputTag.types.ts` |
| Local export | `src/components/InputTag/index.ts` |
| Styles entry | `src/components/InputTag/styles/index.ts` |
| Storybook | `src/stories/InputTag.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Disable` | `disabled` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Label` + `textLabel` | `label` | `string` | - | При `Label=On` используется `textLabel` |
| `requiredMark` | `required` | `boolean` | `false` | Required mark через `FieldLabel` |
| `Hint` + `textHint` | `hint` | `string` | - | При `Error=Off` используется `textHint` |
| `Hint` + `textError` | `hint` | `string` | - | Temporary mapping для Error-сценария |
| `Placeholder` + `textPlaceholder` | `placeholder` | `string` | - | Placeholder input-поля |
| `Filled` / `State=Filled in` | `value` | `string[]` | `[]` | Маппинг на демо теги `["Tag 1", "Tag 2"]` |
| `State=Selected` | `autoFocus` | `boolean` | `false` | Temporary mapping для focus-состояния |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | без специальных props |
| Hover | Runtime CSS | отдельный prop не нужен |
| Selected | Partial | `autoFocus` для начального фокуса |
| Input text | Partial | ввод текста есть, но не контролируется отдельным публичным prop |
| Adding tag | Partial | runtime поддерживает Enter-добавление, но состояние не задаётся отдельным prop |
| Filled in | Yes | `value`/`defaultValue` с массивом тегов |
| Filled in Hover | Runtime CSS + value | `value` + hover через CSS |
| Disabled | Yes | `disabled` |
| Error | Partial | нет `error` prop, используем `hint=textError` как ближайший mapping |

## Design matching notes

- `InputTag` управляет списком тегов (`value: string[]`) и внутренним полем ввода.
- Добавление тега происходит по `Enter`, удаление — через `Backspace` при пустом поле или крестик на теге.
- В текущем API отсутствуют отдельные `error`/`hintError` props.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Error=On` | `hint={textError}` | В `InputTagProps` нет `error` и `hintError` | Добавить error API, если нужен визуальный error-state |
| `State=Input text` / `State=Adding tag` | не маппится в отдельный prop | Нет публичного prop для текущего текста в input | Добавить controlled `inputValue` в API при необходимости |
| `State=Selected` | `autoFocus` | Нет персистентного selected-state prop | Управлять фокусом на уровне интеграции |

## Examples

### Basic

```tsx
<InputTag placeholder="Добавить тег..." />
```

### Controlled tags

```tsx
<InputTag value={["UI", "Design"]} onChange={() => {}} />
```

### Disabled

```tsx
<InputTag disabled value={["Locked"]} />
```
