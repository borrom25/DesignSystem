# InputFiles

Документация для связи Figma component `InputFiles` с runtime-компонентом `InputFiles`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `InputFiles.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: InputFiles
package: borrom-ds-test
import: import { InputFiles } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InputFiles/InputFiles.tsx
types: src/components/InputFiles/InputFiles.types.ts
localExport: src/components/InputFiles/index.ts
publicExport: src/index.ts
storybook: src/stories/InputFiles.stories.tsx
figmaComponent: InputFiles
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3743-1253
figmaNodeId: 3743:1253
codeConnect: src/components/InputFiles/InputFiles.figma.js
```

## Public usage

```tsx
import { InputFiles } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <InputFiles
      label="Документы"
      subtitle="Добавьте файлы"
      hint="Поддерживаются файлы до 12 MB"
      multiple
      maxFiles={5}
      accept="*"
    />
  );
}
```

## Source files

| Purpose           | Path                                            |
| ----------------- | ----------------------------------------------- |
| Runtime component | `src/components/InputFiles/InputFiles.tsx`      |
| Public props      | `src/components/InputFiles/InputFiles.types.ts` |
| Local export      | `src/components/InputFiles/index.ts`            |
| Styles entry      | `src/components/InputFiles/styles/index.ts`     |
| Storybook         | `src/stories/InputFiles.stories.tsx`            |
| Code Connect      | `src/components/InputFiles/InputFiles.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop                                                      | Code values                   | Default         | Notes                                                                                  |
| ------------------------ | ------------ | -------------------------------------------------------------- | ----------------------------- | --------------- | -------------------------------------------------------------------------------------- |
| `textTitle`              | text         | `textSelect`                                                   | `string`                      | `Выберите файл` | Temporary mapping: runtime splits text into `textSelect` and `textDrag`                |
| `textSusbtitle`          | text         | `placeholder`                                                  | `string`                      | -               | Temporary mapping: subtitle inside drop zone maps to `placeholder`                     |
| `Susbtitle`              | boolean      | `placeholder`                                                  | `string` / `undefined`        | -               | `false` hides placeholder text                                                         |
| `State`                  | `DIsable`    | `disabled`                                                     | `true`                        | `false`         | Direct state mapping                                                                   |
| `State`                  | `Default`    | -                                                              | CSS runtime state             | -               | No dedicated prop                                                                      |
| `State`                  | `Hover`      | -                                                              | CSS runtime state             | -               | Hover is runtime CSS behavior                                                          |
| `State`                  | `Upload`     | `textSelect`, `textDrag`                                       | `Перетащите его сюда`, `""`   | -               | Temporary mapping for upload copy; drag-active style is runtime interaction state      |
| `containerText`          | boolean      | `textSelect`, `textDrag`, `placeholder`                        | `string` / `undefined`        | -               | Temporary mapping: runtime always renders text block, no boolean prop to hide it       |
| `<slot>`                 | boolean      | `label`                                                        | `ReactNode`                   | -               | Temporary mapping: root slot visibility maps to showing field label                    |
| `<listUploader>`         | slot         | `defaultValue`, `showDownload`, `isLoading`, `uploaderPercent` | `File[]`, `boolean`, `number` | -               | Temporary mapping: runtime uses `FilePreview` from file list, not arbitrary slot nodes |

## Supported states

| State                                  | Supported in code | How to use                                                |
| -------------------------------------- | ----------------- | --------------------------------------------------------- |
| Default                                | Yes               | omit state props                                          |
| Hover                                  | Yes               | runtime CSS hover styles, no prop                         |
| Upload (drag active)                   | Partial           | runtime interaction only (`isDragActive`), no public prop |
| Disabled                               | Yes               | `<InputFiles disabled />`                                 |
| Subtitle/placeholder text in drop zone | Yes               | `placeholder="..."`                                       |
| File preview list                      | Yes               | `value` / `defaultValue` with `File[]`                    |
| View mode                              | Yes               | `<InputFiles viewMode showDownload />`                    |
| Error state                            | Yes               | `<InputFiles error hintError="..." />`                    |

## Design matching notes

- Figma `InputFiles` maps to the public `InputFiles` export from `borrom-ds-test`.
- Runtime component is split into `DropZone` and `FilePreview`; slot-like content in Figma maps to data-driven file list in runtime.
- Figma `State=Upload` is an interaction state. Runtime shows it during drag operations (`isDragActive`) and does not expose direct public prop.
- Runtime visual values come from `src/components/InputFiles/styles` and shared drop-zone token classes.
- Field caption parts (`label`, `subtitle`, `hint`, `hintError`) are external field-level props and can be combined independently of Figma state variant.

## Temporary mappings / assumptions

| Item                      | Current mapping                                                                    | Reason                                                               | Follow-up                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `textTitle`               | `textSelect="<textTitle>"`, `textDrag=""`                                          | Figma keeps full phrase in one text property, runtime uses two props | Add separate Figma property for `textDrag`                                           |
| `State=Upload`            | `textSelect="Перетащите его сюда"`, `textDrag=""`                                  | Runtime drag-active visual state is internal interaction state       | If static upload demo is needed, add explicit public prop or dedicated Story wrapper |
| `containerText=false`     | `textSelect=""`, `textDrag=""`, `placeholder=undefined`                            | Runtime has no prop to hide text container block entirely            | Add `hideTexts`/`showTexts` API only if product requires                             |
| `<listUploader>` slot     | `defaultValue=[new File(...)]`, `showDownload`, `isLoading`, `uploaderPercent={1}` | Runtime does not accept arbitrary slot nodes for previews            | Expose list item data properties in Figma or keep placeholder `File[]` mapping       |
| `Susbtitle` typo in Figma | maps to `placeholder`                                                              | Figma property name differs from runtime naming                      | Normalize property naming in Figma library                                           |

## Examples

### Basic

```tsx
<InputFiles
  label="Загрузка файла"
  hint="Выберите файл для загрузки"
  accept="*"
/>
```

### Multiple Files

```tsx
<InputFiles
  label="Документы"
  multiple
  maxFiles={5}
  hint="Можно выбрать до 5 файлов"
/>
```

### Disabled

```tsx
<InputFiles label="Документы" disabled placeholder="Загрузка недоступна" />
```

### View Mode With Download

```tsx
<InputFiles
  label="Прикрепленный файл"
  viewMode
  showDownload
  defaultValue={[
    new File(["demo"], "document.pdf", { type: "application/pdf" }),
  ]}
/>
```
