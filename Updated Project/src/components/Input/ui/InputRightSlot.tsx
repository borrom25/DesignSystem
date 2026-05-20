import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils";
import { inputStyles } from "../styles";

export interface InputRightSlotProps {
  iconRight?: LucideIcon;
  iconSize: number;
  adornmentClassName: string;
}

export function InputRightSlot({
  iconRight: IconRight,
  iconSize,
  adornmentClassName,
}: InputRightSlotProps) {
  if (!IconRight) return null;

  return (
    <span className={cn(inputStyles.rightSlot)} aria-hidden="true">
      <IconRight
        size={iconSize}
        className={adornmentClassName}
        aria-hidden="true"
      />
    </span>
  );
}
