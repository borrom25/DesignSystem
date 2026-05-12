// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21593-5299
// source=src/components/Avatar/Avatar.tsx
// component=Avatar
const figma = require("figma");
const instance = figma.selectedInstance;

const initials = instance.getString("Initials");

const size = instance.getEnum("Size", {
  28: 28,
  32: 32,
  36: 36,
  40: 40,
  44: 44,
  48: 48,
  56: 56,
  64: 64,
  72: 72,
  80: 80,
  88: 88,
  96: 96,
  120: 120,
});

const content = instance.getEnum("Content", {
  picture: "picture",
  icon: "icon",
  initials: "initials",
});

const stroke = instance.getEnum("Stroke", {
  default: "default",
  group: "group",
  stroke: "stroke",
});

const showEditBadge = instance.getBoolean("Editing");
const icon = instance.getInstanceSwap("icon");
const src =
  content === "picture"
    ? "https://api.dicebear.com/7.x/avataaars/svg?seed=avatar"
    : "";
const initialsProp =
  content === "initials" ? figma.tsx`initials="${initials}"` : "";
const withBorder = stroke === "stroke" || stroke === "group";

export default {
  example: figma.tsx`
    <Avatar
      size={${size}}
      src="${src}"
      alt="Avatar"
      ${withBorder ? "withBorder" : ""}
      ${showEditBadge ? "showEditBadge" : ""}
      ${initialsProp}
    />
  `,
  imports: ['import { Avatar } from "borrom-ds-test"'],
  id: "avatar",
  metadata: {
    nestable: true,
    props: {
      hasTemporaryPictureSrc: content === "picture",
      hasTemporaryIconMapping: content === "icon",
      hasTemporaryGroupStrokeMapping: stroke === "group",
      hasConnectedIcon:
        icon && icon.type === "INSTANCE" ? icon.hasCodeConnect() : false,
    },
  },
};
