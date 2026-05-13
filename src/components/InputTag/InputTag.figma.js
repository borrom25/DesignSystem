// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4560-2817
// source=src/components/InputTag/InputTag.tsx
// component=InputTag
const figma = require("figma");
const instance = figma.selectedInstance;

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Selected: "selected",
  "Adding tag": "addingTag",
  "Input text": "inputText",
  "Filled in": "filledIn",
  "Filled in Hover": "filledInHover",
});

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const error = instance.getEnum("Error", {
  Off: false,
  On: true,
});

const disable = instance.getEnum("Disable", {
  Off: false,
  On: true,
});

const filled = instance.getEnum("Filled", {
  Off: false,
  On: true,
});

const showHint = instance.getBoolean("Hint");
const showLabel = instance.getBoolean("Label");
const requiredMark = instance.getBoolean("requiredMark");
const showPlaceholder = instance.getBoolean("Placeholder");

const textHint = instance.getString("textHint");
const textError = instance.getString("textError");
const textLabel = instance.getString("textLabel");
const textPlaceholder = instance.getString("textPlaceholder");

const isFocused = state === "selected";
const hasTags =
  filled || state === "filledIn" || state === "filledInHover";

const tagsSnippet = hasTags
  ? figma.tsx`value={["Tag 1", "Tag 2"]}`
  : "";

// Temporary mapping: InputTag has no dedicated error prop or hintError prop.
// For Error=On we map textError to the regular hint prop.
const hintText = error ? textError : textHint;

export default {
  example: figma.tsx`
    <InputTag
      size="${size}"
      ${disable ? "disabled" : ""}
      ${isFocused ? "autoFocus" : ""}
      ${showLabel ? figma.tsx`label="${textLabel}"` : ""}
      ${requiredMark ? "required" : ""}
      ${showHint ? figma.tsx`hint="${hintText}"` : ""}
      ${showPlaceholder ? figma.tsx`placeholder="${textPlaceholder}"` : ""}
      ${tagsSnippet}
    />
  `,
  imports: ['import { InputTag } from "borrom-ds-test"'],
  id: "input-tag",
  metadata: {
    nestable: true,
    props: {
      hasTags,
      hasErrorMappingThroughHint: error,
      hasUnsupportedTypingState:
        state === "inputText" || state === "addingTag",
    },
  },
};
