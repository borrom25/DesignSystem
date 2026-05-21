// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4436-8329
// source=src/components/Card/Card.tsx
// component=Card
const figma = require("figma");
const instance = figma.selectedInstance;

const cardType = instance.getEnum("Type", {
  Basic: "basic",
  Secondary: "secondary",
});

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const slotBody = instance.getSlot("<slotBody>");
const secondaryClassName = cardType === "secondary" ? "bg-generic-medium" : "";
const bodyContent = slotBody || figma.tsx`<div>Content</div>`;

// Temporary mapping:
// Figma exposes Type=Secondary, but the runtime Card API only has size and
// standard div attributes. Use className for the secondary background until a
// dedicated public variant prop exists.
export default {
  example: figma.tsx`
    <Card
      size="${size}"
      ${secondaryClassName ? figma.tsx`className="${secondaryClassName}"` : ""}
    >
      ${bodyContent}
    </Card>
  `,
  imports: ['import { Card } from "borrom-ds-test"'],
  id: "card",
  metadata: {
    nestable: true,
    props: {
      type: cardType,
      size,
      figmaNodeId: "4436:8329",
      slotBodyMappedToChildren: true,
      secondaryMappedViaClassName: cardType === "secondary",
    },
  },
};
