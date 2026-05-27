import type { Meta, StoryObj } from "@storybook/react-vite";
import { LineChart as LineChartComponent } from "@/components";

const meta = {
  title: "Components/Charts",
  component: LineChartComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    data: { table: { disable: true } },
    series: { table: { disable: true } },
  },
} satisfies Meta<typeof LineChartComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const chartData = [
  {
    name: "Пн",
    b1: 120,
    b2: 85,
    b3: 50,
  },
  {
    name: "Вт",
    b1: 150,
    b2: 95,
    b3: 60,
  },
  {
    name: "Ср",
    b1: 180,
    b2: 110,
    b3: 75,
  },
  {
    name: "Чт",
    b1: 140,
    b2: 100,
    b3: 65,
  },
  {
    name: "Пт",
    b1: 200,
    b2: 130,
    b3: 90,
  },
  {
    name: "Сб",
    b1: 250,
    b2: 160,
    b3: 110,
  },
  {
    name: "Вс",
    b1: 220,
    b2: 140,
    b3: 95,
  },
  {
    name: "Вс",
    b1: 220,
    b2: 140,
    b3: 95,
  },
  {
    name: "Вс",
    b1: 220,
    b2: 140,
    b3: 95,
  },
];

export const LineChart: Story = {
  args: {
    data: chartData,
    title: "PrimaryName",
    series: [
      { dataKey: "b1", label: "Органика" },
      { dataKey: "b2", label: "Платный трафик" },
      { dataKey: "b3", label: "Соцсети" },
    ],
  },
  render: (args) => (
    <div className="p-10">
      <LineChartComponent {...args} />
    </div>
  ),
};

export const LineChartCustom: Story = {
  args: {
    data: chartData,
    title: "PrimaryName",
    series: [{ dataKey: "b1", label: "Органика" }],
    lineType: "monotone",
    showDots: false,
  },
  render: (args) => (
    <div className="p-10">
      <LineChartComponent {...args} />
    </div>
  ),
};
