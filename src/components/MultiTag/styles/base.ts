import { inputTagStyles } from "@/components/InputTag/styles";
import { triggerStyles as sharedTriggerStyles } from "@/shared/Select";

export { iconSizeMap, triggerStyles } from "@/shared/Select";

export const triggerChevronOpenClasses = "rotate-180";

export const placeholderClasses = sharedTriggerStyles.placeholder;

export const triggerEmptyClasses = inputTagStyles.wrapperEmpty;

export const triggerWithTagsClasses = inputTagStyles.wrapperWithTags;

export const tagsContainerWrapperClasses =
  "flex flex-1 min-w-0 flex-col self-stretch";

export const tagsContainerClasses =
  "flex flex-wrap items-center content-start gap-(--input-gap-container-content) min-w-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

export const tagsContainerEmptyClasses = "flex-1 flex items-center";

export const tagsContainerWithTagsClasses =
  "py-(--input-gap-container-content) pb-(--generic-spacing-2)";

export const controlsContainerClasses = "shrink-0 flex items-center";

export const controlsContainerWithTagsClasses = "self-start";
