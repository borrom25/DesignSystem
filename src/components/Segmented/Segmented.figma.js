// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1777-27
// source=src/components/Segmented/Segmented.tsx
// component=Segmented
const figma = require("figma");
const instance = figma.selectedInstance;

const showLabel = instance.getBoolean("Label");
const label = instance.getString("textLabel");

const borderRadius = instance.getEnum("borderRadius", {
  Sm: "sm",
  Lg: "lg",
});

const direction = instance.getEnum("Direction", {
  "↕": "vertical",
  "↔": "horizontal",
});

const position = direction;
const shape = borderRadius === "lg" ? "round" : "default";

// Temporary mapping: Figma stores segment texts inside nested Tab instances,
// but Segmented expects a runtime options array.
const options = figma.tsx`[
  { label: "Tab 1", value: "tab-1" },
  { label: "Tab 2", value: "tab-2" },
  { label: "Tab 3", value: "tab-3" },
]`;

export default {
  example: figma.tsx`
    <Segmented
      options={${options}}
      defaultValue="tab-1"
      position="${position}"
      shape="${shape}"
      aria-label="${showLabel ? label : "Segmented"}"
    />
  `,
  imports: ['import { Segmented } from "borrom-ds-test"'],
  id: "segmented",
  metadata: {
    nestable: true,
    props: {
      hasDetachedLabel: showLabel,
      hasTemporaryOptionsMapping: true,
    },
  },
};
