import {
  timePickerRightSlotClasses,
  timePickerContainerClasses,
  timePickerIconClasses,
  timePickerIconWrapperClasses,
} from "./base";
import { iconSizes } from "./sizes";

export const timePickerStyles = {
  containerStyles: timePickerContainerClasses,
  rightSlot: timePickerRightSlotClasses,
  iconStyles: timePickerIconClasses,
  iconWrapper: timePickerIconWrapperClasses,
  iconSize: iconSizes,
} as const;
