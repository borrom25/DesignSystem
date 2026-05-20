export { baseClasses, errorClasses, withAvatarClasses } from "./base";
export {
  sizeClasses,
  gapClasses,
  withAvatarSizeClasses,
  avatarSizeMap,
} from "./sizes";

import { baseClasses, errorClasses, withAvatarClasses } from "./base";
import { sizeClasses, gapClasses, withAvatarSizeClasses } from "./sizes";

export const tagStyles = {
  base: baseClasses,
  error: errorClasses,
  size: sizeClasses,
  gap: gapClasses,
  withAvatar: withAvatarClasses,
  withAvatarSize: withAvatarSizeClasses,
} as const;
