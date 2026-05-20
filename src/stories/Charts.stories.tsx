import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarChartVertical as BarChartVerticalComponent } from "@/components";

const meta = {
  title: "Components/Charts",
  component: BarChartVerticalComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BarChartVerticalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const chartData = [
  {
    name: "Пн",
    b1: 120,
    b2: 85,
    b3: 50,
    b4: 30,
    b5: 45,
    b6: 60,
    b7: 25,
    b8: 40,
    b9: 55,
    b10: 70,
  },
  {
    name: "Вт",
    b1: 150,
    b2: 95,
    b3: 60,
    b4: 40,
    b5: 50,
    b6: 70,
    b7: 30,
    b8: 45,
    b9: 65,
    b10: 80,
  },
  {
    name: "Ср",
    b1: 180,
    b2: 110,
    b3: 75,
    b4: 50,
    b5: 60,
    b6: 85,
    b7: 35,
    b8: 55,
    b9: 75,
    b10: 90,
  },
  {
    name: "Чт",
    b1: 140,
    b2: 100,
    b3: 65,
    b4: 45,
    b5: 55,
    b6: 75,
    b7: 28,
    b8: 48,
    b9: 68,
    b10: 82,
  },
  {
    name: "Пт",
    b1: 200,
    b2: 130,
    b3: 90,
    b4: 60,
    b5: 70,
    b6: 95,
    b7: 40,
    b8: 60,
    b9: 80,
    b10: 100,
  },
  {
    name: "Сб",
    b1: 250,
    b2: 160,
    b3: 110,
    b4: 75,
    b5: 85,
    b6: 115,
    b7: 45,
    b8: 70,
    b9: 95,
    b10: 120,
  },
  {
    name: "Вс",
    b1: 220,
    b2: 140,
    b3: 95,
    b4: 65,
    b5: 78,
    b6: 105,
    b7: 42,
    b8: 68,
    b9: 88,
    b10: 110,
  },
  {
    name: "Вс",
    b1: 220,
    b2: 140,
    b3: 95,
    b4: 65,
    b5: 78,
    b6: 105,
    b7: 42,
    b8: 68,
    b9: 88,
    b10: 110,
  },
  {
    name: "Вс",
    b1: 220,
    b2: 140,
    b3: 95,
    b4: 65,
    b5: 78,
    b6: 105,
    b7: 42,
    b8: 68,
    b9: 88,
    b10: 110,
  },
];

export const BarChartVertical: Story = {
  args: {
    data: chartData,
    title: "PrimaryName",
    series: [
      { dataKey: "b1", label: "Органика" },
      { dataKey: "b2", label: "Платный трафик" },
      { dataKey: "b3", label: "Соцсети" },
      { dataKey: "b4", label: "Рефералы" },
      { dataKey: "b5", label: "Рефералы" },
      { dataKey: "b6", label: "Рефералы" },
      { dataKey: "b7", label: "Рефералы" },
    ],
  },

  render: (args) => (
    <div className="p-10">
      <BarChartVerticalComponent {...args} />
    </div>
  ),
};
