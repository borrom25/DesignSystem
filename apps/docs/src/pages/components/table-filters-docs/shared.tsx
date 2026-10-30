import { useState } from "react";
import { Text, TextVariant } from "@/components";
import { Table } from "@/components/DataTable/DataTable";
import { createDataTableColumnHelper } from "@/components/DataTable/createDataTableColumnHelper";
import { useDataTableFilters } from "@/components/DataTable/hooks/useDataTableFilters";
import type { ColumnDef } from "@/components/DataTable/types";

type BasicProjectRow = {
  id: string;
  name: string;
  owner: string;
  status: "В работе" | "Планирование" | "Готово";
  budget: string;
};

type AdvancedProjectRow = {
  id: string;
  team: string;
  status: "active" | "risk" | "done";
  priority: "high" | "medium" | "low";
  startedAt: string;
  deadline: string;
  budget: number;
};

const basicColumnHelper = createDataTableColumnHelper<BasicProjectRow>();
const advancedColumnHelper = createDataTableColumnHelper<AdvancedProjectRow>();

const basicRows: BasicProjectRow[] = [
  {
    id: "factory",
    name: "Производственный контур",
    owner: "Иван Петров",
    status: "В работе",
    budget: "18 млн ₽",
  },
  {
    id: "logistics",
    name: "Логистика",
    owner: "Мария Смирнова",
    status: "Планирование",
    budget: "11 млн ₽",
  },
  {
    id: "quality",
    name: "Контроль качества",
    owner: "Ольга Соколова",
    status: "Готово",
    budget: "6 млн ₽",
  },
  {
    id: "procurement",
    name: "Закупка оборудования",
    owner: "Роман Васильев",
    status: "В работе",
    budget: "9 млн ₽",
  },
];

const advancedRows: AdvancedProjectRow[] = [
  {
    id: "assembly",
    team: "Сборка",
    status: "active",
    priority: "high",
    startedAt: "2026-06-02",
    deadline: "2026-06-18",
    budget: 12,
  },
  {
    id: "warehouse",
    team: "Склад",
    status: "risk",
    priority: "medium",
    startedAt: "2026-06-05",
    deadline: "2026-06-25",
    budget: 7,
  },
  {
    id: "qa",
    team: "Контроль качества",
    status: "done",
    priority: "low",
    startedAt: "2026-05-28",
    deadline: "2026-06-10",
    budget: 5,
  },
  {
    id: "pmo",
    team: "PMO",
    status: "active",
    priority: "high",
    startedAt: "2026-06-12",
    deadline: "2026-06-30",
    budget: 16,
  },
];

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));

const basicColumns: ColumnDef<BasicProjectRow>[] = [
  basicColumnHelper.columnFilter("name", {
    header: "Проект",
    size: 260,
    filter: {
      searchPlaceholder: "Найти проект",
    },
  }),
  basicColumnHelper.columnFilter("owner", {
    header: "Ответственный",
    size: 220,
    filter: {
      searchPlaceholder: "Найти ответственного",
    },
  }),
  basicColumnHelper.list("status", {
    header: "Статус",
    size: 180,
    filter: {
      options: [
        { value: "В работе", label: "В работе" },
        { value: "Планирование", label: "Планирование" },
        { value: "Готово", label: "Готово" },
      ],
    },
  }),
  basicColumnHelper.accessor("budget", {
    header: "Бюджет",
    size: 140,
  }),
];

const advancedColumns: ColumnDef<AdvancedProjectRow>[] = [
  advancedColumnHelper.columnFilter("team", {
    header: "Команда",
    size: 220,
    filter: {
      searchPlaceholder: "Найти команду",
    },
  }),
  advancedColumnHelper.radio("priority", {
    header: "Приоритет",
    size: 160,
    cell: ({ getValue }) => {
      const value = getValue();

      if (value === "high") return "Высокий";
      if (value === "medium") return "Средний";
      return "Низкий";
    },
    filter: {
      options: [
        { value: "high", label: "Высокий" },
        { value: "medium", label: "Средний" },
        { value: "low", label: "Низкий" },
      ],
    },
  }),
  advancedColumnHelper.list("status", {
    header: "Статус",
    size: 160,
    filter: {
      options: [
        { value: "active", label: "В работе" },
        { value: "risk", label: "Риск" },
        { value: "done", label: "Готово" },
      ],
    },
    cell: ({ getValue }) => {
      const value = getValue();

      if (value === "active") return "В работе";
      if (value === "risk") return "Риск";
      return "Готово";
    },
  }),
  advancedColumnHelper.date("startedAt", {
    header: "Старт",
    size: 160,
    cell: ({ getValue }) => formatDate(String(getValue())),
    filter: {
      applyLabel: "Применить",
      resetLabel: "Сбросить",
    },
  }),
  advancedColumnHelper.dateRange("deadline", {
    header: "Дедлайн",
    size: 180,
    cell: ({ getValue }) => formatDate(String(getValue())),
    filter: {
      placeholderStart: "С даты",
      placeholderEnd: "По дату",
    },
  }),
  advancedColumnHelper.numberRange("budget", {
    header: "Бюджет, млн",
    size: 160,
    filter: {
      minPlaceholder: "От",
      maxPlaceholder: "До",
    },
  }),
];

export function TableFiltersPreview() {
  const filters = useDataTableFilters({ columns: basicColumns });
  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <div className="h-[420px] w-full max-w-[980px] min-w-0">
      <Table
        data={basicRows}
        columns={basicColumns}
        filters={filters}
        globalFilter={globalFilter}
        onGlobalFilterChange={setGlobalFilter}
        showToolbar
        toolbarProps={{
          searchPlaceholder: "Поиск по всем колонкам",
          middleSlot: (
            <Text variant={TextVariant.C1} className="text-secondary">
              Откройте фильтры в заголовках и попробуйте комбинировать их.
            </Text>
          ),
        }}
        stickyHeader
        bordered
        striped
        getRowId={(row) => row.id}
        footerSlot={
          <Text variant={TextVariant.C1} className="text-secondary">
            В этой таблице активны text-фильтры по `name` и `owner`, плюс
            list-фильтр по `status`.
          </Text>
        }
        className="h-full w-full"
        tableClassName="[&>thead>tr>th:last-child]:border-r-0 [&>tbody>tr>td:last-child]:border-r-0"
      />
    </div>
  );
}

export function TableFilterSettingsPreview() {
  const filters = useDataTableFilters({ columns: advancedColumns });

  return (
    <div className="h-[420px] w-full max-w-[1080px] min-w-0">
      <Table
        data={advancedRows}
        columns={advancedColumns}
        filters={filters}
        stickyHeader
        bordered
        getRowId={(row) => row.id}
        footerSlot={
          <Text variant={TextVariant.C1} className="text-secondary">
            Здесь собраны `radio`, `list`, `date`, `dateRange` и `numberRange` в
            одной конфигурации.
          </Text>
        }
        className="h-full w-full"
        tableClassName="[&>thead>tr>th:last-child]:border-r-0 [&>tbody>tr>td:last-child]:border-r-0"
      />
    </div>
  );
}
