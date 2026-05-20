import type { ChangeEventHandler } from "react";
import type { InputProps } from "@/components/Input";

export interface InputPhoneProps extends Omit<
  InputProps,
  "prefix" | "type" | "inputMode" | "value" | "defaultValue"
> {
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputMode?: InputProps["inputMode"];
  showFlagIsland?: boolean;
}
