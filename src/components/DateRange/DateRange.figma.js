// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4762-11608
// source=src/components/DateRange/DateRange.tsx
// component=DateRange
const figma = require("figma");
const instance = figma.selectedInstance;

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Selected: "selected",
  "Filled in": "filledIn",
  "Input text": "inputText",
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

const disabled = instance.getEnum("Disable", {
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

const textHint = instance.getString("textHint");
const textError = instance.getString("textError");

const hasValue =
  filled || state === "inputText" || state === "filledIn" || state === "filledInHover";
const hintText = error ? textError : textHint;

const defaultValueProp = hasValue
  ? figma.tsx`
      defaultValue={{
        start: new Date(2026, 3, 27),
        end: new Date(2026, 3, 27),
      }}
    `
  : "";

// Temporary mapping:
// Figma exposes "Дата начала" / "Дата конца" as fixed text layers, while
// DateRange runtime defaults are domain-specific placeholders. Pass explicit
// placeholders so generated snippets match the published Figma component.
export default {
  example: figma.tsx`
    <DateRange
      size="${size}"
      placeholderStart="Дата начала"
      placeholderEnd="Дата конца"
      ${disabled ? "disabled" : ""}
      ${error ? "error" : ""}
      ${showLabel ? 'label="Период"' : ""}
      ${requiredMark ? "required" : ""}
      ${showHint ? figma.tsx`${error ? `hintError="${hintText}"` : `hint="${hintText}"`}` : ""}
      ${defaultValueProp}
    />
  `,
  imports: ['import { DateRange } from "borrom-ds-test"'],
  id: "date-range",
  metadata: {
    nestable: true,
    props: {
      state,
      size,
      error,
      disabled,
      filled,
      hasValue,
      figmaNodeId: "4762:11608",
      selectedStateHandledByRuntimePopover: state === "selected",
      hoverStateHandledByRuntimeCss: state === "hover" || state === "filledInHover",
      placeholdersMappedExplicitly: true,
    },
  },
};
