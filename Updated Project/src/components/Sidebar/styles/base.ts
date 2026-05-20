export const baseClasses =
  "fixed top-19 left-0 z-30 flex h-[calc(100vh-56px)] flex-col border-r border-line bg-generic transition-[width] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const baseMobileClasses = "flex h-[calc(100vh-36px)] flex-col";

export const expandedClasses = "w-[240px]";

export const collapsedClasses = "w-[68px]";

export const headerClasses =
  "box-border flex h-[46px] shrink-0 items-center overflow-hidden border-b border-line px-7 gap-4 transition-[padding,gap] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const headerGapClasses = "";

export const headerCollapsedClasses = "!justify-center !px-0 !gap-0";

export const collapseButtonClasses =
  "transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const collapseIconClasses = "shrink-0";
export const collapseIconRotatedClasses = "[&>svg]:rotate-180";

export const titleClasses =
  "font-roboto-flex text-sm data-[mobile=true]:text-lg font-semibold data-[mobile=true]:font-medium origin-left will-change-[opacity,transform,max-width] leading-sm text-primary overflow-hidden whitespace-nowrap transition-[opacity,max-width,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] delay-120 motion-reduce:transition-none";

export const titleHiddenClasses =
  "max-w-0 opacity-0 -translate-x-1 pointer-events-none delay-0";

export const titleVisibleClasses = "max-w-[160px] opacity-100 translate-x-0";

export const itemsContainerClasses =
  "flex flex-1 flex-col gap-1 overflow-y-auto overflow-x-hidden px-7 py-5 transition-[padding] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const itemsContainerCollapsedClasses =
  "items-center px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

export const footerClasses =
  "box-border shrink-0 border-t border-line px-7 py-5 data-[mobile=true]:pb-0 w-full overflow-hidden transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const footerCollapsedClasses = "px-0 flex justify-center";

export const itemClasses = "w-full justify-start";

export const itemCollapsedClasses = "!justify-center";

export const actionButtonClasses =
  "transition-[width,margin] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const actionButtonCollapsedClasses = "mx-auto";

export const actionButtonExpandedClasses = "w-full";

export const actionButtonLabelClasses =
  "overflow-hidden whitespace-nowrap transition-[opacity,max-width,transform] duration-420 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none";

export const actionButtonLabelHiddenClasses =
  "pointer-events-none max-w-0 opacity-0 -translate-x-2";

export const actionButtonLabelVisibleClasses =
  "max-w-[160px] opacity-100 translate-x-0 delay-90";

export const linkDisabledClasses = "pointer-events-none opacity-50";

export const linkNoUnderlineClasses = "no-underline";

export const itemLabelClasses =
  "overflow-hidden whitespace-nowrap transition-[opacity,max-width,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const itemLabelHiddenClasses =
  "pointer-events-none max-w-0 opacity-0 -translate-x-1 delay-0";
export const itemLabelVisibleClasses =
  "max-w-[200px] opacity-100 translate-x-0 delay-120";
