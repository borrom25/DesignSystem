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
  "Filled-Hover": "filledHover",
  Disable: "disable",
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
const isFilled = state === "filled" || state === "filledHover";

// Temporary mapping: Figma keeps stateful visuals. Runtime API needs a real
// File value to render preview mode.
const filledProp = isFilled
  ? figma.tsx`defaultValue={new File([Uint8Array.from(atob("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+a5MsAAAAASUVORK5CYII="), (c) => c.charCodeAt(0))], "example.png", { type: "image/png" })}`
  : "";

export default {
  example: figma.tsx`
    <InputImg
      size="${size}"
      textUpload="Загрузить"
      ${isError ? "error" : ""}
      ${state === "disable" ? "disabled" : ""}
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
