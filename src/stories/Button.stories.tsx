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
  Bell,
} from "lucide-react";
import { Button } from "@/components";
import { Color, Size, Type } from "@/types";

const COLORS = Object.values(Color);
const TYPES = Object.values(Type);
const SIZES = Object.values(Size);

// Иконки для выбора в контролах
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
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Кнопка с поддержкой различных размеров, цветов, типов отображения и состояний. Полностью управляется дизайн-токенами.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Текст кнопки",
      table: {
        type: { summary: "ReactNode" },
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
      description: "Вариант отображения кнопки (fill, outline, flat, ghost)",
      table: {
        type: { summary: "Type" },
        defaultValue: { summary: "fill" },
      },
    },
    size: {
      control: "select",
      options: SIZES,
      description: "Размер кнопки (xs, sm, md, lg)",
      table: {
        type: { summary: "Size" },
        defaultValue: { summary: "sm" },
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
    iconLeft: {
      control: "select",
      options: Object.keys(ICON_OPTIONS),
      mapping: ICON_OPTIONS,
      description: "Иконка слева от текста",
      table: {
        type: { summary: "LucideIcon" },
      },
    },
    iconRight: {
      control: "select",
      options: Object.keys(ICON_OPTIONS),
      mapping: ICON_OPTIONS,
      description: "Иконка справа от текста",
      table: {
        type: { summary: "LucideIcon" },
      },
    },
    iconOnly: {
      control: "select",
      options: Object.keys(ICON_OPTIONS),
      mapping: ICON_OPTIONS,
      description: "Иконка для режима 'только иконка' (скрывает текст)",
      table: {
        type: { summary: "LucideIcon" },
      },
    },
    count: {
      control: { type: "number", min: 0, max: 999, step: 1 },
      description: "Значение каунтера (бейдж в правом верхнем углу кнопки)",
      table: {
        type: { summary: "number" },
      },
    },
    loading: {
      control: "boolean",
      description:
        "Состояние загрузки (показывает спиннер, сохраняя размер кнопки)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    scaling: {
      control: "boolean",
      description: "Анимация при нажатии",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключить кнопку (независимо от loading)",
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Button",
    color: Color.Brand,
    type: Type.Fill,
    size: Size.Sm,
    htmlType: "button",
    disabled: false,
    loading: false,
    count: 3,
    scaling: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Интерактивная кнопка. Используйте контролы ниже, чтобы изменить все свойства.",
      },
    },
  },
};

export const AsChild: Story = {
  args: {
    children: "Button asChild as link",
    color: Color.Brand,
    type: Type.Outline,
    size: Size.Sm,
  },
  argTypes: {
    htmlType: { table: { disable: true } },
    loading: { table: { disable: true } },
    disabled: { table: { disable: true } },
    count: { table: { disable: true } },
    iconLeft: { table: { disable: true } },
    iconRight: { table: { disable: true } },
    iconOnly: { table: { disable: true } },
  },
  render: (args) => (
    <Button
      asChild
      color={args.color}
      type={args.type}
      size={args.size}
      className={args.className}
    >
      <a href="#button-as-child" onClick={(event) => event.preventDefault()}>
        {typeof args.children === "string"
          ? args.children
          : "Button asChild as link"}
      </a>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Пример использования asChild: кнопка рендерит ссылку без лишней обертки, сохраняя стили Button.",
      },
    },
  },
};

export const WithCounter: Story = {
  args: {
    children: "Notifications",
    color: Color.Brand,
    type: Type.Fill,
    size: Size.Md,
    iconLeft: Bell,
    count: 12,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Кнопка с каунтером. При `count` отображается бейдж в правом верхнем углу.",
      },
    },
  },
};
