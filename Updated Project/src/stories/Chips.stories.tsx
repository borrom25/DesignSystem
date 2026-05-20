import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Plus,
  Trash2,
  Download,
  Eye,
  ChevronRight,
  Settings,
  Heart,
  Check,
  X,
} from "lucide-react";
import { Chips } from "@/components";
import { Size, Type } from "@/types";

const SIZES = Object.values(Size);
const TYPES = [Type.Fill, Type.Outline];

const ICON_OPTIONS = {
  none: undefined,
  Plus,
  Trash2,
  Download,
  Eye,
  ChevronRight,
  Settings,
  Heart,
  Check,
  X,
};

const meta = {
  title: "Components/Chips",
  component: Chips,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: SIZES,
    },
    type: {
      control: "select",
      options: TYPES,
    },
    selected: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    count: {
      control: "number",
    },
    iconLeft: {
      control: "select",
      options: Object.keys(ICON_OPTIONS),
      mapping: ICON_OPTIONS,
    },
    iconRight: {
      control: "select",
      options: Object.keys(ICON_OPTIONS),
      mapping: ICON_OPTIONS,
    },
    iconOnly: {
      control: "select",
      options: Object.keys(ICON_OPTIONS),
      mapping: ICON_OPTIONS,
    },
  },
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Chips",
    size: Size.Xs,
    type: Type.Fill,
    selected: false,
    disabled: false,
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.selected ?? false);
    return (
      <Chips
        {...args}
        selected={selected}
        onClick={(event) => {
          args.onClick?.(event);
          if (!args.disabled) {
            setSelected((prev) => !prev);
          }
        }}
      />
    );
  },
};

export const AsChild: Story = {
  render: () => (
    <Chips asChild selected size={Size.Xs}>
      <a href="#chips-as-child" onClick={(event) => event.preventDefault()}>
        Chips asChild
      </a>
    </Chips>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Chips в режиме asChild: стили чипса применяются к ссылке без дополнительной обертки.",
      },
    },
  },
};
