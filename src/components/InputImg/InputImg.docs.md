# InputImg

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: InputImg
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { InputImg } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InputImg/InputImg.tsx
types: src/components/InputImg/InputImg.types.ts
localExport: src/components/InputImg/index.ts
publicExport: src/index.ts
storybook: src/stories/InputImg.stories.tsx
figmaComponent: InputImage
figmaNodeId: 762:481
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=762-481
codeConnect: src/components/InputImg/InputImg.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { InputImg } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<InputImg
      size="xs"
      textUpload="Загрузить"




    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/InputImg/InputImg.tsx](InputImg.tsx) |
| Props / shared types | [src/components/InputImg/InputImg.types.ts](InputImg.types.ts) |
| Props / shared types | [src/types/field.ts](../../types/field.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/InputImg.stories.tsx](../../stories/InputImg.stories.tsx) |
| Code Connect | [src/components/InputImg/InputImg.figma.js](InputImg.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `fill` | `boolean \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `onPreviewClick` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `label` | `string \| undefined` | optional | См. типы и пример выше |
| `subtitle` | `string \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |
| `hintError` | `string \| undefined` | optional | См. типы и пример выше |
| `value` | `InputImgValue \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `InputImgValue \| undefined` | optional | См. типы и пример выше |
| `onChange` | `((file: File \| null) => void) \| undefined` | optional | См. типы и пример выше |
| `onBeforeUpload` | `((file: File) => void) \| undefined` | optional | См. типы и пример выше |
| `maxSize` | `number \| undefined` | optional | См. типы и пример выше |
| `validateFile` | `UploadValidateFile \| undefined` | optional | См. типы и пример выше |
| `onValidationError` | `UploadValidationErrorHandler \| undefined` | optional | См. типы и пример выше |
| `onSizeError` | `((file: File) => void) \| undefined` | optional | См. типы и пример выше |
| `onAcceptError` | `((file: File) => void) \| undefined` | optional | См. типы и пример выше |
| `previewHoverEnabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `previewRemoveEnabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `previewZoomEnabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `textUpload` | `string \| undefined` | optional | См. типы и пример выше |
| `textLoading` | `string \| undefined` | optional | См. типы и пример выше |
| `loading` | `boolean \| undefined` | optional | См. типы и пример выше |
| `progress` | `number \| undefined` | optional | См. типы и пример выше |
| `onCancelUpload` | `(() => void) \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `State` | Default, Filled, Hover, loading, Error, Filled-Hover, Disable | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Overlay` | Default, Hover | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Error` | Off, On | `error`; значения см. template |

## Supported states

- `loading`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma keeps stateful visuals. Runtime API needs a real
File value to render preview mode.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
