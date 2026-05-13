// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4296-4114
// source=src/components/Input/Input.tsx
// component=Input
const figma = require("figma");
const instance = figma.selectedInstance;

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Selected: "selected",
  "Input text": "inputText",
  "Filled in": "filledIn",
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
const showCounter = instance.getBoolean("Counter");
const showPlaceholder = instance.getBoolean("Placeholder");
const showSlotLeft = instance.getBoolean("slotLeft");
const showSlotRight = instance.getBoolean("slotRight");
const showIconLeft = instance.getBoolean("icon-left");
const showIconRight = instance.getBoolean("Icon-right");

const textHint = instance.getString("textHint");
const textError = instance.getString("textError");
const textLabel = instance.getString("textLabel");
const textPlaceholder = instance.getString("textPlaceholder");
const textFilled = instance.getString("textFilled");

const iconLeftSwap = instance.getInstanceSwap("↳ Icon-left");
const iconRightSwap = instance.getInstanceSwap("↳ Icon-right");
const slotLeft = instance.getPropertyValue("<slotLeft>");
const slotRight = instance.getPropertyValue("<slotRight>");

// Temporary mapping: current runtime API expects icon components and ReactNode
// for slots, while Figma swaps/slots here do not provide direct runtime snippets.
void iconLeftSwap;
void iconRightSwap;
void slotLeft;
void slotRight;

const isFocused = state === "selected";
const hasValue =
  filled || state === "inputText" || state === "filledIn" || state === "filledInHover";
const hintText = error ? textError : textHint;
const defaultValue = hasValue ? textFilled || "Input text" : "";

export default {
  example: figma.tsx`
    <Input
      size="${size}"
      ${disable ? "disabled" : ""}
      ${error ? "error" : ""}
      ${isFocused ? "autoFocus" : ""}
      ${showLabel ? figma.tsx`label="${textLabel}"` : ""}
      ${requiredMark ? "required" : ""}
      ${showPlaceholder ? figma.tsx`placeholder="${textPlaceholder}"` : ""}
      ${showHint ? figma.tsx`${error ? `hintError="${hintText}"` : `hint="${hintText}"`}` : ""}
      ${showIconLeft ? "iconLeft={Check}" : ""}
      ${showIconRight ? "iconRight={Check}" : ""}
      ${showSlotLeft ? figma.tsx`prefix={<span>Slot left</span>}` : ""}
      ${showSlotRight ? figma.tsx`suffix={<span>Slot right</span>}` : ""}
      ${showCounter ? "count={4} maxCount={10}" : ""}
      ${defaultValue ? figma.tsx`defaultValue="${defaultValue}"` : ""}
    />
  `,
  imports: [
    'import { Input } from "borrom-ds-test"',
    'import { Check } from "lucide-react"',
  ],
  id: "input",
  metadata: {
    nestable: true,
    props: {
      hasValue,
      hasTemporarySlotMapping: showSlotLeft || showSlotRight,
      hasTemporaryIconMapping: showIconLeft || showIconRight,
    },
  },
};
