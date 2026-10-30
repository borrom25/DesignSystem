// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=8456-863
// source=src/components/Player/Player.tsx
// component=Player
const figma = require("figma");
const instance = figma.selectedInstance;
const media = instance.getEnum("State", { Desktop: "desktop", Mobile: "mobile" });
const controls = instance.getBoolean("Main Controls");
// Temporary mapping: provide the real video src in the application.
// Runtime owns responsive layout and control visibility after mouse activity.
export default {
  example: figma.tsx`<Player src="/example.mp4" title="Видео" />`,
  imports: ['import { Player } from "borrom-ds-test"'],
  id: "player",
  metadata: { nestable: true, props: { media, requestedControls: controls } },
};
