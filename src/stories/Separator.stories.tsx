import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "@/components";

const meta = {
  component: Separator,
  title: "Components/Separator",
  tags: ["autodocs"],
  argTypes: {
    rotate: { control: "boolean" },
    width: { control: "text" },
    margin: { control: "text" },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <p style={{ color: "#999" }}>Text</p>
      <Separator margin="8px" />
      <p style={{ color: "#999" }}>Text</p>
    </div>
  ),
};

export const Rotated: Story = {
  render: () => (
    <div className="flex h-24 items-center">
      <p style={{ color: "#999" }}>Text</p>
      <Separator rotate width="64px" />
      <p style={{ color: "#999" }}>Text</p>
    </div>
  ),
};
