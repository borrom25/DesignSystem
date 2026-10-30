# InputPassword

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: InputPassword
package: borrom-ds-test
import: import { InputPassword } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InputPassword/InputPassword.tsx
types: src/components/InputPassword/InputPassword.types.ts
localExport: src/components/InputPassword/index.ts
publicExport: src/index.ts
storybook: src/stories/InputPassword.stories.tsx
figmaComponent: InputPassword
figmaNodeId: 4607:6301
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4607-6301
codeConnect: src/components/InputPassword/InputPassword.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { InputPassword } from "borrom-ds-test";
import { Check } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<InputPassword
      size="md"



      label="Пример"






    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/InputPassword/InputPassword.tsx](InputPassword.tsx) |
| Props / shared types | [src/components/InputPassword/InputPassword.types.ts](InputPassword.types.ts) |
| Props / shared types | [src/components/Input/Input.types.ts](../Input/Input.types.ts) |
| Props / shared types | [src/types/field.ts](../../types/field.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/InputPassword.stories.tsx](../../stories/InputPassword.stories.tsx) |
| Code Connect | [src/components/InputPassword/InputPassword.figma.js](InputPassword.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `showPasswordByDefault` | `boolean \| undefined` | optional | См. типы и пример выше |
| `prefix` | `ReactNode` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `label` | `string \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |
| `hintError` | `string \| undefined` | optional | См. типы и пример выше |
| `iconLeft` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `suffix` | `ReactNode` | optional | См. типы и пример выше |
| `count` | `number \| undefined` | optional | См. типы и пример выше |
| `variant` | `InputVariant \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `maxCount` | `number \| undefined` | optional | См. типы и пример выше |
| `inputClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `labelActive` | `boolean \| undefined` | optional | См. типы и пример выше |
| `ref` | `Ref<HTMLInputElement> \| undefined` | optional | См. типы и пример выше |
| `subtitle` | `string \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `textHint` | TEXT | `hint`; значения см. template |
| `Hint` | BOOLEAN | `hint / hintError`; значения см. template |
| `icon-left` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textError` | TEXT | `hintError`; значения см. template |
| `requiredMark` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textPlaceholder` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textLabel` | TEXT | `label`; значения см. template |
| `textFilled` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Placeholder` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default, Hover, Selected, Filled in, Input text, Mask, Filled in-Hover | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Md, Sm, Xs | `size`; значения см. template |
| `Error` | Off, On | `error`; значения см. template |
| `Disable` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Filled` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Mask` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma icon swap cannot be transformed into an exact runtime import automatically.

Temporary mapping between Figma mask state and runtime API.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Публикация текущего template ещё не подтверждена.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
