# InputTag

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

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
figmaComponent: InputTag
figmaNodeId: 4560:2817
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4560-2817
codeConnect: src/components/InputTag/InputTag.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { InputTag } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<InputTag
      size="xs"







    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/InputTag/InputTag.tsx](InputTag.tsx) |
| Props / shared types | [src/components/InputTag/InputTag.types.ts](InputTag.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/InputTag.stories.tsx](../../stories/InputTag.stories.tsx) |
| Code Connect | [src/components/InputTag/InputTag.figma.js](InputTag.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `value` | `string[] \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `string[] \| undefined` | optional | См. типы и пример выше |
| `onChange` | `InputTagChangeHandler \| undefined` | optional | См. типы и пример выше |
| `onCreateTag` | `((rawValue: string) => string \| null) \| undefined` | optional | См. типы и пример выше |
| `onClear` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `inputClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `label` | `string \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `textHint` | TEXT | `hint`; значения см. template |
| `Hint` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `requiredMark` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textError` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textPlaceholder` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textLabel` | TEXT | `label`; значения см. template |
| `Placeholder` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Label` | BOOLEAN | `label`; значения см. template |
| `State` | Default, Hover, Selected, Adding tag, Input text, Filled in, Filled in Hover | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Error` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Disable` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Filled` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: InputTag has no dedicated error prop or hintError prop.
For Error=On we map textError to the regular hint prop.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Публикация текущего template ещё не подтверждена.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
