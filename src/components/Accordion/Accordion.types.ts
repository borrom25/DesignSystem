import { LucideIcon } from "lucide-react";
import { ReactElement, ReactNode } from "react";

export type AccordionPosition = "start" | "mid" | "end";

export interface AccordionProps {
  title: string;
  children: ReactNode;
  className?: string;
  subtitle?: ReactNode;
  headSlot?: ReactElement;
  iconLeft?: LucideIcon;
  position?: AccordionPosition;
  disabled?: boolean;
}
