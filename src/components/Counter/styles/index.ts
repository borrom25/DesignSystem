export { baseClasses, emptyClasses, disabledClasses } from "./base";
export { contentClasses, sizeClasses } from "./sizes";
export { variantClasses } from "./variants";

import { baseClasses, emptyClasses, disabledClasses } from "./base";
import { contentClasses, sizeClasses } from "./sizes";
import { variantClasses } from "./variants";

export const counterStyles = {
  base: baseClasses,
  empty: emptyClasses,
  disabled: disabledClasses,
  size: sizeClasses,
  content: contentClasses,
  variant: variantClasses,
} as const;
