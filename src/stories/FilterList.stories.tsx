import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  FilterList,
  FilterListCountLabel,
  FilterListPanel,
} from "@/components/FilterList";
import type {
  FilterListGroup,
  FilterListProps,
} from "@/components/FilterList";
import { Size } from "@/types";

const groups: FilterListGroup<string>[] = [
  {
    label: <FilterListCountLabel label="Status" count={4} />,
    options: [
      { value: "new", label: "New" },
      { value: "active", label: "Active" },
      { value: "paused", label: "Paused" },
      { value: "done", label: "Done" },
    ],
  },
  {
    label: <FilterListCountLabel label="Owner" count={3} />,
    options: [
      { value: "product", label: "Product" },
      { value: "design", label: "Design" },
      { value: "engineering", label: "Engineering" },
    ],
  },
];

const meta = {
  title: "Components/FilterList",
  component: FilterList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FilterList>;

export default meta;
type Story = StoryObj<FilterListProps<string>>;

export const List: Story = {
  args: {
    groups,
    value: ["active", "design"],
    showSelectAll: true,
    size: Size.Xs,
  },
  render: (args) => {
    const [value, setValue] = useState<string[]>(args.value);

    return (
      <div className="w-[280px]">
        <FilterList {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Panel: Story = {
  args: {
    groups,
    value: ["active", "design"],
  },
  render: (args) => {
    const [value, setValue] = useState<string[]>(args.value);

    return (
      <div className="flex flex-col gap-4">
        <FilterListPanel
          groups={groups}
          value={value}
          onApply={setValue}
          getSearchText={(option) => String(option.label)}
        />
        <div className="text-sm text-secondary">
          Applied values: {value.length ? value.join(", ") : "empty"}
        </div>
      </div>
    );
  },
};
