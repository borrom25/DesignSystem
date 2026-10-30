// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=5477-3926
// source=src/components/Text/Text.tsx
// component=Text
const figma = require("figma");
const instance = figma.selectedInstance;
const variant = instance.getEnum("Size", { H1: "h1", H2: "h2", H3: "h3", H4: "h4" });
const align = instance.getEnum("Direction", { Centre: "center", Left: "start" });
const title = instance.getString("тextTitle");
const subtitle = instance.getString("тextSubtitle 1");
const subtitle2 = instance.getString("textSubtitle 2");
const showSubtitle = instance.getBoolean("Subtitle 1");
const showSubtitle2 = instance.getBoolean("Subtitle 2");
const showCaption = instance.getBoolean("Caption");
const showLabel = instance.getBoolean("slotLabel");
const caption = instance.getSlot("<slotCaption>");
const label = instance.getSlot("<slotLabel>");
// Temporary mapping: Figma Text is a composed text block; use multiple Texts.
export default {
  example: figma.tsx`<div>
    <Text variant="${variant}" align="${align}">${title}</Text>
    ${showSubtitle ? figma.tsx`<Text variant="b2" align="${align}">${subtitle}</Text>` : ""}
    ${showSubtitle2 ? figma.tsx`<Text variant="b3" align="${align}">${subtitle2}</Text>` : ""}
    ${showCaption && caption ? caption : ""}
    ${showLabel && label ? label : ""}
  </div>`,
  imports: ['import { Text } from "borrom-ds-test"'],
  id: "text",
  metadata: { nestable: true },
};
