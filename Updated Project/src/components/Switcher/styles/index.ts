import {
  baseClasses,
  checkedClasses,
  disabledClasses,
  handleClasses,
  hoverClasses,
  inputClasses,
  minusBaseClasses,
  minusIconClasses,
} from "./base";
import { circleSizeClasses, minusIconSizeClasses, sizeClasses } from "./sizes";

export const switherStyles = {
  base: baseClasses,
  handle: handleClasses,
  hover: hoverClasses,
  disabled: disabledClasses,
  checked: checkedClasses,
  input: inputClasses,
  sizes: sizeClasses,
  circleSize: circleSizeClasses,
  minus: {
    icon: minusIconClasses,
    base: minusBaseClasses,
    size: minusIconSizeClasses,
  },
};
