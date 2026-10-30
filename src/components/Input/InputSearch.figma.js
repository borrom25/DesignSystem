// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=18-2407
// source=src/components/SearchAutocomplete/SearchAutocomplete.tsx
// component=SearchAutocomplete
const figma = require("figma");
const instance = figma.selectedInstance;

// Temporary mapping: Figma Counter/Size have no SearchAutocomplete props.
const showCounter = instance.getBoolean("Counter");
const counterText = instance.getString("textCounter");
void showCounter;
void counterText;

const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Selected: "selected",
  Filled: "filled",
  Disable: "disable",
});

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const disabled = state === "disable";
const isFilled = state === "filled";
const isFocused = state === "selected";

export default {
  example: figma.tsx`
    <SearchAutocomplete
      placeholder="Search"
      ${isFilled ? 'defaultValue="Search query"' : ""}
      ${isFocused ? "autoFocus" : ""}
      ${disabled ? "disabled" : ""}
    />
  `,
  imports: [
    'import { SearchAutocomplete } from "borrom-ds-test"',
  ],
  id: "input-search-autocomplete",
  metadata: {
    nestable: true,
    props: {
      size,
      mapsToInput: false,
      hasRuntimeHoverState: state === "hover",
      hasTemporarySizeMapping: true,
      hasAutocompleteBehavior: true,
    },
  },
};
