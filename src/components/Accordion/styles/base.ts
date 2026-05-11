export const baseClasses = "w-[544px]";

export const contentClasses = "flex flex-col gap-1";

export const headBlockClasses =
  "group flex gap-3 justify-between select-none cursor-pointer transition-colors duration-300 aria-disabled:cursor-default";

export const headClasses = "flex gap-3";

export const subtitleClasses =
  "text-sm leading-sm tracking-sm font-medium text-secondary group-not-aria-disabled duration-300 group-aria-disabled:text-hint";

export const titleClasses =
  "text-md leading-md tracking-md font-medium text-primary group-not-aria-disabled:group-hover:text-brand-text-heavy duration-300 group-aria-disabled:text-hint";

export const iconClasses =
  "stroke-secondary group-not-aria-disabled:group-hover:stroke-brand-text-heavy group-aria-disabled:stroke-hint duration-300";
export const actionClasses = "flex gap-5 items-center max-h-[max-content]";

export const childrenClasses = "grid transition-all duration-300 ease-in-out";

export const childrenVariantsClasses = new Map<boolean, string>([
  [true, "grid-rows-[1fr] opacity-100"],
  [false, "grid-rows-[0fr] opacity-0"],
]);

export const childrenHiddenClasses = "overflow-hidden";

export const separatorCLasses = "w-[100%] h-[1px] bg-line";
