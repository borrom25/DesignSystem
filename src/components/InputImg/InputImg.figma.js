// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=762-481
// source=src/components/InputImg/InputImg.tsx
// component=InputImg
const figma = require("figma");
const instance = figma.selectedInstance;

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const state = instance.getEnum("State", {
  Default: "default",
  Filled: "filled",
  Hover: "hover",
  loading: "loading",
  Error: "error",
});

const overlay = instance.getEnum("Overlay", {
  Default: "default",
  Hover: "hover",
});

const errorVariant = instance.getEnum("Error", {
  Off: "off",
  On: "on",
});

const isError = state === "error" || errorVariant === "on";
const isLoading = state === "loading";
const isFilled = state === "filled";

// Temporary mapping: Figma keeps stateful visuals. Runtime API needs a real
// File value to render preview mode.
const filledProp = isFilled
  ? figma.tsx`defaultValue={new File(["demo"], "name.file", { type: "image/jpeg" })}`
  : "";

export default {
  example: figma.tsx`
    <InputImg
      size="${size}"
      textUpload="Загрузить"
      ${isError ? "error" : ""}
      ${isLoading ? 'loading progress={1} textLoading="Загрузка"' : ""}
      ${filledProp}
    />
  `,
  imports: ['import { InputImg } from "borrom-ds-test"'],
  id: "inputimg",
  metadata: {
    nestable: true,
    props: {
      hasRuntimeHoverState: state === "hover",
      hasRuntimeOverlayHover: overlay === "hover",
      hasTemporaryFilledMapping: isFilled,
    },
  },
};
