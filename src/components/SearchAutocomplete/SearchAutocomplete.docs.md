# SearchAutocomplete

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: SearchAutocomplete
package: borrom-ds-test
import: import { SearchAutocomplete } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/SearchAutocomplete/SearchAutocomplete.tsx
types: src/components/SearchAutocomplete/SearchAutocomplete.types.ts
localExport: src/components/SearchAutocomplete/index.ts
publicExport: src/index.ts
storybook: null
figmaComponent: Search/Autocomplete
figmaNodeId: 18:2407
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=18-2407
codeConnect: src/components/Input/InputSearch.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { SearchAutocomplete } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<SearchAutocomplete
      placeholder="Search"



    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/SearchAutocomplete/SearchAutocomplete.tsx](SearchAutocomplete.tsx) |
| Props / shared types | [src/components/SearchAutocomplete/SearchAutocomplete.types.ts](SearchAutocomplete.types.ts) |
| Props / shared types | [src/components/Input/Input.types.ts](../Input/Input.types.ts) |
| Props / shared types | [src/types/field.ts](../../types/field.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Code Connect | [src/components/Input/InputSearch.figma.js](../Input/InputSearch.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `onChange` | `ChangeEventHandler<HTMLInputElement> \| undefined` | optional | См. типы и пример выше |
| `onValueChange` | `((value: string) => void) \| undefined` | optional | См. типы и пример выше |
| `variant` | `InputVariant \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `maxCount` | `number \| undefined` | optional | См. типы и пример выше |
| `inputClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `clearable` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onClear` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `labelActive` | `boolean \| undefined` | optional | См. типы и пример выше |
| `ref` | `Ref<HTMLInputElement> \| undefined` | optional | См. типы и пример выше |
| `subtitle` | `string \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Counter` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textCounter` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default, Hover, Selected, Filled, Disable | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma Counter/Size have no SearchAutocomplete props.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Публикация исполняемого template не подтверждена; ограничение MCP описано в docs/figma-publication.md.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
