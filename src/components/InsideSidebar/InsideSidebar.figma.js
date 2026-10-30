// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=1021-18098
// source=src/components/InsideSidebar/InsideSidebar.tsx
// component=InsideSidebar
const figma = require("figma");
const instance = figma.selectedInstance;
const media = instance.getEnum("Media", { Desktop: "desktop", Mobile: "mobile" });
const showHeading = instance.getBoolean("headSideMenu");
const showHeadSlot = instance.getBoolean("slotHead");
const showBottomActions = instance.getBoolean("bottomSlotAction");
const body = instance.getSlot("Body");
const head = instance.getSlot("<slotHead>");
const action = instance.getSlot("<headSlotAction>");
const bottomAction = instance.getSlot("<slotAction>");
// Temporary mapping: the heading is nested Figma text, not a root TEXT property.
// ScreenProvider selects desktop/mobile presentation; Media is not a runtime prop.
const title = instance.findText("Title sideMenu")?.textContent || "Разделы";
export default {
  example: figma.tsx`<InsideSidebar
    ${showHeading ? figma.tsx`title="${title}"` : ""}
    ${showHeadSlot && head ? figma.tsx`headSlot={${head}}` : ""}
    ${showHeading && action ? figma.tsx`actionSlot={${action}}` : ""}
    ${body ? figma.tsx`slotContent={${body}}` : ""}
    ${showBottomActions && bottomAction ? figma.tsx`bottomSlotAction={${bottomAction}}` : ""}
  />`,
  imports: ['import { InsideSidebar } from "borrom-ds-test"'],
  id: "inside-sidebar",
  metadata: { nestable: true, props: { requestedMedia: media } },
};
