import { useState, type ReactNode } from "react";
import { PanelsTopLeft } from "lucide-react";
import { Button } from "@/components";
import { Modal } from "@/components/Modal/Modal";
import { ModalType } from "@/components/Modal/Modal.types";
import { UIKitProvider } from "@/providers/KitProvider";
import { Color, Size, Type } from "@/types";
import { useUiController } from "@/hooks";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "../createComponentDocsPage";

type HeadBottomSlotOption = "none" | "one" | "two";

type ModalPlaygroundState = {
  title: string;
  subtitle: string;
  content: string;
  type: (typeof ModalType)[keyof typeof ModalType];
  size: (typeof Size)[keyof typeof Size];
  fullScreen: boolean;
  closeOnOverlayClick: boolean;
  closeOnEscape: boolean;
  showCloseButton: boolean;
  withSlotHead: boolean;
  headBottomSlot: HeadBottomSlotOption;
};

const MODAL_TYPE_OPTIONS = [
  { value: ModalType.modal, label: "Modal" },
  { value: ModalType.dialog, label: "Dialog" },
  { value: ModalType.iceBox, label: "IceBox" },
] as const;

const MODAL_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
] as const;

const HEAD_BOTTOM_SLOT_OPTIONS = [
  { value: "none", label: "Нет" },
  { value: "one", label: "1 кнопка" },
  { value: "two", label: "2 кнопки" },
] as const;

const MODAL_DEFAULT_STATE: ModalPlaygroundState = {
  title: "Подтвердите действие",
  subtitle: "Изменения будут применены сразу после сохранения.",
  content:
    "Modal блокирует основной интерфейс и помогает завершить короткий сценарий без перехода на другую страницу.",
  type: ModalType.modal,
  size: Size.Md,
  fullScreen: false,
  closeOnOverlayClick: true,
  closeOnEscape: true,
  showCloseButton: true,
  withSlotHead: false,
  headBottomSlot: "two",
};

const MODAL_PROPS: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    description:
      "Управляет видимостью локального Modal. Для закрытия компонент вызывает onOpenChange(false).",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description:
      "Синхронизирует состояние открытия с внешним state или закрывает программную модалку в контейнере.",
  },
  {
    name: "type",
    type: `"modal" | "dialog" | "iceBox"`,
    description:
      "Меняет визуальный сценарий: обычная модалка, компактный dialog или боковой iceBox.",
    defaultValue: '"modal"',
  },
  {
    name: "size",
    type: `"xs" | "sm" | "md"`,
    description: "Задает ширину контента для обычного Modal.",
    defaultValue: '"md"',
  },
  {
    name: "title / subtitle",
    type: "ReactNode",
    description: "Контент шапки модального окна.",
  },
  {
    name: "actionSlot",
    type: "ReactNode",
    description:
      "Дополнительные действия в шапке. В iceBox переносится в отдельный блок под шапкой.",
  },
  {
    name: "headBottomSlot",
    type: "ReactNode",
    description:
      "Слот под title и subtitle. Дочерние элементы растягиваются на всю ширину: одна кнопка занимает 100%, две делят ряд поровну.",
  },
  {
    name: "slotHead",
    type: "ReactNode",
    description:
      "Полноширинный слот под шапкой и над контентом. На десктопе отступы 20px по горизонтали и 16px снизу, на мобильном — 16px и 14px.",
  },
  {
    name: "bottomSlot",
    type: "ReactNode",
    description: "Футер с основными кнопками действий.",
  },
  {
    name: "closeOnOverlayClick / closeOnEscape",
    type: "boolean",
    description:
      "Разрешает закрытие кликом по overlay и клавишей Escape. В programmatic API блокируется через preventClose.",
    defaultValue: "true",
  },
  {
    name: "Modals / UIKitProvider",
    type: "container",
    description:
      "Programmatic modal рендерится стеком Modals. В приложении обычно достаточно обернуть корень в UIKitProvider.",
  },
  {
    name: "useUiController().showModal",
    type: "(content | options) => modalUid",
    description:
      "Открывает модалку из любого обработчика. options поддерживает title, subtitle, content, size, preventClose и onClose(result).",
  },
  {
    name: "useUiController().closeModal",
    type: "(result?: T) => void",
    description:
      "Закрывает верхнюю программную модалку и передает result в onClose. Для конкретного id используйте closeModalById.",
  },
];

