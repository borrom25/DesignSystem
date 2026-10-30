export const modalOverlayClasses =
  "fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.15)] backdrop-blur-[1.5px]";

export const modalContentClasses =
  "relative flex flex-col items-center w-[min(960px,96vw)] max-h-[96vh] p-0";

export const modalActionsClasses =
  "flex items-center justify-center gap-2 mb-[17px] z-10 flex-shrink-0";

export const modalActionButtonClasses =
  "flex w-(--size-component-sm-icon-only-dimensions) h-(--size-component-sm-icon-only-dimensions) p-0 justify-center items-center rounded-lg border border-line bg-generic cursor-pointer transition-opacity hover:opacity-80";

export const modalIconClasses = "text-inverse-text-heavy";

export const modalPagesClasses =
  "flex w-full flex-col gap-3 overflow-y-auto max-h-[calc(96vh-80px)] px-1";

export const modalPageClasses =
  "w-full rounded-lg border border-line-hover bg-generic";

export const modalFrameClasses =
  "w-full h-[calc(96vh-80px)] rounded-lg border-0 bg-generic";
