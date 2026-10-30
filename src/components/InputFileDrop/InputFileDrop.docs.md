# InputFileDrop

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: InputFileDrop
package: borrom-ds-test
import: import { InputFileDrop } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InputFileDrop/InputFileDrop.tsx
types: src/components/InputFileDrop/InputFileDrop.types.ts
localExport: src/components/InputFileDrop/index.ts
publicExport: src/index.ts
storybook: src/stories/InputFileDrop.stories.tsx
figmaComponent: InputFailDrop
figmaNodeId: 10753:4431
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=10753-4431
codeConnect: src/components/InputFileDrop/InputFileDrop.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { InputFileDrop } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<InputFileDrop




    textMode={true}

  />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/InputFileDrop/InputFileDrop.tsx](InputFileDrop.tsx) |
| Props / shared types | [src/components/InputFileDrop/InputFileDrop.types.ts](InputFileDrop.types.ts) |
| Props / shared types | [src/types/field.ts](../../types/field.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/InputFileDrop.stories.tsx](../../stories/InputFileDrop.stories.tsx) |
| Code Connect | [src/components/InputFileDrop/InputFileDrop.figma.js](InputFileDrop.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `label` | `string \| undefined` | optional | См. типы и пример выше |
| `subtitle` | `string \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |
| `hintError` | `string \| undefined` | optional | См. типы и пример выше |
| `value` | `File[] \| null \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `File[] \| null \| undefined` | optional | См. типы и пример выше |
| `onChange` | `((files: File[] \| null) => void) \| undefined` | optional | См. типы и пример выше |
| `maxFiles` | `number \| undefined` | optional | См. типы и пример выше |
| `maxSize` | `number \| undefined` | optional | См. типы и пример выше |
| `validateFile` | `UploadValidateFile \| undefined` | optional | См. типы и пример выше |
| `onValidationError` | `UploadValidationErrorHandler \| undefined` | optional | См. типы и пример выше |
| `onSizeError` | `((file: File) => void) \| undefined` | optional | См. типы и пример выше |
| `onAcceptError` | `((file: File) => void) \| undefined` | optional | См. типы и пример выше |
| `textUpload` | `string \| undefined` | optional | См. типы и пример выше |
| `textLoading` | `string \| undefined` | optional | См. типы и пример выше |
| `textMode` | `boolean \| undefined` | optional | См. типы и пример выше |
| `textDrop` | `string \| undefined` | optional | См. типы и пример выше |
| `loading` | `boolean \| undefined` | optional | См. типы и пример выше |
| `progress` | `number \| undefined` | optional | См. типы и пример выше |
| `onCancelUpload` | `(() => void) \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotPinnedFile>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `requiredMark` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Label` | BOOLEAN | `label`; значения см. template |
| `textLabe` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Hint` | BOOLEAN | `hint / hintError`; значения см. template |
| `textHint` | TEXT | `hint`; значения см. template |
| `Icon` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default, Hover, Filled, Disable | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `loading`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma's pinned-file slot is visual content. Runtime previews
need actual File[]; the filled state uses a valid text file for the example.
No size property is exposed in Figma, so runtime's default size is preserved.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Публикация исполняемого template не подтверждена; ограничение MCP описано в docs/figma-publication.md.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
