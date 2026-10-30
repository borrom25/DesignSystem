# Uploader

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Uploader
package: borrom-ds-test
import: import { Uploader } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Uploader/Uploader.tsx
types: src/components/Uploader/Uploader.types.ts
localExport: src/components/Uploader/index.ts
publicExport: src/index.ts
storybook: src/stories/Uploader.stories.tsx
figmaComponent: null
figmaNodeId: null
figmaUrl: null
codeConnect: null
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: no confirmed mapping
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Uploader } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <Uploader  />;
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Uploader/Uploader.tsx](Uploader.tsx) |
| Props / shared types | [src/components/Uploader/Uploader.types.ts](Uploader.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Uploader.stories.tsx](../../stories/Uploader.stories.tsx) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `isDragActive` | `boolean \| undefined` | optional | См. типы и пример выше |
| `textSelect` | `string \| undefined` | optional | См. типы и пример выше |
| `textDrag` | `string \| undefined` | optional | См. типы и пример выше |
| `placeholder` | `string \| undefined` | optional | См. типы и пример выше |
| `multiple` | `boolean \| undefined` | optional | См. типы и пример выше |
| `accept` | `string \| undefined` | optional | См. типы и пример выше |
| `maxSize` | `number \| undefined` | optional | См. типы и пример выше |
| `maxFiles` | `number \| undefined` | optional | См. типы и пример выше |
| `validateFile` | `UploadValidateFile \| undefined` | optional | См. типы и пример выше |
| `onValidationError` | `UploadValidationErrorHandler \| undefined` | optional | См. типы и пример выше |
| `onSizeError` | `((file: File) => void) \| undefined` | optional | См. типы и пример выше |
| `onAcceptError` | `((file: File) => void) \| undefined` | optional | См. типы и пример выше |
| `onFiles` | `((files: File[]) => void) \| undefined` | optional | См. типы и пример выше |
| `name` | `string \| undefined` | optional | См. типы и пример выше |
| `required` | `boolean \| undefined` | optional | См. типы и пример выше |
| `inputRef` | `RefCallback<HTMLInputElement> \| undefined` | optional | См. типы и пример выше |
| `onDragEnter` | `((e: DragEvent<HTMLDivElement>) => void) \| undefined` | optional | См. типы и пример выше |
| `onDragLeave` | `((e: DragEvent<HTMLDivElement>) => void) \| undefined` | optional | См. типы и пример выше |
| `onDragOver` | `((e: DragEvent<HTMLDivElement>) => void) \| undefined` | optional | См. типы и пример выше |
| `onDrop` | `((e: DragEvent<HTMLDivElement>) => void) \| undefined` | optional | См. типы и пример выше |
| `onInputChange` | `((e: ChangeEvent<HTMLInputElement>) => void) \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `placeholderFullWidth` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Подтверждённые Figma properties для этого компонента недоступны. Mapping и `.figma.js` не создаются по имени или внешнему сходству.

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

**Blocker Code Connect:** Figma Uploader (3741:11025) — строка загруженного файла с прогрессом; runtime Uploader — drop zone выбора файлов. Подтверждённые properties State=Loading/Positive/Error не имеют корректного прямого mapping к этому API. Связка не создаётся по совпадению имени.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
