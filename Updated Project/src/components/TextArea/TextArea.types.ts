import type { TextareaHTMLAttributes } from "react";
import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field";

export interface TextAreaOwnProps extends BaseFieldProps {
  size?: Size;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  onClear?: () => void;
  resizeMode?: "vertical" | "both";
  clearable?: boolean;
}

export interface TextAreaProps
  extends
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    TextAreaOwnProps {}
