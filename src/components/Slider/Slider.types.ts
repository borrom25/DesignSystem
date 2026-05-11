import type { HTMLAttributes } from "react";

export interface SliderProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  showValuePopover?: boolean;
  alwaysShowPopover?: boolean;
  disabled?: boolean;
  "aria-label"?: string;
}
