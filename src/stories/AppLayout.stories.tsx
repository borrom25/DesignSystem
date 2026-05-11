import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useMemo, useState } from "react";
import type { ComponentProps } from "react";
import type { Row } from "@tanstack/react-table";
import { format, startOfDay } from "date-fns";
import {
  AppLayout,
  Counter,
  Header,
  HeaderInside,
  Sidebar,
  InsideSidebar,
  TableColumnsModal,
  TabsOverflow,
  Table,
  Button,
  createDataTableColumnHelper,
  useDataTableController,
  useFilterGroups,
} from "@/components";
import type { ColumnDef, FilterListOption } from "@/components";
import type { SidebarItem } from "@/components";
import {
  BarChart,
  Download,
  FileText,
  Home,
  Plus,
  Settings,
  Upload,
  Users,
} from "lucide-react";
import { Color, Size, Type } from "@/types";

interface ProjectRow {
  id: string;
  title: string;
  product: "cabinet" | "academy" | "analytics" | "mobile";
  owner: string;
  team: string;
  region: "elabuga" | "kazan" | "moscow" | "remote";
  priority: "high" | "medium" | "low";
  status: "active" | "paused" | "review" | "draft";
  health: "good" | "warning" | "risk";
  budget: string;
  progress: string;
  members: number;
  updatedAt: string;
  updatedAtDate: Date;
}

type ProjectColumnId =
  | "title"
  | "product"
  | "owner"
  | "team"
  | "region"
  | "priority"
  | "status"
  | "health"
  | "budget"
  | "members"
  | "progress"
  | "updatedAt";

const DEFAULT_VISIBLE_COLUMN_IDS: ProjectColumnId[] = [
  "title",
  "product",
  "owner",
  "team",
  "region",
  "priority",
  "status",
  "health",
  "budget",
  "members",
  "progress",
  "updatedAt",
];

const projectColumnIdSet: ReadonlySet<string> = new Set(
  DEFAULT_VISIBLE_COLUMN_IDS
);
const isProjectColumnId = (value: string): value is ProjectColumnId =>
  projectColumnIdSet.has(value);

const columnLabels: Record<ProjectColumnId, string> = {
  title: "Название",
  product: "Продукт",
  owner: "Ответственный",
  team: "Команда",
  region: "Локация",
  priority: "Приоритет",
  status: "Статус",
  health: "Состояние",
  budget: "Бюджет",
  members: "Команда, чел.",
  progress: "Прогресс",
  updatedAt: "Обновлен",
};

const sidebarItems: SidebarItem[] = [
  { id: "home", icon: Home, label: "Главная" },
  { id: "users", icon: Users, label: "Пользователи" },
  { id: "docs", icon: FileText, label: "Документы" },
  { id: "analytics", icon: BarChart, label: "Аналитика" },
  { id: "settings", icon: Settings, label: "Настройки" },
];

const tabs = [
  { label: "Overview", value: "overview" },
  { label: "Activity", value: "activity" },
  { label: "Files", value: "files" },
  { label: "Members", value: "members" },
  { label: "Settings", value: "settings" },
  { label: "Integrations", value: "integrations" },
];

const STATUS_OPTIONS = ["active", "paused", "review", "draft"] as const;
const PRODUCT_OPTIONS = ["cabinet", "academy", "analytics", "mobile"] as const;
const REGION_OPTIONS = ["elabuga", "kazan", "moscow", "remote"] as const;
const BATCH_SIZE = 40;
const MAX_ROWS = 800;
const statusLabels: Record<ProjectRow["status"], string> = {
  active: "Активен",
  paused: "Пауза",
  review: "На согласовании",
  draft: "Черновик",
};
const priorityLabels: Record<ProjectRow["priority"], string> = {
  high: "Высокий",
  medium: "Средний",
  low: "Низкий",
};
const productLabels: Record<ProjectRow["product"], string> = {
  cabinet: "Личный кабинет",
  academy: "Академия",
  analytics: "Аналитика",
  mobile: "Мобильное приложение",
};
const regionLabels: Record<ProjectRow["region"], string> = {
  elabuga: "Елабуга",
  kazan: "Казань",
  moscow: "Москва",
  remote: "Удаленно",
};
const healthLabels: Record<ProjectRow["health"], string> = {
  good: "Стабильно",
  warning: "Требует внимания",
  risk: "Риск",
};

