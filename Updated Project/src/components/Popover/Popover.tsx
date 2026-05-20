import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { PopoverProps } from "./Popover.types";
import { PopoverTrigger, PopoverContent, PopoverScrollArea } from "./ui";
import { PopoverContext } from "./Popover.context";
import { useCallback, useState } from "react";

function PopoverRoot({ open, onOpenChange, children }: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const setIsOpen = useCallback(
    (next: boolean) => {
      onOpenChange?.(next);
      if (!isControlled) setInternalOpen(next);
    },
    [isControlled, onOpenChange]
  );

  return (
    <PopoverContext.Provider value={{ isOpen, setIsOpen }}>
      <PopoverPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        {children}
      </PopoverPrimitive.Root>
    </PopoverContext.Provider>
  );
}

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  ScrollArea: PopoverScrollArea,
});
