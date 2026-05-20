import type { InputNumberProps } from "./InputNumber.types";

export type InputNumberCompactProps = Omit<
  InputNumberProps,
  "size" | "label" | "required" | "hint" | "hintError"
>;
