# TableColumnsModal

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: TableColumnsModal
package: borrom-ds-test
import: import { TableColumnsModal } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/TableColumnsModal/TableColumnsModal.tsx
types: src/components/TableColumnsModal/TableColumnsModal.types.ts
localExport: src/components/TableColumnsModal/index.ts
publicExport: src/index.ts
storybook: null
figmaComponent: Filter
figmaNodeId: 3456:25084
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3456-25084
codeConnect: src/components/TableColumnsModal/TableColumnsModal.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { useState } from "react";
import { TableColumnsModal } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

function ColumnSettingsExample() {
    const [visibleColumnIds, setVisibleColumnIds] = useState<string[]>(["title", "product"]);
    const [isColumnSettingsOpen, setIsColumnSettingsOpen] = useState(true);
    return (
  <TableColumnsModal
    open={isColumnSettingsOpen}
    value={visibleColumnIds}
    options={[
      { id: "title", label: "Название" },
      { id: "product", label: "Продукт" },
      { id: "owner", label: "Ответственный" },
      { id: "team", label: "Команда" },
    ]}
    onApply={(nextValue) => {
      setVisibleColumnIds(nextValue);
    }}
    onOpenChange={setIsColumnSettingsOpen}
    title="Настройка таблицы"
    cancelLabel="Отмена"
    applyLabel="Сохранить"
  />
    );
  }
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/TableColumnsModal/TableColumnsModal.tsx](TableColumnsModal.tsx) |
| Props / shared types | [src/components/TableColumnsModal/TableColumnsModal.types.ts](TableColumnsModal.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Code Connect | [src/components/TableColumnsModal/TableColumnsModal.figma.js](TableColumnsModal.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `columns` | `ColumnDef<TData>[] \| undefined` | optional | См. типы и пример выше |
| `options` | `TableColumnsModalOption<T>[] \| undefined` | optional | См. типы и пример выше |
| `open` | `boolean` | required (зависит от union) | См. типы и пример выше |
| `onOpenChange` | `((open: boolean) => void) \| undefined` | optional | См. типы и пример выше |
| `value` | `T[]` | required (зависит от union) | См. типы и пример выше |
| `onApply` | `((value: T[]) => void) \| undefined` | optional | См. типы и пример выше |
| `title` | `ReactNode` | optional | См. типы и пример выше |
| `subtitle` | `ReactNode` | optional | См. типы и пример выше |
| `cancelLabel` | `ReactNode` | optional | См. типы и пример выше |
| `applyLabel` | `ReactNode` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `showCloseButton` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotHead>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotBody>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `slotBody` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Property 1` | Default, Variant5, Variant4 | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `open`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping:
Figma exposes <slotHead> and <slotBody>, while TableColumnsModal receives
column/options data and owns the list rendering internally. Only
Property 1=Default represents the column visibility picker flow. Variant2,
Variant3, Variant4 and Variant5 are documented as filter flows for a concrete
table column.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
