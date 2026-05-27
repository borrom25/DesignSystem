import type { Meta, StoryObj } from "@storybook/react-vite";
import { PieChart as PieChartComponent } from "@/components";

const meta = {
  title: "Components/Charts",
  component: PieChartComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    data: { table: { disable: true } },
    type: {
      control: { type: "select" },
      options: ["pie", "donut"],
    },
    hasInteractiveLegend: {
      control: "boolean",
    },
    title: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
  },
} satisfies Meta<typeof PieChartComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const chartData = [
  { value: 40, name: "Органика" },
  { value: 50, name: "Платный трафик" },
  { value: 30, name: "Соцсети" },
  { value: 70, name: "Орешки" },
  { value: 50, name: "Рефералы" },
  { value: 40, name: "бебебе" },
  { value: 15, name: "бобобo" },
];

export const PieChart: Story = {
  args: {
    data: chartData,
    type: "pie",
  },
  render: (args) => (
    <div className="p-10">
      <PieChartComponent {...args} />
    </div>
  ),
};

export const PieChartDonutType: Story = {
  args: {
    data: chartData,
    type: "donut",
    hasInteractiveLegend: true,
    title: "Title",
    subtitle: "Subtitle",
  },
  render: (args) => (
    <div className="p-10">
      <PieChartComponent {...args} />
    </div>
  ),
};
