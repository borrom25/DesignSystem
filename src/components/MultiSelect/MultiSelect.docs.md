# MultiSelect

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: MultiSelect
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { MultiSelect } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/MultiSelect/MultiSelect.tsx
types: src/types/field.ts
localExport: src/components/MultiSelect/index.ts
publicExport: src/index.ts
storybook: src/stories/MultiSelect.stories.tsx
figmaComponent: Selected / Multiple
figmaNodeId: 5351:1298
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=5351-1298
codeConnect: src/components/MultiSelect/MultiSelect.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { MultiSelect } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<MultiSelect
      options={[
  { value: "selected", label: "Пример" },
  { value: "option-2", label: "Option 2" },
  { value: "option-3", label: "Option 3" },
]}
      size="xs"
      placeholder="Select items..."









    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/MultiSelect/MultiSelect.tsx](MultiSelect.tsx) |
| Props / shared types | [src/types/field.ts](../../types/field.ts) |
| Props / shared types | [src/components/MultiSelect/MultiSelect.types.ts](MultiSelect.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/MultiSelect.stories.tsx](../../stories/MultiSelect.stories.tsx) |
| Code Connect | [src/components/MultiSelect/MultiSelect.figma.js](MultiSelect.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `label` | `string \| undefined` | optional | См. типы и пример выше |
| `subtitle` | `string \| undefined` | optional | См. типы и пример выше |
| `required` | `boolean \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |
| `hintError` | `string \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `value` | `T[] \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `T[] \| undefined` | optional | См. типы и пример выше |
| `open` | `boolean \| undefined` | optional | См. типы и пример выше |
| `defaultOpen` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onOpenChange` | `((open: boolean) => void) \| undefined` | optional | См. типы и пример выше |
| `options` | `MultiSelectOption<T>[] \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `placeholder` | `string \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `name` | `string \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `triggerClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `contentClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `itemClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `maxHeight` | `number \| "available" \| undefined` | optional | См. типы и пример выше |
| `matchTriggerWidth` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onScrollEnd` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `scrollEndOffset` | `number \| undefined` | optional | См. типы и пример выше |
| `side` | `"top" \| "bottom" \| "left" \| "right" \| undefined` | optional | См. типы и пример выше |
| `sideOffset` | `number \| undefined` | optional | См. типы и пример выше |
| `align` | `"start" \| "center" \| "end" \| undefined` | optional | См. типы и пример выше |
| `isLoading` | `boolean \| undefined` | optional | См. типы и пример выше |
| `hasMore` | `boolean \| undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | optional | См. типы и пример выше |
| `renderValue` | `MultiSelectRenderValue<T> \| undefined` | optional | См. типы и пример выше |
| `renderItem` | `MultiSelectRenderItem<T> \| undefined` | optional | См. типы и пример выше |
| `selectedLabel` | `string \| undefined` | optional | См. типы и пример выше |
| `search` | `boolean \| undefined` | optional | См. типы и пример выше |
| `searchValue` | `string \| undefined` | optional | См. типы и пример выше |
| `defaultSearchValue` | `string \| undefined` | optional | См. типы и пример выше |
| `onSearchChange` | `((value: string) => void) \| undefined` | optional | См. типы и пример выше |
| `searchPlaceholder` | `string \| undefined` | optional | См. типы и пример выше |
| `searchClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `getSearchText` | `((option: MultiSelectOption<T>) => string) \| undefined` | optional | См. типы и пример выше |
| `selectAll` | `boolean \| undefined` | optional | См. типы и пример выше |
| `selectAllLabel` | `string \| undefined` | optional | См. типы и пример выше |
| `clearable` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onClear` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `returnAll` | `false \| undefined` | optional | См. типы и пример выше |
| `onValueChange` | `((value: T[]) => void) \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `textHint` | TEXT | `hint`; значения см. template |
| `Hint` | BOOLEAN | `hint / hintError`; значения см. template |
| `textError` | TEXT | `hintError`; значения см. template |
| `requiredMark` | BOOLEAN | `required`; значения см. template |
| `textPlaceholder` | TEXT | `placeholder`; значения см. template |
| `textLabel` | TEXT | `label`; значения см. template |
| `textFilled` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Placeholder` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Label` | BOOLEAN | `label`; значения см. template |
| `State` | Default, Hover, Selected, Filled in, Disable, Filled in Hover | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Error` | Off, On | `error`; значения см. template |
| `Disable` | Off, On | `disabled`; значения см. template |
| `Filled` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `open`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma component doesn't expose selected items as structured list.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
