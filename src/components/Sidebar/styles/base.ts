export const baseClasses =
  "fixed top-[var(--app-layout-sidebar-top,var(--spacing-19))] left-7 z-30 flex h-[calc(100vh-var(--app-layout-sidebar-top,var(--spacing-19))-var(--app-layout-sidebar-bottom,var(--spacing-7)))] flex-col rounded-scale-3xl border border-line bg-generic transition-[width] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const baseMobileClasses =
  "mx-7 flex h-[calc(100vh-36px)] flex-col rounded-scale-3xl border border-line bg-generic";

export const expandedClasses = "w-[240px]";

export const collapsedClasses = "w-[77px]";

export const headerClasses =
  "box-border flex h-[46px] ml-[4px] shrink-0 items-center overflow-hidden border-b border-line px-7 gap-4 transition-[padding,gap] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const headerCollapsedClasses = "!gap-0";

export const collapseButtonClasses =
  "shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const collapseIconClasses = "shrink-0";
export const collapseIconRotatedClasses = "[&>svg]:rotate-180";

export const titleClasses =
  "grid min-w-0 overflow-hidden font-roboto-flex text-sm data-[mobile=true]:text-lg font-semibold data-[mobile=true]:font-medium leading-sm text-primary transition-all duration-300 ease-in-out motion-reduce:transition-none";

export const titleHiddenClasses =
  "pointer-events-none w-0 flex-none grid-cols-[0fr] opacity-0";

export const titleVisibleClasses = "flex-1 grid-cols-[1fr] opacity-100";

export const titleInnerClasses = "min-w-0 overflow-hidden whitespace-nowrap";

export const itemsContainerClasses =
  "flex flex-1 flex-col gap-1 overflow-y-auto overflow-x-hidden px-7 py-5 transition-[padding] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const itemsContainerCollapsedClasses =
  "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

export const itemCollapsedClasses = "gap-0";

export const footerClasses =
  "box-border shrink-0 border-t border-line px-7 py-5 data-[mobile=true]:pb-0 w-full overflow-hidden transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const itemClasses =
  "group relative box-border flex h-16 w-full cursor-pointer items-center gap-4 overflow-hidden rounded-md px-5 text-md leading-md font-medium tracking-xs text-primary no-underline transition-[width,padding,gap,background-color,color] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-generic-medium hover:text-primary aria-pressed:bg-brand-light aria-pressed:text-brand-text-heavy aria-disabled:cursor-default aria-disabled:pointer-events-none aria-disabled:text-hint disabled:cursor-default motion-reduce:transition-none";

export const itemIconClasses =
  "shrink-0 text-complementary transition-[color] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-aria-pressed:text-brand-text-heavy group-aria-disabled:text-hint motion-reduce:transition-none";

export const actionButtonClasses =
  "w-full transition-[background-color,color] duration-300 ease-in-out motion-reduce:transition-none";

export const actionButtonCollapsedClasses = "justify-center [&>span]:gap-0";

export const actionButtonLabelClasses =
  "grid min-w-0 transition-all duration-300 ease-in-out motion-reduce:transition-none";

export const actionButtonLabelHiddenClasses =
  "pointer-events-none grid-cols-[0fr] opacity-0";

export const actionButtonLabelVisibleClasses = "grid-cols-[1fr] opacity-100";

export const actionButtonLabelInnerClasses =
  "min-w-0 overflow-hidden whitespace-nowrap";

export const linkDisabledClasses = "pointer-events-none opacity-50";

export const itemLabelClasses =
  "grid min-w-0 transition-all duration-300 ease-in-out motion-reduce:transition-none";

export const itemLabelHiddenClasses =
  "pointer-events-none grid-cols-[0fr] opacity-0";
export const itemLabelVisibleClasses = "grid-cols-[1fr] opacity-100";

export const itemLabelInnerClasses =
  "min-w-0 overflow-hidden whitespace-nowrap";
