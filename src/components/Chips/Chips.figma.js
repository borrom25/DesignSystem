// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21552-2622
// source=src/components/Chips/Chips.tsx
// component=Chips
const figma = require("figma");
const instance = figma.selectedInstance;

const label = instance.getString("↳ Text");

const type = instance.getEnum("Type", {
  Fill: "fill",
  Outline: "outline",
});

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Selected: "selected",
  Disable: "disable",
});

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const selectedVariant = instance.getEnum("Selected", {
  Off: "off",
  On: "on",
});

const iconOnly = instance.getEnum("iconOnly", {
  Off: "off",
  On: "on",
});

const showIconLeft = instance.getBoolean("Icon-left");
const showIconRight = instance.getBoolean("Icon-right");
const showCounter = instance.getBoolean("Counter");
const selected = state === "selected" || selectedVariant === "on";
const disabled = state === "disable";
const isIconOnly = iconOnly === "on";

const iconLeft = instance.getInstanceSwap("↳ Icon-left");
const iconRight = instance.getInstanceSwap("↳ Icon-right");
const iconOnlySwap = instance.getInstanceSwap("↳ iconOnly");

export default {
  example: isIconOnly
    ? figma.tsx`
        <Chips
          iconOnly={Plus}
          type="${type}"
          size="${size}"
          aria-label="${label}"
          ${selected ? "selected" : ""}
          ${disabled ? "disabled" : ""}
        />
      `
    : figma.tsx`
        <Chips
          type="${type}"
          size="${size}"
          ${selected ? "selected" : ""}
          ${disabled ? "disabled" : ""}
          ${showIconLeft ? "iconLeft={Check}" : ""}
          ${showIconRight ? "iconRight={X}" : ""}
          ${showCounter ? "count={1}" : ""}
        >
          ${label}
        </Chips>
      `,
  imports: [
    'import { Chips } from "borrom-ds-test"',
    'import { Check, Plus, X } from "lucide-react"',
  ],
  id: "chips",
  metadata: {
    nestable: true,
    props: {
      hasRuntimeHoverState: state === "hover",
      hasTemporaryCounterMapping: showCounter,
      hasTemporaryIconMapping: Boolean(iconLeft || iconRight || iconOnlySwap),
    },
  },
};
