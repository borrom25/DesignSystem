// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3368-8739
// source=src/components/Table/Table.tsx
// component=Table
const figma = require("figma");
const instance = figma.selectedInstance;

const property1 = instance.getEnum("Property 1", {
  Default: "default",
});

const hasToolbar = instance.getBoolean("Head_L2");
const showToolbarProp = hasToolbar ? "showToolbar" : "";
const toolbarPropsProp = hasToolbar
  ? figma.tsx`
      toolbarProps={{
        searchPlaceholder: "Поиск",
        rowCountLabel: "Счетчик строк",
        actions: [{ label: "Действия", value: "actions" }],
      }}
    `
  : "";

// Temporary mapping:
// Figma exposes <slotHeaders> and <slotCell>, while the public Table API
// generates headers and cells from data/columns. The snippet below keeps that
// runtime model instead of hand-assembling internal table pieces.
export default {
  example: figma.tsx`
    <Table
      data={[
        {
          id: "1",
          title: "Админка кураторов",
          product: "Личный кабинет",
          owner: "Елена П.",
          team: "Operations UX",
        },
        {
          id: "2",
          title: "Воронка обучения",
          product: "Аналитика",
          owner: "Кирилл Л.",
          team: "Growth Analytics",
        },
      ]}
      columns={[
        { accessorKey: "title", header: "Название", size: 220 },
        { accessorKey: "product", header: "Продукт", size: 180 },
        { accessorKey: "owner", header: "Ответственный", size: 180 },
        { accessorKey: "team", header: "Команда", size: 180 },
      ]}
      ${showToolbarProp}
      ${toolbarPropsProp}
      enableRowSelection
      stickyHeader
      striped
      rowActions={() => [{ label: "Открыть", value: "open" }]}
    />
  `,
  imports: ['import { Table } from "borrom-ds-test"'],
  id: "table",
  metadata: {
    nestable: false,
    props: {
      property1,
      hasToolbar,
      runtimeOwnsRowsAndColumns: true,
      figmaSlotsMappedToDataAndColumns: true,
    },
  },
};
