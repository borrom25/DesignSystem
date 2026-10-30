export const rootClasses = "fixed inset-0 z-50 flex flex-col";

export const overlayClasses =
  "pointer-events-none absolute inset-0 backdrop-blur-[2.1px]";

export const overlayDesktopClasses = "bg-[rgba(0,0,0,0.65)]";

export const overlayCompactClasses = "bg-[rgba(0,0,0,0.55)]";

export const headerClasses =
  "relative z-10 flex shrink-0 items-center justify-between border-b border-line bg-generic py-3";

export const headerDesktopClasses = "px-7";

export const headerCompactClasses = "px-6";

export const headerActionsClasses = "flex items-center gap-5";

export const counterClasses =
  "pointer-events-none absolute left-1/2 -translate-x-1/2";

export const stageClasses =
  "relative flex min-h-0 min-w-0 flex-1 items-center justify-center [container-type:size]";

export const stageDesktopClasses = "px-[72px] py-7";

export const stageCompactClasses = "py-5";

export const stageTouchClasses = "touch-pan-y";

export const closeIconCompactClasses = "[&_svg]:size-[16px]";

export const frameClasses =
  "relative aspect-square w-[min(100cqw,100cqh)] max-w-full overflow-hidden";

export const slideClasses = "absolute inset-0";

export const slidePhotoClasses = "photo-rotate size-full";

export const imageClasses = "size-full object-cover";

export const navClasses = "absolute top-1/2 z-10 -translate-y-1/2";

export const navPrevClasses = "left-11";

export const navNextClasses = "right-11";

export const thumbsClasses =
  "relative z-10 flex max-w-full items-center justify-center gap-4 overflow-x-auto px-7 pt-3 pb-7 before:h-[100px] before:w-0 before:shrink-0 before:content-[''] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

export const thumbClasses =
  "shrink-0 cursor-pointer overflow-hidden rounded-scale-xl border-2 border-transparent bg-transparent p-0 transition-[width,height,border-color] duration-150";

export const thumbIdleClasses =
  "size-[90px] hover:size-[100px] hover:border-brand-line-light";

export const thumbSelectedClasses = "size-[100px] border-brand-line-heavy";

export const thumbImageClasses = "size-full object-cover";

export const rotateBarClasses =
  "relative z-10 flex items-center justify-center gap-5 px-7 pt-3 pb-17";

export const actionsClasses = "flex flex-col px-3 py-3";

export const mobileSheetClasses =
  "fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:translate-y-0 data-[state=open]:opacity-100 data-[state=closed]:translate-y-full data-[state=closed]:opacity-0";

export const confirmActionsClasses =
  "flex w-full items-center justify-end gap-3";
