export {
  baseClasses,
  roundedClasses,
  iconOnlyClasses,
  iconWithTextClasses,
} from "./base";
export {
  sizeClasses,
  iconOnlySizeClasses,
  iconSizeMap,
  gapClasses,
} from "./sizes";
export { getVariantClasses } from "./variants";

import {
  baseClasses,
  roundedClasses,
  iconOnlyClasses,
  iconWithTextClasses,
} from "./base";
import {
  sizeClasses,
  iconOnlySizeClasses,
  iconSizeMap,
  gapClasses,
} from "./sizes";
import { getVariantClasses } from "./variants";

export const labelStyles = {
  base: baseClasses,
  rounded: roundedClasses,
  iconOnly: iconOnlyClasses,
  iconWithText: iconWithTextClasses,
  size: sizeClasses,
  iconOnlySize: iconOnlySizeClasses,
  iconSizeMap: iconSizeMap,
  gap: gapClasses,
  getVariant: getVariantClasses,
} as const;
