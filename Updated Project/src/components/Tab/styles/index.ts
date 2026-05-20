export { baseClasses } from "./base";
export { sizeClasses, gapClasses, iconSizeMap } from "./sizes";
export { getVariantClasses } from "./variants";

import {
  baseClasses,
  contentClasses,
  scalingClasses,
  selectedClasses,
} from "./base";
import { sizeClasses, gapClasses, iconSizeMap } from "./sizes";
import { getVariantClasses } from "./variants";

export const tabStyles = {
  base: baseClasses,
  content: contentClasses,
  size: sizeClasses,
  gap: gapClasses,
  iconSizeMap: iconSizeMap,
  getVariant: getVariantClasses,
  selected: selectedClasses,
  scaling: scalingClasses,
} as const;
