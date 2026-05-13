// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21672-239
// source=src/components/Tag/Tag.tsx
// component=Tag
const figma = require("figma");
const instance = figma.selectedInstance;

const text = instance.getString("↳ Text");

const showIconLeft = instance.getBoolean("Icon-left");
const iconSwap = instance.getInstanceSwap("Instance");

const avatar = instance.getEnum("Avatar", {
  On: true,
  Off: false,
});

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const error = instance.getEnum("Error", {
  Off: false,
  On: true,
});

const disable = instance.getEnum("Disable", {
  Off: false,
  On: true,
});

// Temporary mapping: instance swap currently maps to a stable icon fallback.
void iconSwap;

const withAvatar = avatar
  ? figma.tsx`
      avatar={{
        src: "https://api.dicebear.com/7.x/avataaars/svg?seed=tag-avatar",
        alt: "Avatar"
      }}
    `
  : "";

const withLeftIcon = !avatar && showIconLeft
  ? figma.tsx`leftContent={<Check size={12} />}`
  : "";

// Temporary mapping: Tag API has no explicit disabled prop.
// Disable=On maps to non-interactive tag by omitting onClose handler.
const closeable = !disable;

export default {
  example: figma.tsx`
    <Tag
      size="${size}"
      ${error ? "error" : ""}
      ${withAvatar}
      ${withLeftIcon}
      ${closeable ? "onClose={() => {}}" : ""}
    >
      ${text || "Tag"}
    </Tag>
  `,
  imports: [
    'import { Tag } from "borrom-ds-test"',
    'import { Check } from "lucide-react"',
  ],
  id: "tag",
  metadata: {
    nestable: true,
    props: {
      hasAvatar: avatar,
      hasLeftIcon: showIconLeft,
      hasTemporaryDisableMapping: disable,
    },
  },
};
