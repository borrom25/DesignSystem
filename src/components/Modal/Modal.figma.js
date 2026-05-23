// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1941-2233
// source=src/components/Modal/Modal.tsx
// component=Modal
const figma = require("figma");
const instance = figma.selectedInstance;

const media = instance.getEnum("Media", {
  Desktop: "desktop",
  Mobile: "mobile",
});

const height = instance.getEnum("Height", {
  "Content size": "content",
  "Full height": "full",
});

const modalType = instance.getEnum("Type", {
  Modal: "modal",
  Dialogue: "dialog",
  Icebox: "iceBox",
});

const showActionBar = instance.getBoolean("actionBar");
const showHead = instance.getBoolean("headModal");
const slotBody = instance.getSlot("<slotBody>");
const slotHead = instance.getSlot("<slotHead>");
const slotActionBar = instance.getSlot("<slotActionBar>");

// Temporary mapping: Modal runtime has structured header props
// (`title`, `subtitle`, `actionSlot`), not an arbitrary header slot.
void slotHead;

const modalTypeExpression = {
  modal: "ModalType.modal",
  dialog: "ModalType.dialog",
  iceBox: "ModalType.iceBox",
}[modalType];

const title = modalType === "dialog" ? "Подтвердить действие" : "Title";
const subtitle =
  modalType === "dialog"
    ? "Изменения применятся после подтверждения."
    : "Subtitle";
const bodyContent =
  slotBody || figma.tsx`<div>Контент модального окна</div>`;
const actionBarContent =
  slotActionBar ||
  figma.tsx`
    <div className="flex w-full items-center justify-end gap-3">
      <Button type="ghost" onClick={() => setModalOpen(false)}>
        Отмена
      </Button>
      <Button onClick={() => setModalOpen(false)}>
        Сохранить
      </Button>
    </div>
  `;
const actionBarProp =
  showActionBar && modalType === "iceBox"
    ? figma.tsx`actionSlot={${actionBarContent}}`
    : showActionBar
      ? figma.tsx`bottomSlot={${actionBarContent}}`
      : "";
const shouldRenderBody = modalType !== "dialog";

export default {
  example: figma.tsx`
    <Modal
      open={isModalOpen}
      onOpenChange={setModalOpen}
      type={${modalTypeExpression}}
      ${height === "full" ? "fullScreen" : ""}
      ${showHead ? figma.tsx`title="${title}"` : ""}
      ${showHead ? figma.tsx`subtitle="${subtitle}"` : ""}
      ${actionBarProp}
    >
      ${shouldRenderBody ? bodyContent : ""}
    </Modal>
  `,
  imports: [
    'import { Button, Modal, ModalType } from "borrom-ds-test"',
  ],
  id: "modal",
  metadata: {
    nestable: true,
    props: {
      media,
      height,
      modalType,
      showActionBar,
      showHead,
      figmaNodeId: "1941:2233",
      mediaHandledByRuntimeScreenSize: true,
      fullScreen: height === "full",
      slotHeadHasNoDirectRuntimeProp: Boolean(slotHead),
      actionBarMappedToActionSlot: showActionBar && modalType === "iceBox",
      actionBarMappedToBottomSlot: showActionBar && modalType !== "iceBox",
    },
  },
};
