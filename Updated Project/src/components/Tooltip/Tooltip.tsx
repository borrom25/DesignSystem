import * as TooltipPrimitive from "@radix-ui/react-popover";
import type { TooltipProps } from "./Tooltip.types";
import { TooltipTrigger, TooltipContent, TooltipSurface } from "./ui";

function TooltipRoot({
  open,
  defaultOpen,
  onOpenChange,
  children,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root
      modal={false}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      {children}
    </TooltipPrimitive.Root>
  );
}

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Surface: TooltipSurface,
});
