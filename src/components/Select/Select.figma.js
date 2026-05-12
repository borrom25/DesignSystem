// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4607-9923
// source=src/components/Select/Select.tsx
// component=Select
const figma = require("figma");
const instance = figma.selectedInstance;

const hint = instance.getString("textHint");
const hintError = instance.getString("textError");
const placeholder = instance.getString("textPlaceholder");
const label = instance.getString("textLabel");
const filledText = instance.getString("textFilled");

const showHint = instance.getBoolean("Hint");
const showLabel = instance.getBoolean("Label");
const required = instance.getBoolean("requiredMark");

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Selected: "selected",
  "Filled in": "filled",
  Disable: "disable",
  "Filled in Hover": "filledHover",
});

const errorState = instance.getEnum("Error", {
  Off: "off",
  On: "on",
});

const disableState = instance.getEnum("Disable", {
  Off: "off",
  On: "on",
});

const filledState = instance.getEnum("Filled", {
  Off: "off",
  On: "on",
});

const isError = errorState === "on";
const disabled = state === "disable" || disableState === "on";
const isFilled =
  filledState === "on" ||
  state === "filled" ||
  state === "filledHover" ||
  state === "disable";
const defaultOpen = state === "selected";

const options = figma.tsx`[
  { value: "selected", label: "${filledText}" },
  { value: "option-2", label: "Option 2" },
  { value: "option-3", label: "Option 3" },
]`;

const labelProp = showLabel ? figma.tsx`label="${label}"` : "";
const hintProp = showHint && !isError ? figma.tsx`hint="${hint}"` : "";
const hintErrorProp =
  showHint && isError ? figma.tsx`hintError="${hintError}"` : "";

export default {
  example: figma.tsx`
    <Select
      options={${options}}
      size="${size}"
      placeholder="${placeholder}"
      ${labelProp}
      ${required ? "required" : ""}
      ${disabled ? "disabled" : ""}
      ${isError ? "error" : ""}
      ${isFilled ? 'defaultValue="selected"' : ""}
      ${defaultOpen ? "defaultOpen" : ""}
      ${hintProp}
      ${hintErrorProp}
    />
  `,
  imports: ['import { Select } from "borrom-ds-test"'],
  id: "select",
  metadata: {
    nestable: true,
    props: {
      isSingleSelect: true,
      hasRuntimeHoverState: state === "hover" || state === "filledHover",
      hasTemporaryOptionsMapping: true,
    },
  },
};
