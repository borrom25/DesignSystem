// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=400-9376
// source=src/components/Popover/Popover.tsx
// component=Popover
const figma = require("figma");
const instance = figma.selectedInstance;

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const slotContent = instance.getSlot("<slotContent>");

const paddingClass =
  size === "md" ? "p-4" : size === "sm" ? "p-3" : "p-2";

export default {
  example: figma.tsx`
    <Popover>
      <Popover.Trigger>
        <button type="button">Open popover</button>
      </Popover.Trigger>
      <Popover.Content matchTriggerWidth={false}>
        <Popover.Surface>
          <div className="${paddingClass}">${slotContent}</div>
        </Popover.Surface>
      </Popover.Content>
    </Popover>
  `,
  imports: ['import { Popover } from "borrom-ds-test"'],
  id: "popover",
  metadata: {
    nestable: true,
    props: {
      hasSlotContent: true,
      hasTemporarySizeMapping: true,
      mobileUsesModal: true,
    },
  },
};
