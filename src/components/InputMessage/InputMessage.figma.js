// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=2301-10902
// source=src/components/InputMessage/InputMessage.tsx
// component=InputMessage
const figma = require("figma");
const instance = figma.selectedInstance;
const state = instance.getEnum("State", { Default: "default", Hover: "hover", Selected: "selected", Filed: "filled", pinnedFile: "file" });
// Temporary mapping: pinnedFile requires a user-selected File in runtime.
// Hover/focus are runtime states. onSend is an application integration point.
export default {
  example: figma.tsx`<InputMessage placeholder="Сообщение" ${state === "filled" ? 'defaultValue="Текст сообщения"' : ""} showAttachments onSend={(value, files) => console.info(value, files)} />`,
  imports: ['import { InputMessage } from "borrom-ds-test"'],
  id: "input-message",
  metadata: { nestable: true, props: { requestedState: state } },
};
