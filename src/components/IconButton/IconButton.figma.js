// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19405-2038
// source=src/components/IconButton/IconButton.tsx
// component=IconButton
const figma = require("figma");
const instance = figma.selectedInstance;

const type = instance.getEnum("Type", {
  Ghost: "ghost",
  Flat: "flat",
  Icon: "icon",
});

const color = instance.getEnum("Color", {
  Inverse: "inverse",
  Brand: "brand",
  Danger: "danger",
  Positive: "positive",
  Action: "action",
  Warning: "warning",
  Info: "info",
});

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Disable: "disable",
});

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const disable = instance.getEnum("Disable", {
  On: "on",
  Off: "off",
});

const showBadge = instance.getBoolean("Badge");
const disabled = state === "disable" || disable === "on";
const icon = instance.getInstanceSwap("↳ Icon");

export default {
  example: figma.tsx`
    <IconButton
      icon={X}
      type="${type}"
      color="${color}"
      size="${size}"
      aria-label="Icon button"
      ${disabled ? "disabled" : ""}
      ${showBadge ? "showBadge" : ""}
    />
  `,
  imports: [
    'import { IconButton } from "borrom-ds-test"',
    'import { X } from "lucide-react"',
  ],
  id: "icon-button",
  metadata: {
    nestable: true,
    props: {
      hasRuntimeHoverState: state === "hover",
      hasTemporaryIconMapping: Boolean(icon),
    },
  },
};
