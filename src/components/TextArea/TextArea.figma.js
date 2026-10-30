// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=4769-7369
// source=src/components/TextArea/TextArea.tsx
// component=TextArea
const figma = require("figma");
const instance = figma.selectedInstance;
const size = instance.getEnum("Size", { Xs: "xs", Sm: "sm", Md: "md" });
const state = instance.getEnum("State", { Default: "default", Hover: "hover", Selected: "selected", "Input text": "input", "Filled in": "filled", "Filled in Hover": "filledHover", Disable: "disabled" });
const disabled = instance.getEnum("Disable", { Off: false, On: true }) || state === "disabled";
const error = instance.getEnum("Error", { Off: false, On: true });
const filled = instance.getEnum("Filled", { Off: false, On: true }) || ["filled", "filledHover", "input"].includes(state);
const label = instance.getString("textLabel");
const hint = instance.getString("textHint");
const hintError = instance.getString("textError");
const placeholder = instance.getString("textPlaceholder");
const showLabel = instance.getBoolean("Label");
const showHint = instance.getBoolean("Hint");
const showPlaceholder = instance.getBoolean("Placeholder");
const required = instance.getBoolean("requiredMark");
const counter = instance.getBoolean("Counter");
const resize = instance.getBoolean("Resize");
// Temporary mapping: Figma does not expose a numeric limit or filled text.
// Use a sample string and maxLength=100; scrollbar is owned by the browser.
export default {
  example: figma.tsx`<TextArea size="${size}"
    ${disabled ? "disabled" : ""} ${error ? "error" : ""} ${required ? "required" : ""}
    ${showLabel ? figma.tsx`label="${label}"` : ""}
    ${showHint ? figma.tsx`hint="${hint}" hintError="${hintError}"` : ""}
    ${showPlaceholder ? figma.tsx`placeholder="${placeholder}"` : ""}
    ${filled ? 'defaultValue="Текст"' : ""}
    ${counter ? "maxLength={100}" : ""}
    ${resize ? 'resizeMode="both"' : ""}
  />`,
  imports: ['import { TextArea } from "borrom-ds-test"'],
  id: "text-area",
  metadata: { nestable: true },
};
