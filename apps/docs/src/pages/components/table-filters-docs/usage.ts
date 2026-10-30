export function createTableFiltersUsageCode(packageName: string) {
  return `import { useState } from "react";
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
  status: "active" | "done" | "risk";
  budget: string;
};

const columnHelper = createDataTableColumnHelper<ProjectRow>();

const columns: ColumnDef<ProjectRow>[] = [
  columnHelper.columnFilter("name", {
    header: "Проект",
    filter: {
      searchPlaceholder: "Найти проект",
    },
  }),
  columnHelper.columnFilter("owner", {
    header: "Ответственный",
    filter: {
      searchPlaceholder: "Найти ответственного",
    },
  }),
  columnHelper.list("status", {
    header: "Статус",
    filter: {
      options: [
        { value: "active", label: "В работе" },
        { value: "done", label: "Готово" },
        { value: "risk", label: "Риск" },
      ],
    },
  }),
  columnHelper.accessor("budget", {
    header: "Бюджет",
  }),
];

export function Example({ rows }: { rows: ProjectRow[] }) {
  const filters = useDataTableFilters({ columns });
  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <Table
      data={rows}
      columns={columns}
      filters={filters}
      globalFilter={globalFilter}
      onGlobalFilterChange={setGlobalFilter}
      showToolbar
      toolbarProps={{
        searchPlaceholder: "Поиск по всем колонкам",
      }}
      getRowId={(row) => row.id}
      stickyHeader
      bordered
    />
  );
}`;
}

export function createFilterStateUsageCode(packageName: string) {
  return `import { Button } from "${packageName}";

function FilterActions() {
  const filters = useDataTableFilters({
    columns,
    defaultValues: {
      status: ["risk"],
    },
  });

  return (
    <>
      <Button onClick={() => filters.setValue("status", ["active"])}>
        Только активные
      </Button>

      <Button onClick={() => filters.clearValue("owner")}>
        Очистить owner
      </Button>

      <Button onClick={() => filters.clearAll()}>
        Сбросить все
      </Button>

      {filters.hasValue("status") && <span>Фильтр статуса включен</span>}
      <span>Активных фильтров: {filters.activeCount}</span>
    </>
  );
}`;
}

export function createScopedFilterStateUsageCode(packageName: string) {
  return `import { useMemo, useState } from "react";
import {
  Table,
  createDataTableColumnHelper,
  useDataTableController,
  type ColumnDef,
} from "${packageName}";

type TabId = "active" | "archive";

type ProjectRow = {
  id: string;
  name: string;
  owner: string;
  status: "active" | "done" | "risk";
};

type ProjectFilters = {
  name?: string;
  status?: ProjectRow["status"][];
};

const columnHelper = createDataTableColumnHelper<ProjectRow>();

const columns: ColumnDef<ProjectRow>[] = [
  columnHelper.columnFilter("name", {
    header: "Проект",
    filter: {
      searchPlaceholder: "Найти проект",
    },
  }),
  columnHelper.list("status", {
    header: "Статус",
    filter: {
      options: [
        { value: "active", label: "В работе" },
        { value: "done", label: "Готово" },
        { value: "risk", label: "Риск" },
      ],
    },
  }),
  columnHelper.accessor("owner", {
    header: "Ответственный",
  }),
];

const rowsByTab: Record<TabId, ProjectRow[]> = {
  active: [
    { id: "1", name: "ERP", owner: "Анна", status: "active" },
    { id: "2", name: "CRM", owner: "Олег", status: "risk" },
  ],
  archive: [
    { id: "3", name: "WMS", owner: "Ирина", status: "done" },
    { id: "4", name: "Portal", owner: "Павел", status: "done" },
  ],
};

export function ScopedExample() {
  const [activeTab, setActiveTab] = useState<TabId>("active");
  const table = useDataTableController<ProjectFilters>({
    columns,
    scopeKey: activeTab,
    toolbarProps: {
      searchPlaceholder: "Поиск по вкладке",
    },
  });

  const visibleRows = useMemo(() => {
    const normalized = table.searchValue.trim().toLowerCase();

    return rowsByTab[activeTab].filter((row) => {
      if (!normalized) return true;

      return (
        row.name.toLowerCase().includes(normalized) ||
        row.owner.toLowerCase().includes(normalized)
      );
    });
  }, [activeTab, table.searchValue]);

  return (
    <>
      <button onClick={() => setActiveTab("active")}>Активные</button>
      <button onClick={() => setActiveTab("archive")}>Архив</button>

      <Table
        data={visibleRows}
        columns={columns}
        filters={table.filters}
        showToolbar
        toolbarProps={table.toolbarProps}
        getRowId={(row) => row.id}
      />
    </>
  );
}`;
}

