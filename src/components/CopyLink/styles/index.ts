import {
  rootClasses,
  labelClasses,
  labelLayerClasses,
  labelStateClasses,
  labelMeasureClasses,
  labelAnimatedClasses,
  labelVisibleClasses,
  labelHiddenClasses,
  contentGapClasses,
  iconClasses,
} from "./base";

export {
  rootClasses,
  labelClasses,
  labelLayerClasses,
  labelStateClasses,
  labelMeasureClasses,
  labelAnimatedClasses,
  labelVisibleClasses,
  labelHiddenClasses,
  contentGapClasses,
  iconClasses,
};

export const copyLinkStyles = {
  root: rootClasses,
  label: labelClasses,
  labelLayer: labelLayerClasses,
  labelState: labelStateClasses,
  labelMeasure: labelMeasureClasses,
  labelAnimated: labelAnimatedClasses,
  labelVisible: labelVisibleClasses,
  labelHidden: labelHiddenClasses,
  contentGap: contentGapClasses,
  icon: iconClasses,
} as const;
