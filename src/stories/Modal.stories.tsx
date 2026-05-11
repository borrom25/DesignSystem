import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Modal, ModalType } from "@/components";
import { Size } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;
const MODAL_TYPES = [
  ModalType.modal,
  ModalType.dialog,
  ModalType.iceBox,
] as const;

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Playground для модального окна. Размеры берутся из токенов `src/tokens/Modal.css`.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: MODAL_TYPES,
      description: "Тип отображения: modal с контентом или dialog без контента",
    },
    size: {
      control: "select",
      options: SIZES,
      description: "Размер модального окна из токенов",
    },
    fullScreen: {
      control: "boolean",
      description: "Растянуть по высоте",
    },
    title: {
      control: "text",
      description: "Заголовок",
    },
    subtitle: {
      control: "text",
      description: "Подзаголовок",
    },
    closeOnOverlayClick: {
      control: "boolean",
      description: "Закрывать при клике на overlay",
    },
    closeOnEscape: {
      control: "boolean",
      description: "Закрывать по Escape",
    },
    showCloseButton: {
      control: "boolean",
      description: "Показывать кнопку закрытия",
    },
    open: {
      table: {
        disable: true,
      },
    },
    onOpenChange: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    type: ModalType.modal,
    size: Size.Xs,
    title: "Title",
    subtitle: "Subtitle",
    closeOnOverlayClick: true,
    closeOnEscape: true,
    showCloseButton: true,
    fullScreen: false,
    open: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4 p-8">
        <Button onClick={() => setOpen(true)}>Открыть Modal</Button>
        <Modal
          {...args}
          open={open}
          onOpenChange={setOpen}
          actionSlot={
            <Button type="ghost" size={Size.Xs}>
              Доп. действие
            </Button>
          }
          bottomSlot={
            <div className="flex w-full items-center justify-between gap-3 py-4">
              <Button size={Size.Xs} type="ghost">
                Доп. настройка
              </Button>
              <div className="flex items-center gap-3">
                <Button size={Size.Xs} type="ghost">
                  Отмена
                </Button>
                <Button size={Size.Xs}>Сохранить</Button>
              </div>
            </div>
          }
        >
          <div className="space-y-3">
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Контент модалки. Меняйте `size` в controls и ширины в
              `src/tokens/Modal.css`.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Второй блок, чтобы было удобнее заполнять и проверять высоту.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Второй блок, чтобы было удобнее заполнять и проверять высоту.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Второй блок, чтобы было удобнее заполнять и проверять высоту.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Второй блок, чтобы было удобнее заполнять и проверять высоту.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Второй блок, чтобы было удобнее заполнять и проверять высоту.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Второй блок, чтобы было удобнее заполнять и проверять высоту.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Второй блок, чтобы было удобнее заполнять и проверять высоту.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Второй блок, чтобы было удобнее заполнять и проверять высоту.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Второй блок, чтобы было удобнее заполнять и проверять высоту.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Второй блок, чтобы было удобнее заполнять и проверять высоту.
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Dialog: Story = {
  args: {
    type: ModalType.dialog,
    size: Size.Sm,
    title: "Подтвердить важное действие",
    subtitle: "Изменения применятся ко всем выбранным элементам и настройкам.",
    closeOnOverlayClick: true,
    closeOnEscape: true,
    showCloseButton: true,
    fullScreen: false,
    open: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4 p-8">
        <Button onClick={() => setOpen(true)}>Открыть Dialog</Button>
        <Modal
          {...args}
          open={open}
          onOpenChange={setOpen}
          actionSlot={
            <Button type="ghost" size={Size.Xs}>
              Подробнее
            </Button>
          }
          bottomSlot={
            <div className="flex w-full items-center justify-end gap-3 py-4">
              <Button
                size={Size.Xs}
                type="ghost"
                onClick={() => setOpen(false)}
              >
                Отмена
              </Button>
              <Button size={Size.Xs} onClick={() => setOpen(false)}>
                Подтвердить
              </Button>
            </div>
          }
        />
      </div>
    );
  },
};

export const IceBox: Story = {
  args: {
    type: ModalType.iceBox,
    title: "Настройки панели",
    subtitle: "Управление параметрами отображения",
    closeOnOverlayClick: true,
    closeOnEscape: true,
    showCloseButton: true,
    open: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4 p-8">
        <Button onClick={() => setOpen(true)}>Открыть IceBox</Button>
        <Modal
          {...args}
          open={open}
          onOpenChange={setOpen}
          actionSlot={
            <div className="flex w-full items-center justify-end gap-3">
              <Button
                size={Size.Sm}
                type="ghost"
                onClick={() => setOpen(false)}
              >
                Отмена
              </Button>
              <Button size={Size.Sm} onClick={() => setOpen(false)}>
                Применить изменения
              </Button>
            </div>
          }
        >
          <div className="space-y-3">
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Контент IceBox. Меняйте блоки так же, как в `type=modal`.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Пример: сюда можно добавить переключатели, фильтры и подсказки.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Дополнительный блок для проверки прокрутки и поведения по высоте.
            </div>
            <div className="rounded-md border border-line bg-generic-medium p-4 text-secondary">
              Ещё один блок контента, чтобы сценарий был близок к `modal`.
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};
