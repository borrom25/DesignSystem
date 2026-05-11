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
import { Tab } from "@/components";
import { Size } from "@/types";

const types = ["fill", "ghost", "outline"] as const;
const sizes = Object.values(Size);
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
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент Tab с поддержкой трех типов (Fill, Ghost, Outline), размеров и состояния selected.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Текст таба",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    type: {
      control: "select",
      options: types,
      description: "Вариант отображения таба (fill, ghost, outline)",
      table: {
        type: { summary: "fill | ghost | outline" },
        defaultValue: { summary: "fill" },
      },
    },
    size: {
      control: "select",
      options: sizes,
      description: "Размер таба",
      table: {
        type: { summary: "Size" },
        defaultValue: { summary: "sm" },
      },
    },
    selected: {
      control: "boolean",
      description: "Выбранное состояние таба",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключить таб",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    count: {
      control: "number",
      description: "Количество в счетчике справа",
      table: {
        type: { summary: "number" },
      },
    },
    iconLeft: {
      control: "select",
      options: Object.keys(ICON_OPTIONS),
      mapping: ICON_OPTIONS,
      description: "Иконка слева от текста",
      table: {
        type: { summary: "LucideIcon" },
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
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Tab",
    type: "fill",
    size: Size.Sm,
    selected: false,
    disabled: false,
    iconLeft: undefined,
    count: undefined,
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.selected ?? false);
    return (
      <Tab
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
  parameters: {
    docs: {
      description: {
        story:
          "Интерактивный таб. Кликните на таб, чтобы переключить состояние selected. Используйте контролы ниже, чтобы изменить все свойства.",
      },
    },
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: "Tab asChild",
    type: "fill",
    size: Size.Sm,
  },
  render: () => (
    <Tab asChild selected type="fill" size={Size.Sm}>
      <a href="#tab-as-child" onClick={(event) => event.preventDefault()}>
        Tab asChild
      </a>
    </Tab>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Tab в режиме asChild: компонент стилизует ссылку напрямую и не создает дополнительный button-элемент.",
      },
    },
  },
};
