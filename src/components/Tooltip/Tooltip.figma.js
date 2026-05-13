// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=2277-2530
// source=src/components/Tooltip/Tooltip.tsx
// component=Tooltip
const figma = require("figma");
const instance = figma.selectedInstance;

const direction = instance.getEnum("Direction", {
  Bot: "bottom",
  Top: "top",
  Left: "left",
  Right: "right",
});

const position = instance.getEnum("Position", {
  Centre: "centre",
  Left: "left",
  Right: "right",
  Bot: "bot",
  Top: "top",
});

const showIcon = instance.getBoolean("icon");
const showButtonsGroup = instance.getBoolean("buttonsGroup");
const iconSwap = instance.getInstanceSwap("↳ Icon");
void iconSwap;

const align = (() => {
  if (direction === "top" || direction === "bottom") {
    if (position === "left") return "start";
    if (position === "right") return "end";
    return "center";
  }

  if (position === "top") return "start";
  if (position === "bot") return "end";
  return "center";
})();

const actionSlot = showButtonsGroup
  ? figma.tsx`
      actionSlot={
        <div className="flex gap-2">
          <Button size="sm">Button</Button>
          <Button size="sm">Button</Button>
        </div>
      }
    `
  : "";

export default {
  example: figma.tsx`
    <Tooltip>
      <Tooltip.Trigger>
        <Button size="sm">Trigger</Button>
      </Tooltip.Trigger>
      <Tooltip.Content
        title="Title"
        subTitle="Subtitle"
        side="${direction}"
        align="${align}"
        ${showIcon ? "icon={Info}" : ""}
        ${actionSlot}
      />
    </Tooltip>
  `,
  imports: [
    'import { Tooltip, Button } from "borrom-ds-test"',
    'import { Info } from "lucide-react"',
  ],
  id: "tooltip",
  metadata: {
    nestable: true,
    props: {
      hasTemporaryIconMapping: showIcon,
      hasTemporaryActionSlotMapping: showButtonsGroup,
      direction,
      align,
    },
  },
};
