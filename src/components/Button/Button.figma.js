// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19105-18
// source=src/components/Button/Button.tsx
// component=Button
const figma = require("figma");
const instance = figma.selectedInstance;

const label = instance.getString("textButton");

const type = instance.getEnum("Type", {
  Fill: "fill",
  Outline: "outline",
  Ghost: "ghost",
  Flat: "flat",
});

const color = instance.getEnum("Color", {
  Brand: "brand",
  Danger: "danger",
  Positive: "positive",
  Action: "action",
  Warning: "warning",
  Info: "info",
  Inverse: "inverse",
  contrastDark: "contrastDark",
  contrastLight: "contrastLight",
  // Temporary mapping: Figma has Color=Generic, but Button Color API does not.
  Generic: "brand",
});

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Loader: "loader",
  Disable: "disable",
});

const loader = instance.getEnum("Loader", {
  Off: "off",
  On: "on",
});

const iconOnly = instance.getEnum("iconOnly", {
  Off: "off",
  On: "on",
});

const disable = instance.getEnum("Disable", {
  Off: "off",
  On: "on",
});

const showIconLeft = instance.getBoolean("Icon-left");
const showIconRight = instance.getBoolean("Icon-right");
const showCounter = instance.getBoolean("Counter");
const loading = state === "loader" || loader === "on";
const disabled = state === "disable" || disable === "on";
const isIconOnly = iconOnly === "on";

function getConnectedIcon(propName) {
  const icon = instance.getInstanceSwap(propName);

  if (icon && icon.type === "INSTANCE" && icon.hasCodeConnect()) {
    return icon.executeTemplate().example;
  }

  return undefined;
}

const iconLeftCode = showIconLeft ? getConnectedIcon("↳ Icon-left") : undefined;
const iconRightCode = showIconRight
  ? getConnectedIcon("↳ Icon-right")
  : undefined;
const iconOnlyCode = isIconOnly ? getConnectedIcon("↳ iconOnly") : undefined;

const iconOnlyProp = iconOnlyCode
  ? figma.tsx`iconOnly={${iconOnlyCode}}`
  : "";
const iconLeftProp =
  !isIconOnly && iconLeftCode ? figma.tsx`iconLeft={${iconLeftCode}}` : "";
const iconRightProp =
  !isIconOnly && iconRightCode ? figma.tsx`iconRight={${iconRightCode}}` : "";

export default {
  example: isIconOnly
    ? figma.tsx`
        <Button
          type="${type}"
          color="${color}"
          size="${size}"
          ${disabled ? "disabled" : ""}
          ${loading ? "loading" : ""}
          ${iconOnlyProp}
          aria-label="${label}"
        />
      `
    : figma.tsx`
        <Button
          type="${type}"
          color="${color}"
          size="${size}"
          ${disabled ? "disabled" : ""}
          ${loading ? "loading" : ""}
          ${showCounter ? "count={1}" : ""}
          ${iconLeftProp}
          ${iconRightProp}
        >
          ${label}
        </Button>
      `,
  imports: ['import { Button } from "borrom-ds-test"'],
  id: "button",
  metadata: {
    nestable: true,
  },
};
