import { inputTagStyles } from "@/components/InputTag/styles";
import {
  multiTagTriggerSizeClasses,
  tagsContainerSizeClasses,
  controlsContainerSizeClasses,
  controlsContainerWithTagsSizeClasses,
  multiTagFieldInlinePaddingClasses,
  labelZoneSpacerClasses,
  labelZoneOffsetClasses,
  tagRowHeightMap,
  tagGap,
} from "./sizes.ts";
import {
  triggerChevronOpenClasses,
  placeholderClasses,
  triggerStyles,
  triggerEmptyClasses,
  triggerWithTagsClasses,
  tagsContainerWrapperClasses,
  tagsContainerClasses,
  tagsContainerEmptyClasses,
  tagsContainerWithTagsClasses,
  controlsContainerClasses,
  controlsContainerWithTagsClasses,
} from "./base.ts";

export { wrapperClasses } from "@/components/Field/styles";
export {
  selectAllClasses,
  selectAllDividerClasses,
} from "@/components/MultiSelect/styles";

export const multiTagStyles = {
  trigger: {
    size: multiTagTriggerSizeClasses,
    empty: triggerEmptyClasses,
    withTags: triggerWithTagsClasses,
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
  labelZoneSpacer: labelZoneSpacerClasses,
  labelZoneOffset: labelZoneOffsetClasses,
  tagsContainerWrapper: tagsContainerWrapperClasses,
  tagsContainer: tagsContainerClasses,
  tagsContainerEmpty: tagsContainerEmptyClasses,
  tagsContainerSize: tagsContainerSizeClasses,
  tagsContainerWithTags: tagsContainerWithTagsClasses,
  floatingLabel: {
    offsetSize: inputTagStyles.floatingLabelOffsetSize,
    active: inputTagStyles.floatingLabelActive,
    activeTypographySize: inputTagStyles.floatingLabelActiveTypographySize,
  },
  controls: {
    base: controlsContainerClasses,
    size: controlsContainerSizeClasses,
    withTags: controlsContainerWithTagsClasses,
    withTagsSize: controlsContainerWithTagsSizeClasses,
  },
  icon: triggerStyles.icon,
  placeholder: placeholderClasses,
  chevronOpen: triggerChevronOpenClasses,
  tagRowHeight: tagRowHeightMap,
  tagGap,
} as const;

export { placeholderClasses, triggerStyles, iconSizeMap } from "./base.ts";
