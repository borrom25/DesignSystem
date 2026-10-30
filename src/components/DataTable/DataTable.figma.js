// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=3368-8739
// source=src/components/DataTable/DataTable.tsx
// component=Table
const figma = require("figma");
const instance = figma.selectedInstance;

// Temporary mapping: the former Figma row node 3368:8130 was removed.
// This legacy file now targets the public Table component.
const type = instance.getEnum("Type", { Default: "basic" });

const isDrop = type === "drop";

const modeProps = isDrop
  ? figma.tsx`
      enableNestedRows
      getRowId={(row) => row.id}
    `
  : figma.tsx`
      enableRowSelection
      getRowId={(row) => row.id}
    `;

const selectionActionProps = isDrop
  ? ""
  : figma.tsx`
      popoverAction={{
        selectedLabel: (count) => \`Выбрано: \${count}\`,
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
    `;

const data = isDrop
  ? figma.tsx`[
      {
        id: "1",
        name: "Родительская строка",
        owner: "Елена П.",
        status: "Активно",
        children: [
          {
            id: "1-1",
            name: "Вложенная строка",
            owner: "Кирилл Л.",
            status: "В работе",
          },
        ],
      },
    ]`
  : figma.tsx`[
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
    ]`;

// Figma Line is a row-level component. Runtime rows are internal, so the
// snippet maps each visual row mode to the public DataTable API.
// If the Figma header includes filter icons / modalContainer variants, define
// columns with dataTableFilter.* and pass filters={tableController.filters}
// from useDataTableController({ columns }).
export default {
  example: figma.tsx`
    <Table
      data={${data}}
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
      ${modeProps}
      ${selectionActionProps}
      enableColumnResizing
      columnResizeMode="onChange"
      rowActions={() => [{ label: "Открыть", value: "open" }]}
      stickyHeader
      striped
    />
  `,
  imports: [
    'import { Button, Color, Table, Size, Type } from "borrom-ds-test"',
  ],
  id: "data-table-line",
  metadata: {
    nestable: false,
    props: {
      type,
      runtimeOwnsRowsAndCells: true,
      modalContainerFiltersRequireColumnsFilterAndFiltersState: true,
      basicMapsToRowSelection: !isDrop,
      dropMapsToNestedRows: isDrop,
      itemColumnActionMapsToColumnResizing: true,
      popoveActionMapsToPopoverAction: !isDrop,
      checkboxAndExpanderAreMutuallyExclusive: true,
    },
  },
};
