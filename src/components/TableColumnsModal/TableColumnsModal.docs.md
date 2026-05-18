# TableColumnsModal

Документация для связи Figma component set `modalContainer` с table-related runtime-паттернами:

- `Property 1=Default` - настройка видимости колонок через `TableColumnsModal`;
- `Property 1=Variant2` - фильтр конкретного столбца со списком значений через table column filter.

```text
src/components/TableColumnsModal/TableColumnsModal.docs.md
```

Парный Code Connect файл:

```text
src/components/TableColumnsModal/TableColumnsModal.figma.js
```

Важно: у Figma component set `modalContainer` одна ссылка и один Code Connect файл. Варианты внутри этого файла обрабатываются через `Property 1`.

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
storybook: src/stories/AppLayout.stories.tsx
figmaComponent: modalContainer
figmaVariant: Property 1=Default, Property 1=Variant2
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3456-25084
figmaNodeId: 3456:25084
codeConnect: src/components/TableColumnsModal/TableColumnsModal.figma.js
```

## Code Connect Variant Routing

`TableColumnsModal.figma.js` обслуживает один Figma component set `modalContainer` и выбирает snippet по `Property 1`:

| Figma variant | Code snippet | Runtime flow |
| --- | --- | --- |
| `Default` | `<TableColumnsModal ... />` | Пользователь выбирает видимые колонки, `onApply` возвращает `columnId[]`, родитель обновляет `visibleColumnIds` |
| `Variant2` | `<Table ... filters={tableController.filters} />` with list filter column config | Пользователь выбирает значения конкретного столбца, `DataTableListFilter` обновляет column filter state |
| `Variant3` | not emitted yet | Text column filter; documented as follow-up |
| `Variant4` | not emitted yet | Number range column filter; documented as follow-up |
| `Variant5` | not emitted yet | Date range column filter; documented as follow-up |

Не нужно создавать отдельный `.figma.js` для `Variant2`: это вариант того же Figma component set, поэтому routing остается внутри `TableColumnsModal.figma.js`.

## Public usage

```tsx
import { Table, TableColumnsModal } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

const options = [
  { id: "title", label: "Название" },
  { id: "product", label: "Продукт" },
  { id: "owner", label: "Ответственный" },
  { id: "team", label: "Команда" },
];

