// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=400-1335
// source=src/components/ListItem/ListItem.tsx
// component=ListItem
const figma = require("figma");
const instance = figma.selectedInstance;

const title = instance.getString("↳ textTitle");
const subtitle = instance.getString("↳ textSubtitle");
const suffixText = instance.getString("↳ textSuffix");

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const state = instance.getEnum("State", {
  Default: "default",
  Selected: "selected",
  Hover: "hover",
  Disable: "disable",
});

const iconOnly = instance.getEnum("iconOnly", {
  Off: "off",
  On: "on",
});

const error = instance.getEnum("Error", {
  Off: "off",
  On: "on",
});

const selectedVariant = instance.getEnum("Selected", {
  Off: "off",
  On: "on",
});

const showSubtitle = instance.getBoolean("Subtitle");
const showAvatar = instance.getBoolean("Avatar");
const showSuffix = instance.getBoolean("Suffix");
const showCounter = instance.getBoolean("Counter");
const showIconLeft = instance.getBoolean("Icon-left");
const showIconRight = instance.getBoolean("Icon-right");
const showActionsLeft = instance.getBoolean("Actions-left");
const showActionsRight = instance.getBoolean("Actions-right");

const disabled = state === "disable";
const selected = state === "selected" || selectedVariant === "on";
const isIconOnly = iconOnly === "on";
const variant = error === "on" ? "danger" : "default";

function getConnectedInstance(propName) {
  const connectedInstance = instance.getInstanceSwap(propName);

  if (
    connectedInstance &&
    connectedInstance.type === "INSTANCE" &&
    connectedInstance.hasCodeConnect()
  ) {
    return connectedInstance.executeTemplate().example;
  }

  return undefined;
}

const iconLeftCode =
  showIconLeft || isIconOnly ? getConnectedInstance("↳ Icon-left") : undefined;
const iconRightCode = showIconRight
  ? getConnectedInstance("↳ Icon-right")
  : undefined;

const iconLeftProp = iconLeftCode
  ? figma.tsx`iconLeft={${iconLeftCode}}`
  : "";
const iconRightProp =
  !isIconOnly && iconRightCode ? figma.tsx`iconRight={${iconRightCode}}` : "";
const suffixProp =
  !isIconOnly && showSuffix ? figma.tsx`suffix="${suffixText}"` : "";

// Temporary mapping: Figma exposes Avatar as a visibility boolean, while the
// current ListItem API needs concrete Avatar data.
const avatarProp =
  !isIconOnly && showAvatar
    ? figma.tsx`avatar={{ src: "", alt: "Avatar", initials: "AB" }}`
    : "";

// Temporary mapping: Figma exposes only a left action slot. Runtime ListItem
// supports the built-in checkbox behavior, not arbitrary action content.
const checkboxProp = !isIconOnly && showActionsLeft ? "checkbox" : "";

// Temporary mapping: subtitle, counter, and right action are present in Figma
// but do not have public ListItem props yet.
const hasUnsupportedFigmaContent =
  (showSubtitle && Boolean(subtitle)) || showCounter || showActionsRight;

export default {
  example: isIconOnly
    ? figma.tsx`
        <ListItem
          size="${size}"
          variant="${variant}"
          iconOnly
          ${disabled ? "disabled" : ""}
          ${selected ? "selected" : ""}
          ${iconLeftProp}
          aria-label="${title}"
        >
          ${title}
        </ListItem>
      `
    : figma.tsx`
        <ListItem
          title="${title}"
          size="${size}"
          variant="${variant}"
          ${disabled ? "disabled" : ""}
          ${selected ? "selected" : ""}
          ${checkboxProp}
          ${avatarProp}
          ${suffixProp}
          ${iconLeftProp}
          ${iconRightProp}
        />
      `,
  imports: ['import { ListItem } from "borrom-ds-test"'],
  id: "list-item",
  metadata: {
    nestable: true,
    props: {
      hasUnsupportedFigmaContent,
    },
  },
};
