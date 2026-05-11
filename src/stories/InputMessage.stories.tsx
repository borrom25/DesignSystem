import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { InputMessage } from "@/components";

const meta = {
  title: "Components/InputMessage",
  component: InputMessage,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Поле ввода сообщения с автоподстройкой высоты, кнопкой прикрепления (popover) и кнопкой отправки.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder текстового поля",
    },
    disabled: {
      control: "boolean",
      description: "Отключить компонент",
    },
    sendDisabled: {
      control: "boolean",
      description: "Отключить кнопку отправки (независимо от текста)",
    },
    maxRows: {
      control: "number",
      description: "Максимальное количество строк до появления скролла",
    },
    onSend: {
      action: "send",
      description: "Callback при отправке сообщения",
    },
    onChange: {
      action: "change",
      description: "Callback при изменении значения",
    },
  },
} satisfies Meta<typeof InputMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    placeholder: "Написать сообщение...",
    disabled: false,
    sendDisabled: false,
    maxRows: 6,
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <div className="w-[418px]">
        <InputMessage
          {...args}
          showAttachments
          value={value}
          onChange={(v) => {
            setValue(v);
            args.onChange?.(v);
          }}
          onSend={(v, file) => {
            args.onSend?.(v, file);
            setValue("");
          }}
        />
      </div>
    );
  },
};

export const WithoutAttachments: Story = {
  args: {
    placeholder: "Введите текст...",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <div className="w-[320px]">
        <InputMessage
          {...args}
          value={value}
          onChange={setValue}
          onSend={() => setValue("")}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Недоступно",
    disabled: true,
  },
  render: (args) => (
    <div className="w-[400px]">
      <InputMessage {...args} showAttachments />
    </div>
  ),
};

export const MultiLine: Story = {
  args: {
    placeholder: "Многострочный текст...",
    maxRows: 4,
  },
  render: (args) => {
    const [value, setValue] = useState(
      "Это пример многострочного текста.\nВторая строка.\nТретья строка.\nЧетвёртая строка появляется скролл."
    );

    return (
      <div className="w-[400px]">
        <InputMessage
          {...args}
          value={value}
          onChange={setValue}
          onSend={() => setValue("")}
        />
      </div>
    );
  },
};
