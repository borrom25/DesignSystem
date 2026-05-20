import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Table,
  createDataTableColumnHelper,
  type ColumnDef,
  type TableProps,
} from "@/components";

interface ProjectTreeRow {
  id: string;
  name: string;
  owner: string;
  status: string;
  budget: string;
  children?: ProjectTreeRow[];
}

const columnHelper = createDataTableColumnHelper<ProjectTreeRow>();

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
                children: [
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
        },
      ],
    })),
  }));

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
    <div className="box-border flex h-screen w-full min-h-0 flex-col">
      <Table
        data={data}
        columns={columns}
        enableNestedRows
        stickyHeader
        striped
        className="min-h-0 flex-1"
        getRowId={(row) => row.id}
      />
    </div>
  ),
};

export const VirtualizedNestedRows: Story = {
  args: {
    data: buildVirtualizedData(),
    columns,
  },
  render: () => (
    <div className="box-border flex h-screen w-full min-h-0 flex-col">
      <Table
        data={buildVirtualizedData()}
        columns={columns}
        enableNestedRows
        virtualized
        stickyHeader
        rowHeight={44}
        overscan={8}
        className="min-h-0 flex-1"
        getRowId={(row) => row.id}
      />
    </div>
  ),
};
