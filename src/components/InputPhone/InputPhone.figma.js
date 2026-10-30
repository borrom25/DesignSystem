// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4602-3679
// source=src/components/InputPhone/InputPhone.tsx
// component=InputPhone
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
// Temporary mapping: country flag belongs to the runtime phone input chrome.
const slotLeft = true;

const textHint = instance.getString("textHint");
const textError = instance.getString("textError");
const textLabel = instance.getString("textLabel");
const textPlaceholder = instance.getString("textPlaceholder");
const textFilled = instance.getString("textFilled");

const isFocused = state === "selected";
const hasValue =
  filled || state === "inputText" || state === "filledIn" || state === "filledInHover";
const hintText = error ? textError : textHint;

// Temporary mapping: runtime country selection owns the dial code and flag.
// There is no slotLeft property in the current Figma component.
const showFlagIsland = slotLeft;

const fallbackPhone = "9991234567";
const phoneValue = textFilled || fallbackPhone;

export default {
  example: figma.tsx`
    <InputPhone
      size="${size}"
      ${disable ? "disabled" : ""}
      ${error ? "error" : ""}
      ${isFocused ? "autoFocus" : ""}
      ${showLabel ? figma.tsx`label="${textLabel}"` : ""}
      ${requiredMark ? "required" : ""}
      ${showHint ? figma.tsx`${error ? `hintError="${hintText}"` : `hint="${hintText}"`}` : ""}
      placeholder="${textPlaceholder}"
      showFlagIsland={${showFlagIsland}}
      ${hasValue ? figma.tsx`defaultValue="${phoneValue}"` : ""}
    />
  `,
  imports: ['import { InputPhone } from "borrom-ds-test"'],
  id: "input-phone",
  metadata: {
    nestable: true,
    props: {
      hasValue,
      hasTemporarySlotMapping: true,
      isPhoneComponent: true,
    },
  },
};
