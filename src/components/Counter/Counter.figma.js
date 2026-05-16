// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21178-1500
// source=src/components/Counter/Counter.tsx
// component=Counter
const figma = require("figma");
const instance = figma.selectedInstance;

const text = instance.getString("Text");

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const variant = instance.getEnum("Color", {
  Accent: "accent",
  Neutral: "neutral",
  White: "white",
});

const normalizedText = text.trim();
const parsedCount = Number.parseInt(normalizedText, 10);
const hasMaxCountSuffix = normalizedText.endsWith("+");
const fallbackCount = 1;
const visibleCount = Number.isNaN(parsedCount) ? fallbackCount : parsedCount;
const count = hasMaxCountSuffix ? visibleCount + 1 : visibleCount;
const maxCountProp = hasMaxCountSuffix ? `maxCount={${visibleCount}}` : "";

export default {
  example: figma.tsx`
    <Counter
      count={${count}}
      size="${size}"
      variant="${variant}"
      ${maxCountProp}
    />
  `,
  imports: ['import { Counter } from "borrom-ds-test"'],
  id: "counter",
  metadata: {
    nestable: true,
    props: {
      count,
      size,
      variant,
    },
  },
};
