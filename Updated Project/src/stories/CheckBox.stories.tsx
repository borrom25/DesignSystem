import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CheckBox } from "@/components/CheckBox";
import { MinusCheckBox } from "@/components/MinusCheckBox";
import { Size } from "@/types";

const SIZES = Object.values(Size);

const meta = {
  title: "Components/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Чекбокс с поддержкой различных размеров. Полностью управляется дизайн-токенами.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: SIZES,
      description: "Размер чекбокса (xs, sm, md)",
      table: {
        type: { summary: "Size" },
        defaultValue: { summary: "sm" },
      },
    },
    checked: {
      control: "boolean",
      description: "Состояние чекбокса (отмечен/не отмечен)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключить чекбокс",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onChange: {
      action: "changed",
      description: "Обработчик изменения состояния",
      table: {
        type: { summary: "(e: ChangeEvent<HTMLInputElement>) => void" },
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
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: Size.Sm,
    checked: false,
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Интерактивный чекбокс. Кликните на чекбокс, чтобы переключить состояние checked. Используйте контролы ниже, чтобы изменить все свойства.",
      },
    },
  },
};

export const MinusPlayground: StoryObj<Meta<typeof MinusCheckBox>> = {
  args: {
    size: Size.Sm,
    disabled: false,
  },
  render: (args) => <MinusCheckBox {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Чекбокс с минусом всегда выбранный. Используется для обозначения частичного выбора или промежуточного состояния.",
      },
    },
  },
};
