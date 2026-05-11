import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, Button } from "@/components";
import { Color, Size } from "@/types";
import type { AlertColor } from "@/components/Alert";

const ALERT_TYPES: AlertColor[] = [
  Color.Positive,
  Color.Danger,
  Color.Warning,
  Color.Info,
];

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ALERT_TYPES,
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    closable: {
      control: "boolean",
    },
    onClose: {
      action: "closed",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

function AlertAnimationPreview() {
  const [visible, setVisible] = useState(true);
  const [alertKey, setAlertKey] = useState(0);

  const replayAlert = () => {
    setVisible(false);
    window.setTimeout(() => {
      setAlertKey((currentKey) => currentKey + 1);
      setVisible(true);
    }, 120);
  };

  return (
    <div className="min-h-screen bg-generic p-6">
      <button
        type="button"
        className="rounded-sm border border-line bg-generic-medium px-4 py-2 font-roboto-flex text-sm text-primary transition-colors hover:bg-generic-medium-hover"
        onClick={replayAlert}
      >
        Переиграть появление
      </button>
      {visible && (
        <Alert
          key={alertKey}
          type={Color.Info}
          title="Новый комментарий"
          description="Alert заново монтируется по кнопке выше, поэтому можно посмотреть, как он всплывает из нижнего правого угла."
          onClose={() => setVisible(false)}
        />
      )}
    </div>
  );
}

export const Playground: Story = {
  args: {
    type: Color.Positive,
    title: "Операция выполнена",
    description: "Изменения успешно сохранены и уже доступны в системе.",
    onClose: () => {},
  },
};

export const Variants: Story = {
  args: {
    title: "Alert",
  },
  render: () => (
    <div className="flex min-h-screen items-end justify-end bg-generic p-6">
      <div className="flex w-full max-w-[360px] flex-col gap-4">
        <Alert
          className="static w-full max-w-none"
          type={Color.Positive}
          title="Играть на герое Beastmaster"
          actions={
            <>
              <Button size={Size.Sm} color={Color.Info}>
                Button
              </Button>
              <Button size={Size.Sm} color={Color.Positive}>
                Button
              </Button>
            </>
          }
          onClose={() => {}}
        />
        <Alert
          className="static w-full max-w-none"
          type={Color.Danger}
          title="Играть на герое Beastmaster"
          description="Beastmaster — универсальный герой, который может играть как инициатор, пушер или боец на основе брони и силы."
          actions={
            <>
              <Button size={Size.Sm} color={Color.Info}>
                Button
              </Button>
              <Button size={Size.Sm} color={Color.Positive}>
                Button
              </Button>
            </>
          }
          onClose={() => {}}
        />
        <Alert
          className="static w-full max-w-none"
          type={Color.Info}
          title="Играть на герое Beastmaster"
          closable={false}
        />
        <Alert
          className="static w-full max-w-none"
          type={Color.Warning}
          title="Играть на герое Beastmaster"
          closable={false}
        />
      </div>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    title:
      "Система обнаружила несколько важных изменений в настройках рабочего пространства",
    description:
      "Часть параметров была автоматически обновлена после последней синхронизации. Проверьте права доступа, сетевые настройки и связанные интеграции, чтобы убедиться, что все сервисы продолжают работать корректно и пользователи видят актуальные данные без повторной авторизации.",
    type: Color.Warning,
    onClose: () => {},
  },
};

export const AnimationPreview: Story = {
  args: {
    title: "Alert",
  },
  render: () => <AlertAnimationPreview />,
};
