import type { InputHTMLAttributes } from "react";
import type { Size } from "@/types";

export const PinInputType = {
  Default: "default",
  Masked: "masked",
} as const;

export type PinInputType = (typeof PinInputType)[keyof typeof PinInputType];

export interface PinInputVisualState {
  disabled: boolean;
  isError: boolean;
  isFocused: boolean;
}

export interface PinInputOwnProps {
  size?: Size;
  type?: PinInputType;
  error?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  autoFocus?: boolean;
  className?: string;
}

export interface PinInputProps
  extends
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "value" | "onChange" | "type"
    >,
    PinInputOwnProps {}
