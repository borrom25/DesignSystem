export const wrapperClasses =
  "flex h-full min-h-0 flex-col justify-between rounded-md border border-[var(--line-basic-generic)] bg-generic";
export const wrapperFillClasses = "min-h-0 flex-1 overflow-hidden";

export const columnsContainerClasses =
  "relative flex min-h-0 flex-1 items-stretch justify-center gap-[10px] overflow-hidden before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-10 before:bg-gradient-to-b before:from-generic before:to-transparent after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-10 after:bg-gradient-to-t after:from-generic after:to-transparent";
export const columnsContainerFillClasses = "basis-0";

export const selectionPillClasses =
  "pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 rounded-[10px] bg-[var(--line-basic-generic)]";

export const columnClassesBase =
  "relative z-10 flex min-h-0 flex-col items-center self-stretch overflow-y-auto overflow-x-hidden scroll-instant [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-y snap-mandatory data-[mobile=true]:w-[100%]";

export const columnClassesHeightFixed = "h-[216px] self-auto";

export const columnClassesHeightFill = "h-auto self-stretch";

export const columnClasses = `${columnClassesBase} ${columnClassesHeightFixed}`;

export const itemBaseClasses =
  "flex items-center justify-center w-9 h-(--size-component-sm-height) px-(--size-component-sm-padding-x) py-(--size-component-sm-padding-y) gap-(--size-component-sm-gap) font-roboto-flex text-[14px] font-medium leading-[16px] tracking-[0.2px] text-inverse-text-medium cursor-pointer rounded-sm snap-center shrink-0 transition-colors data-[mobile=true]:w-[100%]";

export const itemHoverClasses = "hover:text-inverse-text-heavy";

export const itemSelectedClasses = "font-semibold text-primary";

export const itemDisabledClasses =
  "opacity-50 cursor-not-allowed pointer-events-none";

export const buttonsContainerClasses =
  "flex items-center justify-between pt-3 border-t border-line";
