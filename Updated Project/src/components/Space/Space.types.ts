import { Size } from "@/types";
import { ReactNode } from "react";

export type SpaceJustify =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

export type SpaceAlign = "start" | "end" | "center" | "stretch" | "baseline";
export type SpaceDirection = "row" | "col" | "row-reverse" | "col-reverse";
export type SpaceFlexWrap = "nowrap" | "wrap" | "wrap-reverse";

export interface SpaceProps {
  children?: ReactNode;
  className?: string;
  gapSize?: Size;
  paddingSize?: Size;
  customGap?: string;
  customPadding?: string;
  justify?: SpaceJustify;
  align?: SpaceAlign;
  direction?: SpaceDirection;
  flexWrap?: SpaceFlexWrap;
  fullWidth?: boolean;
  fullHeight?: boolean;
  flex1?: boolean;
}
