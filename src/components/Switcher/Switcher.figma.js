// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1425-3616
// source=src/components/Switcher/Switcher.tsx
// component=Switcher
const figma = require("figma");
const instance = figma.selectedInstance;

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const checked = instance.getEnum("Checked", {
  Off: false,
  On: true,
});

const indefinite = instance.getEnum("Indefinite", {
  Off: "default",
  On: "minus",
});

const disable = instance.getEnum("Disable", {
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

// Temporary mapping: Figma keeps both Disable and State=Disable.
// Runtime has one disabled prop, so we merge both into a single boolean.
const disabled = disable || state === "disable";

// Temporary mapping: Figma Title/textTitle are layout-level label controls.
// Switcher API has no label/text prop, so snippet outputs Switcher only.
void titleVisible;
void titleText;

export default {
  example: figma.tsx`
    <Switcher
      size="${size}"
      type="${indefinite}"
      checked={${checked}}
      ${disabled ? "disabled" : ""}
    />
  `,
  imports: ['import { Switcher } from "borrom-ds-test"'],
  id: "switcher",
  metadata: {
    nestable: true,
  },
};