interface AppLayoutColumnFilters {
  [key: string]: unknown;
  title: string[];
  status: ProjectRow["status"][];
  priority: ProjectRow["priority"][];
  product: ProjectRow["product"][];
  region: ProjectRow["region"][];
  members: {
    min?: number;
    max?: number;
  };
  updatedAt: {
    start?: Date;
    end?: Date;
  };
}

const buildProjectUpdatedAtDate = (index: number) =>
  startOfDay(new Date(2026, 3, (index % 28) + 1));

const formatProjectUpdatedAt = (date: Date) => format(date, "dd.MM.yyyy");

const PROJECT_TEMPLATES: Array<
  Pick<
    ProjectRow,
    "title" | "product" | "team" | "region" | "priority" | "status" | "health"
  >
> = [
  {
    title: "Личный кабинет абитуриента",
    product: "cabinet",
    team: "Admission Core",
    region: "elabuga",
    priority: "high",
    status: "active",
    health: "good",
  },
  {
    title: "Витрина заявок",
    product: "cabinet",
    team: "Growth Team",
    region: "kazan",
    priority: "medium",
    status: "draft",
    health: "warning",
  },
  {
    title: "Календарь учебных потоков",
    product: "academy",
    team: "Education Ops",
    region: "kazan",
    priority: "medium",
    status: "paused",
    health: "warning",
  },
  {
    title: "Сервис уведомлений",
    product: "academy",
    team: "Platform Ops",
    region: "remote",
    priority: "low",
    status: "review",
    health: "good",
  },
  {
    title: "Дашборд руководителя",
    product: "analytics",
    team: "BI Team",
    region: "moscow",
    priority: "high",
    status: "review",
    health: "good",
  },
  {
    title: "Отчеты по наставникам",
    product: "analytics",
    team: "Data Platform",
    region: "elabuga",
    priority: "high",
    status: "active",
    health: "risk",
  },
  {
    title: "Мобильное расписание",
    product: "mobile",
    team: "Mobile Team",
    region: "remote",
    priority: "medium",
    status: "active",
    health: "good",
  },
  {
    title: "Каталог мероприятий",
    product: "mobile",
    team: "Experience Team",
    region: "moscow",
    priority: "low",
    status: "paused",
    health: "warning",
  },
  {
    title: "Админка кураторов",
    product: "cabinet",
    team: "Operations UX",
    region: "elabuga",
    priority: "medium",
    status: "active",
    health: "good",
  },
  {
    title: "Воронка обучения",
    product: "analytics",
    team: "Growth Analytics",
    region: "kazan",
    priority: "high",
    status: "draft",
    health: "risk",
  },
];
const OWNERS = [
  "Алина К.",
  "Мария Т.",
  "Игорь С.",
  "Сергей Н.",
  "Елена П.",
  "Дмитрий В.",
  "Ольга Р.",
  "Кирилл Л.",
  "Анна М.",
  "Роман Ч.",
];

const buildProject = (index: number): ProjectRow => ({
  ...(() => {
    const template = PROJECT_TEMPLATES[index % PROJECT_TEMPLATES.length];
    const progressValue = 28 + ((index * 9) % 68);
    const budgetValue = 14 + ((index * 5) % 22);
    const updatedAtDate = buildProjectUpdatedAtDate(index);

    return {
      id: `project-${index + 1}`,
      title: template.title,
      product: template.product,
      owner: OWNERS[(index * 3) % OWNERS.length],
      team: template.team,
      region: template.region,
      priority: template.priority,
      status: template.status,
      health: template.health,
      budget: `${budgetValue} млн ₽`,
      progress: `${progressValue}%`,
      members: 4 + (index % 10),
      updatedAt: formatProjectUpdatedAt(updatedAtDate),
      updatedAtDate,
    };
  })(),
});

