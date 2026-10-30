export const baseClasses = "w-full";

export const contentClasses = "flex flex-col gap-1";

export const headBlockClasses =
  "group flex items-center gap-3 justify-between select-none cursor-pointer transition-colors duration-300 aria-disabled:cursor-default";

export const headClasses = "flex items-center gap-3";

export const titleGroupClasses = "flex flex-col justify-center";

export const titleGroupSingleLineClasses = "";

export const subtitleClasses =
  "m-0 block text-secondary duration-300 group-aria-disabled:text-hint";

export const prefixClasses = "flex items-center";

export const titleClasses =
  "m-0 block text-primary duration-300 group-aria-disabled:text-hint";

export const titleHoverClasses =
  "group-not-aria-disabled:group-hover:text-brand-text-heavy";

export const iconClasses =
  "stroke-secondary group-aria-disabled:stroke-hint duration-300";

export const iconHoverClasses =
  "group-not-aria-disabled:group-hover:stroke-brand-text-heavy";

export const iconCustomHoverClasses =
  "group-not-aria-disabled:group-hover:stroke-(--accordion-icon-hover-color)";

export const actionClasses = "flex shrink-0 items-center gap-5";

export const childrenClasses = "grid transition-all duration-300 ease-in-out";

export const childrenVariantsClasses = new Map<boolean, string>([
  [true, "grid-rows-[1fr] opacity-100"],
  [false, "grid-rows-[0fr] opacity-0"],
]);

export const childrenHiddenClasses = "overflow-hidden";

export const separatorCLasses = "h-0 w-full shrink-0 border-t border-line";
