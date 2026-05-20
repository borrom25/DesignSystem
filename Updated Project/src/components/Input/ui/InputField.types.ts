import type { InputHTMLAttributes, ReactNode, Ref } from "react";
import type { LucideIcon } from "lucide-react";
import type { Size } from "@/types";

export interface InputFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix" | "suffix"
> {
  ref?: Ref<HTMLInputElement>;
  wrapperClassName: string;
  adornmentClassName: string;
  prefixSuffixClassName: string;
  iconSize: number;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  prefix?: ReactNode;
  suffix?: ReactNode;
  countDisplay?: string | null;
  clearable?: boolean;
  hasValue?: boolean;
  onClear?: () => void;
  size?: Size;
  label?: ReactNode;
  required?: boolean;
  isError?: boolean;
  inputClassName?: string;
}
