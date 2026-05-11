import { ReactElement } from "react";

export type LinePositions = "vertical" | "horizontal";

export type LineTypes = "default" | "border" | "background";

export interface LineProps {
  title: string;
  src: string;
  className?: string;
  position?: LinePositions;
  subtitle?: string;
  leftSlot?: ReactElement;
  rightSlot?: ReactElement;
  labelGroup?: string[];
  disabled?: boolean;
  type?: LineTypes;
}
