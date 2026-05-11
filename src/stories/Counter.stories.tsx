import type { Meta, StoryObj } from "@storybook/react-vite";
import { Counter } from "@/components/Counter";
import { CounterVariant } from "@/components/Counter";
import type { CounterVariant as CounterVariantType } from "@/components/Counter";
import { Size } from "@/types";
import type { Size as SizeType } from "@/types";

const VARIANTS = Object.values(CounterVariant) as CounterVariantType[];
const COUNTER_SIZES = [Size.Xs, Size.Sm, Size.Md] as SizeType[];

const meta = {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент счетчика для отображения численных значений. Поддерживает различные размеры, варианты отображения и ограничение максимального значения.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    count: {
      control: "number",
      description: "Значение счетчика",
      table: {
        type: { summary: "number" },
      },
    },
    maxCount: {
      control: "number",
      description: "Максимальное значение для отображения (например, 99+)",
      table: {
        type: { summary: "number | undefined" },
      },
    },
    variant: {
      control: "select",
      options: VARIANTS,
      description: "Вариант отображения счетчика",
      table: {
        type: { summary: "CounterVariant" },
        defaultValue: { summary: "accent" },
      },
    },
    size: {
      control: "select",
      options: COUNTER_SIZES,
      description: "Размер счетчика (xs, sm, md)",
      table: {
        type: { summary: "Size" },
        defaultValue: { summary: "sm" },
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
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    count: 5,
    size: Size.Sm,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Счетчик доступен в трех размерах: xs, sm, md. Используйте контролы ниже, чтобы изменить размер.",
      },
    },
  },
};
