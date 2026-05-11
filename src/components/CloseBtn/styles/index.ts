import {
  baseClasses,
  iconClasses,
  sizeClasses,
  iconSizeMap,
  errorClasses,
} from "./base";

export { baseClasses, iconClasses, sizeClasses, iconSizeMap } from "./base";

export const closeBtnStyles = {
  base: baseClasses,
  icon: iconClasses,
  size: sizeClasses,
  iconSizeMap: iconSizeMap,
  error: errorClasses,
} as const;
