import type { ReactNode } from "react";
import { cn } from "@/utils";

export interface InputAdornmentProps {
  children: ReactNode;
  disabled?: boolean;
  containerClassName: string;
  containerDisabledClassName?: string;
}

export function InputAdornment({
  children,
  disabled = false,
  containerClassName,
  containerDisabledClassName,
}: InputAdornmentProps) {
  return (
    <div
      className={cn(containerClassName, disabled && containerDisabledClassName)}
    >
      {children}
    </div>
  );
}
