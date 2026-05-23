# DataTable

Документация для связи Figma component set `Line` с публичным runtime-компонентом `DataTable`.

```text
src/components/DataTable/DataTable.docs.md
```

Парный Code Connect файл:

```text
src/components/DataTable/DataTable.figma.js
```

## Machine-readable summary

```yaml
component: DataTable
package: borrom-ds-test
import: import { DataTable } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/DataTable/DataTable.tsx
implementationExport: export function Table<TData>
types: src/components/DataTable/types/DataTable.types.ts
localExport: src/components/DataTable/index.ts
publicExport: src/index.ts
storybook: src/stories/DataTable.stories.tsx
figmaComponent: Line
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3368-8130
figmaNodeId: 3368:8130
codeConnect: src/components/DataTable/DataTable.figma.js
```

## Public usage

```tsx
import { DataTable } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

const columns = [
  { accessorKey: "name", header: "Название", size: 240 },
  { accessorKey: "owner", header: "Ответственный", size: 180 },
  { accessorKey: "status", header: "Статус", size: 160 },
];

const data = [
  {
    id: "1",
    name: "Админка кураторов",
    owner: "Елена П.",
    status: "Активно",
  },
];

export function Example() {
  return (
    <DataTable
      data={data}
      columns={columns}
      getRowId={(row) => row.id}
      enableRowSelection
      rowActions={() => [{ label: "Открыть", value: "open" }]}
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/DataTable/DataTable.tsx` |
| Public props | `src/components/DataTable/types/DataTable.types.ts` |
| Local export | `src/components/DataTable/index.ts` |
| Public alias | `src/components/index.ts`, `src/index.ts` |
| Column helper | `src/components/DataTable/createDataTableColumnHelper.ts` |
| Selection / expander columns | `src/components/DataTable/utils/columnFactories.tsx` |
| Column composition | `src/components/DataTable/hooks/useDataTableColumns.tsx` |
| Table state hook | `src/components/DataTable/hooks/useDataTable.ts` |
| Styles entry | `src/components/DataTable/styles/index.ts` |
| Storybook | `src/stories/DataTable.stories.tsx` |
| Code Connect | `src/components/DataTable/DataTable.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Type` | `Basic` | `enableRowSelection` | `true` | `false` | Basic row in Figma contains the checkbox service cell. Runtime generates header and row checkboxes through `createSelectionColumn` |
| `Type` | `Drop` | `enableNestedRows` | `true` | `false` | Drop row in Figma contains the chevron/accordion service cell. Runtime generates expander controls through `createExpanderColumn` |
| Checkbox state | nested `Сheckbox` | `rowSelection`, `onRowSelectionChange` | `RowSelectionState`, `OnChangeFn<RowSelectionState>` | internal state | Use controlled props when the selected rows must be stored outside the table |
| Select all checkbox | header `Сheckbox` | `enableRowSelection`, `rowSelection`, `onRowSelectionChange` | selection props | internal state | Header checkbox selects all current selectable rows and updates `popoverAction` count |
| `popoveAction` | Figma node `6371:851` | `popoverAction` | `boolean` or `DataTablePopoverActionProps<TData>` | `false` | Floating action panel appears only when one or more rows are selected |
| Nested rows state | nested `Drop` | `expanded`, `onExpandedChange` | `ExpandedState`, `OnChangeFn<ExpandedState>` | internal state | Use controlled props when expanded rows must be stored outside the table |
| Nested row children | Figma `<Slot>` under `Type=Drop` | `getSubRows` or `children` field | `(row) => row.children` | default reads `children` | Runtime renders nested data rows, not a free visual slot |
| Max nesting | visual indentation | `maxExpandedDepth` | `number` | `4` | Rows deeper than the limit are not expandable |
| Row id | implicit row identity | `getRowId` | `(row) => string` | TanStack index id | Required for stable selection/expanded state when data can be reordered |
| Header resize handle | nested `ItemColumn` with `Action` marker | `enableColumnResizing`, `columnResizeMode`, `columns[].size/minSize/maxSize`, `columns[].enableResizing` | `boolean`, `onChange`/`onEnd`, column sizing props | `enableColumnResizing=true`, `columnResizeMode="onChange"` | The small right marker in Figma means this column should be resizable in runtime |
| Cell text | nested `ItemColumn` / `<slotCell>` | `data`, `columns`, `columns[].cell` | `TData[]`, `ColumnDef<TData>[]` | required | Cells are data-driven; Figma text layers do not map to direct row props |
| Right action cell | nested ellipsis icon | `rowActions` | `(row) => ButtonDropItem[]` | - | Runtime appends the actions service column when `rowActions` is passed |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Basic data row | Yes | `data` + `columns` |
| Row checkbox selection | Yes | `enableRowSelection`, optional `rowSelection/onRowSelectionChange` |
| Select all checkbox | Yes | enabled automatically in the selection service column header |
| Selected rows count | Yes | `popoverAction.selectedLabel`, default label is generated from selected count |
| Bulk actions for selected rows | Yes | `popoverAction.children` receives `{ selectedRows, selectedCount, table, hide }` |
| Disabled row selection | Yes | pass `enableRowSelection={(row) => condition}` |
| Nested / accordion rows | Yes | `enableNestedRows`, `getRowId`, optional `getSubRows` |
| Expand all header control | Yes | enabled automatically in the expander service column header |
| Controlled expanded state | Yes | `expanded`, `onExpandedChange` |
| Column resizing | Yes | `enableColumnResizing`, `columnResizeMode`, column `size/minSize/maxSize`; double click on the handle resets width |
| Row action menu | Yes | `rowActions={(row) => items}` |
| Sticky service column | Yes | `stickySelectionColumn` controls both checkbox and expander service columns |
| Checkbox and expander in the same leading column | No | current `useDataTableColumns` chooses expander when `enableNestedRows` is true, otherwise checkbox when `enableRowSelection` is true |

