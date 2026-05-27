import {
  inputBaseClasses,
  inputStateClasses,
  inputDisabledClasses,
  inputAdornmentClasses,
  inputAdornmentDisabledClasses,
  inputNativeClasses,
  inputNativeWithFloatingLabelClasses,
  inputNativeDisabledClasses,
  inputNativePlaceholderHiddenClasses,
  inputNativePlaceholderVisibleClasses,
  inputClearButtonClasses,
} from "@/shared/Input/styles";

export {
  inputBaseClasses,
  inputStateClasses,
  inputDisabledClasses,
  inputAdornmentClasses,
  inputAdornmentDisabledClasses,
  inputNativeClasses,
  inputNativeWithFloatingLabelClasses,
  inputNativeDisabledClasses,
  inputNativePlaceholderHiddenClasses,
  inputNativePlaceholderVisibleClasses,
  inputClearButtonClasses,
};

export const wrapperClasses = "h-auto";

export const wrapperEmptyClasses = "items-center";

export const wrapperWithTags = "items-start";

export const tagsContainerClasses =
  "flex flex-wrap items-center content-start gap-(--input-gap-container-content) flex-1 py-(--input-gap-container-content) overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

export const tagsContainerWithTagsClasses = "pb-(--generic-spacing-2)";

export const tagsContainerWithFloatingLabelClasses =
  "pt-[calc(1lh_+_var(--input-gap-container-content,var(--generic-spacing-05)))]";

export const clearButtonWrapperClasses = "shrink-0 self-start";

export const floatingLabelActiveClasses =
  "text-secondary scale-100 translate-y-(--generic-spacing-1)";

export const nativeTextClasses =
  "flex-1 min-w-[80px] text-sm leading-sm tracking-sm text-primary placeholder:text-hint";

export const nativeActiveWithoutTagsClasses = "self-end";
