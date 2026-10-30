import { SegmentedPositions, SegmentedShapeVariants } from "../Segmented.types";
import { Size } from "@/types";

export const positionClasses: Record<SegmentedPositions, string> = {
  horizontal: "flex w-full flex-row",
  vertical: "flex w-full flex-col",
};

export const itemPositionClasses: Record<SegmentedPositions, string> = {
  horizontal: "flex-1 min-w-0 justify-center",
  vertical: "w-full",
};

export const shapeClasses: Record<SegmentedShapeVariants, string> = {
  default: "rounded-[10px]",
  round: "rounded-full",
};

export const sizeClasses: Record<Size, string> = {
  xs: "p-0.5",
  sm: "p-1",
  md: "p-1",
};
