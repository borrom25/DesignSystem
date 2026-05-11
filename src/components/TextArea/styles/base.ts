export const textAreaBaseClasses =
  "flex flex-col items-start gap-2 block w-full overflow-x-hidden overflow-y-auto font-roboto-flex text-primary transition-[border-color,background-color] duration-150 cursor-text min-h-[56px] [&::-webkit-scrollbar]:bg-transparent";

export const textAreaStateClasses =
  "border border-line hover:border-brand-line-light focus:border-brand-line-heavy focus:hover:border-brand-line-heavy [background:var(--color-generic-medium)]";

export const textAreaDisabledClasses =
  "border border-line-disabled bg-generic-disabled text-hint cursor-not-allowed";

export const textAreaErrorClasses =
  "border border-danger-line-light bg-danger-light hover:border-danger-line-light hover:bg-danger-light-hover focus:border-danger-line-light focus:bg-danger-light focus:hover:border-danger-line-light focus:hover:bg-danger-light-hover";

export const textAreaNativeClasses =
  "bg-transparent outline-none placeholder:text-secondary disabled:cursor-not-allowed text-primary disabled:text-hint resize-none pr-12 pb-7";

export const textAreaNativeDisabledClasses = "placeholder:text-hint";

export const textAreaWrapperInnerClasses = "relative w-full";

export const textAreaClearButtonClasses = "absolute top-2 right-2";

export const textAreaResizeHandleClasses =
  "absolute right-1 bottom-1 text-secondary hover:text-complementary";

export const textAreaResizeVerticalClasses = "cursor-ns-resize";

export const textAreaResizeBothClasses = "cursor-nwse-resize";

export const textAreaResizeIconClasses = "h-3 w-3";
