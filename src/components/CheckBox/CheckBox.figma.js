// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1422-8581
// source=src/components/CheckBox/CheckBox.tsx
// component=CheckBox
const figma = require("figma");
const instance = figma.selectedInstance;

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const checkedVariant = instance.getEnum("Checked", {
  Off: false,
  On: true,
});

const indeterminate = instance.getEnum("Indefinite", {
  Off: false,
  On: true,
});

const disabledVariant = instance.getEnum("Disable", {
  Off: false,
  On: true,
});

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Disable: "disable",
  Selected: "selected",
});

const titleVisible = instance.getBoolean("Title");
const titleText = instance.getString("textTitle");

// Temporary mapping: Figma duplicates state via Checked/Disable and State.
const checked = checkedVariant || state === "selected";
const disabled = disabledVariant || state === "disable";

const label = titleVisible ? titleText : "";

export default {
  example: figma.tsx`
    <CheckBox
      size="${size}"
      ${checked ? "checked" : ""}
      ${disabled ? "disabled" : ""}
      ${indeterminate ? "indeterminate" : ""}
      ${label ? figma.tsx`label="${label}"` : ""}
    />
  `,
  imports: ['import { CheckBox } from "borrom-ds-test"'],
  id: "checkbox",
  metadata: {
    nestable: true,
  },
};
