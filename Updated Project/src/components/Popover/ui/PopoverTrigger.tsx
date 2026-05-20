import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { PopoverTriggerProps } from "../Popover.types";

export function PopoverTrigger({ children, ...props }: PopoverTriggerProps) {
  return (
    <PopoverPrimitive.Trigger asChild {...props}>
      {children}
    </PopoverPrimitive.Trigger>
  );
}
