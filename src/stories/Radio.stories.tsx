import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Radio } from "@/components/Radio";
import { Size } from "@/types";

const SIZES = Object.values(Size);

const meta = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Радио-кнопка с поддержкой различных размеров. Полностью управляется дизайн-токенами.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: SIZES,
      description: "Размер радио-кнопки (xs, sm, md)",
      table: {
        type: { summary: "Size" },
        defaultValue: { summary: "xs" },
      },
    },
    checked: {
      control: "boolean",
      description: "Состояние радио-кнопки (выбрана/не выбрана)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключить радио-кнопку",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    name: {
      control: "text",
      description: "Имя группы радио-кнопок",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description: "Значение радио-кнопки",
      table: {
        type: { summary: "string" },
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: Size.Xs,
    disabled: false,
  },
  render: (args) => {
    const [selected, setSelected] = useState<string>("option2");

    return (
      <div className="w-[360px] rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-col gap-6 text-gray-900">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Выберите способ доставки</h3>
            <p className="text-sm text-gray-500">
              Выберите один из доступных вариантов
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <label className="group flex cursor-pointer items-center gap-3">
              <Radio
                {...args}
                name="delivery"
                value="option1"
                checked={selected === "option1"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium group-hover:text-gray-700">
                  Курьером до двери
                </span>
                <span className="text-xs text-gray-500">
                  Доставка в течение 1-2 дней
                </span>
              </div>
            </label>

            <label className="group flex cursor-pointer items-center gap-3">
              <Radio
                {...args}
                name="delivery"
                value="option2"
                checked={selected === "option2"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium group-hover:text-gray-700">
                  Пункт выдачи
                </span>
                <span className="text-xs text-gray-500">
                  Бесплатно, готово через 2-3 дня
                </span>
              </div>
            </label>

            <label className="group flex cursor-pointer items-center gap-3">
              <Radio
                {...args}
                name="delivery"
                value="option3"
                checked={selected === "option3"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium group-hover:text-gray-700">
                  Почта России
                </span>
                <span className="text-xs text-gray-500">Доставка 5-7 дней</span>
              </div>
            </label>

            <label className="group flex cursor-not-allowed items-center gap-3 opacity-50">
              <Radio
                {...args}
                name="delivery"
                value="option4"
                disabled
                checked={selected === "option4"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-400">
                  Экспресс-доставка
                </span>
                <span className="text-xs text-gray-400">
                  Временно недоступна
                </span>
              </div>
            </label>
          </div>

          <div className="mt-2 rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-700">
              Выбрано: <span className="font-medium">{selected}</span>
            </p>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Группа радио-кнопок для выбора одного варианта из нескольких. В группе может быть выбрана только одна опция.",
      },
    },
  },
};
