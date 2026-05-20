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
  Edit,
  Search,
  Filter,
  MoreVertical,
} from "lucide-react";
import { IconButton } from "@/components/IconButton";
import { Color, Size } from "@/types";

const COLORS = Object.values(Color).filter(
  (color) => color !== Color.ContrastDark && color !== Color.ContrastLight
);
const TYPES = ["flat", "ghost", "icon"] as const;
const SIZES = Object.values(Size);

// Иконки для выбора в контролах
const ICON_OPTIONS = {
  Plus,
  Trash2,
  Download,
  Eye,
  ChevronRight,
  Settings,
  Heart,
  Check,
  X,
  Edit,
  Search,
  Filter,
  MoreVertical,
};

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Кнопка с иконкой для компактных действий. Поддерживает различные размеры, цвета и типы отображения.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(ICON_OPTIONS),
      mapping: ICON_OPTIONS,
      description: "Иконка кнопки",
      table: {
        type: { summary: "LucideIcon" },
      },
    },
    color: {
      control: "select",
      options: COLORS,
      description: "Цветовая схема кнопки",
      table: {
        type: { summary: "Color" },
        defaultValue: { summary: "brand" },
      },
    },
    type: {
      control: "select",
      options: TYPES,
      description: "Вариант отображения кнопки (flat, ghost, icon)",
      table: {
        type: { summary: "flat | ghost | icon" },
        defaultValue: { summary: "flat" },
      },
    },
    size: {
      control: "select",
      options: SIZES,
      description: "Размер кнопки",
      table: {
        type: { summary: "Size" },
        defaultValue: { summary: "sm" },
      },
    },
    rounded: {
      control: "boolean",
      description: "Сделать кнопку круглой",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    htmlType: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "HTML тип кнопки",
      table: {
        type: { summary: "button | submit | reset" },
        defaultValue: { summary: "button" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключить кнопку",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    count: {
      control: false,
      description: "Числовой счетчик отключен для IconButton",
      table: {
        disable: true,
      },
    },
    showBadge: {
      control: "boolean",
      description: "Показать пустой badge (точка)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Обработчик клика",
      table: {
        type: { summary: "() => void" },
      },
    },
    className: {
      control: "text",
      description: "Дополнительные CSS классы",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    icon: Plus,
    color: Color.Brand,
    type: "flat",
    size: Size.Sm,
    rounded: false,
    htmlType: "button",
    disabled: false,
    showBadge: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Интерактивная кнопка с иконкой. Используйте контролы ниже, чтобы изменить все свойства.",
      },
    },
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: null,
    color: Color.Brand,
    type: "flat",
    size: Size.Sm,
  },
  argTypes: {
    icon: { table: { disable: true } },
    htmlType: { table: { disable: true } },
    count: { table: { disable: true } },
    showBadge: { table: { disable: true } },
    disabled: { table: { disable: true } },
    rounded: { table: { disable: false } },
    onClick: { table: { disable: true } },
  },
  render: (args) => (
    <IconButton
      asChild
      color={args.color}
      type={args.type}
      size={args.size}
      rounded={args.rounded}
      className={args.className}
    >
      <a
        href="#icon-button-as-child"
        aria-label="Open settings"
        onClick={(event) => event.preventDefault()}
      >
        <Settings size={16} />
      </a>
    </IconButton>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "IconButton в режиме asChild: стили применяются к ссылке, а иконка передается через children.",
      },
    },
  },
};
