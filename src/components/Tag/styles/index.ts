export {
  baseClasses,
  errorClasses,
  disabledClasses,
  withAvatarClasses,
} from "./base";
export {
  sizeClasses,
  gapClasses,
  withAvatarSizeClasses,
  avatarSizeMap,
} from "./sizes";

import {
  baseClasses,
  errorClasses,
  disabledClasses,
  withAvatarClasses,
} from "./base";
import { sizeClasses, gapClasses, withAvatarSizeClasses } from "./sizes";

export const tagStyles = {
  base: baseClasses,
  error: errorClasses,
  disabled: disabledClasses,
  size: sizeClasses,
  gap: gapClasses,
  withAvatar: withAvatarClasses,
  withAvatarSize: withAvatarSizeClasses,
} as const;
