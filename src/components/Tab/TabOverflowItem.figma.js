// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=19494-1683
// source=src/components/Tab/Tab.tsx
// component=Tab
const figma = require("figma");
const instance = figma.selectedInstance;
const size = instance.getEnum("Size", { Xs: "xs", Sm: "sm", Md: "md" });
const state = instance.getEnum("State", { Default: "default", Hover: "hover", Selected: "selected", Disable: "disabled" });
const selected = instance.getEnum("Selected", { On: true, Off: false });
instance.getEnum("iconOnly", { Off: false });
const counter = instance.getBoolean("Counter");
const label = instance.getString("↳ textTab");
const showIcon = instance.getBoolean("Icon left");
// Temporary mapping: the overflow item uses Tab's ghost presentation.
// Counter has no numeric TEXT property; replace the sample count with app data.
// Figma's icon instance is not a LucideIcon constructor, so it is not forwarded.
export default {
  example: figma.tsx`<Tab type="ghost" size="${size}" ${selected || state === "selected" ? "selected" : ""} ${state === "disabled" ? "disabled" : ""} ${counter ? "count={1}" : ""}>${label}</Tab>`,
  imports: ['import { Tab } from "borrom-ds-test"'],
  id: "tab-overflow-item",
  metadata: { nestable: true, props: { requestedIcon: showIcon } },
};
