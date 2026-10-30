import type { Size } from "@/types";
import { tagGap, tagRowHeightMap } from "../styles/sizes";

export function getTagsMaxHeight(size: Size, maxVisibleRows: number) {
  const rowHeight = tagRowHeightMap[size] + 1.5;
  return maxVisibleRows * rowHeight + maxVisibleRows * tagGap;
}