## Design matching notes

- Figma node `3368:8130` is a component set named `Line` with variants `Type=Basic` and `Type=Drop`.
- The selected Figma component represents a row pattern, but the public runtime API does not expose a standalone row component. Code should use `DataTable`; rows, cells, selection controls and expand controls are generated from `data`, `columns` and table state.
- `Type=Basic` must not be treated as a decorative empty first cell when the mockup shows checkboxes. In code this maps to `enableRowSelection`.
- `Type=Drop` must not be hand-built with a separate chevron button. In code this maps to `enableNestedRows`; the expander column and nested rows are generated by TanStack table state.
- `ItemColumn` with the right-side `Action` marker is not a separate public component. It maps to column resizing: keep `enableColumnResizing` enabled and set `size`, `minSize` and `maxSize` on the relevant column definitions.
- `popoveAction` is table behavior. It is controlled by row selection and should be configured through `popoverAction`, not mounted outside the table.
- When the header checkbox selects all rows, `selectedRows` contains every selected row and `selectedCount` drives the visible count in the floating action panel.
- `enableNestedRows` has priority over `enableRowSelection` in `useDataTableColumns`. If a future Figma state requires both checkbox selection and nested row expansion at the same time, the runtime API needs a separate follow-up change.
- `Table` and `DataTable` use the same implementation. Use `Table` docs for the full published table component and this document for the row-level `Line` mapping.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| Figma `Line` row component | `DataTable` example with sample `data` and `columns` | Runtime row is internal and should not be imported directly | Keep Code Connect data-driven unless a public row component is intentionally added |
| `Type=Basic` checkbox visuals | `enableRowSelection` | Runtime owns checkbox rendering through `CheckBox` and TanStack selection state | Keep checkbox behavior functional, not decorative |
| `Type=Drop` nested slot | `enableNestedRows` with `children` data | Runtime renders nested table rows from data instead of arbitrary Figma slots | Use `getSubRows` for custom child field names |
| `ItemColumn` `Action` marker | `enableColumnResizing` + column sizing props | Runtime owns the resize handle in `DataTableHeader` | Do not map this marker to a standalone action button |
| `popoveAction` visual slot | `popoverAction.children` | Runtime owns visibility and selected-row context | Keep selected bulk actions inside `popoverAction` |
| Combined checkbox + accordion | not mapped | Current code chooses one leading service column: expander or checkbox | Add runtime support only if product tables need both simultaneously |

## Examples

### With Checkbox Selection

```tsx
<DataTable
  data={data}
  columns={columns}
  getRowId={(row) => row.id}
  enableRowSelection
/>
```

### With Resizable Columns

```tsx
const columns = [
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
];

<DataTable
  data={data}
  columns={columns}
  enableColumnResizing
  columnResizeMode="onChange"
/>;
```

### With Controlled Selection

```tsx
const [rowSelection, setRowSelection] = useState({});

<DataTable
  data={data}
  columns={columns}
  getRowId={(row) => row.id}
  enableRowSelection
  rowSelection={rowSelection}
  onRowSelectionChange={setRowSelection}
/>;
```

### With Selection Action Bar

```tsx
<DataTable
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
          runBulkAction(selectedRows.map((row) => row.original));
          hide();
        }}
      >
        Применить
      </Button>
    ),
  }}
/>;
```

### With Nested Rows

```tsx
const data = [
  {
    id: "parent",
    name: "Родительская строка",
    children: [{ id: "child", name: "Вложенная строка" }],
  },
];

<DataTable
  data={data}
  columns={columns}
  getRowId={(row) => row.id}
  enableNestedRows
/>;
```

### With Custom Child Field

```tsx
<DataTable
  data={data}
  columns={columns}
  getRowId={(row) => row.id}
  enableNestedRows
  getSubRows={(row) => row.items}
/>;
```
