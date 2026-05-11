export * from "./base";
export * from "./variants";

import * as sliderBase from "./base";
import * as sliderVariants from "./variants";

export const sliderStyles = {
  wrapper: sliderBase.sliderWrapperClasses,
  container: sliderBase.sliderContainerClasses,
  track: sliderBase.sliderTrackClasses,
  activeTrack: sliderBase.sliderActiveTrackClasses,
  activeTrackColor: sliderVariants.sliderActiveTrackColorClasses,
  thumbWrapper: sliderBase.sliderThumbWrapperClasses,
  valuePopover: sliderBase.sliderValuePopoverClasses,
  valuePopoverAlwaysShow: sliderBase.sliderValuePopoverAlwaysShowClasses,
  valuePopoverDisabled: sliderBase.sliderValuePopoverDisabledClasses,
  valuePopoverArrow: sliderBase.sliderValuePopoverArrowClasses,
  thumb: sliderBase.sliderThumbClasses,
  thumbCircle: sliderBase.sliderThumbCircleClasses,
  input: sliderBase.sliderInputClasses,
  disabled: sliderVariants.sliderDisabledClasses,
} as const;
