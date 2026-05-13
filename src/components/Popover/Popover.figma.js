// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=400-9377
// source=src/components/Popover/Popover.tsx
// component=Popover
const figma = require("figma");
const instance = figma.selectedInstance;

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const slotContent = instance.getPropertyValue("<slotContent>");
void slotContent;

const paddingClass =
  size === "md" ? "p-4" : size === "sm" ? "p-3" : "p-2";

export default {
  example: figma.tsx`
    <Popover>
      <Popover.Trigger>
        <button type="button">Open popover</button>
      </Popover.Trigger>
      <Popover.Content matchTriggerWidth={false}>
        <PopoverSurface>
          <div className="${paddingClass}">Popover content</div>
        </PopoverSurface>
      </Popover.Content>
    </Popover>
  `,
  imports: ['import { Popover, PopoverSurface } from "borrom-ds-test"'],
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
