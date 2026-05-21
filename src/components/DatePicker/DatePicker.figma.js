// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4698-9891
// source=src/components/DatePicker/DatePicker.tsx
// component=DatePicker
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

const disabled = instance.getEnum("Disable", {
  Off: false,
  On: true,
});

const filled = instance.getEnum("Filled", {
  Off: false,
  On: true,
});

const showHint = instance.getBoolean("Hint");
const showLabel = instance.getBoolean("Label");
const showPlaceholder = instance.getBoolean("Placeholder");
const requiredMark = instance.getBoolean("requiredMark");
const showSlotRight = instance.getBoolean("slotRight");

const textHint = instance.getString("textHint");
const textError = instance.getString("textError");
const textLabel = instance.getString("textLabel");
const textPlaceholder = instance.getString("textPlaceholder");
const textFilled = instance.getString("textFilled");
const slotRight = instance.getSlot("<slotRight>");

const hasValue =
  filled || state === "inputText" || state === "filledIn" || state === "filledInHover";
const value = hasValue
  ? state === "inputText"
    ? "12.0"
    : textFilled || "27.04.2026"
  : "";
const hintText = error ? textError : textHint;
const rightSlotContent = slotRight || figma.tsx`<Button size="xs">Button</Button>`;
const rightSlotProp = showSlotRight
  ? figma.tsx`rightSlot={${rightSlotContent}}`
  : "";

// Temporary mapping:
// Figma exposes focus/hover/typing states visually, while DatePicker runtime
// handles them through Input CSS, user input and Popover interaction.
export default {
  example: figma.tsx`
    <DatePicker
      size="${size}"
      format="dd.MM.yyyy"
      ${disabled ? "disabled" : ""}
      ${error ? "error" : ""}
      ${showLabel ? figma.tsx`label="${textLabel}"` : ""}
      ${requiredMark ? "required" : ""}
      ${showPlaceholder ? figma.tsx`placeholder="${textPlaceholder}"` : ""}
      ${showHint ? figma.tsx`${error ? `hintError="${hintText}"` : `hint="${hintText}"`}` : ""}
      ${value ? figma.tsx`value="${value}"` : ""}
      ${value ? "onChangeInput={setDateValue}" : ""}
      ${rightSlotProp}
    />
  `,
  imports: [
    'import { DatePicker, Button } from "borrom-ds-test"',
  ],
  id: "date-picker",
  metadata: {
    nestable: true,
    props: {
      state,
      size,
      error,
      disabled,
      filled,
      hasValue,
      figmaNodeId: "4698:9891",
      selectedStateHandledByRuntimePopover: state === "selected",
      hoverStateHandledByRuntimeCss: state === "hover" || state === "filledInHover",
      inputTextStateMappedToStringValue: state === "inputText",
      slotRightMappedToRightSlot: showSlotRight,
    },
  },
};
