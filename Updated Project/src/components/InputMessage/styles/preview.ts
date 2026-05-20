export const previewContainerClasses =
  "group relative overflow-hidden rounded-lg aspect-square min-w-[64px] border border-line-hover";

export const previewButtonContainerClasses = "relative w-[100%] max-w-[64px]";

export const previewImageClasses =
  "absolute inset-0 w-full h-full object-cover object-center";

export const previewBackdropClasses =
  "absolute inset-0 z-10 pointer-events-none bg-[rgba(0,0,0,0.25)] backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-150";

export const previewOverlayClasses =
  "absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150";

export const previewActionsClasses =
  "flex items-center pointer-events-auto relative z-10";

export const previewCloseButtonClasses =
  "absolute z-11 right-[-10px] top-[-10px] overflow-visible";

export const previewFileClasses =
  "bg-generic-medium p-3 [&_svg]:text-brand-heavy";

export const previewFileNameBaseClasses =
  "text-xs not-italic text-primary truncate mt-1";

export const previewFileSizeBaseClasses =
  "not-italic text-secondary text-[10px] truncate";
