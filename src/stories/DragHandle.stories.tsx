import type { Meta, StoryObj } from "@storybook/react-vite";
import { DragHandle, ListItem } from "@/components";
import { Size } from "@/types";
import { useState } from "react";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;

const meta = {
  title: "Components/DragHandle",
  component: DragHandle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Визуальная ручка перетаскивания (GripVertical). Обычно через ListItem leading. DnD-логика и stopPropagation настраиваются снаружи.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: SIZES,
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof DragHandle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: Size.Sm,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {SIZES.map((size) => (
        <DragHandle key={size} size={size} />
      ))}
    </div>
  ),
};

export const WithListItem: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <div className="w-[280px]">
        <ListItem
          size={Size.Sm}
          checkbox
          selected={selected}
          hideSelectedOutline
          onClick={() => setSelected((prev) => !prev)}
          title="List item"
          leading={
            <DragHandle
              size={Size.Sm}
              onClick={(event) => event.stopPropagation()}
              onPointerDown={(event) => event.stopPropagation()}
            />
          }
        />
      </div>
    );
  },
};
