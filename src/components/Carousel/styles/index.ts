export {
  getIndicatorVariants,
  indicatorsOrientationClasses,
  trackOrientationClasses,
  indicatorsLayoutClasses,
  containerLayoutClasses,
  controlsLayoutClasses,
  getSizeClasses,
} from "./variants.ts";
export {
  baseClasses,
  baseItemClasses,
  baseTrackClasses,
  buttonClasses,
  containerClasses,
  indicatorsBaseClasses,
  indicatorsItemClasses,
} from "./base.ts";

import {
  getIndicatorVariants,
  indicatorsOrientationClasses,
  trackOrientationClasses,
  indicatorsLayoutClasses,
  containerLayoutClasses,
  controlsLayoutClasses,
  getSizeClasses,
} from "./variants.ts";
import {
  baseClasses,
  baseItemClasses,
  baseTrackClasses,
  buttonClasses,
  containerClasses,
  indicatorsBaseClasses,
  indicatorsItemClasses,
} from "./base.ts";

export const carouselStyles = {
  base: baseClasses,
  container: containerClasses,
  button: buttonClasses,
  containerLayout: containerLayoutClasses,
  controlsLayout: controlsLayoutClasses,
  indicatorsLayout: indicatorsLayoutClasses,
  size: getSizeClasses,
  item: {
    base: baseItemClasses,
  },
  track: {
    base: baseTrackClasses,
    orientation: trackOrientationClasses,
  },
  indicators: {
    base: indicatorsBaseClasses,
    item: indicatorsItemClasses,
    orientation: indicatorsOrientationClasses,
    variants: getIndicatorVariants,
  },
};
