export const insideRootPositionClasses = {
  desktop: "fixed top-7 left-7 right-7",
  mobile: "sticky m-7 w-auto",
} as const;

export const insideRootClasses =
  "z-40 flex h-19 items-center justify-between gap-9 rounded-scale-3xl border border-line bg-generic px-(--spacing-7) py-0 data-[mobile=true]:h-auto data-[mobile=true]:max-h-[88px] data-[mobile=true]:data-[has-children=true]:max-h-none data-[mobile=true]:items-start";

export const contentClasses =
  "flex min-w-0 flex-1 items-center gap-7 data-[mobile=true]:flex-col data-[mobile=true]:items-start data-[mobile=true]:gap-2";

export const actionSectionClasses =
  "flex min-w-0 max-w-full shrink-0 items-center gap-7";

export const childrenClasses =
  "min-w-0 flex-1 overflow-visible data-[mobile=true]:w-full data-[mobile=true]:flex-none";

export const backButtonClasses =
  "flex shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0";

export const iconClasses = "text-brand-text-heavy";

export const imageSlotClasses =
  "flex size-(--size-btn-sm-h) shrink-0 flex-col items-center justify-center gap-3 rounded-[8px] border border-dashed border-line-hover bg-generic-medium p-4";

export const imageSlotImageClasses = "h-full w-full rounded-[6px] object-cover";

export const titleWrapperClasses =
  "flex min-w-0 flex-col justify-center overflow-hidden";

export const insideTitleClasses =
  "block min-w-0 overflow-hidden text-ellipsis font-roboto-flex text-md font-medium leading-md tracking-md text-primary whitespace-nowrap";

export const subtitleClasses =
  "overflow-hidden text-ellipsis font-roboto-flex text-xs font-regular leading-xs tracking-xs text-secondary whitespace-nowrap";

export const separatorClasses =
  "h-[32px] w-px shrink-0 bg-generic-medium-hover";

export const actionButtonClasses = "shrink-0";

export const actionsClasses = "ml-auto flex shrink-0 items-center gap-4";

export const notificationButtonClasses =
  "flex h-(--size-component-sm-icon-only-dimensions) w-(--size-component-sm-icon-only-dimensions) shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-brand-light p-0 transition-colors hover:bg-brand-light-hover active:bg-brand-medium";
