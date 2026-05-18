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

// Temporary mapping:
// Figma exposes <slotHead> and <slotBody>, while TableColumnsModal receives
// column/options data and owns the list rendering internally. Only
// Property 1=Default represents the column visibility picker flow. Variant2 is
// documented as the list filter flow for a concrete table column.
export default {
  example: isListFilterVariant ? listFilterExample : columnSettingsExample,
  imports: isListFilterVariant
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
      unsupportedVariants: ["variant3", "variant4", "variant5"],
      figmaSlotsMappedToOptions: true,
      variant2MapsToColumnFilter: true,
    },
  },
};
