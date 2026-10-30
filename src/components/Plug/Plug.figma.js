// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=2059-7073
// source=src/components/Plug/Plug.tsx
// component=Plug
const figma = require("figma");
const instance = figma.selectedInstance;
const result = instance.getEnum("Result", { Pictures: "pictures", Positive: "positive", Warning: "warning", Danger: "danger", Info: "info" });
const media = instance.getEnum("Media", { Desktop: "desktop", Mobile: "mobile" });
const showPictures = instance.getBoolean("Pictures");
const showIndicator = instance.getBoolean("Indicator");
const showActions = instance.getBoolean("slotAction");
const pictureSlot = instance.getSlot("<slotIMG>");
const actionSlot = instance.getSlot("<slotAction>");
const title = instance.findText("Title", { traverseInstances: true })?.textContent || "";
const subtitle = instance.findText("Subtitle", { traverseInstances: true })?.textContent || "";
const indicator = instance.findLayers(n => n.type === "INSTANCE" && n.name.startsWith("pictures /"))[0];
const indicatorCode = indicator && indicator.type === "INSTANCE" ? indicator.executeTemplate().example : undefined;
const image = result === "pictures" ? (showPictures ? pictureSlot : undefined) : (showIndicator ? indicatorCode : undefined);
// Temporary mapping: Media is responsive layout, not a Plug prop.
// Result selects Figma image content; Plug accepts that content through imageItem.
export default {
  example: figma.tsx`<Plug title="${title}" subtitle="${subtitle}" ${image ? figma.tsx`imageItem={${image}}` : ""} ${showActions && actionSlot ? figma.tsx`actionSlot={${actionSlot}}` : ""} />`,
  imports: ['import { Plug } from "borrom-ds-test"'],
  id: "plug",
  metadata: { nestable: true, props: { requestedMedia: media } },
};