const buildProjects = (count: number, offset = 0): ProjectRow[] =>
  Array.from({ length: count }, (_, i) => buildProject(offset + i));

const helper = createDataTableColumnHelper<ProjectRow>();
const createUpdatedAtColumn = (): ColumnDef<ProjectRow> =>
  helper.dateRange("updatedAtDate", {
    id: "updatedAt",
    header: columnLabels.updatedAt,
    size: 160,
    cell: ({ row }) => row.original.updatedAt,
    enableGlobalFilter: false,
    filter: {
      placeholderStart: "Дата от",
      placeholderEnd: "Дата до",
    },
  });

const getLabelValue =
  <TValue extends string>(labels: Record<TValue, string>) =>
  (value: TValue) =>
    labels[value];

const getProductLabel = getLabelValue(productLabels);
const getRegionLabel = getLabelValue(regionLabels);
const getPriorityLabel = getLabelValue(priorityLabels);
const getStatusLabel = getLabelValue(statusLabels);
const getHealthLabel = getLabelValue(healthLabels);
const priorityColumnFilter = (
  row: { getValue: (columnId: string) => unknown },
  columnId: string,
  filterValue: string
) =>
  getPriorityLabel(row.getValue(columnId) as ProjectRow["priority"])
    .toLowerCase()
    .includes(filterValue.trim().toLowerCase());

const getProjectColumnId = (
  column: ColumnDef<ProjectRow>
): ProjectColumnId | null => {
  if (
    "id" in column &&
    typeof column.id === "string" &&
    isProjectColumnId(column.id)
  ) {
    return column.id;
  }

  if (
    "accessorKey" in column &&
    typeof column.accessorKey === "string" &&
    isProjectColumnId(column.accessorKey)
  ) {
    return column.accessorKey;
  }

  return null;
};

const meta: Meta<ComponentProps<typeof AppLayout>> = {
  title: "Layout/AppLayout",
  component: AppLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Единый Playground для AppLayout: переключение container, варианты Header/Sidebar и контент с DataTable внутри.",
      },
    },
  },
  argTypes: {
    container: {
      control: "select",
      options: ["640", "720", "fill"],
    },
  },
};

export default meta;
type Story = StoryObj<ComponentProps<typeof AppLayout>>;

interface AppLayoutStoryContentProps {
  args: ComponentProps<typeof AppLayout>;
  variant: "default" | "inside";
  enableColumnSwitchCase?: boolean;
}

