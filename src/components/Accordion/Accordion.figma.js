// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1282-1912
// source=src/components/Accordion/Accordion.tsx
// component=Accordion
const figma = require("figma");
const instance = figma.selectedInstance;

const titleLayer = instance.findText("Title");
const title =
  titleLayer && titleLayer.type === "TEXT"
    ? titleLayer.textContent
    : "Accordion";

const subtitle = instance.findText("Subtitle")?.textContent || "";
const showSubtitle = Boolean(subtitle);

const order = instance.getEnum("Order", {
  Start: "start",
  Mid: "mid",
  End: "end",
});

const open = instance.getEnum("Open", {
  On: "on",
  Off: "off",
});

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Disable: "disable",
});

const showActions = Boolean(instance.getSlot("<slotHead>"));
const showIconLeft = instance.getBoolean("IconLeft");
const chevronPosition = instance.getBoolean("Chevron-left") ? "left" : instance.getBoolean("Chevron-right") ? "right" : "none";
const disabled = state === "disable";

function getConnectedIcon(propName) {
  const icon = instance.getInstanceSwap(propName);

  if (icon && icon.type === "INSTANCE" && icon.hasCodeConnect()) {
    return icon.executeTemplate().example;
  }

  return undefined;
}

const iconLeftCode = showIconLeft
  ? getConnectedIcon("↳ IconLeft")
  : undefined;
const iconLeftProp = iconLeftCode
  ? figma.tsx`iconLeft={${iconLeftCode}}`
  : "";

// Temporary mapping: Figma Actions/<slotAction> is arbitrary slot content,
// while runtime Accordion accepts one ReactElement in headSlot.
const headSlotProp = showActions
  ? figma.tsx`headSlot={<Button size="xs">headSlot</Button>}`
  : "";

export default {
  example: figma.tsx`
    <Accordion
      title="${title}"
      position="${order}"
      chevronPosition="${chevronPosition}"
      ${open === "on" ? "defaultOpen" : ""}
      ${showSubtitle ? figma.tsx`subtitle="${subtitle}"` : ""}
      ${disabled ? "disabled" : ""}
      ${iconLeftProp}
      ${headSlotProp}
    >
      Content
    </Accordion>
  `,
  imports: ['import { Accordion, Button } from "borrom-ds-test"'],
  id: "accordion",
  metadata: {
    nestable: true,
    props: {
      defaultOpenRequested: open === "on",
      hasTemporarySlotMapping: true,
    },
  },
};
