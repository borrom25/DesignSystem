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

const answer =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis";

const regions = [
  { name: answer, value: 32 },
  { name: answer, value: 26 },
  { name: answer, value: 20 },
  { name: answer, value: 18 },
];

export const BarChartHorizontal: Story = {
  args: {
    data: regions,
  },
  render: (args) => (
    <div className="p-10">
      <BarChartHorizontalComponent {...args} />
    </div>
  ),
};
