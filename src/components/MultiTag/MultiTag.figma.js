// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4680-4452
// source=src/components/MultiTag/MultiTag.tsx
// component=MultiTag
const figma = require("figma");
const instance = figma.selectedInstance;

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Selected: "selected",
  "Adding tag": "addingTag",
  "Filled in": "filled",
  "Filled in Hover": "filledHover",
});

const errorState = instance.getEnum("Error", {
  Off: "off",
  On: "on",
});

const disableState = instance.getEnum("Disable", {
  Off: "off",
  On: "on",
});

const filledState = instance.getEnum("Filled", {
  Off: "off",
  On: "on",
});

const showHint = instance.getBoolean("Hint");
const showLabel = instance.getBoolean("Label");
const showPlaceholder = instance.getBoolean("Placeholder");
const required = instance.getBoolean("requiredMark");

const textHint = instance.getString("textHint");
const textError = instance.getString("textError");
const textLabel = instance.getString("textLabel");
const textPlaceholder = instance.getString("textPlaceholder");

const isError = errorState === "on";
const disabled = disableState === "on";
const hasValue = filledState === "on" || state === "filled" || state === "filledHover";
const clearable = state === "filledHover";

const options = figma.tsx`[
  { value: "selected", label: "Tag 1" },
  { value: "option-2", label: "Tag 2" },
  { value: "option-3", label: "Tag 3" },
]`;

const selectedValues = figma.tsx`["selected", "option-2"]`;

const labelProp = showLabel ? figma.tsx`label="${textLabel}"` : "";
const hintProp = showHint && !isError ? figma.tsx`hint="${textHint}"` : "";
const hintErrorProp = showHint && isError ? figma.tsx`hintError="${textError}"` : "";
const placeholderProp = showPlaceholder
  ? figma.tsx`placeholder="${textPlaceholder}"`
  : figma.tsx`placeholder="Выберите..."`;

export default {
  example: figma.tsx`
    <MultiTag
      options={${options}}
      size="${size}"
      ${placeholderProp}
      ${labelProp}
      ${required ? "required" : ""}
      ${disabled ? "disabled" : ""}
      ${isError ? "error" : ""}
      ${hasValue ? figma.tsx`defaultValue={${selectedValues}}` : ""}
      ${clearable ? "clearable" : ""}
      ${hintProp}
      ${hintErrorProp}
    />
  `,
  imports: ['import { MultiTag } from "borrom-ds-test"'],
  id: "multi-tag",
  metadata: {
    nestable: true,
    props: {
      isMultipleTag: true,
      hasRuntimeHoverState: state === "hover" || state === "filledHover",
      hasTemporaryValueMapping: true,
      hasUnmappedInteractionState: state === "selected" || state === "addingTag",
    },
  },
};
