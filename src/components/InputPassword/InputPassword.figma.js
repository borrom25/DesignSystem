// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4607-6301
// source=src/components/InputPassword/InputPassword.tsx
// component=InputPassword
const figma = require("figma");
const instance = figma.selectedInstance;

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Selected: "selected",
  "Filled in": "filledIn",
  "Input text": "inputText",
  Mask: "mask",
  "Filled in-Hover": "filledInHover",
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

const mask = instance.getEnum("Mask", {
  Off: false,
  On: true,
});

const showHint = instance.getBoolean("Hint");
const showPlaceholder = instance.getBoolean("Placeholder");
const showIconLeft = instance.getBoolean("icon-left");
const requiredMark = instance.getBoolean("requiredMark");

const textHint = instance.getString("textHint");
const textError = instance.getString("textError");
const textLabel = instance.getString("textLabel");
const textPlaceholder = instance.getString("textPlaceholder");
const textFilled = instance.getString("textFilled");

const isFocused = state === "selected";
const hasValue =
  filled || state === "filledIn" || state === "filledInHover" || state === "inputText" || state === "mask";
const hintText = error ? textError : textHint;
const defaultValue = hasValue ? textFilled || "secret123" : "";

// Temporary mapping: Figma icon swap cannot be transformed into an exact runtime import automatically.
const iconLeft = showIconLeft ? "iconLeft={Check}" : "";

// Temporary mapping between Figma mask state and runtime API.
const shouldShowPasswordByDefault = hasValue && !mask && state !== "mask";

export default {
  example: figma.tsx`
    <InputPassword
      size="${size}"
      ${disable ? "disabled" : ""}
      ${error ? "error" : ""}
      ${isFocused ? "autoFocus" : ""}
      label="${textLabel}"
      ${requiredMark ? "required" : ""}
      ${showHint ? figma.tsx`${error ? `hintError="${hintText}"` : `hint="${hintText}"`}` : ""}
      ${showPlaceholder ? figma.tsx`placeholder="${textPlaceholder}"` : ""}
      ${defaultValue ? figma.tsx`defaultValue="${defaultValue}"` : ""}
      ${shouldShowPasswordByDefault ? "showPasswordByDefault" : ""}
      ${iconLeft}
    />
  `,
  imports: [
    'import { InputPassword } from "borrom-ds-test"',
    'import { Check } from "lucide-react"',
  ],
  id: "input-password",
  metadata: {
    nestable: true,
    props: {
      hasValue,
      isMaskedState: mask || state === "mask",
      hasTemporaryIconMapping: showIconLeft,
    },
  },
};
