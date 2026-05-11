import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { PopoverProps } from "./Popover.types";
import { PopoverTrigger, PopoverContent, PopoverScrollArea } from "./ui";
import { PopoverContext } from "./Popover.context";
import { useState } from "react";

function PopoverRoot({ open = false, onOpenChange, children }: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isOpen = open || internalOpen;
  const setIsOpen = onOpenChange || setInternalOpen;

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
