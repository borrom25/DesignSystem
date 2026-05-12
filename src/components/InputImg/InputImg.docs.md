# InputImg

Документация для связи Figma component `InputImage` с runtime-компонентом `InputImg`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `InputImg.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: InputImg
package: borrom-ds-test
import: import { InputImg } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InputImg/InputImg.tsx
types: src/components/InputImg/InputImg.types.ts
localExport: src/components/InputImg/index.ts
publicExport: src/index.ts
storybook: src/stories/InputImg.stories.tsx
figmaComponent: InputImage
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=762-481
figmaNodeId: 762:481
codeConnect: src/components/InputImg/InputImg.figma.js
```

## Public usage

```tsx
import { InputImg } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <InputImg
      size="md"
      label="Изображение"
      hint="Поддерживаются JPG, PNG, WEBP"
      accept="image/*"
    />
  );
}
```

## Source files

| Purpose           | Path                                        |
| ----------------- | ------------------------------------------- |
| Runtime component | `src/components/InputImg/InputImg.tsx`      |
| Public props      | `src/components/InputImg/InputImg.types.ts` |
| Local export      | `src/components/InputImg/index.ts`          |
| Styles entry      | `src/components/InputImg/styles/index.ts`   |
| Storybook         | `src/stories/InputImg.stories.tsx`          |
| Code Connect      | `src/components/InputImg/InputImg.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values       | Code prop      | Code values                   | Default     | Notes                                                                               |
| ------------------------ | ------------------ | -------------- | ----------------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `Size`                   | `Xs`, `Sm`, `Md`   | `size`         | `xs`, `sm`, `md`              | `md`        | Direct enum mapping                                                                 |
| `State`                  | `loading`          | `loading`      | `true`                        | `false`     | Loading mode                                                                        |
| `State`                  | `Error`            | `error`        | `true`                        | `false`     | Error mode                                                                          |
| `Error`                  | `On`               | `error`        | `true`                        | `false`     | Duplicates `State=Error`                                                            |
| `State`                  | `Filled`           | `defaultValue` | `File`                        | -           | Temporary mapping: preview state in Figma maps to placeholder image file in runtime |
| `State`                  | `Default`, `Hover` | -              | CSS/runtime interaction state | -           | Hover is runtime CSS/drag interaction, not public prop                              |
| `Overlay`                | `Default`, `Hover` | -              | CSS hover overlay             | -           | Overlay is internal preview hover behavior, no public prop                          |
| Text `Загрузить`         | text layer         | `textUpload`   | `string`                      | `Загрузить` | Temporary mapping from design text layer                                            |

## Supported states

| State           | Supported in code | How to use                                |
| --------------- | ----------------- | ----------------------------------------- |
| Default         | Yes               | omit state props                          |
| Hover           | Yes               | runtime CSS hover styles, no prop         |
| Filled preview  | Yes               | pass `value` / `defaultValue` with `File` |
| Loading         | Yes               | `<InputImg loading progress={40} />`      |
| Error           | Yes               | `<InputImg error hintError="..." />`      |
| Disabled        | Yes               | `<InputImg disabled />`                   |
| Overlay actions | Yes               | shown on preview hover, internal behavior |

## Design matching notes

- Figma `InputImage` maps to public `InputImg` from `borrom-ds-test`.
- Runtime is split into two internal states: `DropZone` (empty/loading) and `ImagePreview` (filled).
- Figma `Overlay` variant corresponds to internal hover overlay over preview image with action buttons; this is not a separate public prop.
- `InputImg` supports only one file (`File | null`) and does not expose a list API.
- Runtime visual values come from `src/components/InputImg/styles` and shared tokens.

## Temporary mappings / assumptions

| Item                       | Current mapping                                | Reason                                                                  | Follow-up                                                            |
| -------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `State=Filled`             | `defaultValue={new File(...)}` in Code Connect | Figma stores visual filled state, runtime requires actual `File` object | For product snippets, replace demo file with real controlled `value` |
| `State=Hover`              | no prop                                        | Hover is CSS/interaction state                                          | Keep as runtime behavior; no API expansion needed                    |
| `Overlay=Hover`            | metadata only                                  | Overlay actions are internal preview UI                                 | Keep internal behavior unless product requests explicit control      |
| `Error=On` + `State=Error` | both map to `error`                            | Duplicated semantics in Figma variants                                  | Consider simplifying Figma variants to one error source              |

## Examples

### Basic

```tsx
<InputImg size="md" label="Изображение" hint="Поддерживаются JPG, PNG, WEBP" />
```

### Loading

```tsx
<InputImg loading progress={32} textLoading="Загрузка" />
```

### Filled Preview

```tsx
<InputImg
  defaultValue={new File(["demo"], "preview.jpg", { type: "image/jpeg" })}
/>
```

### Error

```tsx
<InputImg error hintError="Не удалось загрузить изображение" />
```
