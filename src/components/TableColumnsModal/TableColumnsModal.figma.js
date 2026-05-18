// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3456-25084
// source=src/components/TableColumnsModal/TableColumnsModal.tsx
// component=TableColumnsModal
const figma = require("figma");
const instance = figma.selectedInstance;

const property1 = instance.getEnum("Property 1", {
  Default: "default",
  Variant2: "variant2",
  Variant3: "variant3",
  Variant4: "variant4",
  Variant5: "variant5",
});

const isDefaultVariant = property1 === "default";
const isListFilterVariant = property1 === "variant2";
const isTextFilterVariant = property1 === "variant3";
const isNumberRangeFilterVariant = property1 === "variant4";
const isDateRangeFilterVariant = property1 === "variant5";

const columnSettingsExample = figma.tsx`
  <TableColumnsModal
    open
    value={["title", "product"]}
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
    selectAllLabel="Выбрать всё"
    cancelLabel="Отмена"
    applyLabel="Сохранить"
  />
`;

const listFilterExample = figma.tsx`
  function ProductsTable() {
    const columns = [
      {
        accessorKey: "product",
        header: "Продукт",
        filter: dataTableFilter.list({
          options: [
            { value: "profile", label: "Личный кабинет" },
            { value: "analytics", label: "Аналитика" },
          ],
          searchable: true,
          searchPlaceholder: "Поиск",
          getSearchText: (option) => option.label,
        }),
        filterFn: "dataTableList",
      },
    ];

    const tableController = useDataTableController({ columns });

    return (
      <Table
        data={[
          { product: "profile" },
          { product: "analytics" },
        ]}
        columns={columns}
        filters={tableController.filters}
      />
    );
  }
`;

const textFilterExample = figma.tsx`
  function PriorityTable() {
    const columns = [
      {
        accessorKey: "priority",
        header: "Приоритет",
        filter: dataTableFilter.columnFilter({
          searchPlaceholder: "Поиск",
        }),
        filterFn: "dataTableColumnFilter",
      },
    ];

    const tableController = useDataTableController({ columns });

    return (
      <Table
        data={[
          { priority: "Высокий" },
          { priority: "Средний" },
          { priority: "Низкий" },
        ]}
        columns={columns}
        filters={tableController.filters}
      />
    );
  }
`;

const numberRangeFilterExample = figma.tsx`
  function TeamMembersTable() {
    const columns = [
      {
        accessorKey: "members",
        header: "Команда, чел",
        filter: dataTableFilter.numberRange({
          minPlaceholder: "От, чел.",
          maxPlaceholder: "До, чел.",
          minInputProps: {
            min: 0,
            step: 1,
          },
          maxInputProps: {
            min: 0,
            step: 1,
          },
        }),
        filterFn: "dataTableNumberRange",
      },
    ];

    const tableController = useDataTableController({ columns });

    return (
      <Table
        data={[
          { members: 4 },
          { members: 11 },
          { members: 18 },
        ]}
        columns={columns}
        filters={tableController.filters}
      />
    );
  }
`;

const dateRangeFilterExample = figma.tsx`
  function UpdatedProjectsTable() {
    const columns = [
      {
        accessorKey: "updatedAt",
        header: "Обновлено",
        filter: dataTableFilter.dateRange({
          placeholderStart: "Дата от",
          placeholderEnd: "Дата до",
        }),
        filterFn: "dataTableDateRange",
      },
    ];

    const tableController = useDataTableController({ columns });

    return (
      <Table
        data={[
          { updatedAt: new Date("2026-05-01") },
          { updatedAt: new Date("2026-05-18") },
        ]}
        columns={columns}
        filters={tableController.filters}
      />
    );
  }
`;

// Temporary mapping:
// Figma exposes <slotHead> and <slotBody>, while TableColumnsModal receives
// column/options data and owns the list rendering internally. Only
// Property 1=Default represents the column visibility picker flow. Variant2,
// Variant3, Variant4 and Variant5 are documented as filter flows for a concrete
// table column.
export default {
  example: isDateRangeFilterVariant
    ? dateRangeFilterExample
    : isNumberRangeFilterVariant
      ? numberRangeFilterExample
      : isTextFilterVariant
        ? textFilterExample
        : isListFilterVariant
          ? listFilterExample
          : columnSettingsExample,
  imports:
    isListFilterVariant ||
    isTextFilterVariant ||
    isNumberRangeFilterVariant ||
    isDateRangeFilterVariant
      ? [
          'import { Table, dataTableFilter, useDataTableController } from "borrom-ds-test"',
        ]
      : ['import { TableColumnsModal } from "borrom-ds-test"'],
  id: "table-columns-modal",
  metadata: {
    nestable: false,
    props: {
      property1,
      isDefaultVariant,
      isListFilterVariant,
      isTextFilterVariant,
      isNumberRangeFilterVariant,
      isDateRangeFilterVariant,
      unsupportedVariants: [],
      figmaSlotsMappedToOptions: true,
      variant2MapsToColumnFilter: true,
      variant3MapsToTextFilter: true,
      variant4MapsToNumberRangeFilter: true,
      variant5MapsToDateRangeFilter: true,
    },
  },
};