export function createFilterSettingsUsageCode(packageName: string) {
  return `import {
  createDataTableColumnHelper,
  type ColumnDef,
} from "${packageName}";

type TaskRow = {
  id: string;
  team: string;
  status: "active" | "done" | "risk";
  priority: "high" | "medium" | "low";
  startedAt: string;
  deadline: string;
  budget: number;
};

const columnHelper = createDataTableColumnHelper<TaskRow>();

const columns: ColumnDef<TaskRow>[] = [
  columnHelper.columnFilter("team", {
    header: "Команда",
    filter: {
      searchPlaceholder: "Найти команду",
    },
  }),
  columnHelper.list("status", {
    header: "Статус",
    filter: {
      options: [
        { value: "active", label: "В работе" },
        { value: "done", label: "Готово" },
        { value: "risk", label: "Риск" },
      ],
      selectAll: false,
    },
  }),
  columnHelper.radio("priority", {
    header: "Приоритет",
    filter: {
      options: [
        { value: "high", label: "Высокий" },
        { value: "medium", label: "Средний" },
        { value: "low", label: "Низкий" },
      ],
    },
  }),
  columnHelper.date("startedAt", {
    header: "Дата старта",
    filter: {
      applyLabel: "Применить",
      resetLabel: "Сбросить",
    },
  }),
  columnHelper.dateRange("deadline", {
    header: "Дедлайн",
    filter: {
      placeholderStart: "С даты",
      placeholderEnd: "По дату",
    },
  }),
  columnHelper.numberRange("budget", {
    header: "Бюджет",
    filter: {
      minPlaceholder: "От",
      maxPlaceholder: "До",
    },
  }),
];`;
}

export function createRemoteOptionsSearchUsageCode(packageName: string) {
  return `import { useState } from "react";
import {
  createDataTableColumnHelper,
  type ColumnDef,
} from "${packageName}";

type OwnerOption = { value: string; label: string };

type TaskRow = {
  id: string;
  owner: string;
};

const columnHelper = createDataTableColumnHelper<TaskRow>();

async function fetchOwners(query: string): Promise<OwnerOption[]> {
  return [];
}

export function RemoteOwnerFilterExample() {
  const [ownerQuery, setOwnerQuery] = useState("");
  const [ownerOptions, setOwnerOptions] = useState<OwnerOption[]>([]);

  const columns: ColumnDef<TaskRow>[] = [
    columnHelper.list("owner", {
      header: "Ответственный",
      filter: {
        options: ownerOptions,
        searchValue: ownerQuery,
        onSearchChange: (query) => {
          setOwnerQuery(query);
          if (!query.trim()) {
            setOwnerOptions([]);
            return;
          }
          void fetchOwners(query).then(setOwnerOptions);
        },
        filterOptionsLocally: false,
        searchPlaceholder: "Найти на сервере",
      },
    }),
  ];

  return columns;
}`;
}

export function createCustomFilterUsageCode(packageName: string) {
  return `import {
  MultiSelect,
  dataTableFilter,
  type ColumnDef,
} from "${packageName}";

type Priority = "high" | "medium" | "low";

const columns: ColumnDef<TaskRow>[] = [
  columnHelper.accessor("priority", {
    header: "Приоритет",
    filter: dataTableFilter.custom<Priority[]>({
      defaultValue: [],
      render: ({ value, onChange, onClear }) => (
        <MultiSelect
          label="Приоритеты"
          value={value}
          onValueChange={(nextValue) => onChange(nextValue)}
          onClear={onClear}
          clearable
          search
          hasMore
          isLoading={false}
          onScrollEnd={() => {
            console.log("Загрузить следующую страницу опций");
          }}
          scrollEndOffset={120}
          options={[
            { value: "high", label: "Высокий" },
            { value: "medium", label: "Средний" },
            { value: "low", label: "Низкий" },
          ]}
        />
      ),
    }),
    filterFn: (row, columnId, filterValue) => {
      if (!Array.isArray(filterValue) || filterValue.length === 0) return true;
      return filterValue.includes(row.getValue(columnId));
    },
  }),
];`;
}
