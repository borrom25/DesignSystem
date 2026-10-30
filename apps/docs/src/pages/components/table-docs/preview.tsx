import { memo, useState } from "react";
import type { RowSelectionState } from "@tanstack/react-table";
import { Text, TextVariant } from "@/components";
import { Table } from "@/components/DataTable/DataTable";
import { createDataTableColumnHelper } from "@/components/DataTable/createDataTableColumnHelper";
import { useDataTableFilters } from "@/components/DataTable/hooks/useDataTableFilters";
import type { ColumnDef } from "@/components/DataTable/types";
import type { TablePlaygroundState } from "./types";

type ProjectRow = {
  id: string;
  name: string;
  owner: string;
  status: "В работе" | "Планирование" | "Готово";
  budget: string;
  note: string;
};

type TablePreviewArgs = {
  state: TablePlaygroundState;
};

const SAMPLE_ROWS: ProjectRow[] = [
  {
    id: "factory",
    name: "Производственный контур",
    owner: "Иван Петров",
    status: "В работе",
    budget: "18 млн ₽",
    note: "",
  },
  {
    id: "logistics",
    name: "Логистика",
    owner: "Мария Смирнова",
    status: "Планирование",
    budget: "11 млн ₽",
    note: "",
  },
  {
    id: "quality",
    name: "Контроль качества",
    owner: "Ольга Соколова",
    status: "Готово",
    budget: "6 млн ₽",
    note: "",
  },
  {
    id: "procurement",
    name: "Закупка оборудования",
    owner: "Роман Васильев",
    status: "В работе",
    budget: "9 млн ₽",
    note: "",
  },
];

const columnHelper = createDataTableColumnHelper<ProjectRow>();

const columns: ColumnDef<ProjectRow>[] = [
  columnHelper.columnFilter("name", {
    header: "Проект",
    size: 240,
    filter: {
      searchPlaceholder: "Найти проект",
    },
  }),
  columnHelper.columnFilter("owner", {
    header: "Ответственный",
    size: 200,
    filter: {
      searchPlaceholder: "Найти ответственного",
    },
  }),
  columnHelper.list("status", {
    header: "Статус",
    size: 160,
    filter: {
      options: [
        { value: "В работе", label: "В работе" },
        { value: "Планирование", label: "Планирование" },
        { value: "Готово", label: "Готово" },
      ],
    },
  }),
  columnHelper.accessor("budget", {
    header: "Бюджет",
    size: 140,
  }),
  columnHelper.accessor("note", {
    header: "Комментарий",
    size: 200,
  }),
];

const toolbarProps = {
  searchPlaceholder: "Поиск по проектам",
  middleSlot: (
    <Text variant={TextVariant.C1} className="text-secondary">
      Демо базовой конфигурации Table
    </Text>
  ),
};

const footerSlot = (
  <Text variant={TextVariant.C1} className="text-secondary">
    Обычные ячейки + колонка «Комментарий» с вводом.
  </Text>
);

const getProjectRowId = (row: ProjectRow) => row.id;

const TablePreviewFrame = memo(function TablePreviewFrame({
  state,
}: TablePreviewArgs) {
  const filters = useDataTableFilters({ columns });
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [rows, setRows] = useState(SAMPLE_ROWS);

  const data = state.mode === "empty" ? [] : rows;

  return (
    <div className="h-[420px] w-full max-w-[980px] min-w-0">
      <Table
        data={data}
        columns={columns}
        filters={filters}
        globalFilter={globalFilter}
        onGlobalFilterChange={setGlobalFilter}
        getRowId={getProjectRowId}
        loading={state.mode === "loading"}
        striped={state.striped}
        bordered={state.bordered}
        compact={state.compact}
        stickyHeader={state.stickyHeader}
        showToolbar={state.showToolbar}
        toolbarProps={toolbarProps}
        enableRowSelection={state.rowSelection}
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        editable
        editablePlaceholder="Введите комментарий"
        isCellEditable={({ columnId }) => columnId === "note"}
        onCellValueChange={(event) => {
          setRows((currentRows) =>
            currentRows.map((row) =>
              row.id === event.rowId
                ? {
                    ...row,
                    note: String(event.value),
                  }
                : row
            )
          );
        }}
        footerSlot={footerSlot}
        className="h-full w-full"
        tableClassName="[&>thead>tr>th:last-child]:border-r-0 [&>tbody>tr>td:last-child]:border-r-0"
      />
    </div>
  );
});

export function TablePreview(state: TablePlaygroundState) {
  return <TablePreviewFrame state={state} />;
}