function AppLayoutStoryContent({
  args,
  variant,
  enableColumnSwitchCase = false,
}: AppLayoutStoryContentProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeMenu, setActiveMenu] = useState("home");
  const [rows, setRows] = useState<ProjectRow[]>(() =>
    buildProjects(BATCH_SIZE)
  );
  const [isFetching, setIsFetching] = useState(false);
  const [activeStatusTab, setActiveStatusTab] = useState("all");
  const [isColumnSettingsOpen, setIsColumnSettingsOpen] = useState(false);
  const [visibleColumnIds, setVisibleColumnIds] = useState<ProjectColumnId[]>(
    DEFAULT_VISIBLE_COLUMN_IDS
  );
  const hasMore = rows.length < MAX_ROWS;
  const isInsideVariant = variant === "inside";

  const titleGroups = useFilterGroups<
    string,
    (typeof PROJECT_TEMPLATES)[number]
  >({
    items: PROJECT_TEMPLATES,
    getGroupKey: (template) => template.product,
    getGroupLabel: (_key, items) => getProductLabel(items[0].product),
    getOptionValue: (template) => template.title,
    getOptionLabel: (template) => template.title,
  });

  const regionGroups = useFilterGroups<
    ProjectRow["region"],
    ProjectRow["region"]
  >({
    items: [...REGION_OPTIONS],
    getGroupKey: (region) => (region === "remote" ? "format" : "office"),
    getGroupLabel: (groupKey) => (groupKey === "office" ? "Офисы" : "Формат"),
    getOptionValue: (region) => region,
    getOptionLabel: (region) => regionLabels[region],
    sortGroups: (left, right) =>
      ["office", "format"].indexOf(left) - ["office", "format"].indexOf(right),
  });

  const productOptions = useMemo<FilterListOption<ProjectRow["product"]>[]>(
    () =>
      PRODUCT_OPTIONS.map((product) => ({
        value: product,
        label: productLabels[product],
      })),
    []
  );

  const statusOptions = useMemo<FilterListOption<ProjectRow["status"]>[]>(
    () =>
      STATUS_OPTIONS.map((status) => ({
        value: status,
        label: statusLabels[status],
      })),
    []
  );

  const toolbarActions = [
    {
      label: (
        <span className="inline-flex items-center gap-2">
          <Settings className="size-4" />
          Настроить таблицу
        </span>
      ),
      value: "configure-columns",
    },
    {
      label: (
        <span className="inline-flex items-center gap-2">
          <Upload className="size-4" />
          Выгрузка таблицы по фильтрам
        </span>
      ),
      value: "archive",
    },
    {
      label: (
        <span className="inline-flex items-center gap-2">
          <Download className="size-4" />
          Загрузить данные
        </span>
      ),
      value: "delete",
    },
  ];

  const rowActions = (row: Row<ProjectRow>) => [
    {
      label: "Редактировать",
      value: "edit",
      onClick: () => console.log('Действие "edit" для проекта:', row.original),
    },
    {
      label: "Дублировать",
      value: "duplicate",
      onClick: () =>
        console.log('Действие "duplicate" для проекта:', row.original),
    },
    {
      label: "Удалить",
      value: "delete",
      disabled: row.original.status === "active",
      onClick: () =>
        console.log('Действие "delete" для проекта:', row.original),
    },
  ];

  const statusTabCounts = useMemo(
    () => ({
      all: rows.length,
      active: rows.filter((row) => row.status === "active").length,
      paused: rows.filter((row) => row.status === "paused").length,
      review: rows.filter((row) => row.status === "review").length,
      draft: rows.filter((row) => row.status === "draft").length,
    }),
    [rows]
  );

  const statusTabs = useMemo(
    () => [
      {
        value: "all",
        label: "Все",
        counter: <Counter count={statusTabCounts.all} size={Size.Xs} />,
      },
      {
        value: "active",
        label: "Активные",
        counter: <Counter count={statusTabCounts.active} size={Size.Xs} />,
      },
      {
        value: "paused",
        label: "Пауза",
        counter: <Counter count={statusTabCounts.paused} size={Size.Xs} />,
      },
      {
        value: "review",
        label: "Согласование",
        counter: <Counter count={statusTabCounts.review} size={Size.Xs} />,
      },
      {
        value: "draft",
        label: "Черновики",
        counter: <Counter count={statusTabCounts.draft} size={Size.Xs} />,
      },
    ],
    [statusTabCounts]
  );

  const allColumns = useMemo<ColumnDef<ProjectRow>[]>(
    () => [
      helper.list("title", {
        header: columnLabels.title,
        size: 260,
        filter: {
          groups: titleGroups,
          searchable: true,
          searchPlaceholder: "Поиск по названию проекта",
          getSearchText: (option) => String(option.value),
        },
      }),
      helper.list("product", {
        header: columnLabels.product,
        size: 180,
        cell: ({ getValue }) => getProductLabel(getValue()),
        filter: {
          options: productOptions,
          searchable: false,
          getSearchText: (option) => getProductLabel(option.value),
        },
      }),
      helper.accessor("owner", {
        header: columnLabels.owner,
        size: 200,
      }),
      helper.accessor("team", {
        header: columnLabels.team,
        size: 180,
      }),
      helper.list("region", {
        header: columnLabels.region,
        size: 150,
        cell: ({ getValue }) => getRegionLabel(getValue()),
        filter: {
          groups: regionGroups,
          searchable: true,
          searchPlaceholder: "Поиск по региону",
          getSearchText: (option) => getRegionLabel(option.value),
        },
      }),
      helper.columnFilter("priority", {
        header: columnLabels.priority,
        size: 140,
        cell: ({ getValue }) => getPriorityLabel(getValue()),
        filterFn: priorityColumnFilter,
        filter: {
          searchPlaceholder: "Поиск по приоритету",
        },
      }),
      helper.list("status", {
        header: columnLabels.status,
        size: 140,
        cell: ({ getValue }) => getStatusLabel(getValue()),
        filter: {
          options: statusOptions,
          searchable: false,
          getSearchText: (option) => getStatusLabel(option.value),
        },
      }),
      helper.accessor("health", {
        header: columnLabels.health,
        size: 170,
        cell: ({ getValue }) => getHealthLabel(getValue()),
      }),
      helper.accessor("budget", {
        header: columnLabels.budget,
        size: 170,
      }),
      helper.numberRange("members", {
        header: columnLabels.members,
        size: 140,
        filter: {
          minPlaceholder: "От, чел.",
          maxPlaceholder: "До, чел.",
          minInputProps: {
            min: 1,
            step: 1,
          },
          maxInputProps: {
            min: 1,
            step: 1,
          },
        },
      }),
      helper.accessor("progress", {
        header: columnLabels.progress,
        size: 130,
      }),
      createUpdatedAtColumn(),
    ],
    [productOptions, regionGroups, statusOptions, titleGroups]
  );

  const handleFiltersChange = useCallback(
    (nextFilters: AppLayoutColumnFilters) => {
      console.log("AppLayout filters changed:", nextFilters);
      console.log("AppLayout updatedAt range:", {
        start: nextFilters.updatedAt?.start,
        end: nextFilters.updatedAt?.end,
      });
    },
    []
  );

  const tableController = useDataTableController<AppLayoutColumnFilters>({
    columns: allColumns,
    onChange: handleFiltersChange,
    toolbarProps: {
      searchPlaceholder: "Поиск",
    },
  });

  const expandedColumns = useMemo<ColumnDef<ProjectRow>[]>(
    () => [
      {
        ...helper.list("title", {
          header: columnLabels.title,
          size: 260,
          filter: {
            groups: titleGroups,
            searchable: true,
            searchPlaceholder: "Поиск по названию проекта",
            getSearchText: (option) => String(option.value),
          },
        }),
      },
      {
        ...helper.list("product", {
          header: columnLabels.product,
          size: 180,
          cell: ({ getValue }) => getProductLabel(getValue()),
          filter: {
            options: productOptions,
            searchable: false,
            getSearchText: (option) => getProductLabel(option.value),
          },
        }),
      },
      helper.accessor("owner", {
        header: columnLabels.owner,
        size: 200,
      }),
      helper.accessor("team", {
        header: columnLabels.team,
        size: 180,
      }),
      {
        ...helper.columnFilter("priority", {
          header: columnLabels.priority,
          size: 140,
          cell: ({ getValue }) => getPriorityLabel(getValue()),
          filterFn: priorityColumnFilter,
          filter: {
            searchPlaceholder: "Поиск по приоритету",
          },
        }),
      },
      {
        ...helper.list("status", {
          header: columnLabels.status,
          size: 140,
          cell: ({ getValue }) => getStatusLabel(getValue()),
          filter: {
            options: statusOptions,
            searchable: false,
            getSearchText: (option) => getStatusLabel(option.value),
          },
        }),
      },
      helper.accessor("health", {
        header: columnLabels.health,
        size: 170,
        cell: ({ getValue }) => getHealthLabel(getValue()),
      }),
      createUpdatedAtColumn(),
    ],
    [productOptions, statusOptions, titleGroups]
  );

  const compactColumns = useMemo<ColumnDef<ProjectRow>[]>(
    () => [
      {
        ...helper.list("title", {
          header: columnLabels.title,
          size: 260,
          filter: {
            groups: titleGroups,
            searchable: true,
            searchPlaceholder: "Поиск по названию проекта",
            getSearchText: (option) => String(option.value),
          },
        }),
      },
      {
        ...helper.list("product", {
          header: columnLabels.product,
          size: 180,
          cell: ({ getValue }) => getProductLabel(getValue()),
          filter: {
            options: productOptions,
            searchable: false,
            getSearchText: (option) => getProductLabel(option.value),
          },
        }),
      },
      {
        ...helper.list("status", {
          header: columnLabels.status,
          size: 140,
          cell: ({ getValue }) => getStatusLabel(getValue()),
          filter: {
            options: statusOptions,
            searchable: false,
            getSearchText: (option) => getStatusLabel(option.value),
          },
        }),
      },
      helper.accessor("health", {
        header: columnLabels.health,
        size: 170,
        cell: ({ getValue }) => getHealthLabel(getValue()),
      }),
      createUpdatedAtColumn(),
    ],
    [productOptions, statusOptions, titleGroups]
  );

  const pausedColumns = useMemo<ColumnDef<ProjectRow>[]>(
    () => [
      {
        ...helper.list("title", {
          header: columnLabels.title,
          size: 260,
          filter: {
            groups: titleGroups,
            searchable: true,
            searchPlaceholder: "Поиск по названию проекта",
            getSearchText: (option) => String(option.value),
          },
        }),
      },
      helper.accessor("team", {
        header: columnLabels.team,
        size: 180,
      }),
      {
        ...helper.list("region", {
          header: columnLabels.region,
          size: 150,
          cell: ({ getValue }) => getRegionLabel(getValue()),
          filter: {
            groups: regionGroups,
            searchable: true,
            searchPlaceholder: "Поиск по региону",
            getSearchText: (option) => getRegionLabel(option.value),
          },
        }),
      },
      {
        ...helper.list("status", {
          header: columnLabels.status,
          size: 140,
          cell: ({ getValue }) => getStatusLabel(getValue()),
          filter: {
            options: statusOptions,
            searchable: false,
            getSearchText: (option) => getStatusLabel(option.value),
          },
        }),
      },
      helper.numberRange("members", {
        header: columnLabels.members,
        size: 140,
        filter: {
          minPlaceholder: "От, чел.",
          maxPlaceholder: "До, чел.",
          minInputProps: {
            min: 1,
            step: 1,
          },
          maxInputProps: {
            min: 1,
            step: 1,
          },
        },
      }),
      createUpdatedAtColumn(),
    ],
    [regionGroups, statusOptions, titleGroups]
  );

  const reviewColumns = useMemo<ColumnDef<ProjectRow>[]>(
    () => [
      {
        ...helper.list("title", {
          header: columnLabels.title,
          size: 260,
          filter: {
            groups: titleGroups,
            searchable: true,
            searchPlaceholder: "Поиск по названию проекта",
            getSearchText: (option) => String(option.value),
          },
        }),
      },
      helper.accessor("owner", {
        header: columnLabels.owner,
        size: 200,
      }),
      {
        ...helper.columnFilter("priority", {
          header: columnLabels.priority,
          size: 140,
          cell: ({ getValue }) => getPriorityLabel(getValue()),
          filterFn: priorityColumnFilter,
          filter: {
            searchPlaceholder: "Поиск по приоритету",
          },
        }),
      },
      {
        ...helper.list("status", {
          header: columnLabels.status,
          size: 140,
          cell: ({ getValue }) => getStatusLabel(getValue()),
          filter: {
            options: statusOptions,
            searchable: false,
            getSearchText: (option) => getStatusLabel(option.value),
          },
        }),
      },
      helper.accessor("health", {
        header: columnLabels.health,
        size: 170,
        cell: ({ getValue }) => getHealthLabel(getValue()),
      }),
      createUpdatedAtColumn(),
    ],
    [statusOptions, titleGroups]
  );

  const baseColumns = useMemo<ColumnDef<ProjectRow>[]>(() => {
    if (!enableColumnSwitchCase) {
      return allColumns;
    }

    if (activeStatusTab === "all") {
      return allColumns;
    }

    if (activeStatusTab === "active") {
      return compactColumns;
    }

    if (activeStatusTab === "paused") {
      return pausedColumns;
    }

    if (activeStatusTab === "review") {
      return reviewColumns;
    }

    return expandedColumns;
  }, [
    activeStatusTab,
    allColumns,
    compactColumns,
    enableColumnSwitchCase,
    expandedColumns,
    pausedColumns,
    reviewColumns,
  ]);

  const currentBaseColumnIds = useMemo(
    () =>
      baseColumns
        .map((column) => getProjectColumnId(column))
        .filter((columnId): columnId is ProjectColumnId => columnId !== null),
    [baseColumns]
  );

  const activeColumns = useMemo(
    () =>
      baseColumns.filter((column) => {
        const columnId = getProjectColumnId(column);
        return columnId ? visibleColumnIds.includes(columnId) : true;
      }),
    [baseColumns, visibleColumnIds]
  );

  const activeColumnsHint = useMemo(() => {
    if (!enableColumnSwitchCase) {
      return null;
    }

    const descriptions: Record<string, string> = {
      all: "Вкладка 'Все': полный набор",
      active: "Вкладка 'Активные': компактный сценарий",
      paused: "Вкладка 'Пауза': операционный набор",
      review: "Вкладка 'Согласование': контрольный набор",
      draft: "Вкладка 'Черновики': расширенный набор",
    };

    return `${descriptions[activeStatusTab] ?? "Набор колонок"}: выбрано ${
      activeColumns.length
    } из ${baseColumns.length} колонок`;
  }, [
    activeColumns.length,
    activeStatusTab,
    baseColumns.length,
    enableColumnSwitchCase,
  ]);

  const visibleRows = useMemo(() => {
    const normalized = tableController.searchValue.trim().toLowerCase();

    return rows.filter((row) => {
      const matchesSearch =
        !normalized ||
        row.title.toLowerCase().includes(normalized) ||
        productLabels[row.product].toLowerCase().includes(normalized) ||
        row.owner.toLowerCase().includes(normalized) ||
        row.team.toLowerCase().includes(normalized) ||
        row.budget.toLowerCase().includes(normalized) ||
        regionLabels[row.region].toLowerCase().includes(normalized);

      const matchesStatusTab =
        activeStatusTab === "all" || row.status === activeStatusTab;

      return matchesSearch && matchesStatusTab;
    });
  }, [activeStatusTab, rows, tableController.searchValue]);

  const loadMore = useCallback(() => {
    if (!hasMore || isFetching) {
      return;
    }

    setIsFetching(true);

    setTimeout(() => {
      setRows((prev) => [...prev, ...buildProjects(BATCH_SIZE, prev.length)]);
      setIsFetching(false);
    }, 500);
  }, [hasMore, isFetching]);

  const openColumnSettings = useCallback(() => {
    setIsColumnSettingsOpen(true);
  }, []);

  const handleColumnSettingsApply = useCallback(
    (value: ProjectColumnId[]) => {
      setVisibleColumnIds((prev) =>
        DEFAULT_VISIBLE_COLUMN_IDS.filter((columnId) =>
          currentBaseColumnIds.includes(columnId)
            ? value.includes(columnId)
            : prev.includes(columnId)
        )
      );
      setIsColumnSettingsOpen(false);
    },
    [currentBaseColumnIds]
  );

  const handleToolbarActionChange = useCallback(
    (value: string) => {
      if (value === "configure-columns") {
        openColumnSettings();
      }
    },
    [openColumnSettings]
  );

  const sidebar = isInsideVariant ? (
    <InsideSidebar
      title="Разделы"
      actionSlot={
        <Button
          iconOnly={Plus}
          size={Size.Xs}
          type={Type.Flat}
          color={Color.Brand}
        />
      }
      headSlot={
        <div className="flex h-9 items-center justify-center rounded border border-line bg-generic-medium text-sm text-primary">
          Inside head
        </div>
      }
      slotContent={
        <div className="flex h-full w-full items-center justify-center rounded border border-line bg-generic-medium text-sm text-primary">
          Inside content
        </div>
      }
    />
  ) : (
    <Sidebar
      items={sidebarItems.map((item) => ({
        ...item,
        onClick: () => setActiveMenu(item.id),
      }))}
      activeItemId={activeMenu}
      title="Меню"
    />
  );

  const header = isInsideVariant ? (
    <HeaderInside
      title="Платформа"
      subtitle="Playground"
      actionIcon={Plus}
      showActionButton
    >
      <TabsOverflow
        items={tabs}
        value={activeTab}
        onValueChange={setActiveTab}
        size={Size.Sm}
        indicatorOffset={10}
      />
    </HeaderInside>
  ) : (
    <Header title="Платформа" showMenuButton showNotification>
      <TabsOverflow
        items={tabs}
        value={activeTab}
        onValueChange={setActiveTab}
        size={Size.Sm}
        indicatorOffset={10}
      />
    </Header>
  );

  return (
    <AppLayout {...args} header={header} sidebar={sidebar}>
      <Table
        data={visibleRows}
        columns={activeColumns}
        virtualized
        stickyHeader
        rowHeight={40}
        overscan={10}
        striped
        enableRowSelection
        hasMore={hasMore}
        isFetchingMore={isFetching}
        onLoadMore={loadMore}
        showToolbar
        toolbarProps={{
          ...tableController.toolbarProps,
          topSlot: (
            <TabsOverflow
              items={statusTabs}
              value={activeStatusTab}
              onValueChange={setActiveStatusTab}
              size={Size.Sm}
              indicatorOffset={12}
            />
          ),
          rowCountLabel: "Строки",
          rowCountValue: `${visibleRows.length} / ${rows.length}`,
          actions: toolbarActions,
          actionsPlaceholder: "Действия",
          onActionChange: handleToolbarActionChange,
          bottomSlot: activeColumnsHint ? (
            <div className="text-sm text-secondary">
              {activeColumnsHint}. Активных column filters:{" "}
              {tableController.filters.activeCount}.
            </div>
          ) : undefined,
        }}
        rowActions={rowActions}
        filters={tableController.filters}
      />
      <TableColumnsModal
        open={isColumnSettingsOpen}
        onOpenChange={setIsColumnSettingsOpen}
        value={currentBaseColumnIds.filter((columnId) =>
          visibleColumnIds.includes(columnId)
        )}
        columns={baseColumns}
        onApply={handleColumnSettingsApply}
        size={Size.Sm}
        title="Настройка таблицы"
      />
    </AppLayout>
  );
}

export const HeaderAndSidebar: Story = {
  args: {
    container: "fill",
    children: null,
  },
  render: (args) => (
    <AppLayoutStoryContent
      args={args}
      variant="default"
      enableColumnSwitchCase
    />
  ),
};

export const HeaderInsideAndInsideSidebar: Story = {
  args: {
    container: "fill",
    children: null,
  },
  render: (args) => (
    <AppLayoutStoryContent
      args={args}
      variant="inside"
      enableColumnSwitchCase
    />
  ),
};
