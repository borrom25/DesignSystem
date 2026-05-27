import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarChartHorizontal as BarChartHorizontalComponent } from "@/components";

const meta = {
  title: "Components/Charts",
  component: BarChartHorizontalComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    data: { table: { disable: true } },
  },
} satisfies Meta<typeof BarChartHorizontalComponent>;

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

export const BarChartHorizontal: Story = {
  args: {
    data: chartData,
    title: "PrimaryName",
  },
  render: (args) => (
    <div className="p-10">
      <BarChartHorizontalComponent {...args} />
    </div>
  ),
};
