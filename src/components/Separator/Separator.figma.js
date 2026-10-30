// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=816-7172
// source=src/components/Separator/Separator.tsx
// component=Separator
const figma = require("figma");
const instance = figma.selectedInstance;
const type = instance.getEnum("Type", { Default: "default", Dash: "dash" });
// Temporary mapping: runtime Separator has no dash variant; use its default.
export default {
  example: figma.tsx`<Separator />`,
  imports: ['import { Separator } from "borrom-ds-test"'],
  id: "separator",
  metadata: { nestable: true, props: { requestedType: type } },
};
