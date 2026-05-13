// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19446-1451
// source=src/components/Tab/Tab.tsx
// component=Tab
const figma = require("figma");
const instance = figma.selectedInstance;

const label = instance.getString("↳ Text");

const type = instance.getEnum("Type", {
  Fill: "fill",
  Ghost: "ghost",
  Outline: "outline",
});

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Selected: "selected",
  Disable: "disable",
});

const selectedVariant = instance.getEnum("Selected", {
  Off: "off",
  On: "on",
});

const iconOnly = instance.getEnum("iconOnly", {
  Off: "off",
  On: "on",
});

const showCounter = instance.getBoolean("Counter");
const showIconLeft = iconOnly === "on" || instance.getBoolean("Icon-left");
const selected = state === "selected" || selectedVariant === "on";
const disabled = state === "disable";

function getConnectedIcon(propName) {
  const icon = instance.getInstanceSwap(propName);

  if (icon && icon.type === "INSTANCE" && icon.hasCodeConnect()) {
    return icon.executeTemplate().example;
  }

  return undefined;
}

const iconSourceProp = iconOnly === "on" ? "↳ iconOnly" : "↳ Icon-left";
const iconLeftCode = showIconLeft ? getConnectedIcon(iconSourceProp) : undefined;
const iconLeftProp = iconLeftCode ? figma.tsx`iconLeft={${iconLeftCode}}` : "";
const textValue = iconOnly === "on" ? "" : label;

export default {
  example: figma.tsx`
    <Tab
      type="${type}"
      size="${size}"
      ${selected ? "selected" : ""}
      ${disabled ? "disabled" : ""}
      ${showCounter ? "count={1}" : ""}
      ${iconLeftProp}
    >
      ${textValue}
    </Tab>
  `,
  imports: ['import { Tab } from "borrom-ds-test"'],
  id: "tab",
  metadata: {
    nestable: true,
    props: {
      hasRuntimeHoverState: state === "hover",
      hasTemporaryCounterMapping: showCounter,
      hasTemporaryIconOnlyMapping: iconOnly === "on",
    },
  },
};
