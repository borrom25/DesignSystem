// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=10439-5012
// source=src/components/AccordionBlock/AccordionBlock.tsx
// component=AccordionBlock
const figma = require("figma");
const instance = figma.selectedInstance;
const size = instance.getEnum("Size", { Xs: "xs", Sm: "sm", Md: "md" });
const open = instance.getEnum("Open", { On: true, Off: false });
const state = instance.getEnum("State", { Default: "default", Hover: "hover", Disable: "disabled" });
const content = instance.getSlot("<slotContent>");
const head = instance.getSlot("<slotHead>");
const title = instance.findText("Title", { traverseInstances: true })?.textContent || "";
const subtitle = instance.findText("Subtitle", { traverseInstances: true })?.textContent || "";
// Temporary mapping: runtime owns chevron placement and hover behavior.
// Chevron-left, Chevron-right and iconLeft have no public presentation props.
// The icon swap cannot be passed as a nonexistent AccordionBlock icon prop.
export default {
  example: figma.tsx`<AccordionBlock title="${title}" description="${subtitle}" size="${size}" defaultOpen={${open}} ${state === "disabled" ? "disabled" : ""} ${head ? figma.tsx`headSlot={${head}}` : ""}>${content}</AccordionBlock>`,
  imports: ['import { AccordionBlock } from "borrom-ds-test"'],
  id: "accordion-block",
  metadata: { nestable: true },
};
