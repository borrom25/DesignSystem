export { baseClasses, labelClasses, innerDotBaseClasses } from "./base";
export { sizeClasses, innerDotSizeClasses } from "./sizes";
export {
  inputStateClasses,
  inputHoverClasses,
  disabledStateClasses,
} from "./states";

import { baseClasses, labelClasses, innerDotBaseClasses } from "./base";
import { sizeClasses, innerDotSizeClasses } from "./sizes";
import {
  inputStateClasses,
  inputHoverClasses,
  disabledStateClasses,
} from "./states";

export const radioStyles = {
  base: baseClasses,
  label: labelClasses,
  size: sizeClasses,
  innerDot: {
    base: innerDotBaseClasses,
    size: innerDotSizeClasses,
  },
  input: {
    state: inputStateClasses,
    hover: inputHoverClasses,
    disabled: disabledStateClasses,
  },
} as const;
