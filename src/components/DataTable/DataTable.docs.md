# Table

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Table
package: borrom-ds-test
packageVersion: 0.0.72
import: import { Table } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/DataTable/DataTable.tsx
types: src/components/DataTable/types/DataTable.types.ts
localExport: src/components/DataTable/index.ts
publicExport: src/index.ts
storybook: src/stories/DataTable.stories.tsx
figmaComponent: Table
figmaNodeId: 3368:8739
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=3368-8739
codeConnect: src/components/DataTable/DataTable.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Button, Color, Table, Size, Type } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Table
      data={[
      {
        id: "1",
        name: "Админка кураторов",
        owner: "Елена П.",
        status: "Активно",
      },
      {
        id: "2",
        name: "Воронка обучения",
        owner: "Кирилл Л.",
        status: "Пауза",
      },
    ]}
      columns={[
        {
          accessorKey: "name",
          header: "Название",
          size: 240,
          minSize: 160,
          maxSize: 420,
        },
        {
          accessorKey: "owner",
          header: "Ответственный",
          size: 180,
          minSize: 140,
          maxSize: 320,
        },
        {
          accessorKey: "status",
          header: "Статус",
          size: 160,
          minSize: 120,
          maxSize: 280,
        },
      ]}

      enableRowSelection
      getRowId={(row) => row.id}


      popoverAction={{
        selectedLabel: (count) => `Выбрано: ${count}`,
        children: ({ selectedRows, hide }) => (
          <Button
            size={Size.Xs}
            type={Type.Flat}
            color={Color.Brand}
            onClick={() => {
              console.log(
                "Действие для выбранных строк:",
                selectedRows.map((row) => row.original)
              );
              hide();
            }}
          >
            Применить
          </Button>
        ),
      }}

      enableColumnResizing
      columnResizeMode="onChange"
      rowActions={() => [{ label: "Открыть", value: "open" }]}
      stickyHeader
      striped
    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/DataTable/DataTable.tsx](DataTable.tsx) |
