import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { Button, UIKitProvider, uiController, useUiController } from "@/index";

const meta = {
  title: "Controllers/Modal",
  component: Button,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Примеры программного вызова модалки через `uiController` и `useUiController()`.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

function StoryLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-screen bg-generic p-6">
      <div className="mb-4 text-sm text-secondary">{title}</div>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

function PrimaryModalContent() {
  return (
    <div className="space-y-4">
      <p className="text-secondary">
        Это программно открытая модалка. Можно вернуть `result` через
        `modal.close(result)`.
      </p>
      <div className="flex items-center gap-3">
        <Button
          type="ghost"
          onClick={() => uiController.closeModal("cancelled")}
        >
          Закрыть с result=cancelled
        </Button>
        <Button onClick={() => uiController.closeModal("saved")}>
          Закрыть с result=saved
        </Button>
      </div>
      <Button
        type="ghost"
        onClick={() =>
          uiController.showModal({
            title: "Вложенная модалка",
            size: "small",
            content: (
              <div className="space-y-3">
                <p className="text-secondary">Открыта поверх предыдущей.</p>
                <Button onClick={() => uiController.closeModal("nested-close")}>
                  Закрыть верхнюю
                </Button>
              </div>
            ),
          })
        }
      >
        Открыть модалку поверх текущей
      </Button>
    </div>
  );
}

function ModalControllerPlayground() {
  const { showModal, closeModal, showAlert } = useUiController();

  return (
    <StoryLayout title="Программное управление модалками">
      <Button
        onClick={() =>
          showModal<string>({
            title: "Программная модалка",
            subtitle: "Открыта через useUiController().showModal",
            size: "medium",
            content: <PrimaryModalContent />,
            onClose: (result) => {
              const normalizedResult = String(result ?? "undefined");
              showAlert(`onClose result: ${normalizedResult}`, "info");
            },
          })
        }
      >
        modal.show (hook API)
      </Button>
      <Button
        type="ghost"
        onClick={() =>
          uiController.showModal({
            title: "Глобальный вызов",
            size: "large",
            content: (
              <div className="space-y-3">
                <p className="text-secondary">
                  Открыто через `uiController.showModal(...)`.
                </p>
                <Button
                  onClick={() => uiController.closeModal("closed-by-global")}
                >
                  Закрыть через global controller
                </Button>
              </div>
            ),
          })
        }
      >
        modal.show (global controller)
      </Button>
      <Button type="ghost" onClick={() => closeModal("manual-close")}>
        manual-close
      </Button>
      <Button
        type="ghost"
        onClick={() =>
          showModal({
            title: "Fullscreen",
            size: "fullscreen",
            content: (
              <div className="space-y-3">
                <p className="text-secondary">Режим fullscreen.</p>
                <Button onClick={() => closeModal("fullscreen-done")}>
                  Закрыть
                </Button>
              </div>
            ),
          })
        }
      >
        Открыть fullscreen
      </Button>
    </StoryLayout>
  );
}

function PreventClosePlayground() {
  const { showModal, closeModal, showAlert } = useUiController();

  return (
    <StoryLayout title="preventClose сценарий">
      <Button
        onClick={() =>
          showModal({
            title: "Обязательное действие",
            content: (
              <div className="space-y-3">
                <p className="text-secondary">
                  Закрытие через ESC/overlay/крестик отключено.
                </p>
                <Button
                  onClick={() => {
                    closeModal("accepted");
                    showAlert("Принято", "success");
                  }}
                >
                  Принять и закрыть
                </Button>
              </div>
            ),
            preventClose: true,
            size: "small",
          })
        }
      >
        Открыть preventClose модалку
      </Button>
    </StoryLayout>
  );
}

export const Playground: Story = {
  render: () => (
    <UIKitProvider>
      <ModalControllerPlayground />
    </UIKitProvider>
  ),
};

export const PreventClose: Story = {
  render: () => (
    <UIKitProvider>
      <PreventClosePlayground />
    </UIKitProvider>
  ),
};
