import {
  inputBaseClasses,
  inputStateClasses,
  inputDisabledClasses,
  inputAdornmentClasses,
  inputAdornmentDisabledClasses,
  inputNativeClasses,
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
  inputNativeDisabledClasses,
  inputNativePlaceholderHiddenClasses,
  inputNativePlaceholderVisibleClasses,
  inputClearButtonClasses,
};

export const wrapperClasses = "h-auto";

export const wrapperEmptyClasses = "items-center";

export const wrapperWithTags = "items-start";

export const tagsContainerClasses =
  "flex flex-wrap items-center content-start gap-(--input-gap-container-content) flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

export const tagsContainerWithFloatingLabelClasses =
  "pt-[calc(var(--generic-spacing-2)_+_1lh_+_var(--input-gap-container-content,var(--generic-spacing-05)))]";

export const clearButtonWrapperClasses = "shrink-0 self-start";
