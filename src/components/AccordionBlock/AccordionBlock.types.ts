import type { ReactNode } from "react";
import type { Size } from "@/types";
import type { AccordionTextProps } from "../Accordion";
import type { BlockVariantType } from "../Block";
import type { ProgressBarLabelPosition } from "../ProgressBar";

export type AccordionBlockLabelPosition = ProgressBarLabelPosition;

export interface AccordionBlockProps {
  title: ReactNode;
  children?: ReactNode;
  description?: ReactNode;
  progress?: number;
  labelPosition?: AccordionBlockLabelPosition;
  className?: string;
  headSlot?: ReactNode;
  titleProps?: AccordionTextProps;
  subtitleProps?: AccordionTextProps;
  variant?: BlockVariantType;
  disabled?: boolean;
  defaultOpen?: boolean;
  size?: Size;
}
