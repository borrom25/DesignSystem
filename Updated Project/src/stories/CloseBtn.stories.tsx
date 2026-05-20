import type { Meta, StoryObj } from "@storybook/react-vite";
import { CloseBtn } from "@/components";
import { Size } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;

const meta = {
  title: "Components/CloseBtn",
  component: CloseBtn,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Кнопка закрытия на базе closeCircle.svg. Поддерживает размеры из токенов и использует инверсные цвета по умолчанию.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: SIZES,
      description: "Размер кнопки (xs, sm, md)",
      table: {
        type: { summary: "Size" },
        defaultValue: { summary: "sm" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключенное состояние",
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
    type: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof CloseBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: Size.Sm,
    disabled: false,
    "aria-label": "Закрыть",
  },
  parameters: {
    docs: {
      description: {
        story: "Интерактивный пример CloseBtn с выбором размера.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <CloseBtn size={Size.Xs} aria-label="Закрыть (xs)" />
      <CloseBtn size={Size.Sm} aria-label="Закрыть (sm)" />
      <CloseBtn size={Size.Md} aria-label="Закрыть (md)" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Сравнение всех размеров компонента CloseBtn.",
      },
    },
  },
};
