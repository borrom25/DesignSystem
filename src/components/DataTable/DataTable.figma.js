// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3368-8130
// source=src/components/DataTable/DataTable.tsx
// component=DataTable
const figma = require("figma");
const instance = figma.selectedInstance;

const type = instance.getEnum("Type", {
  Basic: "basic",
  Drop: "drop",
});

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
export default {
  example: figma.tsx`
    <DataTable
      data={${data}}
      columns={[
        { accessorKey: "name", header: "Название", size: 240 },
        { accessorKey: "owner", header: "Ответственный", size: 180 },
        { accessorKey: "status", header: "Статус", size: 160 },
      ]}
      ${modeProps}
      rowActions={() => [{ label: "Открыть", value: "open" }]}
      stickyHeader
      striped
    />
  `,
  imports: ['import { DataTable } from "borrom-ds-test"'],
  id: "data-table-line",
  metadata: {
    nestable: false,
    props: {
      type,
      runtimeOwnsRowsAndCells: true,
      basicMapsToRowSelection: !isDrop,
      dropMapsToNestedRows: isDrop,
      checkboxAndExpanderAreMutuallyExclusive: true,
    },
  },
};
