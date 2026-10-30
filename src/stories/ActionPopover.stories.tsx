import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionPopover, Button } from "@/components";
import { Color, Size, Type } from "@/types";

const meta = {
  title: "Components/ActionPopover",
  component: ActionPopover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ActionPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

const actions = (
  <Button size={Size.Xs} type={Type.Flat} color={Color.Brand}>
    Применить
  </Button>
);

export const Playground: Story = {
  args: {
    selectedLabel: "Выбрано: 3",
    children: actions,
    closeAriaLabel: "Скрыть popover действий",
    onClose: () => undefined,
  },
};

export const WithoutClose: Story = {
  args: {
    selectedLabel: "Выбрано: 3",
    children: actions,
  },
};
