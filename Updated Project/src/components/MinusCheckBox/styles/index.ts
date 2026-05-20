export * from "./base";
export * from "./sizes";
export * from "./states";

import * as minusCheckBoxBase from "./base";
import * as minusCheckBoxSizes from "./sizes";
import * as minusCheckBoxStates from "./states";

export const minusCheckBoxStyles = {
  base: minusCheckBoxBase.baseClasses,
  size: minusCheckBoxSizes.sizeClasses,
  iconSizeMap: minusCheckBoxSizes.iconSizeMap,
  button: {
    state: minusCheckBoxStates.buttonStateClasses,
    hover: minusCheckBoxStates.buttonHoverClasses,
    disabled: minusCheckBoxStates.disabledStateClasses,
  },
  icon: minusCheckBoxStates.iconBaseClasses,
} as const;
