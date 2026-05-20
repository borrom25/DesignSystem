export { baseClasses, iconClasses } from "./base";
export { borderVariantClasses } from "./variants";

import { baseClasses, iconClasses } from "./base";
import { borderVariantClasses } from "./variants";

export const iconAvatarStyles = {
  base: baseClasses,
  icon: iconClasses,
  borderVariant: borderVariantClasses,
} as const;
