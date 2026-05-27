import type { Size } from "@/types";
import { tagGap, tagRowHeightMap } from "../styles/sizes";

export function getTagsMaxHeight(size: Size, maxVisibleRows: number) {
  const rowHeight = tagRowHeightMap[size];
  return maxVisibleRows * rowHeight + (maxVisibleRows - 1) * tagGap;
}
