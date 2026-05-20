import { Slot } from "@radix-ui/react-slot";

export function getSlotOrElement(asChild: boolean) {
  return asChild ? Slot : "button";
}
