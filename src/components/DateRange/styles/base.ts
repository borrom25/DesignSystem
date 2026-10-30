export const separatorClasses = "w-px h-4 bg-generic-medium-hover shrink-0";

export const dateRangeContentClasses =
  "flex self-stretch items-center flex-1 min-w-0 min-h-0 gap-1";

export const dateRangeFieldClasses =
  "group/date-range aria-disabled:cursor-not-allowed";

export const dateRangeSectionsClasses =
  "relative flex h-full items-center flex-1 min-w-0 min-h-0";

export const dateRangeSectionClasses = "flex h-full flex-1 basis-0 min-w-0";

export const dateRangeSectionButtonClasses =
  "flex h-full w-full flex-1 min-w-0 items-center justify-center border-0 bg-transparent px-0 focus:outline-none";

export const dateRangeSectionButtonStackedClasses =
  "relative flex-col justify-center gap-0";

export const dateRangeSectionLabelClasses =
  "pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 text-center font-roboto-flex whitespace-nowrap [color:var(--text-basic-secondary)] transition-[top,translate,opacity] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]";

export const dateRangeSectionLabelActiveClasses =
  "top-(--generic-spacing-1) translate-y-0 opacity-100";

export const dateRangeSectionLabelCenteredClasses = "opacity-100";

export const dateRangeSectionInputClasses =
  "relative z-10 w-full min-w-0 bg-transparent border-0 outline-none text-center [color:var(--text-basic-primary)] placeholder:text-secondary will-change-transform transition-[opacity,translate] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] pt-[calc(var(--generic-spacing-4))] translate-y-[3px] [&::placeholder]:transition-opacity [&::placeholder]:duration-[250ms] [&::placeholder]:ease-out";

export const dateRangeSectionInputHiddenClasses =
  "opacity-0 pointer-events-none";

export const dateRangeSectionInputPlaceholderHiddenClasses =
  "[&::placeholder]:opacity-0 [&::placeholder]:[transition-delay:0ms]";

export const dateRangeSectionInputPlaceholderVisibleClasses =
  "[&::placeholder]:opacity-100 [&::placeholder]:[transition-delay:150ms]";

export const dateRangeSectionInputDefaultClasses =
  "[color:var(--text-basic-primary)]";

export const dateRangeSectionInputErrorClasses =
  "[color:var(--text-basic-primary)]";

export const dateRangeSectionButtonInteractiveClasses = "cursor-pointer";

export const dateRangeActiveIndicatorClasses =
  "pointer-events-none absolute bottom-0 left-0 h-[2px] w-[calc(50%-2px)] rounded-t-[1px] bg-brand-heavy transition-transform duration-200 ease-out";

export const dateRangeActiveIndicatorStartClasses = "translate-x-0";

export const dateRangeActiveIndicatorEndClasses =
  "translate-x-[calc(100%+4px)]";
