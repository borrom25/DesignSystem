export const rootClasses =
  "fixed top-[var(--app-layout-sidebar-top,var(--spacing-19))] left-7 z-30 flex h-[calc(100vh-var(--app-layout-sidebar-top,var(--spacing-19))-var(--app-layout-sidebar-bottom,var(--spacing-7)))] min-h-0 w-[300px] shrink-0 flex-col overflow-hidden rounded-scale-3xl border border-line bg-generic";

export const rootMobileClasses =
  "mx-7 flex h-[calc(100vh-36px)] flex-col overflow-hidden rounded-scale-3xl border border-line bg-generic";

export const headerRowClasses =
  "flex h-18 shrink-0 items-center gap-3 self-stretch bg-generic px-9 py-0";

export const titleTextClasses =
  "font-roboto-flex text-md font-medium leading-md text-primary flex-1";

export const actionSlotClasses = "flex shrink-0 items-center";

export const separatorClasses = "h-px w-full shrink-0 bg-line";

export const headSlotClasses = "shrink-0 border-b border-line px-9 py-7";

export const contentContainerClasses =
  "flex min-h-0 flex-1 flex-col items-start gap-3 self-stretch overflow-y-auto px-9 pt-7 pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

export const bottomSlotClasses =
  "shrink-0 grid auto-cols-fr grid-flow-col gap-5 px-9 py-5";
