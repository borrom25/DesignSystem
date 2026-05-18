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
| Selection checkbox column | nested `CheckBox` | `enableRowSelection` | `boolean` or row predicate | `false` | Service column создается runtime-компонентом |
| Row action menu | nested `IconButton` / menu | `rowActions` | `(row) => ButtonDropItem[]` | - | Service column создается runtime-компонентом |
| Scroll bars | nested `Scroll bar` | native scroll / `virtualized` | `boolean` | `false` | Runtime использует обычный scroll container; отдельный ScrollBar component не нужен |
| `popoveAction` | overlay component | - | - | - | В текущем `TableProps` нет selection action bar; см. temporary mappings |
| `Drop` | expand/collapse markers | - | - | - | В текущем `TableProps` нет tree/expanded rows API |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Basic table | Yes | pass `data` and `columns` |
| Toolbar | Yes | `showToolbar` with `toolbarProps` |
| Search | Yes | `toolbarProps.searchValue`, `toolbarProps.onSearchChange` or `useDataTableController` |
| Row count | Yes | automatic `rowCount`, optional `toolbarProps.rowCountLabel/rowCountValue` |
| Toolbar actions | Yes | `toolbarProps.actions` and `toolbarProps.onActionChange` |
| Sorting | Yes | enabled by default, controlled through `sorting/onSortingChange` if needed |
| Column filters | Yes | column `filter` config plus `filters` from `useDataTableController` |
| Row selection | Yes | `enableRowSelection`, `rowSelection`, `onRowSelectionChange` |
| Row actions | Yes | `rowActions={(row) => items}` |
| Sticky header | Yes | `stickyHeader` |
| Sticky selection/actions columns | Yes | `stickySelectionColumn`, `stickyActionsColumn` |
| Virtualized body | Yes | `virtualized`, `rowHeight`, `overscan` |
| Infinite scroll | Yes | `hasMore`, `isFetchingMore`, `onLoadMore` |
| Loading / empty | Yes | `loading`, `loadingState`, `emptyState` |
| Striped / bordered / compact | Yes | `striped`, `bordered`, `compact` |
| Tree rows / expand markers | No | not exposed in current `TableProps` |
| Selection action bar | No | not exposed in current `TableProps` |

## Design matching notes

- Figma node `3368:8739` is a published component set named `Table`.
- Public package API exposes `Table` from `borrom-ds-test`; internally it delegates to `DataTable`.
- Figma `ItemColumn`, `Line`, table `Header`, scroll bars and row action pieces are implementation details for the design file. In code they are generated by `Table` from `data`, `columns`, `filters`, selection state and `rowActions`.
- Connected nested components already cover reusable primitives inside the table: `InputSearch`, `Button`, `IconButton`, `CheckBox`, `ListItem`, `Popover`.
- The current Storybook example is embedded in `Layout/AppLayout`, where `Table` is used with `useDataTableController`, status tabs, toolbar actions, filters, virtualized rows and `TableColumnsModal`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| Figma `<slotHeaders>` | sample `columns` in Code Connect | Runtime API intentionally generates headers from TanStack column definitions | Keep mapping data-driven; do not expose header slots unless product needs manual header composition |
| Figma `<slotCell>` | sample `data` and default cell renderers | Runtime API intentionally generates cells from row data and column renderers | Use `columns[].cell` for custom content |
| `Head_L2` | `showToolbar` + minimal `toolbarProps` | Figma names the visual header area differently from runtime toolbar API | Rename/clarify Figma property if designers need exact Dev Mode semantics |
| `popoveAction` | documented only | Current `TableProps` has no selection action bar | Add a public prop only after confirming expected behavior and API |
| `Drop` expand markers | documented only | Current `TableProps` has no tree/expanded rows API | Add expandable rows as a separate feature if it is required by product tables |
| Dedicated `Table` runtime file | facade to `DataTable` | Public API is named `Table`, implementation folder is `DataTable` | Keep facade so Figma docs and tracker can point to the public component name |

## Examples

### Basic

```tsx
<Table data={data} columns={columns} />
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
