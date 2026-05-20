import type { ChangeEventHandler } from "react";
import type { InputProps } from "@/components/Input";

export interface SearchAutocompleteProps extends Omit<
  InputProps,
  | "size"
  | "type"
  | "label"
  | "required"
  | "hint"
  | "hintError"
  | "iconLeft"
  | "iconRight"
  | "prefix"
  | "suffix"
  | "count"
  | "maxCount"
  | "onChange"
> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onValueChange?: (value: string) => void;
}
