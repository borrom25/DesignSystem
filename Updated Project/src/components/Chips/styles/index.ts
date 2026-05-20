export { baseClasses } from "./base";
export {
  sizeClasses,
  iconOnlySizeClasses,
  gapClasses,
  iconSizeMap,
} from "./sizes";
export { getVariantClasses } from "./variants";

import { baseClasses, contentClasses, iconClasses } from "./base";
import {
  sizeClasses,
  iconOnlySizeClasses,
  gapClasses,
  iconSizeMap,
} from "./sizes";
import { getVariantClasses } from "./variants";

export const chipsStyles = {
  base: baseClasses,
  content: contentClasses,
  icon: iconClasses,
  size: sizeClasses,
  iconOnlySize: iconOnlySizeClasses,
  gap: gapClasses,
  iconSizeMap: iconSizeMap,
  getVariant: getVariantClasses,
} as const;
