# InputMessage

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: InputMessage
package: borrom-ds-test
import: import { InputMessage } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InputMessage/InputMessage.tsx
types: src/components/InputMessage/InputMessage.types.ts
localExport: src/components/InputMessage/index.ts
publicExport: src/index.ts
storybook: src/stories/InputMessage.stories.tsx
figmaComponent: inputMessages
figmaNodeId: 2301:10902
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=2301-10902
codeConnect: src/components/InputMessage/InputMessage.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { InputMessage } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<InputMessage placeholder="Сообщение"  showAttachments onSend={(value, files) => console.info(value, files)} />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/InputMessage/InputMessage.tsx](InputMessage.tsx) |
| Props / shared types | [src/components/InputMessage/InputMessage.types.ts](InputMessage.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/InputMessage.stories.tsx](../../stories/InputMessage.stories.tsx) |
| Code Connect | [src/components/InputMessage/InputMessage.figma.js](InputMessage.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `onKeyDown` | `(import("react").KeyboardEventHandler<HTMLTextAreaElement> & ((event: KeyboardEvent<HTMLTextAreaElement>) => void)) \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `placeholder` | `string \| undefined` | optional | См. типы и пример выше |
| `value` | `string \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `string \| undefined` | optional | См. типы и пример выше |
| `onChange` | `(({ value, files, errorMessage }: InputMessageOnChangeArgs) => void) \| undefined` | optional | См. типы и пример выше |
| `showAttachments` | `boolean \| undefined` | optional | См. типы и пример выше |
| `sendDisabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onSend` | `((value?: string, files?: File[]) => void) \| undefined` | optional | См. типы и пример выше |
| `textareaClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `popoverContentClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `maxRows` | `number \| undefined` | optional | См. типы и пример выше |
| `fileAccept` | `string \| undefined` | optional | См. типы и пример выше |
| `maxFileCount` | `number \| undefined` | optional | См. типы и пример выше |
| `maxFileSize` | `number \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `State` | Default, Hover, Selected, Filed, pinnedFile | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: pinnedFile requires a user-selected File in runtime.
Hover/focus are runtime states. onSend is an application integration point.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
