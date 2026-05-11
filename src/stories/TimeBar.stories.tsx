import type { Meta, StoryObj } from "@storybook/react-vite";
import { TimeBar } from "@/components/TimeBar";

const meta = {
  title: "Components/TimeBar",
  component: TimeBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент выбора времени с тремя скроллируемыми колонками для часов, минут и секунд.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showSeconds: {
      control: "boolean",
      description: "Показывать колонку секунд",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    use24Hour: {
      control: "boolean",
      description: "Использовать 24-часовой формат",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключить компонент",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    showNowButton: {
      control: "boolean",
      description: "Показывать кнопку 'Сейчас'",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    showConfirmButton: {
      control: "boolean",
      description: "Показывать кнопку 'Ок'",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    nowButtonText: {
      control: "text",
      description: "Текст кнопки установки текущего времени",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Сейчас" },
      },
    },
    confirmButtonText: {
      control: "text",
      description: "Текст кнопки подтверждения",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Ок" },
      },
    },
    onChange: {
      action: "changed",
      description: "Callback при изменении значения",
    },
    onConfirm: {
      action: "confirmed",
      description: "Callback при подтверждении",
    },
  },
} satisfies Meta<typeof TimeBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    use24Hour: true,
    disabled: false,
    showNowButton: true,
    showConfirmButton: true,
    nowButtonText: "Сейчас",
    confirmButtonText: "Ок",
  },
  render: (args) => (
    <div className="flex items-start gap-6">
      <div className="flex flex-col gap-2">
        <div className="text-xs text-secondary">HH:MM:SS</div>
        <TimeBar {...args} showSeconds />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xs text-secondary">HH:MM</div>
        <TimeBar {...args} showSeconds={false} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Playground с двумя циферблатами: полный и только часы/минуты.",
      },
    },
  },
};
