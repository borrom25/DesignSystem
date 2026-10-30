import { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { RowSelectionState } from "@tanstack/react-table";
import {
  Button,
  Table,
  createDataTableColumnHelper,
  useDataTableController,
  useDataTableFilters,
  type ColumnDef,
  type TableCellValueChangeEvent,
  type TableProps,
} from "@/components";
import { Color, Size, Type } from "@/types";

interface ProjectTreeRow {
  id: string;
  name: string;
  owner: string;
  status: string;
  budget: string;
  inspections?: InspectionRow[];
  children?: ProjectTreeRow[];
}

interface InspectionRow {
  id: string;
  checkpoint: string;
  inspector: string;
  status: "Запланировано" | "В работе" | "Готово";
  priority: "Низкий" | "Средний" | "Высокий";
}

type InspectionScopeId = "planned" | "completed";

type ScopedInspectionFilters = {
  checkpoint?: string;
  inspector?: string;
  status?: InspectionRow["status"][];
  priority?: InspectionRow["priority"];
};

interface GroupedProjectRow {
  id: string;
  name: string;
  owner: string;
  start: string;
  finish: string;
  budget: string;
  remaining: string;
}

const columnHelper = createDataTableColumnHelper<ProjectTreeRow>();
const inspectionColumnHelper = createDataTableColumnHelper<InspectionRow>();
const groupedColumnHelper = createDataTableColumnHelper<GroupedProjectRow>();
const nestedInspectionInset = 56;

const columns: ColumnDef<ProjectTreeRow>[] = [
  columnHelper.accessor("name", {
    header: "Проект",
    size: 280,
    cell: ({ row }) => row.original.name,
  }),
  columnHelper.accessor("owner", {
    header: "Ответственный",
    size: 180,
  }),
  columnHelper.accessor("status", {
    header: "Статус",
    size: 160,
  }),
  columnHelper.accessor("budget", {
    header: "Бюджет",
    size: 140,
    enableGlobalFilter: false,
  }),
];

const data: ProjectTreeRow[] = [
  {
    id: "factory",
    name: "Производственный контур",
    owner: "Иван Петров",
    status: "В работе",
    budget: "18 млн ₽",
    children: [
      {
        id: "factory-line-1",
        name: "Линия сборки 1",
        owner: "Анна Орлова",
        status: "Проектирование",
        budget: "7 млн ₽",
        children: [
          {
            id: "factory-line-1-zone-a",
            name: "Зона A",
            owner: "Руслан Валеев",
            status: "Закупка",
            budget: "3 млн ₽",
            children: [
              {
                id: "factory-line-1-zone-a-node-1",
                name: "Пост контроля",
                owner: "Ольга Смирнова",
                status: "Монтаж",
                budget: "1.2 млн ₽",
                inspections: [
                  {
                    id: "factory-line-1-zone-a-node-1-safety",
                    checkpoint: "Проверка ограждений",
                    inspector: "Дмитрий Носов",
                    status: "В работе",
                    priority: "Высокий",
                  },
                  {
                    id: "factory-line-1-zone-a-node-1-sensors",
                    checkpoint: "Приемка датчиков",
                    inspector: "Екатерина Ларионова",
                    status: "Запланировано",
                    priority: "Средний",
                  },
                  {
                    id: "factory-line-1-zone-a-node-1-docs",
                    checkpoint: "Комплект документов",
                    inspector: "Ольга Смирнова",
                    status: "Готово",
                    priority: "Низкий",
                  },
                ],
              },
              {
                id: "factory-line-1-zone-a-node-1-task",
                name: "Калибровка датчиков",
                owner: "Павел Соколов",
                status: "Готово",
                budget: "0.4 млн ₽",
              },
            ],
          },
        ],
      },
      {
        id: "factory-line-2",
        name: "Линия сборки 2",
        owner: "Мария Котова",
        status: "Планирование",
        budget: "5 млн ₽",
      },
    ],
  },
  {
    id: "logistics",
    name: "Логистика",
    owner: "Денис Морозов",
    status: "Риск",
    budget: "11 млн ₽",
    children: [
      {
        id: "logistics-storage",
        name: "Склад временного хранения",
        owner: "Елена Васильева",
        status: "В работе",
        budget: "4 млн ₽",
      },
    ],
  },
];

const buildVirtualizedData = (): ProjectTreeRow[] =>
  Array.from({ length: 30 }, (_, index) => ({
    id: `program-${index}`,
    name: `Программа ${index + 1}`,
    owner: "Команда PMO",
    status: index % 2 === 0 ? "В работе" : "Планирование",
    budget: `${10 + index} млн ₽`,
    children: Array.from({ length: 3 }, (_, childIndex) => ({
      id: `program-${index}-stream-${childIndex}`,
      name: `Поток ${childIndex + 1}`,
      owner: "Руководитель потока",
      status: "Контроль",
      budget: `${childIndex + 1} млн ₽`,
      children: [
        {
          id: `program-${index}-stream-${childIndex}-task`,
          name: "Рабочий пакет",
          owner: "Исполнитель",
          status: "В очереди",
          budget: "0.8 млн ₽",
          inspections: [
            {
              id: `program-${index}-stream-${childIndex}-task-quality`,
              checkpoint: "Контроль качества",
              inspector: "Инспектор ОТК",
              status: childIndex % 2 === 0 ? "В работе" : "Запланировано",
              priority: childIndex % 2 === 0 ? "Высокий" : "Средний",
            },
            {
              id: `program-${index}-stream-${childIndex}-task-docs`,
              checkpoint: "Документы",
              inspector: "Администратор проекта",
              status: "Готово",
              priority: "Низкий",
            },
          ],
        },
      ],
    })),
  }));

const inspectionColumns: ColumnDef<InspectionRow>[] = [
  inspectionColumnHelper.columnFilter("checkpoint", {
    header: "Контрольная точка",
    size: 260,
    filter: {
      searchPlaceholder: "Найти точку",
    },
  }),
  inspectionColumnHelper.columnFilter("inspector", {
    header: "Инспектор",
    size: 200,
    filter: {
      searchPlaceholder: "Найти инспектора",
    },
  }),
  inspectionColumnHelper.list("status", {
    header: "Статус",
    size: 180,
    filter: {
      options: [
        { value: "Запланировано", label: "Запланировано" },
        { value: "В работе", label: "В работе" },
        { value: "Готово", label: "Готово" },
      ],
    },
  }),
  inspectionColumnHelper.radio("priority", {
    header: "Приоритет",
    size: 160,
    filter: {
      options: [
        { value: "Низкий", label: "Низкий" },
        { value: "Средний", label: "Средний" },
        { value: "Высокий", label: "Высокий" },
      ],
    },
  }),
];

const inspectionRowsByScope: Record<InspectionScopeId, InspectionRow[]> = {
  planned: [
    {
      id: "planned-1",
      checkpoint: "Входной контроль",
      inspector: "Марина Юдина",
      status: "Запланировано",
      priority: "Высокий",
    },
    {
      id: "planned-2",
      checkpoint: "Проверка кабельных трасс",
      inspector: "Павел Левин",
      status: "В работе",
      priority: "Средний",
    },
  ],
  completed: [
    {
      id: "completed-1",
      checkpoint: "Финальная приемка",
      inspector: "Марина Юдина",
      status: "Готово",
      priority: "Высокий",
    },
    {
      id: "completed-2",
      checkpoint: "Проверка документации",
      inspector: "Ольга Смирнова",
      status: "Готово",
      priority: "Низкий",
    },
  ],
};

function InspectionsTable({ inspections }: { inspections: InspectionRow[] }) {
  const filters = useDataTableFilters({
    columns: inspectionColumns,
  });

  return (
    <Table
      embedded
      embeddedLeadingInset={nestedInspectionInset}
      data={inspections}
      columns={inspectionColumns}
      filters={filters}
      striped
      getRowId={(row) => row.id}
    />
  );
}

function NestedTableExample({
  data,
  virtualized = false,
  showToolbar = false,
  toolbarProps,
}: {
  data: ProjectTreeRow[];
  virtualized?: boolean;
  showToolbar?: boolean;
  toolbarProps?: TableProps<ProjectTreeRow>["toolbarProps"];
}) {
  return (
    <div className="box-border flex h-screen w-full min-h-0 flex-col">
      <Table
        data={data}
        columns={columns}
        enableNestedRows
        virtualized={virtualized}
        stickyHeader
        striped
        rowHeight={44}
        overscan={8}
        expandedContentEstimateSize={360}
        className="min-h-0 flex-1"
        showToolbar={showToolbar}
        toolbarProps={toolbarProps}
        getRowId={(row) => row.id}
        getRowCanExpandContent={(row) => Boolean(row.original.inspections)}
        renderExpandedContent={({ row }) =>
          row.original.inspections ? (
            <InspectionsTable inspections={row.original.inspections} />
          ) : null
        }
      />
    </div>
  );
}

function EditableCellsExample() {
  const [editableData, setEditableData] = useState<ProjectTreeRow[]>(() =>
    data.map((row, index) =>
      index === 0
        ? { ...row, owner: "", status: "Можно ввести\nнесколько строк" }
        : row
    )
  );
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [lastEdit, setLastEdit] =
    useState<TableCellValueChangeEvent<ProjectTreeRow> | null>(null);

  const editableCellIds = useMemo(
    () => (editableData[0] ? [`${editableData[0].id}:budget`] : []),
    [editableData]
  );

  return (
    <div className="box-border flex h-screen w-full min-h-0 flex-col gap-4 p-4">
      <Table
        data={editableData}
        columns={columns}
        stickyHeader
        striped
        enableRowSelection
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        editable
        editableCellIds={editableCellIds}
        editablePlaceholder="Введите значение"
        isCellEditable={({ columnId }) =>
          columnId === "owner" || columnId === "status"
        }
        onCellValueChange={(event) => {
          setLastEdit(event);
          setEditableData((currentData) =>
            currentData.map((row) =>
              row.id === event.rowId
                ? {
                    ...row,
                    [event.columnId]: String(event.value),
                  }
                : row
            )
          );
        }}
        getRowId={(row) => row.id}
        className="min-h-0 flex-1"
      />

      <div className="rounded-scale-xl border border-line bg-generic p-4 text-sm text-secondary">
        {lastEdit ? (
          <span className="whitespace-pre-wrap">
            Последнее изменение: rowId={lastEdit.rowId}, columnId=
            {lastEdit.columnId}, reason={lastEdit.reason}, value=
            {String(lastEdit.value)}
          </span>
        ) : (
          <span>Изменений пока нет</span>
        )}
      </div>
    </div>
  );
}

function PopoverActionExample() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return (
    <div className="box-border flex h-screen w-full min-h-0 flex-col p-4">
      <Table
        data={data}
        columns={columns}
        stickyHeader
        striped
        enableRowSelection
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        getRowId={(row) => row.id}
        className="min-h-0 flex-1"
        popoverAction={{
          selectedLabel: (count) => `Отмечено проектов: ${count}`,
          children: ({ selectedRows, hide }) => (
            <div className="flex items-center gap-2">
              <Button
                size={Size.Xs}
                type={Type.Flat}
                color={Color.Brand}
                onClick={() =>
                  console.log(
                    "Применить действие к выбранным проектам:",
                    selectedRows.map((row) => row.original)
                  )
                }
              >
                Применить
              </Button>
              <Button
                size={Size.Xs}
                type={Type.Outline}
                color={Color.Danger}
                onClick={hide}
              >
                Скрыть
              </Button>
            </div>
          ),
          onClose: ({ hide }) => hide(),
          closeAriaLabel: "Скрыть панель выбранных проектов",
        }}
      />
    </div>
  );
}

