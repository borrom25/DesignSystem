export { baseClasses, imageClasses, borderClasses } from "./base";
export { badgeClasses, badgeBorderStyles } from "./badge";

import { baseClasses, imageClasses, borderClasses } from "./base";
import { badgeClasses, badgeBorderStyles } from "./badge";

export const avatarStyles = {
  base: baseClasses,
  image: imageClasses,
  border: borderClasses,
  badge: badgeClasses,
  badgeBorder: badgeBorderStyles,
} as const;