| Props / shared types | [src/components/DataTable/types/DataTable.types.ts](types/DataTable.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/DataTable.stories.tsx](../../stories/DataTable.stories.tsx) |
| Code Connect | [src/components/DataTable/DataTable.figma.js](DataTable.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `data` | `TData[]` | required (зависит от union) | См. типы и пример выше |
| `columns` | `ColumnDef<TData, any>[]` | required (зависит от union) | См. типы и пример выше |
| `sorting` | `SortingState \| undefined` | optional | См. типы и пример выше |
| `onSortingChange` | `OnChangeFn<SortingState> \| undefined` | optional | См. типы и пример выше |
| `filters` | `TableFiltersState<FilterSchema> \| undefined` | optional | См. типы и пример выше |
| `globalFilter` | `string \| undefined` | optional | См. типы и пример выше |
| `onGlobalFilterChange` | `OnChangeFn<string> \| undefined` | optional | См. типы и пример выше |
| `columnVisibility` | `VisibilityState \| undefined` | optional | См. типы и пример выше |
| `onColumnVisibilityChange` | `OnChangeFn<VisibilityState> \| undefined` | optional | См. типы и пример выше |
| `rowSelection` | `RowSelectionState \| undefined` | optional | См. типы и пример выше |
| `onRowSelectionChange` | `OnChangeFn<RowSelectionState> \| undefined` | optional | См. типы и пример выше |
| `expanded` | `ExpandedState \| undefined` | optional | См. типы и пример выше |
| `onExpandedChange` | `OnChangeFn<ExpandedState> \| undefined` | optional | См. типы и пример выше |
| `enableSorting` | `boolean \| undefined` | optional | См. типы и пример выше |
| `enableFiltering` | `boolean \| undefined` | optional | См. типы и пример выше |
| `enableColumnFilters` | `boolean \| undefined` | optional | См. типы и пример выше |
| `enableGlobalFilter` | `boolean \| undefined` | optional | См. типы и пример выше |
| `enableRowSelection` | `boolean \| ((row: Row<TData>) => boolean) \| undefined` | optional | См. типы и пример выше |
| `enableMultiRowSelection` | `boolean \| undefined` | optional | См. типы и пример выше |
| `manualSorting` | `boolean \| undefined` | optional | См. типы и пример выше |
| `manualFiltering` | `boolean \| undefined` | optional | См. типы и пример выше |
| `manualPagination` | `boolean \| undefined` | optional | См. типы и пример выше |
| `enableColumnResizing` | `boolean \| undefined` | optional | См. типы и пример выше |
| `columnResizeMode` | `ColumnResizeMode \| undefined` | optional | См. типы и пример выше |
| `virtualized` | `boolean \| undefined` | optional | См. типы и пример выше |
| `rowHeight` | `number \| undefined` | optional | См. типы и пример выше |
| `overscan` | `number \| undefined` | optional | См. типы и пример выше |
| `hasMore` | `boolean \| undefined` | optional | См. типы и пример выше |
| `isFetchingMore` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onLoadMore` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `onScrollEnd` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `loadMoreThreshold` | `number \| undefined` | optional | См. типы и пример выше |
| `loading` | `boolean \| undefined` | optional | См. типы и пример выше |
| `emptyState` | `ReactNode` | optional | См. типы и пример выше |
| `loadingState` | `ReactNode` | optional | См. типы и пример выше |
| `stickyHeader` | `boolean \| undefined` | optional | См. типы и пример выше |
| `stickySelectionColumn` | `boolean \| undefined` | optional | См. типы и пример выше |
| `stickyActionsColumn` | `boolean \| undefined` | optional | См. типы и пример выше |
| `striped` | `boolean \| undefined` | optional | См. типы и пример выше |
| `bordered` | `boolean \| undefined` | optional | См. типы и пример выше |
| `compact` | `boolean \| undefined` | optional | См. типы и пример выше |
| `embedded` | `boolean \| undefined` | optional | См. типы и пример выше |
| `embeddedLeadingInset` | `number \| undefined` | optional | См. типы и пример выше |
| `getRowId` | `((originalRow: TData, index: number) => string) \| undefined` | optional | См. типы и пример выше |
| `enableNestedRows` | `boolean \| undefined` | optional | См. типы и пример выше |
| `getSubRows` | `((originalRow: TData, index: number) => TData[] \| undefined) \| undefined` | optional | См. типы и пример выше |
| `maxExpandedDepth` | `number \| undefined` | optional | См. типы и пример выше |
| `renderExpandedContent` | `TableExpandedContentRenderer<TData> \| undefined` | optional | См. типы и пример выше |
| `getRowCanExpandContent` | `((row: Row<TData>) => boolean) \| undefined` | optional | См. типы и пример выше |
| `expandedContentClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `expandedContentEstimateSize` | `number \| undefined` | optional | См. типы и пример выше |
| `onRowClick` | `((row: Row<TData>) => void) \| undefined` | optional | См. типы и пример выше |
| `onRowDoubleClick` | `((row: Row<TData>) => void) \| undefined` | optional | См. типы и пример выше |
| `editable` | `boolean \| undefined` | optional | См. типы и пример выше |
| `editableCellIds` | `string[] \| undefined` | optional | См. типы и пример выше |
| `isCellEditable` | `TableCellEditablePredicate<TData> \| undefined` | optional | См. типы и пример выше |
| `editablePlaceholder` | `string \| undefined` | optional | См. типы и пример выше |
| `onCellDraftChange` | `((event: TableCellValueChangeEvent<TData>) => void) \| undefined` | optional | См. типы и пример выше |
| `onCellValueChange` | `((event: TableCellValueChangeEvent<TData>) => void) \| undefined` | optional | См. типы и пример выше |
| `cellEditor` | `TableCellEditorRenderer<TData> \| undefined` | optional | См. типы и пример выше |
| `tableClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `headerClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `bodyClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `rowClassName` | `string \| ((row: Row<TData>) => string) \| undefined` | optional | См. типы и пример выше |
| `cellClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `toolbarSlot` | `ReactNode` | optional | См. типы и пример выше |
| `footerSlot` | `ReactNode` | optional | См. типы и пример выше |
| `showToolbar` | `boolean \| undefined` | optional | См. типы и пример выше |
| `toolbarProps` | `Omit<DataTableToolbarProps, "rowCount"> \| undefined` | optional | См. типы и пример выше |
| `rowActions` | `((row: Row<TData>) => ButtonDropItem[] \| null \| undefined) \| undefined` | optional | См. типы и пример выше |
| `popoverAction` | `boolean \| DataTablePopoverActionProps<TData> \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `tabsOverflow` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotHeaders>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotCell>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `popoveAction` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slot>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slsotHeader>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Type` | Default | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `loading`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: the former Figma row node 3368:8130 was removed.
This legacy file now targets the public Table component.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
