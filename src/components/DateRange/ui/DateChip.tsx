import { cn } from "@/utils";
import type { ReactNode } from "react";

export interface DateChipProps {
  children: ReactNode;
  className: string;
  isFilled: boolean;
  isError: boolean;
  disabled: boolean;
  filledClassName: string;
  placeholderClassName: string;
  errorHoverClassName: string;
}

export function DateChip({
  children,
  className,
  isFilled,
  isError,
  disabled,
  filledClassName,
  placeholderClassName,
  errorHoverClassName,
}: DateChipProps) {
  return (
    <span
      className={cn(
        className,
        isFilled ? filledClassName : placeholderClassName,
        !disabled && isError && errorHoverClassName,
        "flex-1 justify-center"
      )}
    >
      {children}
    </span>
  );
}
