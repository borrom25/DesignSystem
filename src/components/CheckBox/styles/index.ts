export { baseClasses, labelClasses } from "./base";
export { sizeClasses, iconSizeMap } from "./sizes";
export {
  inputStateClasses,
  inputHoverClasses,
  disabledStateClasses,
  iconBaseClasses,
} from "./states";

import { baseClasses, labelClasses } from "./base";
import { sizeClasses, iconSizeMap } from "./sizes";
import {
  inputStateClasses,
  inputHoverClasses,
  disabledStateClasses,
  iconBaseClasses,
} from "./states";

export const checkBoxStyles = {
  base: baseClasses,
  label: labelClasses,
  size: sizeClasses,
  iconSizeMap: iconSizeMap,
  input: {
    state: inputStateClasses,
    hover: inputHoverClasses,
    disabled: disabledStateClasses,
  },
  icon: iconBaseClasses,
} as const;
