import {
  multiTagTriggerSizeClasses,
  multiTagTriggerInlinePaddingClasses,
  tagsContainerClasses,
  controlsContainerClasses,
  controlsContainerWrappedClasses,
  multiTagFieldInlinePaddingClasses,
  multiTagTriggerInlinePaddingWithValueClasses,
  tagsContainerWrappedClasses,
  tagsContainerPaddingClasses,
  controlsContainerSizeClasses,
  tagRowHeightMap,
  tagGap,
} from "./sizes.ts";
import {
  multiTagTriggerBaseClasses,
  triggerChevronOpenClasses,
  placeholderClasses,
  triggerStyles,
} from "./base.ts";

export {
  multiTagTriggerSizeClasses,
  multiTagTriggerInlinePaddingClasses,
  tagsContainerClasses,
  controlsContainerClasses,
  controlsContainerWrappedClasses,
  multiTagFieldInlinePaddingClasses,
  multiTagTriggerInlinePaddingWithValueClasses,
  tagsContainerWrappedClasses,
  tagsContainerPaddingClasses,
  controlsContainerSizeClasses,
  tagRowHeightMap,
  tagGap,
} from "./sizes.ts";
export {
  wrapperClasses,
  labelBaseClasses,
  requiredMarkClasses,
  hintBaseClasses,
  hintDefaultClasses,
  hintErrorClasses,
} from "@/components/Field/styles";
export {
  multiTagTriggerBaseClasses,
  triggerChevronOpenClasses,
  placeholderClasses,
  iconSizeMap,
  labelSizeClasses,
  hintSizeClasses,
  triggerStyles,
} from "./base.ts";

export {
  selectAllClasses,
  selectAllTextClasses,
  selectAllDividerClasses,
} from "@/components/MultiSelect/styles";

export const multiTagStyles = {
  trigger: {
    base: multiTagTriggerBaseClasses,
    size: multiTagTriggerSizeClasses,
    inlinePadding: multiTagTriggerInlinePaddingClasses,
    inlinePaddingWithValue: multiTagTriggerInlinePaddingWithValueClasses,
    open: triggerStyles.open,
    error: {
      default: triggerStyles.error.default,
      filled: triggerStyles.error.filled,
      open: triggerStyles.error.open,
    },
  },
  field: {
    inlinePadding: multiTagFieldInlinePaddingClasses,
  },
  tagsContainer: tagsContainerClasses,
  tagsContainerPadding: tagsContainerPaddingClasses,
  tagsContainerWrapped: tagsContainerWrappedClasses,
  controls: {
    base: controlsContainerClasses,
    size: controlsContainerSizeClasses,
    wrapped: controlsContainerWrappedClasses,
  },
  icon: triggerStyles.icon,
  placeholder: placeholderClasses,
  chevronOpen: triggerChevronOpenClasses,
  tagRowHeight: tagRowHeightMap,
  tagGap,
} as const;