function ProgrammaticModalDemo() {
  const { showModal, closeModal, showAlert } = useUiController();

  return (
    <Button
      type="ghost"
      onClick={() =>
        showModal<string>({
          title: "Programmatic Modal",
          subtitle: "Открыта через useUiController().showModal",
          size: "small",
          content: (
            <div className="space-y-3">
              <p className="text-sm text-secondary">
                Контент передается в store, а контейнер Modals внутри
                UIKitProvider отрисовывает его поверх приложения.
              </p>
              <div className="flex justify-end gap-2">
                <Button type="ghost" onClick={() => closeModal("cancelled")}>
                  Отмена
                </Button>
                <Button onClick={() => closeModal("saved")}>Сохранить</Button>
              </div>
            </div>
          ),
          onClose: (result) => {
            showAlert(
              `Modal closed: ${String(result ?? "without result")}`,
              "info"
            );
          },
        })
      }
    >
      Открыть через controller
    </Button>
  );
}

function getHeadBottomSlot(
  option: HeadBottomSlotOption,
  onClose: () => void
): ReactNode {
  if (option === "none") return undefined;

  if (option === "one") {
    return (
      <Button size={Size.Xs} onClick={onClose}>
        Продолжить
      </Button>
    );
  }

  return (
    <>
      <Button
        size={Size.Xs}
        color={Color.Positive}
        type={Type.Fill}
        onClick={onClose}
      >
        Сохранить
      </Button>
    </>
  );
}

function ModalPreview(state: ModalPlaygroundState) {
  const [open, setOpen] = useState(false);

  return (
    <UIKitProvider>
      <div className="flex w-[560px] flex-col gap-(--spacing-4) rounded-scale-3xl bg-page p-(--spacing-6)">
        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={() => setOpen(true)}>Открыть Modal</Button>
          <ProgrammaticModalDemo />
        </div>
        <p className="max-w-[440px] text-sm text-secondary">
          Локальный Modal контролируется через open/onOpenChange. Программный
          сценарий хранится в zustand store и закрывается через controller.
          slotHead стоит под шапкой на всю ширину, headBottomSlot — внутри шапки
          и растягивает кнопки.
        </p>
      </div>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title={state.title}
        subtitle={state.subtitle}
        type={state.type}
        size={state.size}
        fullScreen={state.fullScreen}
        closeOnOverlayClick={state.closeOnOverlayClick}
        closeOnEscape={state.closeOnEscape}
        showCloseButton={state.showCloseButton}
        slotHead={
          state.withSlotHead ? (
            <div className="flex h-12 items-center rounded-lg bg-generic-medium px-5 text-sm text-secondary">
              Поиск
            </div>
          ) : undefined
        }
        headBottomSlot={getHeadBottomSlot(state.headBottomSlot, () =>
          setOpen(false)
        )}
        bottomSlot={
          <div className="flex justify-end gap-2">
            <Button size={Size.Xs} type="ghost" onClick={() => setOpen(false)}>
              Отмена
            </Button>
            <Button size={Size.Xs} onClick={() => setOpen(false)}>
              Сохранить
            </Button>
          </div>
        }
      >
        <p className="text-sm text-secondary">{state.content}</p>
      </Modal>
    </UIKitProvider>
  );
}

function createHeadSlotsUsage(state: ModalPlaygroundState) {
  const slotHeadLine = state.withSlotHead
    ? `\n        slotHead={<div>Поиск</div>}`
    : "";

  if (state.headBottomSlot === "none") {
    return slotHeadLine;
  }

  if (state.headBottomSlot === "one") {
    return `${slotHeadLine}
        headBottomSlot={<Button size="sm" onClick={() => setOpen(false)}>Продолжить</Button>}`;
  }

  return `${slotHeadLine}
        headBottomSlot={
          <>
            <Button size="sm" type="ghost" onClick={() => setOpen(false)}>Отмена</Button>
            <Button size="sm" onClick={() => setOpen(false)}>Сохранить</Button>
          </>
        }`;
}

