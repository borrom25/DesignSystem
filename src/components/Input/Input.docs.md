# Input

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Input
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { Input } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Input/Input.tsx
types: src/components/Input/Input.types.ts
localExport: src/components/Input/index.ts
publicExport: src/index.ts
storybook: src/stories/Input.stories.tsx
figmaComponent: Input
figmaNodeId: 4296:4114
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4296-4114
codeConnect: src/components/Input/Input.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Input } from "borrom-ds-test";
import { Check } from "lucide-react";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Input
      size="xs"













    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Input/Input.tsx](Input.tsx) |
| Props / shared types | [src/components/Input/Input.types.ts](Input.types.ts) |
| Props / shared types | [src/types/field.ts](../../types/field.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Input.stories.tsx](../../stories/Input.stories.tsx) |
| Code Connect | [src/components/Input/Input.figma.js](Input.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `variant` | `InputVariant \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `iconLeft` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `iconRight` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `prefix` | `ReactNode` | optional | См. типы и пример выше |
| `suffix` | `ReactNode` | optional | См. типы и пример выше |
| `count` | `number \| undefined` | optional | См. типы и пример выше |
| `maxCount` | `number \| undefined` | optional | См. типы и пример выше |
| `inputClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `clearable` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onClear` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `labelActive` | `boolean \| undefined` | optional | См. типы и пример выше |
| `ref` | `Ref<HTMLInputElement> \| undefined` | optional | См. типы и пример выше |
| `label` | `string \| undefined` | optional | См. типы и пример выше |
| `subtitle` | `string \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |
| `hintError` | `string \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| ` <slotLeft>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotRight>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textHint` | TEXT | `hint`; значения см. template |
| `Hint` | BOOLEAN | `hint / hintError`; значения см. template |
| `slotLeft` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `slotRight` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `icon-left` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Icon-right` | BOOLEAN | `iconRight`; значения см. template |
| `Counter` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textError` | TEXT | `hintError`; значения см. template |
| `requiredMark` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `↳ textPlaceholder` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textLabel` | TEXT | `label`; значения см. template |
| `textFilled` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Placeholder` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Label` | BOOLEAN | `label`; значения см. template |
| `Suffix` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textSuffix` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default, Hover, Selected, Filled in, Input text, Filled in Hover | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Error` | Off, On | `error`; значения см. template |
| `Disable` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Filled` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: current runtime API expects icon components and ReactNode
for slots, while Figma swaps/slots here do not provide direct runtime snippets.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
