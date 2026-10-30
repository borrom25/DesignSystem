import {
  Block,
  Table,
  Text,
  TextVariant,
  TextWeight,
  createDataTableColumnHelper,
  type ColumnDef,
} from "@/components";
import { ComponentSectionHeading } from "./ComponentSectionHeading";

export interface PropDefinition {
  name: string;
  type: string;
  description: string;
  defaultValue?: string;
}

interface ComponentPropsTableProps {
  items: readonly PropDefinition[];
  title?: string;
}

const columnHelper = createDataTableColumnHelper<PropDefinition>();

const columns: ColumnDef<PropDefinition>[] = [
  columnHelper.accessor("name", {
    header: "Property",
    size: 180,
    enableSorting: false,
    enableGlobalFilter: false,
    cell: ({ getValue }) => (
      <Text
        variant={TextVariant.B2}
        weight={TextWeight.Semibold}
        className="font-medium text-primary"
      >
        {getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor("type", {
    header: "Controls",
    size: 310,
    enableSorting: false,
    enableGlobalFilter: false,
    cell: ({ getValue }) => (
      <span className="text-secondary">{getValue()}</span>
    ),
  }),
  columnHelper.accessor("description", {
    header: "Description",
    size: 360,
    enableSorting: false,
    enableGlobalFilter: false,
    cell: ({ getValue }) => (
      <span className="text-secondary">{getValue()}</span>
    ),
  }),
];

export function ComponentPropsTable({
  items,
  title = "Таблица свойств",
}: ComponentPropsTableProps) {
  return (
    <Block>
      <ComponentSectionHeading>{title}</ComponentSectionHeading>
      <Table
        embedded
        data={[...items]}
        columns={columns}
        tableClassName="[&>thead>tr>th:last-child]:border-r-0 [&>tbody>tr>td:last-child]:border-r-0"
        getRowId={(row) => row.name}
        enableSorting={false}
        enableFiltering={false}
        enableColumnFilters={false}
        enableGlobalFilter={false}
        enableColumnResizing={false}
      />
    </Block>
  );
}
