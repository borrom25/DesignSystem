// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1216-1433
// source=src/components/Alert/Alert.tsx
// component=Alert
const figma = require("figma");
const instance = figma.selectedInstance;

const title = instance.getString("Title");
const subtitle = instance.getBoolean("Subtitle");
const subtitleText = instance.getString("textSubtitle");

const result = instance.getEnum("Result", {
  Positive: "positive",
  Danger: "danger",
  Info: "info",
  Worning: "warning",
});

const variantType = instance.getEnum("Type", {
  Alert: "alert",
  Tost: "tost",
});

// Temporary mapping: runtime Alert has no explicit variant prop for Figma Type.
const isAlertType = variantType === "alert";
const description = subtitle ? subtitleText : "";

// Temporary mapping: nested Figma Button instances are represented
// by a stable demo actions slot in generated code.
const actions = isAlertType
  ? figma.tsx`
      actions={
        <>
          <Button size="sm" color="info">Button</Button>
          <Button size="sm" color="positive">Button</Button>
        </>
      }
    `
  : "";

export default {
  example: figma.tsx`
    <Alert
      type="${result}"
      title="${title || "Alert"}"
      ${description ? figma.tsx`description="${description}"` : ""}
      ${isAlertType ? "onClose={() => {}}" : "closable={false}"}
      ${actions}
    />
  `,
  imports: ['import { Alert, Button } from "borrom-ds-test"'],
  id: "alert",
  metadata: {
    nestable: true,
    props: {
      type: result,
      figmaVariantType: variantType,
      hasSubtitle: subtitle,
      hasTemporaryTypeMapping: true,
      hasTemporaryActionsMapping: isAlertType,
    },
  },
};
