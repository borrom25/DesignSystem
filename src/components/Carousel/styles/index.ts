export {
  getIndicatorVariants,
  indicatorsOrientationClasses,
  trackOrientationClasses,
  containerLayoutClasses,
  controlsLayoutClasses,
  gapSize,
} from "./variants.ts";
export {
  baseClasses,
  baseItemClasses,
  baseTrackClasses,
  buttonClasses,
  containerClasses,
  controlsClasses,
  indicatorsBaseClasses,
  indicatorsItemClasses,
} from "./base.ts";

import {
  getIndicatorVariants,
  indicatorsOrientationClasses,
  trackOrientationClasses,
  containerLayoutClasses,
  controlsLayoutClasses,
} from "./variants.ts";
import {
  baseClasses,
  baseItemClasses,
  baseTrackClasses,
  buttonClasses,
  containerClasses,
  controlsClasses,
  indicatorsBaseClasses,
  indicatorsItemClasses,
} from "./base.ts";

export const carouselStyles = {
  base: baseClasses,
  container: containerClasses,
  button: buttonClasses,
  containerLayout: containerLayoutClasses,
  controls: controlsClasses,
  controlsLayout: controlsLayoutClasses,
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
