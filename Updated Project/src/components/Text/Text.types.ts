import type { ReactNode, ElementType, HTMLAttributes } from "react";
import type { Color, Size } from "@/types";

export type TextWeight = "regular" | "medium" | "semibold";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  size?: Size;
  weight?: TextWeight;
  color?: Color;
  as?: ElementType;
  className?: string;
}
