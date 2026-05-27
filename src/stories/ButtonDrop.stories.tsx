import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Archive, Copy, Download, Eye, Pencil, Trash2 } from "lucide-react";
import { ButtonDrop } from "@/components/ButtonDrop";
import type { ButtonDropItem, ButtonDropProps } from "@/components/ButtonDrop";
import { Color, Size, Type } from "@/types";

const items: ButtonDropItem<string>[] = [
  { value: "view", label: "View", icon: Eye },
  { value: "edit", label: "Edit", icon: Pencil },
  { value: "copy", label: "Copy", icon: Copy },
  { value: "download", label: "Download", icon: Download },
  { value: "archive", label: "Archive", icon: Archive },
  { value: "delete", label: "Delete", icon: Trash2 },
];

const meta = {
  title: "Components/ButtonDrop",
  component: ButtonDrop,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonDrop>;

export default meta;
type Story = StoryObj<ButtonDropProps<string>>;

export const Playground: Story = {
  args: {
    items,
    value: "view",
    placeholder: "Select action",
    color: Color.Inverse,
    type: Type.Flat,
    size: Size.Md,
    disabled: false,
    hideChevron: false,
    matchTriggerWidth: true,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <ButtonDrop {...args} value={value} onChange={setValue} />;
  },
};

export const IconOnly: Story = {
  args: {
    items,
    value: "edit",
    color: Color.Inverse,
    type: Type.Ghost,
    size: Size.Md,
    iconOnly: true,
    matchTriggerWidth: false,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <ButtonDrop {...args} value={value} onChange={setValue} />;
  },
};
