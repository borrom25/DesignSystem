// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=8531-770
// source=src/components/Block/Block.tsx
// component=Block
const figma = require("figma");
const instance = figma.selectedInstance;
const size = instance.getEnum("Size", { Xs: "xs", Sm: "sm", Md: "md" });
const variant = instance.getEnum("Type", { Basic: "basic", Secondary: "secondary" });
const content = instance.getSlot("<slotBody>") || figma.tsx`<div>Содержимое блока</div>`;
export default {
  example: figma.tsx`<Block size="${size}" variant="${variant}">${content}</Block>`,
  imports: ['import { Block } from "borrom-ds-test"'],
  id: "block",
  metadata: { nestable: true },
};
