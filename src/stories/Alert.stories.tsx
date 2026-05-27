import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { Button, UIKitProvider, uiController, useUiController } from "@/index";

const meta = {
  title: "Controllers/Alert",
  component: Button,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Примеры программного вызова алертов через `uiController` и `useUiController()`.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

function StoryLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-generic p-6">
      <div className="mb-4 text-sm text-secondary">{title}</div>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

function AlertControllerPlayground() {
  const { showAlert, closeAlert, showModal } = useUiController();

  return (
    <StoryLayout title="Программное управление алертами">
      <Button onClick={() => showAlert("Обычный info alert", "info")}>
        alert.show(message, info)
      </Button>
      <Button
        type="ghost"
        onClick={() => showAlert("Успешно сохранено", "success")}
      >
        alert.show(message, success)
      </Button>
      <Button
        type="ghost"
        onClick={() =>
          showAlert({
            message: "Ошибка сохранения",
            type: "error",
            duration: 5000,
            onClose: () =>
              showAlert("Закрыт alert: error-with-options", "info"),
          })
        }
      >
        alert.show(options)
      </Button>
      <Button
        type="ghost"
        onClick={() =>
          uiController.showAlert({
            message: "Вызов через global controller",
            type: "warning",
            duration: 4500,
            onClose: () =>
              showAlert("Закрыт alert: warning-global-controller", "info"),
          })
        }
      >
        alert.show (global controller)
      </Button>
      <Button type="ghost" onClick={() => closeAlert()}>
        alert.close()
      </Button>
      <Button
        type="ghost"
        onClick={() =>
          showModal({
            title: "Alert inside modal",
            size: "small",
            content: (
              <div className="space-y-3">
                <p className="text-secondary">
                  Кнопка в модалке вызовет alert.
                </p>
                <Button
                  onClick={() =>
                    showAlert({
                      message: "Алерт из модалки",
                      type: "success",
                      onClose: () =>
                        showAlert("Закрыт alert: from-modal", "info"),
                    })
                  }
                >
                  Показать alert
                </Button>
              </div>
            ),
          })
        }
      >
        Показать alert из modal
      </Button>
    </StoryLayout>
  );
}

export const Playground: Story = {
  render: () => (
    <UIKitProvider>
      <AlertControllerPlayground />
    </UIKitProvider>
  ),
};
