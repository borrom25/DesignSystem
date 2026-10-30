// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=10753-4431
// source=src/components/InputFileDrop/InputFileDrop.tsx
// component=InputFileDrop
const figma = require("figma");
const instance = figma.selectedInstance;
const state = instance.getEnum("State", { Default: "default", Hover: "hover", Filled: "filled", Disable: "disabled" });
const required = instance.getBoolean("requiredMark");
const showLabel = instance.getBoolean("Label");
const showHint = instance.getBoolean("Hint");
const showIcon = instance.getBoolean("Icon");
const label = instance.getString("textLabe");
const hint = instance.getString("textHint");
const pinnedFile = instance.getSlot("<slotPinnedFile>");
void pinnedFile;
// Temporary mapping: Figma's pinned-file slot is visual content. Runtime previews
// need actual File[]; the filled state uses a valid text file for the example.
// No size property is exposed in Figma, so runtime's default size is preserved.
export default {
  example: figma.tsx`<InputFileDrop
    ${required ? "required" : ""}
    ${state === "disabled" ? "disabled" : ""}
    ${showLabel ? figma.tsx`label="${label}"` : ""}
    ${showHint ? figma.tsx`hint="${hint}"` : ""}
    textMode={${!showIcon}}
    ${state === "filled" ? figma.tsx`defaultValue={[new File(["Пример"], "example.txt", { type: "text/plain" })]}` : ""}
  />`,
  imports: ['import { InputFileDrop } from "borrom-ds-test"'],
  id: "input-file-drop",
  metadata: { nestable: true, props: { runtimeOwnsPreviewAndHover: true } },
};
