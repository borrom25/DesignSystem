export * from "./base";
export * from "./sizes";
export * from "./variants";

import * as selectBase from "./base";
import * as selectSizes from "./sizes";
import * as selectVariants from "./variants";

export const triggerStyles = {
  base: selectBase.triggerBaseClasses,
  size: selectSizes.triggerSizeClasses,
  iconSizeMap: selectSizes.iconSizeMap,
  icon: selectBase.iconClasses,
  iconSlot: selectBase.iconSlotClasses,
  iconSlotSize: selectSizes.iconSlotSizeClasses,
  placeholder: selectBase.placeholderClasses,
  value: selectBase.valueClasses,
  valueWithFloatingLabel: selectBase.valueWithFloatingLabelClasses,
  valuePlaceholderHidden: selectBase.valuePlaceholderHiddenClasses,
  valuePlaceholderVisible: selectBase.valuePlaceholderVisibleClasses,
  body: selectBase.triggerBodyClasses,
  floatingLabel: selectBase.floatingLabelClasses,
  floatingLabelActive: selectBase.floatingLabelActiveClasses,
  floatingLabelDisabled: selectBase.floatingLabelDisabledClasses,
  floatingLabelRequiredMark: selectBase.floatingLabelRequiredMarkClasses,
  floatingLabelSize: selectSizes.floatingLabelSizeClasses,
  floatingLabelActiveSize: selectSizes.floatingLabelActiveSizeClasses,
  open: selectVariants.triggerOpenClasses,
  error: {
    default: selectVariants.triggerErrorClasses,
    filled: selectVariants.triggerErrorFilledClasses,
    open: selectVariants.triggerErrorOpenClasses,
  },
  clearButton: selectBase.clearButtonClasses,
  stackedSize: selectSizes.triggerStackedSizeClasses,
  stackedBody: selectBase.triggerBodyStackedClasses,
  stackedContent: selectBase.stackedContentClasses,
  stackedContentHidden: selectBase.stackedContentHiddenClasses,
} as const;