function ScopedControllerExample() {
  const [activeScope, setActiveScope] = useState<InspectionScopeId>("planned");
  const tableController = useDataTableController<ScopedInspectionFilters>({
    columns: inspectionColumns,
    scopeKey: activeScope,
    toolbarProps: {
      searchPlaceholder: "Поиск по вкладке",
    },
  });

  const visibleRows = useMemo(() => {
    const normalizedSearch = tableController.searchValue.trim().toLowerCase();

    return inspectionRowsByScope[activeScope].filter((row) => {
      if (!normalizedSearch) {
        return true;
      }

      return (
        row.checkpoint.toLowerCase().includes(normalizedSearch) ||
        row.inspector.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [activeScope, tableController.searchValue]);

  return (
    <div className="box-border flex h-screen w-full min-h-0 flex-col">
      <div className="flex flex-wrap gap-2 px-4 pt-4">
        <Button
          size={Size.Sm}
          type={activeScope === "planned" ? Type.Flat : Type.Outline}
          color={Color.Brand}
          onClick={() => setActiveScope("planned")}
        >
          План
        </Button>
        <Button
          size={Size.Sm}
          type={activeScope === "completed" ? Type.Flat : Type.Outline}
          color={Color.Brand}
          onClick={() => setActiveScope("completed")}
        >
          Завершено
        </Button>
      </div>

      <div className="px-4 pt-3 text-sm text-secondary">
        <code>scopeKey</code> изолирует column filters и toolbar search между
        вкладками с одинаковыми колонками.
      </div>

      <div className="min-h-0 flex-1 p-4">
        <Table
          data={visibleRows}
          columns={inspectionColumns}
          filters={tableController.filters}
          stickyHeader
          striped
          showToolbar
          toolbarProps={{
            ...tableController.toolbarProps,
            middleSlot: (
              <div className="text-sm text-secondary">
                Активная вкладка: {activeScope}. Попробуйте задать разные search
                и filters для каждой вкладки.
              </div>
            ),
          }}
          getRowId={(row) => row.id}
          className="min-h-0 h-full"
        />
      </div>
    </div>
  );
}

const groupedColumns: ColumnDef<GroupedProjectRow>[] = [
  groupedColumnHelper.accessor("name", {
    header: "Проект",
    size: 240,
  }),
  groupedColumnHelper.accessor("owner", {
    header: "Ответственный",
    size: 180,
  }),
  groupedColumnHelper.group({
    id: "dates",
    header: "Сроки",
    columns: [
      groupedColumnHelper.accessor("start", {
        header: "Старт",
        size: 140,
      }),
      groupedColumnHelper.accessor("finish", {
        header: "Финиш",
        size: 140,
      }),
    ],
  }),
  groupedColumnHelper.group({
    id: "finance",
    header: "Финансы",
    columns: [
      groupedColumnHelper.accessor("budget", {
        header: "Бюджет",
        size: 140,
      }),
      groupedColumnHelper.accessor("remaining", {
        header: "Остаток",
        size: 140,
      }),
    ],
  }),
];

const groupedData: GroupedProjectRow[] = [
  {
    id: "design",
    name: "Проектирование",
    owner: "Ольга Смирнова",
    start: "01.11.2025",
    finish: "20.12.2025",
    budget: "3 млн ₽",
    remaining: "0 млн ₽",
  },
  {
    id: "procurement",
    name: "Закупка",
    owner: "Павел Соколов",
    start: "05.12.2025",
    finish: "31.01.2026",
    budget: "9 млн ₽",
    remaining: "1 млн ₽",
  },
  {
    id: "factory",
    name: "Производственный контур",
    owner: "Иван Петров",
    start: "12.01.2026",
    finish: "30.06.2026",
    budget: "18 млн ₽",
    remaining: "6 млн ₽",
  },
  {
    id: "logistics",
    name: "Логистика",
    owner: "Денис Морозов",
    start: "03.02.2026",
    finish: "15.09.2026",
    budget: "11 млн ₽",
    remaining: "4 млн ₽",
  },
  {
    id: "campus",
    name: "Кампус",
    owner: "Анна Орлова",
    start: "20.03.2026",
    finish: "01.12.2026",
    budget: "24 млн ₽",
    remaining: "19 млн ₽",
  },
  {
    id: "commissioning",
    name: "Пусконаладка",
    owner: "Мария Котова",
    start: "02.12.2026",
    finish: "28.02.2027",
    budget: "7 млн ₽",
    remaining: "7 млн ₽",
  },
  {
    id: "handover",
    name: "Сдача объекта",
    owner: "Елена Васильева",
    start: "01.03.2027",
    finish: "30.04.2027",
    budget: "2 млн ₽",
    remaining: "2 млн ₽",
  },
];

const meta = {
  title: "Components/DataTable",
  component: Table,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<TableProps<ProjectTreeRow>>;

export const NestedRows: Story = {
  args: {
    data,
    columns,
  },
  render: () => (
    <NestedTableExample
      data={data}
      showToolbar
      toolbarProps={{
        onSearchChange() {},
        showSearch: false,
        middleSlot: (
          <div className="w-full text-sm text-secondary">
            Только слот тулбара
          </div>
        ),
      }}
    />
  ),
};

export const VirtualizedNestedRows: Story = {
  args: {
    data: buildVirtualizedData(),
    columns,
  },
  render: () => (
    <NestedTableExample data={buildVirtualizedData()} virtualized />
  ),
};

export const EditableCells: Story = {
  args: {
    data,
    columns,
  },
  render: () => <EditableCellsExample />,
};

export const PopoverAction: Story = {
  args: {
    data,
    columns,
  },
  render: () => <PopoverActionExample />,
};

export const ScopedControllerState: Story = {
  args: {
    data,
    columns,
  },
  render: () => <ScopedControllerExample />,
};

const groupedScrollData: GroupedProjectRow[] = Array.from(
  { length: 6 },
  (_, copy) =>
    groupedData.map((row) => ({
      ...row,
      id: `${row.id}-${copy}`,
      name: copy === 0 ? row.name : `${row.name} ${copy + 1}`,
    }))
).flat();

function GroupedHeadersExample() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const tableController = useDataTableController({
    columns: groupedColumns,
    toolbarProps: {
      searchPlaceholder: "Поиск по проекту",
      middleSlot: (
        <div className="ml-auto">
          <Button
            size={Size.Sm}
            type={Type.Flat}
            color={Color.Brand}
            onClick={() => console.log("Добавить проект")}
          >
            Добавить
          </Button>
        </div>
      ),
    },
  });

  return (
    <div className="box-border flex h-screen w-full min-h-0 flex-col p-4">
      <Table
        data={groupedScrollData}
        columns={groupedColumns}
        stickyHeader
        striped
        enableRowSelection
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        showToolbar
        toolbarProps={tableController.toolbarProps}
        globalFilter={tableController.searchValue}
        getRowId={(row) => row.id}
        className="min-h-0 flex-1"
        rowActions={(row) => [
          {
            label: "Редактировать",
            value: "edit",
            onClick: () => console.log("Редактировать", row.original),
          },
          {
            label: "Дублировать",
            value: "duplicate",
            onClick: () => console.log("Дублировать", row.original),
          },
          {
            label: "Удалить",
            value: "delete",
            onClick: () => console.log("Удалить", row.original),
          },
        ]}
      />
    </div>
  );
}

export const GroupedHeaders: StoryObj<TableProps<GroupedProjectRow>> = {
  render: () => <GroupedHeadersExample />,
};
