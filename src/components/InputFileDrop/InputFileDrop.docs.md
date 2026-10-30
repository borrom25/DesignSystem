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
import { InputFileDrop } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <InputFileDrop  />;
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

Подтверждённые Figma properties для этого компонента недоступны. Mapping и `.figma.js` не создаются по имени или внешнему сходству.

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

**Blocker Code Connect:** для этого публичного компонента не подтверждена отдельная опубликованная Figma-связь. После поиска в библиотеке нельзя безопасно выдать mapping только по имени. Требуется точный опубликованный Figma component и его properties.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
