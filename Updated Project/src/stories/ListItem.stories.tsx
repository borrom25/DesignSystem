import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ChevronRight, Trash2, Settings } from "lucide-react";
import { ListItem, ListItemVariant } from "@/components";
import { Size } from "@/types";

const SIZES = Object.values(Size);
const VARIANTS = Object.values(ListItemVariant);

const ICON_OPTIONS = {
  none: undefined,
  ChevronRight,
  Trash2,
  Settings,
};

const meta = {
  title: "Components/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    size: {
      control: "select",
      options: SIZES,
    },
    variant: {
      control: "select",
      options: VARIANTS,
    },
    selected: {
      control: "boolean",
    },
    iconOnly: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    checkbox: {
      control: "boolean",
    },
    hideSelectedOutline: {
      control: "boolean",
    },
    avatar: {
      control: "object",
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
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: "List Item",
    size: Size.Xs,
    variant: ListItemVariant.Default,
    selected: false,
    disabled: false,
    checkbox: true,
    avatar: {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=list-item-avatar",
      alt: "User avatar",
      withBorder: false,
      showEditBadge: false,
    },
    hideSelectedOutline: false,
    iconLeft: Settings,
    iconRight: ChevronRight,
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.selected ?? false);
    return (
      <ListItem
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

export const WithAvatar: Story = {
  args: {
    title: "List Item with Avatar",
    size: Size.Sm,
    variant: ListItemVariant.Default,
    selected: false,
    disabled: false,
    checkbox: true,
    avatar: {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=list-item-with-avatar",
      alt: "User avatar",
      withBorder: true,
      showEditBadge: false,
    },
    iconRight: ChevronRight,
  },
};

export const IconOnly: Story = {
  args: {
    title: "Icon only item",
  },
  render: () => {
    const [selectedSize, setSelectedSize] = useState<Size | null>(null);

    return (
      <div className="flex items-center gap-3">
        <ListItem
          size={Size.Xs}
          iconOnly
          iconLeft={Settings}
          selected={selectedSize === Size.Xs}
          onClick={() =>
            setSelectedSize((prev) => (prev === Size.Xs ? null : Size.Xs))
          }
          aria-label="Settings xs"
        >
          <span className="sr-only">Settings</span>
        </ListItem>
        <ListItem
          size={Size.Sm}
          iconOnly
          iconLeft={Settings}
          selected={selectedSize === Size.Sm}
          onClick={() =>
            setSelectedSize((prev) => (prev === Size.Sm ? null : Size.Sm))
          }
          aria-label="Settings sm"
        >
          <span className="sr-only">Settings</span>
        </ListItem>
        <ListItem
          size={Size.Md}
          iconOnly
          iconLeft={Settings}
          selected={selectedSize === Size.Md}
          onClick={() =>
            setSelectedSize((prev) => (prev === Size.Md ? null : Size.Md))
          }
          aria-label="Settings md"
        >
          <span className="sr-only">Settings</span>
        </ListItem>
      </div>
    );
  },
};

export const AnimatedTransition: Story = {
  args: {
    title: "Animated list item",
  },
  render: () => {
    const [iconOnly, setIconOnly] = useState(false);

    return (
      <div className="flex flex-col gap-4 p-8">
        <button
          onClick={() => setIconOnly(!iconOnly)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors self-start"
        >
          Toggle Icon Only
        </button>
        <div className="flex flex-col gap-2 w-[240px]">
          <ListItem
            size={Size.Sm}
            iconOnly={iconOnly}
            iconLeft={Settings}
            aria-label="Settings"
          >
            Settings
          </ListItem>
          <ListItem
            size={Size.Sm}
            iconOnly={iconOnly}
            iconLeft={Trash2}
            selected
            aria-label="Delete"
          >
            Delete
          </ListItem>
          <ListItem
            size={Size.Sm}
            iconOnly={iconOnly}
            iconLeft={ChevronRight}
            aria-label="Navigate"
          >
            Navigate
          </ListItem>
        </div>
      </div>
    );
  },
};
