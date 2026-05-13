// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1199-5009
// source=src/components/PinInput/PinInput.tsx
// component=PinInput
const figma = require("figma");
const instance = figma.selectedInstance;

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const mask = instance.getEnum("Mask", {
  Off: "default",
  On: "masked",
});

const errorVariant = instance.getEnum("Error", {
  Off: false,
  On: true,
});

const result = instance.getEnum("Result", {
  Error: "error",
  Normal: "normal",
});

const filledVariant = instance.getEnum("Filled", {
  Off: false,
  On: true,
});

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Selected: "selected",
  Filled: "filled",
  Disablet: "disablet",
  Mask: "mask",
});

const pinInputItem = instance.getBoolean("pinInputItem");

// Temporary mapping: pinInputItem has no public runtime prop.
void pinInputItem;

const disabled = state === "disablet";
const error = errorVariant || result === "error";

// Temporary mapping: Figma "Filled" and "Mask" visual states imply value presence.
// PinInput accepts explicit value string, so we use demo digit "9".
const hasValue = filledVariant || state === "filled" || state === "mask";
const value = hasValue ? "9" : "";

const type = mask === "masked" || state === "mask" ? "masked" : "default";

export default {
  example: figma.tsx`
    <PinInput
      size="${size}"
      type="${type}"
      error={${error}}
      ${disabled ? "disabled" : ""}
      value="${value}"
    />
  `,
  imports: ['import { PinInput } from "borrom-ds-test"'],
  id: "pin-input",
  metadata: {
    nestable: true,
  },
};