export function Example() {
  const [open, setOpen] = useState(false);
  const [visibleColumnIds, setVisibleColumnIds] = useState([
    "title",
    "product",
  ]);

  return (
    <TableColumnsModal
      open={open}
      onOpenChange={setOpen}
      value={visibleColumnIds}
      options={options}
      onApply={setVisibleColumnIds}
      title="Настройка таблицы"
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/TableColumnsModal/TableColumnsModal.tsx` |
| Public props | `src/components/TableColumnsModal/TableColumnsModal.types.ts` |
| Options helper | `src/components/TableColumnsModal/useTableColumnsModalOptions.ts` |
| Utilities | `src/components/TableColumnsModal/TableColumnsModal.utils.ts` |
| Styles entry | `src/components/TableColumnsModal/styles/index.ts` |
| Local export | `src/components/TableColumnsModal/index.ts` |
| Storybook usage | `src/stories/AppLayout.stories.tsx` |
| Code Connect | `src/components/TableColumnsModal/TableColumnsModal.figma.js` |

## What It Does

`Property 1=Default` управляет видимостью колонок таблицы через `TableColumnsModal`. Компонент не фильтрует строки и не меняет данные таблицы: он возвращает список выбранных `columnId`, а вызывающий код решает, какие `columns` передать в `Table`.

В текущем Storybook-сценарии поток такой:

1. Пользователь открывает dropdown `Действия`.
2. Выбирает `Настроить таблицу`.
3. Открывается `TableColumnsModal`.
4. Пользователь включает или выключает пункты списка.
5. `onApply` возвращает выбранные id.
6. Родитель фильтрует `baseColumns` по `visibleColumnIds` и передает результат в `Table`.

Функциональный контракт `Default`:

1. Родитель хранит `visibleColumnIds`.
2. Родитель вычисляет `activeColumns = baseColumns.filter(...)`.
3. `Table` получает именно `activeColumns`.
4. `TableColumnsModal` получает текущее значение через `value`.
5. Список пунктов строится из `options` или из `columns`.
6. Клик по пункту меняет только draft state внутри модалки.
7. `Сохранить` / `Применить` вызывает `onApply(nextColumnIds)`.
8. Родитель обновляет `visibleColumnIds`.
9. `activeColumns` пересчитывается, и таблица реально скрывает или показывает столбцы.

Если родитель не обновляет `visibleColumnIds` и не передает пересчитанный `columns` в `Table`, модалка будет визуальной, но столбцы не изменятся. Это неправильная интеграция.

`Property 1=Variant2` - это фильтр конкретного столбца. Он не включает и не выключает колонки. Он меняет filter value для одной колонки, после чего таблица показывает только строки, подходящие под выбранные значения.

В коде этот сценарий живет в `src/components/DataTable/ui/DataTableFilters.tsx`:

- `DataTableListFilter` - список значений с чекбоксами, поиском, reset/apply;
- `DataTableColumnFilter` - текстовый фильтр;
- `DataTableDateFilter` и `DataTableDateRangeFilter` - фильтры по датам;
- `DataTableNumberRangeFilter` - фильтр диапазона чисел.

`Variant2` ближе всего к `DataTableListFilter`: search input сверху, список checkbox-options и footer actions `Сбросить` / `Применить`.

Функциональный контракт `Variant2`:

1. Колонка создается с `filter: dataTableFilter.list(...)` или через `createDataTableColumnHelper().list(...)`.
2. У колонки должен быть `filterFn: "dataTableList"`; helper `.list(...)` ставит его автоматически.
3. `useDataTableController({ columns })` создает `filters`, default values и `columnFiltersState`.
4. `Table` получает `filters={tableController.filters}`.
5. Header видит `column.filter` и рисует filter icon.
6. По клику открывается popover с `DataTableListFilter`.
7. `Применить` вызывает `filters.setValue(filterId, value)`.
8. `useTable` передает `columnFilters` в TanStack Table и подключает `getFilteredRowModel()`.
9. `dataTableList` filter function оставляет только строки, где значение столбца входит в выбранный список.

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Property 1` | `Default` | - | - | `Default` | Variant для настройки видимости колонок, маппится на `TableColumnsModal` |
| `Property 1` | `Variant2` | `columns[].filter`, `filters` | list filter config + state | - | Variant фильтра конкретного столбца, ближе всего к `DataTableListFilter` |
| `Property 1` | `Variant3` | `columns[].filter`, `filters` | text filter config + state | - | Похоже на текстовый фильтр столбца; не маппится на `TableColumnsModal` |
| `Property 1` | `Variant4` | `columns[].filter`, `filters` | number range filter config + state | - | Похоже на numeric range filter; не маппится на `TableColumnsModal` |
| `Property 1` | `Variant5` | `columns[].filter`, `filters` | date range filter config + state | - | Похоже на date range filter; не маппится на `TableColumnsModal` |
| `<slotHead>` | search slot | - | - | - | Temporary mapping: текущий runtime `TableColumnsModal` не поддерживает поиск по списку колонок |
| `<slotBody>` | checkbox list | `options` or `columns` | `TableColumnsModalOption[]` or `ColumnDef[]` | required | Runtime строит список из `options`; если их нет, получает id/label из `columns` |
| `Выбрать всё` checkbox | checked / indeterminate / off | internal draft state | computed from `value` | - | `data-indeterminate` выставляется, когда выбрана только часть колонок |
| Checked item | selected checkbox | `value` | `string[]` | required | Каждый id из `value` считается выбранной колонкой |
| Footer reset button | `Сбросить` in Figma | `cancelLabel` / `onOpenChange(false)` | `ReactNode` | `Отмена` | Temporary mapping: runtime не имеет отдельного reset-to-default action |
| Footer apply button | `Применить` in Figma | `applyLabel`, `onApply` | `ReactNode`, callback | `Сохранить` | Сохраняет draft selection и закрывает modal |
| Modal title | design context | `title` | `ReactNode` | `Настройка таблицы` | Runtime title передается в базовый `Modal` |
| Close button | visible by default | `showCloseButton` | `boolean` | `true` | Передается в базовый `Modal` |

## Supported States

| State | Supported in code | How to use |
| --- | --- | --- |
| Open / closed | Yes | `open`, `onOpenChange` |
| Explicit options | Yes | `options={[{ id, label }]}` |
| Options from table columns | Yes | pass `columns`; ids come from `id` or `accessorKey` |
| Selected columns | Yes | `value={visibleColumnIds}` |
| Select all | Yes | built in |
| Partially selected | Yes | computed internally with `data-indeterminate` |
| Apply selection | Yes | `onApply={(nextValue) => ...}` |
| Cancel / close | Yes | close button, overlay behavior from `Modal`, cancel button |
| Custom labels | Yes | `title`, `subtitle`, `selectAllLabel`, `cancelLabel`, `applyLabel` |
| Search inside columns | No | not in current `TableColumnsModalProps` |
| Reset to default | No | implement in parent or add a new prop later |
| Column list filter | Yes | configure `columns[].filter` and pass `filters` from `useDataTableController` |
| Column filter search | Yes | `filter.searchable`, `filter.searchPlaceholder`, `getSearchText` in list filter config |
| Column filter apply/reset | Yes | built into `DataTableListFilter` through `FilterPanel` |

## Variant2 Column Filter Usage

`Variant2` describes a filter popover for one table column. It is usually not rendered by app code directly. Instead, it appears when a column has a `filter` config and the user clicks the filter icon in the table header.

```tsx
const columns = [
  helper.list("product", {
    header: "Продукт",
    size: 180,
    cell: ({ getValue }) => productLabels[getValue()],
    filter: {
      options: [
        { value: "lk", label: "Личный кабинет" },
        { value: "analytics", label: "Аналитика" },
      ],
      searchable: true,
      searchPlaceholder: "Поиск по продукту",
      getSearchText: (option) => option.label,
    },
  }),
];

const tableController = useDataTableController({
  columns,
});

<Table
  data={data}
  columns={columns}
  filters={tableController.filters}
/>;
```

`DataTableListFilter` хранит draft selection внутри popover до нажатия `Применить`. После apply значение попадает в `filters`, а `Table` использует его как column filter state.

## Design matching notes

- Figma node `3456:25084` is a published component set named `modalContainer`.
- `Property 1=Default` is documented here as `TableColumnsModal`.
- `Property 1=Variant2` is documented here as the list filter popover for a single table column.
- The other variants in the same Figma component set include controls such as `InputNumber` and `DateRange`; those match table column filter UI more than column visibility settings.
- In code, `TableColumnsModal` is a semantic wrapper around `Modal`, `ListItem` and `Button`.
- The component is intentionally controlled: it receives the current selected ids through `value` and returns the committed selection through `onApply`.
- The modal does not mutate `Table` directly. The parent updates `visibleColumnIds`, then filters the column definitions passed to `Table`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| Figma `modalContainer` name | `TableColumnsModal` | Figma component is named generically, but `Property 1=Default` is used for table column visibility settings | Rename Figma component or add documentation link to make the purpose explicit |
| `Property 1=Variant2` | `DataTableListFilter` pattern via `columns[].filter` | It filters rows by one column value, not column visibility | Keep documented with table filters; add separate Code Connect only if filters become standalone public components |
| `Property 1=Variant3/4/5` | documented as filter-like variants only | These variants contain text/range/date controls, not column visibility modal UI | Document separately if they become public filter components |
| Figma search field | documented only | Runtime `TableColumnsModalProps` has no search props | Add `searchable`, `searchValue`, `onSearchChange` only if large column lists need it |
| Figma `Сбросить` action | closest runtime action is cancel/close | Runtime has no reset-to-default callback | Add `onReset` / `resetLabel` if product needs a real reset action |
| Footer label mismatch | `Применить` maps to `applyLabel`, default runtime is `Сохранить` | Figma and code defaults use different wording | Pass `applyLabel="Применить"` when exact copy is required |

## Examples

### With Options

```tsx
<TableColumnsModal
  open={open}
  onOpenChange={setOpen}
  value={visibleColumnIds}
  options={[
    { id: "title", label: "Название" },
    { id: "product", label: "Продукт" },
    { id: "owner", label: "Ответственный" },
  ]}
  onApply={setVisibleColumnIds}
/>
```

### With Table Columns

```tsx
<TableColumnsModal
  open={open}
  onOpenChange={setOpen}
  value={visibleColumnIds}
  columns={baseColumns}
  onApply={setVisibleColumnIds}
/>
```

### Match Current Figma Copy

```tsx
<TableColumnsModal
  open={open}
  onOpenChange={setOpen}
  value={visibleColumnIds}
  options={options}
  onApply={setVisibleColumnIds}
  title="Настройка таблицы"
  selectAllLabel="Выбрать всё"
  cancelLabel="Сбросить"
  applyLabel="Применить"
/>
```
