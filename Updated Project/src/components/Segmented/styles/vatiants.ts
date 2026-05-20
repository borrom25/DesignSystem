import { SegmentedPositions, SegmentedShapeVariants } from "../Segmented.types";

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
