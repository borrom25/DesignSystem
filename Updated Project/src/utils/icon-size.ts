import type { Size } from "@/types";

export const getIconSize = (
  size: Size,
  iconSizeMap: Record<Size, number>
): number => iconSizeMap[size];
