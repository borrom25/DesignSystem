import {
  inputBaseClasses,
  inputBodyClasses,
  inputFloatingLabelActiveClasses,
  inputFloatingLabelDisabledClasses,
  inputFloatingLabelClasses,
  inputFloatingLabelRequiredMarkClasses,
  inputNativeWithFloatingLabelClasses,
  inputRightSlotClasses,
} from "@/shared/Input/styles";

export const triggerBaseClasses = `${inputBaseClasses} overflow-hidden justify-between cursor-pointer border border-transparent bg-generic-medium hover:border-brand-line-light focus-visible:outline-none focus-visible:border-brand-line-heavy disabled:bg-generic-disabled disabled:text-hint disabled:cursor-not-allowed`;

export const iconClasses =
  "shrink-0 text-inverse-text-medium transition-transform duration-200 group-disabled:text-hint";

export const iconSlotClasses = inputRightSlotClasses;

export const placeholderClasses = "text-secondary group-disabled:text-hint";

export const valueClasses =
  "relative z-10 flex-1 min-w-0 text-left truncate text-primary will-change-transform transition-[translate,opacity,color] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-disabled:text-hint";

export const valueWithFloatingLabelClasses =
  inputNativeWithFloatingLabelClasses;

export const valuePlaceholderHiddenClasses =
  "opacity-0 transition-opacity duration-[250ms] ease-out [transition-delay:0ms]";

export const valuePlaceholderVisibleClasses =
  "opacity-100 transition-opacity duration-[250ms] ease-out [transition-delay:150ms]";

export const triggerBodyClasses = inputBodyClasses;

export const floatingLabelClasses = inputFloatingLabelClasses;

export const floatingLabelActiveClasses = inputFloatingLabelActiveClasses;

export const floatingLabelDisabledClasses = inputFloatingLabelDisabledClasses;

export const floatingLabelRequiredMarkClasses =
  inputFloatingLabelRequiredMarkClasses;

export const clearButtonClasses =
  "shrink-0 p-0 border-0 bg-transparent text-complementary cursor-pointer opacity-0 scale-95 pointer-events-none transition-[opacity,scale,color] duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto disabled:text-hint disabled:cursor-not-allowed disabled:pointer-events-none";

export const triggerBodyStackedClasses =
  "relative flex-1 min-w-0 self-stretch flex flex-col";

export const stackedContentClasses =
  "w-full pt-[calc(var(--generic-spacing-2)_+_1lh_+_var(--input-gap-container-content,var(--generic-spacing-05)))] transition-opacity duration-[250ms] ease-out";

export const stackedContentHiddenClasses = "h-0 overflow-hidden opacity-0";
