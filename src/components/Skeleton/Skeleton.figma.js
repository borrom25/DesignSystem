// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=10527-8723
// source=src/components/Skeleton/Skeleton.tsx
// component=Skeleton
const figma = require("figma");
const instance = figma.selectedInstance;
instance.getEnum("Property 1", { Default: "default" });
// Temporary mapping: the sole Figma variant is a loading placeholder.
// Width, height and radius are application layout choices, not Figma properties.
export default {
  example: figma.tsx`<Skeleton loading />`,
  imports: ['import { Skeleton } from "borrom-ds-test"'],
  id: "skeleton",
  metadata: { nestable: true },
};
