export { baseClasses, badgeClasses, roundedClasses } from "./base";
export { sizeClasses, iconSizeMap } from "./sizes";
export { getVariantClasses } from "./variants";

import {
  baseClasses,
  badgeClasses,
  roundedClasses,
  scalingClasses,
} from "./base";
import { sizeClasses, iconSizeMap } from "./sizes";
import { getVariantClasses } from "./variants";

export const iconButtonStyles = {
  base: baseClasses,
  badge: badgeClasses,
  rounded: roundedClasses,
  size: sizeClasses,
  iconSizeMap: iconSizeMap,
  getVariant: getVariantClasses,
  scaling: scalingClasses,
} as const;
