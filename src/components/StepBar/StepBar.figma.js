// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1066-5093
// source=src/components/StepBar/StepBar.tsx
// component=StepBar
const figma = require("figma");
const instance = figma.selectedInstance;

const media = instance.getEnum("Media", {
  Desktop: "desktop",
  Mobile: "mobile",
});

const result = instance.getEnum("Result", {
  Default: "default",
  Positive: "positive",
});

const hasNameStep = instance.getBoolean("nameStep1");
const isPositive = result === "positive";
const isMobile = media === "mobile";

const className = isMobile ? "w-[512px] max-w-full" : "w-[1000px] max-w-full";

// Temporary mapping: Figma boolean nameStep1 hides visual step labels in one
// variant, but runtime StepBar requires a non-empty items array.
const fallbackLabel = hasNameStep ? "{nameStep}" : "Шаг";

const defaultItemsCode = figma.tsx`[
  { id: "step-1", label: "${fallbackLabel} 1" },
  { id: "step-2", label: "${fallbackLabel} 2" },
  { id: "step-3", label: "${fallbackLabel} 3" },
  { id: "step-4", label: "${fallbackLabel} 4" },
]`;

const positiveItemsCode = figma.tsx`[
  { id: "step-1", label: "${fallbackLabel} 1", type: "successful", rightIcon: Check },
  { id: "step-2", label: "${fallbackLabel} 2", type: "successful", rightIcon: Check },
  { id: "step-3", label: "${fallbackLabel} 3", type: "successful", rightIcon: Check },
  { id: "step-4", label: "${fallbackLabel} 4", type: "successful", rightIcon: Check },
]`;

const itemsCode = isPositive ? positiveItemsCode : defaultItemsCode;
const activeStep = isPositive ? "step-4" : "step-1";

const successButtonProps = isPositive
  ? figma.tsx`
      onClickSuccessButton={() => {}}
      successButtonText="Готово"
    `
  : "";

export default {
  example: figma.tsx`
    <StepBar
      className="${className}"
      items={${itemsCode}}
      active="${activeStep}"
      onChangeStep={() => {}}
      ${successButtonProps}
    />
  `,
  imports: [
    'import { StepBar } from "borrom-ds-test"',
    'import { Check } from "lucide-react"',
  ],
  id: "stepbar",
  metadata: {
    nestable: true,
    props: {
      media,
      result,
      hasTemporaryMediaMapping: true,
      hasTemporaryNameStepMapping: true,
    },
  },
};
