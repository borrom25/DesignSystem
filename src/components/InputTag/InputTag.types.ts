import type { InputHTMLAttributes } from "react";
import type { Size } from "@/types";

export type InputTagChangeHandler = (tags: string[]) => void;

export interface InputTagFieldProps {
  label?: string;
  required?: boolean;
  hint?: string;
}

export interface InputTagOwnProps extends InputTagFieldProps {
  size?: Size;
  disabled?: boolean;
  value?: string[];
  defaultValue?: string[];
  onChange?: InputTagChangeHandler;
  onCreateTag?: (rawValue: string) => string | null;
  onClear?: () => void;
  className?: string;
  inputClassName?: string;
}

export interface InputTagProps
  extends
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "value" | "defaultValue" | "onChange"
    >,
    InputTagOwnProps {}

export interface InputTagVisualState {
  disabled: boolean;
}

export interface UseInputTagClassNamesProps extends InputTagVisualState {
  size: Size;
}

export interface UseInputTagValueProps {
  value?: string[];
  defaultValue?: string[];
  onChange?: InputTagChangeHandler;
  onCreateTag?: (rawValue: string) => string | null;
  onClear?: () => void;
  disabled: boolean;
}
