import type { InputHTMLAttributes, Ref } from "react";
import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field";

export type InputNumberChangeHandler = (value: number | undefined) => void;

export interface InputNumberVisualState {
  disabled: boolean;
  isError: boolean;
}

export interface InputNumberOwnProps extends BaseFieldProps {
  size?: Size;
  error?: boolean;
  disabled?: boolean;
  value?: number;
  onChange?: InputNumberChangeHandler;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  inputClassName?: string;
  clearable?: boolean;
}

export interface InputNumberProps
  extends
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "value" | "onChange" | "min" | "max" | "step"
    >,
    InputNumberOwnProps {
  onClear?: () => void;
  ref?: Ref<HTMLInputElement>;
}

export interface InputNumberFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  wrapperClassName: string;
  adornmentClassName: string;
  isError?: boolean;
  inputClassName?: string;
  onIncrement: () => void;
  onDecrement: () => void;
  clearable?: boolean;
  hasValue?: boolean;
  size: Size;
  onClear?: () => void;
  setInputRef: (node: HTMLInputElement | null) => void;
}

export interface UseInputNumberValueProps {
  value?: number;
  onChange?: InputNumberChangeHandler;
  min?: number;
  max?: number;
  step: number;
  disabled: boolean;
  onClear?: () => void;
  ref?: Ref<HTMLInputElement>;
}

export interface UseInputNumberClassNamesProps extends Pick<
  InputNumberVisualState,
  "disabled" | "isError"
> {
  size: Size;
}
