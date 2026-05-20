export { baseClasses, emptyClasses } from "./base";
export { contentOffsetClasses, sizeClasses } from "./sizes";
export { variantClasses } from "./variants";

import { baseClasses, emptyClasses } from "./base";
import { contentOffsetClasses, sizeClasses } from "./sizes";
import { variantClasses } from "./variants";

export const counterStyles = {
  base: baseClasses,
  empty: emptyClasses,
  size: sizeClasses,
  contentOffset: contentOffsetClasses,
  variant: variantClasses,
} as const;