function createModalUsageCode(
  packageName: string,
  state: ModalPlaygroundState
) {
  const headSlotsUsage = createHeadSlotsUsage(state);

  return `import { useState } from "react";
import { Button, Modal, ModalType, UIKitProvider, useUiController } from "${packageName}";
import "${packageName}/styles.css";

function LocalModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Открыть Modal</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="${state.title}"
        subtitle="${state.subtitle}"
        type={ModalType.${state.type}}
        size="${state.size}"
        fullScreen={${state.fullScreen}}
        closeOnOverlayClick={${state.closeOnOverlayClick}}
        closeOnEscape={${state.closeOnEscape}}
        showCloseButton={${state.showCloseButton}}${headSlotsUsage}
        bottomSlot={<Button size="sm" onClick={() => setOpen(false)}>Готово</Button>}
      >
        <p>${state.content}</p>
      </Modal>
    </>
  );
}

function ProgrammaticModalButton() {
  const { showModal, closeModal, showAlert } = useUiController();

  return (
    <Button
      onClick={() =>
        showModal<string>({
          title: "Programmatic Modal",
          subtitle: "Контент хранится в modal store",
          size: "medium",
          content: (
            <Button onClick={() => closeModal("saved")}>
              Закрыть с result
            </Button>
          ),
          onClose: (result) => showAlert(\`Modal closed: \${result}\`, "info"),
        })
      }
    >
      Открыть через controller
    </Button>
  );
}

export function App() {
  return (
    <UIKitProvider>
      <LocalModalExample />
      <ProgrammaticModalButton />
    </UIKitProvider>
  );
}`;
}

function renderModalControls(
  state: ModalPlaygroundState,
  {
    updateState,
  }: {
    updateState: (patch: Partial<ModalPlaygroundState>) => void;
  }
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(title) => updateState({ title })}
      />
      <PlaygroundTextControl
        label="Subtitle"
        value={state.subtitle}
        onChange={(subtitle) => updateState({ subtitle })}
      />
      <PlaygroundTextControl
        label="Content"
        value={state.content}
        onChange={(content) => updateState({ content })}
      />
      <PlaygroundSelectControl
        label="Type"
        options={MODAL_TYPE_OPTIONS}
        value={state.type}
        onChange={(type) => updateState({ type })}
      />
      <PlaygroundSelectControl
        label="Size"
        options={MODAL_SIZE_OPTIONS}
        value={state.size}
        onChange={(size) => updateState({ size })}
      />
      <PlaygroundSelectControl
        label="headBottomSlot"
        options={HEAD_BOTTOM_SLOT_OPTIONS}
        value={state.headBottomSlot}
        onChange={(headBottomSlot) => updateState({ headBottomSlot })}
      />
      <PlaygroundSwitchControl
        label="slotHead"
        checked={state.withSlotHead}
        onChange={(withSlotHead) => updateState({ withSlotHead })}
      />
      <PlaygroundSwitchControl
        label="Full screen"
        checked={state.fullScreen}
        onChange={(fullScreen) => updateState({ fullScreen })}
      />
      <PlaygroundSwitchControl
        label="Close on overlay"
        checked={state.closeOnOverlayClick}
        onChange={(closeOnOverlayClick) => updateState({ closeOnOverlayClick })}
      />
      <PlaygroundSwitchControl
        label="Close on Escape"
        checked={state.closeOnEscape}
        onChange={(closeOnEscape) => updateState({ closeOnEscape })}
      />
      <PlaygroundSwitchControl
        label="Show close button"
        checked={state.showCloseButton}
        onChange={(showCloseButton) => updateState({ showCloseButton })}
      />
    </>
  );
}

export const modalDocsConfig: ComponentDocsConfig<ModalPlaygroundState> = {
  title: "Modal",
  icon: PanelsTopLeft,
  description:
    "Modal используется для сценариев, которые требуют фокуса пользователя. Локально компонент управляется open/onOpenChange, а для вызова из обработчиков используйте useUiController или uiController: UIKitProvider добавляет Modals, который читает zustand store и отрисовывает стек модалок.",
  props: MODAL_PROPS,
  initialState: MODAL_DEFAULT_STATE,
  createUsageCode: createModalUsageCode,
  renderPreview: ModalPreview,
  renderControls: renderModalControls,
};
