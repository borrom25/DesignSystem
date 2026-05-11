import type { AccordionPosition } from "../Accordion.types";

export const positionClasses: Record<AccordionPosition, string> = {
  start: "pb-[12px]",
  mid: "py-[12px]",
  end: "pt-[12px]",
} as const;
