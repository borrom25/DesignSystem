import type { InputHTMLAttributes, Ref } from "react";
import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field";

export interface CheckBoxProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    BaseFieldProps {
  size?: Size;
  indeterminate?: boolean;
  inputRef?: Ref<HTMLInputElement>;
  scaling?: boolean;
}

export interface CheckBoxInputProps extends CheckBoxProps {
  size: Size;
  indeterminate: boolean;
}
