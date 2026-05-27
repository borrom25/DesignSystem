export {
  baseClasses,
  labelClasses,
  containerClasses,
  titleClasses,
} from "./base";
export { sizeClasses, iconSizeMap, titleSizeClasses } from "./sizes";
export {
  inputStateClasses,
  inputHoverClasses,
  disabledStateClasses,
  iconBaseClasses,
} from "./states";

import {
  baseClasses,
  labelClasses,
  containerClasses,
  titleClasses,
} from "./base";
import { sizeClasses, iconSizeMap, titleSizeClasses } from "./sizes";
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
  titleSize: titleSizeClasses,
  iconSizeMap: iconSizeMap,
  input: {
    state: inputStateClasses,
    hover: inputHoverClasses,
    disabled: disabledStateClasses,
  },
  icon: iconBaseClasses,
  container: containerClasses,
  title: titleClasses,
} as const;
