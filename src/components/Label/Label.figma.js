// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21461-952
// source=src/components/Label/Label.tsx
// component=Label
const figma = require("figma");
const instance = figma.selectedInstance;

const text = instance.getString("Text");

const type = instance.getEnum("Type", {
  Fill: "fill",
  Outline: "outline",
  Flat: "flat",
  Text: "text",
});

const figmaColor = instance.getEnum("Color", {
  Brand: "brand",
  Danger: "danger",
  Positive: "positive",
  Action: "action",
  Warning: "warning",
  Info: "info",
  Inverse: "inverse",
  Disable: "disable",
  contrastDark: "contrastDark",
  contrastLight: "contrastLight",
});

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const iconOnly = instance.getEnum("iconOnly", {
  Off: "off",
  On: "on",
});

const showIconLeft = instance.getBoolean("Icon-left");
const showIconRight = instance.getBoolean("Icon-right");
const isIconOnly = iconOnly === "on";
const disabled = figmaColor === "disable";

// Temporary mapping: LabelColor does not include Disable, contrastDark,
// contrastLight, or generic. Disabled is a state prop; contrast colors map
// to inverse. Generic is not exposed by this Figma component.
const color =
  figmaColor === "disable" ||
  figmaColor === "contrastDark" ||
  figmaColor === "contrastLight"
    ? "inverse"
    : figmaColor;

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
const iconOnlyCode = isIconOnly
  ? getConnectedIcon("↳ Icon-only")
  : undefined;

const iconLeftProp =
  !isIconOnly && iconLeftCode ? figma.tsx`iconLeft={${iconLeftCode}}` : "";
const iconRightProp =
  !isIconOnly && iconRightCode ? figma.tsx`iconRight={${iconRightCode}}` : "";
const iconOnlyProp = iconOnlyCode
  ? figma.tsx`iconOnly={${iconOnlyCode}}`
  : "";

export default {
  example: isIconOnly
    ? figma.tsx`
        <Label
          type="${type}"
          color="${color}"
          size="${size}"
          ${disabled ? "disabled" : ""}
          ${iconOnlyProp}
          aria-label="${text}"
        />
      `
    : figma.tsx`
        <Label
          type="${type}"
          color="${color}"
          size="${size}"
          ${disabled ? "disabled" : ""}
          ${iconLeftProp}
          ${iconRightProp}
        >
          ${text}
        </Label>
      `,
  imports: ['import { Label } from "borrom-ds-test"'],
  id: "label",
  metadata: {
    nestable: true,
    props: {
      hasTemporaryColorMapping:
        figmaColor === "disable" ||
        figmaColor === "contrastDark" ||
        figmaColor === "contrastLight",
    },
  },
};
