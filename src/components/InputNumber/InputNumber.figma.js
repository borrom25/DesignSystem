// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4602-2205
// source=src/components/InputNumber/InputNumber.tsx
// component=InputNumber
const figma = require("figma");
const instance = figma.selectedInstance;

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Selected: "selected",
  "Filled in": "filledIn",
  "Input text": "inputText",
  "Filled in Hover": "filledInHover",
});

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const error = instance.getEnum("Error", {
  Off: false,
  On: true,
});

const disable = instance.getEnum("Disable", {
  Off: false,
  On: true,
});

const filled = instance.getEnum("Filled", {
  Off: false,
  On: true,
});

const showHint = instance.getBoolean("Hint");
const showLabel = instance.getBoolean("Label");
const requiredMark = instance.getBoolean("requiredMark");
const showSlotLeft = instance.getBoolean("slotLeft");
const showIconLeft = instance.getBoolean("icon-left");

const textHint = instance.getString("textHint");
const textError = instance.getString("textError");
const textLabel = instance.getString("textLabel");
const textPlaceholder = instance.getString("textPlaceholder");
const textFilled = instance.getString("textFilled");

const iconLeftSwap = instance.getInstanceSwap("↳ Icon-left");
const slotLeft = instance.getPropertyValue("<slotLeft>");

// Temporary mapping: current public InputNumber API has no icon/slot props.
void iconLeftSwap;
void slotLeft;
void showSlotLeft;
void showIconLeft;

const isFocused = state === "selected";
const hasValue =
  filled ||
  state === "inputText" ||
  state === "filledIn" ||
  state === "filledInHover";

const parsedFilled = Number.parseFloat(textFilled);
const filledNumber = Number.isFinite(parsedFilled) ? parsedFilled : 12;
const hintText = error ? textError : textHint;

export default {
  example: figma.tsx`
    <InputNumber
      size="${size}"
      ${disable ? "disabled" : ""}
      ${error ? "error" : ""}
      ${isFocused ? "autoFocus" : ""}
      ${showLabel ? figma.tsx`label="${textLabel}"` : ""}
      ${requiredMark ? "required" : ""}
      ${showHint ? figma.tsx`${error ? `hintError="${hintText}"` : `hint="${hintText}"`}` : ""}
      placeholder="${textPlaceholder}"
      ${hasValue ? figma.tsx`value={${filledNumber}}` : ""}
      min={0}
      max={999}
      step={1}
    />
  `,
  imports: ['import { InputNumber } from "borrom-ds-test"'],
  id: "input-number",
  metadata: {
    nestable: true,
    props: {
      hasValue,
      hasTemporarySlotMapping: showSlotLeft,
      hasTemporaryIconMapping: showIconLeft,
    },
  },
};
