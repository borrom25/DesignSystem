import type { ReactNode, ElementType, HTMLAttributes } from "react";
import type {
  TextAlign,
  TextColor,
  TextDecoration,
  TextOverflow,
  TextShade,
  TextVariant,
  TextWeight,
} from "./constants";

export type {
  TextAlign,
  TextColor,
  TextDecoration,
  TextOverflow,
  TextShade,
  TextVariant,
  TextWeight,
} from "./constants";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
  shade?: TextShade;
  align?: TextAlign;
  overflow?: TextOverflow;
  decoration?: TextDecoration;
}
