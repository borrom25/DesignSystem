import type { Meta, StoryObj } from "@storybook/react-vite";
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
import { Label } from "@/components";
import { Color, Size } from "@/types";
import type { LabelColor } from "@/components/Label/Label.types";

const COLORS: LabelColor[] = [
  Color.Brand,
  Color.Action,
  Color.Danger,
  Color.Positive,
  Color.Warning,
  Color.Info,
  Color.Inverse,
];
const TYPES = ["flat", "fill", "outline", "text"] as const;
const SIZES = Object.values(Size);

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
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    color: {
      control: "select",
      options: COLORS,
    },
    type: {
      control: "select",
      options: TYPES,
    },
    size: {
      control: "select",
      options: SIZES,
    },
    rounded: {
      control: "boolean",
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
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Label",
    color: Color.Brand,
    type: "fill",
    size: Size.Sm,
    rounded: false,
  },
};
