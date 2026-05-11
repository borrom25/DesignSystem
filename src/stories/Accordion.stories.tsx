import { Accordion, Button } from "@/components";
import { Color, Size } from "@/types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check } from "lucide-react";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    disabled: { control: "boolean" },
    position: {
      control: "select",
      options: ["start", "end", "center"],
    },
    headSlot: { control: false },
    iconLeft: { control: false },
    className: { control: false },
    children: { control: false },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: "Accordion",
    children: <>бебебе</>,
    headSlot: (
      <Button size={Size.Xs} color={Color.Positive}>
        headSlot
      </Button>
    ),
    iconLeft: Check,
  },

  render: (args) => (
    <div className="flex gap-10 flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-xs">default</span>
        <Accordion {...args} subtitle="Start" />
        <Accordion {...args} subtitle="Mid" position="mid" />
        <Accordion {...args} subtitle="End" position="end" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs">disabled</span>
        <Accordion {...args} subtitle="Start" disabled />
        <Accordion {...args} subtitle="Mid" disabled position="mid" />
        <Accordion {...args} subtitle="End" disabled position="end" />
      </div>
    </div>
  ),
};
