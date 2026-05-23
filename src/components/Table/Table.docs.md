# Table

Документация для связи Figma component set `Table` с публичным runtime-компонентом `Table`.

```text
src/components/Table/Table.docs.md
```

Парный Code Connect файл:

```text
src/components/Table/Table.figma.js
```

## Machine-readable summary

```yaml
component: Table
package: borrom-ds-test
import: import { Table } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Table/Table.tsx
implementation: src/components/DataTable/DataTable.tsx
types: src/components/DataTable/types/DataTable.types.ts
localExport: src/components/Table/index.ts
publicExport: src/index.ts
storybook: src/stories/AppLayout.stories.tsx
figmaComponent: Table
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3368-8739
figmaNodeId: 3368:8739
codeConnect: src/components/Table/Table.figma.js
```

## Public usage

```tsx
import { Table } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

const data = [
  {
    id: "1",
    title: "Админка кураторов",
    product: "Личный кабинет",
    owner: "Елена П.",
  },
];

const columns = [
  { accessorKey: "title", header: "Название", size: 220 },
  { accessorKey: "product", header: "Продукт", size: 180 },
  { accessorKey: "owner", header: "Ответственный", size: 180 },
];

export function Example() {
  return (
    <Table
      data={data}
      columns={columns}
      showToolbar
      toolbarProps={{
        searchPlaceholder: "Поиск",
        rowCountLabel: "Строки",
      }}
      enableRowSelection
      stickyHeader
      striped
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Public facade | `src/components/Table/Table.tsx` |
| Runtime implementation | `src/components/DataTable/DataTable.tsx` |
| Public props | `src/components/DataTable/types/DataTable.types.ts` |
| Column helper | `src/components/DataTable/createDataTableColumnHelper.ts` |
| Controller hook | `src/components/DataTable/hooks/useDataTableController.ts` |
| Filter helpers | `src/components/DataTable/dataTableFilter.ts` |
| Internal UI pieces | `src/components/DataTable/ui/*` |
| Styles entry | `src/components/DataTable/styles/index.ts` |
| Local export | `src/components/Table/index.ts` |
| Storybook usage | `src/stories/AppLayout.stories.tsx` |
| Code Connect | `src/components/Table/Table.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Property 1` | `Default` | - | - | `Default` | Единственный опубликованный variant; runtime API не требует отдельного prop |
| `Head_L2` | boolean | `showToolbar` | `boolean` | `false` | Code Connect включает `showToolbar` и базовый `toolbarProps`, когда Figma показывает header area |
| Header search | nested `Search/Autocomplete` | `toolbarProps.searchPlaceholder`, `toolbarProps.searchValue`, `toolbarProps.onSearchChange` | controlled search props | - | В runtime это часть `DataTableToolbar`, не отдельный публичный `TableHeader` |
| Row counter | text layer | `toolbarProps.rowCountLabel`, `toolbarProps.rowCountValue` | `ReactNode` | generated row count | Runtime получает `rowCount` из количества строк и позволяет переопределить label/value |
| Header action button | nested `Button / Main` | `toolbarProps.actions`, `toolbarProps.onActionChange` | `ButtonDropItem[]` | - | В runtime это dropdown actions через `ButtonDrop`, а не произвольная кнопка |
| `<slotHeaders>` | slot | `columns` | `ColumnDef<TData>[]` | required | Temporary mapping: headers генерируются из `columns`, слот напрямую не передается |
| `<slotCell>` | slot | `data`, `columns[].cell` | `TData[]`, cell renderer | required | Temporary mapping: cells генерируются из данных и render-функций колонок |
| Header filter icon | nested `IconButton` | `columns[].filter`, `filters` | filter config + controller state | - | Колонка показывает filter action, если у column definition есть `filter` и передан `filters` |
| Header sort icon | nested `IconButton` | `enableSorting`, column sorting options | `boolean`, TanStack options | `true` | Sorting включен по умолчанию и управляется `sorting/onSortingChange` при controlled mode |
| Header resize handle | `ItemColumn` boolean `Action` / right vertical marker | `enableColumnResizing`, `columnResizeMode`, `columns[].size/minSize/maxSize`, `columns[].enableResizing` | `boolean`, `onChange`/`onEnd`, column sizing props | `enableColumnResizing=true`, `columnResizeMode="onChange"` | Если в Figma у header column есть правый marker растяжки, в коде колонка должна оставаться resizable. Для отключения на конкретной колонке используй `enableResizing: false` |
| Selection checkbox column | nested `CheckBox` | `enableRowSelection` | `boolean` or row predicate | `false` | Service column создается runtime-компонентом |
| Select all checkbox | header `CheckBox` | `enableRowSelection`, `rowSelection`, `onRowSelectionChange` | selection props | internal state | Верхний checkbox выбирает все текущие selectable rows; `popoverAction` получает полный `selectedRows` и корректный `selectedCount` |
| Row action menu | nested `IconButton` / menu | `rowActions` | `(row) => ButtonDropItem[]` | - | Service column создается runtime-компонентом |
| Scroll bars | nested `Scroll bar` | native scroll / `virtualized` | `boolean` | `false` | Runtime использует обычный scroll container; отдельный ScrollBar component не нужен |
| `popoveAction` | overlay component | `popoverAction` | `boolean` or `DataTablePopoverActionProps<TData>` | `false` | Показывается только при `selectedRows.length > 0`; обычно используется вместе с `enableRowSelection` |
| `Drop` | expand/collapse markers | `enableNestedRows`, `expanded`, `onExpandedChange`, `getSubRows` | nested rows props | `false` | Expand/collapse controls создаются runtime-компонентом; см. `DataTable` docs для row-level mapping |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Basic table | Yes | pass `data` and `columns` |
| Toolbar | Yes | `showToolbar` with `toolbarProps` |
| Search | Yes | `toolbarProps.searchValue`, `toolbarProps.onSearchChange` or `useDataTableController` |
| Row count | Yes | automatic `rowCount`, optional `toolbarProps.rowCountLabel/rowCountValue` |
| Toolbar actions | Yes | `toolbarProps.actions` and `toolbarProps.onActionChange` |
| Sorting | Yes | enabled by default, controlled through `sorting/onSortingChange` if needed |
| Column resizing | Yes | `enableColumnResizing`, `columnResizeMode`, column `size/minSize/maxSize`; double click on the handle resets width |
| Column filters | Yes | column `filter` config plus `filters` from `useDataTableController` |
| Row selection | Yes | `enableRowSelection`, `rowSelection`, `onRowSelectionChange` |
| Select all | Yes | header checkbox from `enableRowSelection`; counts all selected rows in `popoverAction` |
| Selection action bar | Yes | `popoverAction`, optional `selectedLabel`, `children`, `onClose` |
| Row actions | Yes | `rowActions={(row) => items}` |
| Sticky header | Yes | `stickyHeader` |
| Sticky selection/actions columns | Yes | `stickySelectionColumn`, `stickyActionsColumn` |
| Virtualized body | Yes | `virtualized`, `rowHeight`, `overscan` |
| Infinite scroll | Yes | `hasMore`, `isFetchingMore`, `onLoadMore` |
| Loading / empty | Yes | `loading`, `loadingState`, `emptyState` |
| Striped / bordered / compact | Yes | `striped`, `bordered`, `compact` |
| Tree rows / expand markers | Yes | `enableNestedRows`, `getSubRows`, `expanded`, `onExpandedChange` |

## Design matching notes

- Figma node `3368:8739` is a published component set named `Table`.
- Public package API exposes `Table` from `borrom-ds-test`; internally it delegates to `DataTable`.
- Figma `ItemColumn`, `Line`, table `Header`, scroll bars and row action pieces are implementation details for the design file. In code they are generated by `Table` from `data`, `columns`, `filters`, selection state and `rowActions`.
- In `ItemColumn`, the right vertical `Action` marker on a header means the column is resizable. Do not implement it as a decorative icon; keep `enableColumnResizing` enabled and provide column sizing through `size`, `minSize` and `maxSize`.
- Figma node `6371:851` is `popoveAction`; in runtime it maps to the table-level `popoverAction` prop. It is not rendered until row selection has at least one selected row.
- When the header checkbox selects all rows, runtime uses TanStack row selection, so `popoverAction` receives every selected row in `selectedRows` and `selectedCount` reflects the total selected amount.
- Connected nested components already cover reusable primitives inside the table: `InputSearch`, `Button`, `IconButton`, `CheckBox`, `ListItem`, `Popover`.
- The current Storybook example is embedded in `Layout/AppLayout`, where `Table` is used with `useDataTableController`, status tabs, toolbar actions, filters, virtualized rows and `TableColumnsModal`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| Figma `<slotHeaders>` | sample `columns` in Code Connect | Runtime API intentionally generates headers from TanStack column definitions | Keep mapping data-driven; do not expose header slots unless product needs manual header composition |
| Figma `<slotCell>` | sample `data` and default cell renderers | Runtime API intentionally generates cells from row data and column renderers | Use `columns[].cell` for custom content |
| `Head_L2` | `showToolbar` + minimal `toolbarProps` | Figma names the visual header area differently from runtime toolbar API | Rename/clarify Figma property if designers need exact Dev Mode semantics |
| `ItemColumn` `Action` marker | `enableColumnResizing` + column sizing props | Runtime renders the resize handle from TanStack column resize state | Keep this as table behavior, not a standalone nested component |
| `popoveAction` visual slot | `popoverAction.children` | Runtime accepts ReactNode or render function with `{ selectedCount, selectedRows, table, hide }` | Keep actions in the prop; do not implement a separate floating panel outside the table |
| Dedicated `Table` runtime file | facade to `DataTable` | Public API is named `Table`, implementation folder is `DataTable` | Keep facade so Figma docs and tracker can point to the public component name |

## Examples

### Basic

```tsx
<Table data={data} columns={columns} />
```

### With Resizable Columns

```tsx
const columns = [
  {
    accessorKey: "title",
    header: "Название",
    size: 220,
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
];

<Table
  data={data}
  columns={columns}
  enableColumnResizing
  columnResizeMode="onChange"
/>;
```

### With Selection Action Bar

```tsx
<Table
  data={data}
  columns={columns}
  getRowId={(row) => row.id}
  enableRowSelection
  popoverAction={{
    selectedLabel: (count) => `Выбрано: ${count}`,
    children: ({ selectedRows, hide }) => (
      <Button
        size={Size.Xs}
        type={Type.Flat}
        color={Color.Brand}
        onClick={() => {
          archiveRows(selectedRows.map((row) => row.original));
          hide();
        }}
      >
        Архивировать
      </Button>
    ),
  }}
/>;
```

### With Toolbar

```tsx
<Table
  data={data}
  columns={columns}
  showToolbar
  toolbarProps={{
    searchValue,
    onSearchChange: setSearchValue,
    searchPlaceholder: "Поиск",
    rowCountLabel: "Строки",
  }}
/>
```

### With Selection And Row Actions

```tsx
<Table
  data={data}
  columns={columns}
  enableRowSelection
  rowActions={() => [
    { label: "Открыть", value: "open" },
    { label: "Архивировать", value: "archive" },
  ]}
/>
```

### With Controller

```tsx
const tableController = useDataTableController({
  columns,
  toolbarProps: {
    searchPlaceholder: "Поиск",
  },
});

<Table
  data={data}
  columns={columns}
  showToolbar
  toolbarProps={tableController.toolbarProps}
  filters={tableController.filters}
/>;
```
