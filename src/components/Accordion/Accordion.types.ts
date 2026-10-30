import { LucideIcon } from "lucide-react";
import { ReactElement, ReactNode } from "react";
import type { TextProps } from "@/components/Text";

export type AccordionPosition = "start" | "mid" | "end";

export type AccordionChevronPosition = "left" | "right" | "none";

export type AccordionTextProps = Omit<Partial<TextProps>, "children"> & {
  hoverClassName?: string;
};

export interface AccordionProps {
  title: ReactNode | string;
  children: ReactNode;
  className?: string;
  subtitle?: ReactNode;
  titleProps?: AccordionTextProps;
  subtitleProps?: AccordionTextProps;
  headSlot?: ReactElement;
  iconLeft?: LucideIcon;
  prefix?: ReactNode;
  position?: AccordionPosition;
  chevronPosition?: AccordionChevronPosition;
  disabled?: boolean;
  defaultOpen?: boolean;
}
