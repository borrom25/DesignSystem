import type { InputHTMLAttributes, ReactNode, Ref } from "react";
import type { LucideIcon } from "lucide-react";
import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field";

export const InputVariant = {
  Default: "default",
  Clear: "clear",
} as const;

export type InputVariant = (typeof InputVariant)[keyof typeof InputVariant];

export interface InputVisualState {
  disabled: boolean;
  isError: boolean;
}

export interface InputAdornmentClassNameParams extends InputVisualState {
  baseClasses: string;
  disabledClasses: string;
}

export interface InputWrapperClassNameParams extends InputVisualState {
  baseClasses: string;
  sizeClasses: string;
  clearSizeClasses: string;
  stateClasses: string;
  disabledClasses: string;
  errorClasses: string;
  clearStateClasses: string;
  clearDisabledClasses: string;
  clearErrorClasses: string;
  isClear: boolean;
}

export interface InputOwnProps extends BaseFieldProps {
  size?: Size;
  variant?: InputVariant;
  error?: boolean;
  disabled?: boolean;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  prefix?: ReactNode;
  suffix?: ReactNode;
  count?: number;
  maxCount?: number;
  className?: string;
  inputClassName?: string;
  clearable?: boolean;
  onClear?: () => void;
  ref?: Ref<HTMLInputElement>;
}

export interface InputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">,
    InputOwnProps {}
