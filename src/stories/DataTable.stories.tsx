import { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { RowSelectionState } from "@tanstack/react-table";
import {
  Table,
  createDataTableColumnHelper,
  useDataTableFilters,
  type ColumnDef,
  type TableCellValueChangeEvent,
  type TableProps,
} from "@/components";

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

const columnHelper = createDataTableColumnHelper<ProjectTreeRow>();
const inspectionColumnHelper = createDataTableColumnHelper<InspectionRow>();

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
  inspectionColumnHelper.list("priority", {
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

function InspectionsTable({ inspections }: { inspections: InspectionRow[] }) {
  const filters = useDataTableFilters({
    columns: inspectionColumns,
  });

  return (
    <Table
      embedded
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
