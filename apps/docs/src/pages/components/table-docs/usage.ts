import type { TablePlaygroundState } from "./types";

export function createTableUsageCode(
  packageName: string,
  state: TablePlaygroundState
) {
  const dataSource = state.mode === "empty" ? "[]" : "projects";
  const rowSelectionImport = state.rowSelection
    ? 'import type { RowSelectionState } from "@tanstack/react-table";\n'
    : "";
  const rowSelectionState = state.rowSelection
    ? "  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});\n"
    : "";

  return `import { useState } from "react";
${rowSelectionImport}
import {
  Table,
  createDataTableColumnHelper,
  useDataTableFilters,
  type ColumnDef,
} from "${packageName}";
import "${packageName}/styles.css";

type ProjectRow = {
  id: string;
  name: string;
  owner: string;
  status: "В работе" | "Планирование" | "Готово";
  budget: string;
  note: string;
};

const initialProjects: ProjectRow[] = [
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

export function Example() {
  const filters = useDataTableFilters({ columns });
  const [globalFilter, setGlobalFilter] = useState("");
  const [projects, setProjects] = useState(initialProjects);
${rowSelectionState}
  return (
    <div className="h-[420px] w-full">
      <Table
        data={${dataSource}}
        columns={columns}
        filters={filters}
        globalFilter={globalFilter}
        onGlobalFilterChange={setGlobalFilter}
        getRowId={(row) => row.id}
        editable
        editablePlaceholder="Введите комментарий"
        isCellEditable={({ columnId }) => columnId === "note"}
        onCellValueChange={(event) => {
          setProjects((currentRows) =>
            currentRows.map((row) =>
              row.id === event.rowId
                ? { ...row, note: String(event.value) }
                : row
            )
          );
        }}${state.mode === "loading" ? "\n        loading" : ""}${state.striped ? "\n        striped" : ""}${state.bordered ? "\n        bordered" : ""}${state.compact ? "\n        compact" : ""}${state.stickyHeader ? "\n        stickyHeader" : ""}${state.showToolbar ? '\n        showToolbar\n        toolbarProps={{\n          searchPlaceholder: "Поиск по проектам",\n        }}' : ""}${state.rowSelection ? "\n        enableRowSelection\n        rowSelection={rowSelection}\n        onRowSelectionChange={setRowSelection}" : ""}
      />
    </div>
  );
}`;
}

export function createTableScrollEndUsageCode(packageName: string) {
  return `import { useState } from "react";
import {
  Table,
  createDataTableColumnHelper,
  type ColumnDef,
} from "${packageName}";
import "${packageName}/styles.css";

type ProjectRow = {
  id: string;
  name: string;
  owner: string;
  status: string;
};

const columnHelper = createDataTableColumnHelper<ProjectRow>();

const columns: ColumnDef<ProjectRow>[] = [
  columnHelper.accessor("name", {
    header: "Проект",
  }),
  columnHelper.accessor("owner", {
    header: "Ответственный",
  }),
  columnHelper.accessor("status", {
    header: "Статус",
  }),
];

const initialRows: ProjectRow[] = [
  { id: "1", name: "Контур 1", owner: "Иван", status: "В работе" },
  { id: "2", name: "Контур 2", owner: "Мария", status: "Планирование" },
];

export function Example() {
  const [rows, setRows] = useState(initialRows);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    if (isFetchingMore || !hasMore) return;

    setIsFetchingMore(true);

    const nextChunk = await fetchNextRows();

    setRows((prev) => [...prev, ...nextChunk]);
    setHasMore(nextChunk.length > 0);
    setIsFetchingMore(false);
  };

  return (
    <div className="h-[420px] w-full">
      <Table
        data={rows}
        columns={columns}
        getRowId={(row) => row.id}
        hasMore={hasMore}
        isFetchingMore={isFetchingMore}
        onLoadMore={loadMore}
        onScrollEnd={() => {
          console.log("Пользователь дошел до конца таблицы");
        }}
        stickyHeader
        bordered
      />
    </div>
  );
}`;
}

export function createTableEditableCellsUsageCode(packageName: string) {
  return `import { useState } from "react";
import {
  Table,
  createDataTableColumnHelper,
  type ColumnDef,
} from "${packageName}";
import "${packageName}/styles.css";

type ProjectRow = {
  id: string;
  name: string;
  owner: string;
  status: string;
  note: string;
};

const columnHelper = createDataTableColumnHelper<ProjectRow>();

const columns: ColumnDef<ProjectRow>[] = [
  columnHelper.accessor("name", {
    header: "Проект",
    size: 240,
  }),
  columnHelper.accessor("owner", {
    header: "Ответственный",
    size: 200,
  }),
  columnHelper.accessor("status", {
    header: "Статус",
    size: 160,
  }),
  columnHelper.accessor("note", {
    header: "Комментарий",
    size: 200,
  }),
];

const initialRows: ProjectRow[] = [
  {
    id: "factory",
    name: "Производственный контур",
    owner: "Иван Петров",
    status: "В работе",
    note: "",
  },
  {
    id: "logistics",
    name: "Логистика",
    owner: "Мария Смирнова",
    status: "Планирование",
    note: "",
  },
];

export function Example() {
  const [rows, setRows] = useState(initialRows);

  return (
    <div className="h-[420px] w-full">
      <Table
        data={rows}
        columns={columns}
        getRowId={(row) => row.id}
        editable
        editablePlaceholder="Введите комментарий"
        isCellEditable={({ columnId }) => columnId === "note"}
        onCellValueChange={(event) => {
          setRows((currentRows) =>
            currentRows.map((row) =>
              row.id === event.rowId
                ? { ...row, note: String(event.value) }
                : row
            )
          );
        }}
        stickyHeader
        bordered
      />
    </div>
  );
}`;
}
