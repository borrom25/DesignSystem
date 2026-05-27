import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarFilterPanel } from "@/components/CalendarFilter";
import type { CalendarFilterPanelProps } from "@/components/CalendarFilter";

const meta = {
  title: "Components/CalendarFilter",
  component: CalendarFilterPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CalendarFilterPanel>;

export default meta;
type Story = StoryObj<CalendarFilterPanelProps>;

export const Panel: Story = {
  args: {
    width: 320,
    defaultValue: new Date(2026, 4, 23),
  },
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>(args.defaultValue);

    return (
      <div className="flex flex-col gap-4">
        <CalendarFilterPanel {...args} value={value} onApply={setValue} />
        <div className="text-sm text-secondary">
          Applied date: {value ? value.toLocaleDateString("ru-RU") : "empty"}
        </div>
      </div>
    );
  },
};
