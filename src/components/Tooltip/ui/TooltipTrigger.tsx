import * as TooltipPrimitive from "@radix-ui/react-popover";
import type { TooltipTriggerProps } from "../Tooltip.types.ts";

export function TooltipTrigger({ children, ...props }: TooltipTriggerProps) {
  return (
    <TooltipPrimitive.Trigger asChild {...props}>
      {children}
    </TooltipPrimitive.Trigger>
  );
}
