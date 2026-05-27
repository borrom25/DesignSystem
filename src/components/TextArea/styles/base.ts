export const textAreaBaseClasses =
  "flex w-full min-h-[56px] flex-col items-stretch gap-2 font-roboto-flex text-primary transition-[border-color,background-color] duration-150 cursor-text";

export const textAreaStateClasses =
  "border border-line hover:border-brand-line-light focus:border-brand-line-heavy focus:hover:border-brand-line-heavy [background:var(--color-generic-medium)]";

export const textAreaDisabledClasses =
  "border border-line-disabled [background:var(--background-basic-generic-disabled,rgba(0,0,0,0.04))] text-hint cursor-not-allowed";

export const textAreaErrorClasses =
  "border border-danger-line-light [background:var(--color-generic-medium)] hover:border-danger-line-light focus:border-danger-line-light focus:hover:border-danger-line-light";

export const textAreaNativeClasses =
  "w-full min-h-0 flex-1 overflow-y-auto bg-transparent outline-none disabled:cursor-not-allowed resize-none pr-12 [&::-webkit-scrollbar]:bg-transparent";

export const textAreaNativeBottomPaddingClasses = "pb-7";

export const textAreaNativeTextBaseClasses =
  "font-roboto-flex font-medium not-italic";

export const textAreaNativePlaceholderBaseClasses =
  "placeholder:font-roboto-flex placeholder:font-medium placeholder:not-italic placeholder:text-hint";

export const textAreaNativeDisabledTextClasses =
  "text-hint text-md leading-md tracking-md";

export const textAreaNativeDisabledClasses = "placeholder:text-hint";

export const textAreaWrapperInnerClasses = "relative w-full";

export const textAreaFieldShellClasses =
  "flex w-full min-h-[56px] flex-col font-roboto-flex text-primary transition-[border-color,background-color] duration-150 cursor-text";

export const textAreaNativeWithLabelClasses = "min-h-0 flex-1";

export const textAreaLabelBaseClasses =
  "block w-full shrink-0 font-roboto-flex font-medium not-italic text-secondary transition-[font-size,line-height,letter-spacing,padding] duration-150";

export const textAreaLabelDisabledClasses = "text-hint";

export const textAreaNativePlaceholderHiddenClasses =
  "[&::placeholder]:opacity-0 [&::placeholder]:[transition-delay:0ms]";

export const textAreaNativePlaceholderVisibleClasses =
  "[&::placeholder]:opacity-100 [&::placeholder]:[transition-delay:150ms] [&::placeholder]:transition-opacity [&::placeholder]:duration-[250ms] [&::placeholder]:ease-out";

export const textAreaClearButtonClasses = "absolute top-2 right-[11px] z-20";

export const textAreaCounterClasses =
  "pointer-events-none absolute right-[16px] bottom-[12px] z-10 font-roboto-flex font-medium not-italic text-secondary text-xs leading-xs tracking-xs whitespace-nowrap";

export const textAreaCounterDisabledClasses = "text-hint";

export const textAreaResizeHandleClasses =
  "absolute right-1 bottom-1 z-30 flex items-center justify-center p-0.5 border-0 bg-transparent text-secondary hover:text-complementary cursor-pointer";

export const textAreaResizeVerticalClasses = "cursor-ns-resize";

export const textAreaResizeBothClasses = "cursor-nwse-resize";

export const textAreaResizeIconClasses = "h-3 w-3";

export const requiredMarkClasses =
  "pointer-events-none absolute top-2 left-0 right-full -translate-y-1/2 text-danger-text-heavy text-[30px]";
