export const rootPositionClasses = {
  desktop: "fixed top-7 left-7 right-7",
  mobile: "sticky m-7 w-auto",
} as const;

export const rootClasses =
  "z-40 flex h-19 items-center justify-between gap-9 rounded-scale-3xl border border-line bg-generic px-(--spacing-7) py-0 data-[mobile=true]:h-auto data-[mobile=true]:max-h-[88px] data-[mobile=true]:data-[has-children=true]:max-h-none data-[mobile=true]:items-start";

export const contentClasses =
  "flex min-w-0 flex-1 items-center gap-7 data-[mobile=true]:flex-col data-[mobile=true]:gap-2 data-[mobile=true]:items-start";

export const logoSectionClasses = "flex shrink-0 items-center gap-7";

export const notificationButtonClasses = "rounded-full";

export const logoWrapperClasses = "flex items-center gap-2";

export const logoImageClasses = "h-[24px] w-[24px] shrink-0 object-contain";

export const titleClasses =
  "text-primary font-roboto-flex text-[16px] font-bold leading-[24px] tracking-[-0.16px] whitespace-nowrap data-[mobile=true]:text-[14px]";

export const separatorClasses =
  "h-[32px] w-px shrink-0 bg-generic-medium-hover";

export const actionsClasses = "ml-auto flex shrink-0 items-center gap-4";

export const menuList = "flex flex-col gap-2";
