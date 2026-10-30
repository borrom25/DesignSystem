export const rootClasses =
  "w-full min-w-0 border-0 flex flex-col cursor-pointer aria-disabled:cursor-default";

export const nestedClasses = "pr-0";

export const bodyClasses = "group flex min-w-0 flex-col gap-2";

export const headerClasses =
  "grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2 gap-y-2 select-none";

export const titleRowClasses =
  "col-start-2 row-start-1 flex min-w-0 flex-wrap items-center gap-2";

export const chevronClasses =
  "col-start-1 row-start-1 shrink-0 self-center stroke-secondary transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-aria-disabled:stroke-hint group-not-aria-disabled:group-hover:stroke-brand-text-heavy motion-reduce:transition-none";

export const chevronOpenClasses = "rotate-180";

export const headSlotClasses = "flex min-w-0 flex-wrap items-center gap-2";

export const descriptionClasses = "col-start-2 min-w-0";

export const descriptionTextClasses = "block w-full whitespace-normal";

export const progressClasses =
  "col-start-2 flex w-full min-w-0 items-center gap-2";

export const progressTopClasses =
  "col-start-2 flex w-full min-w-0 flex-col gap-1";

export const progressBarClasses = "min-w-0 w-full flex-1";

export const progressBarTopClasses = "min-w-0 w-full";

export const progressValueClasses = "shrink-0 tabular-nums";

export const progressValueTopClasses =
  "order-first self-end shrink-0 tabular-nums";

export const childrenClasses =
  "grid min-h-0 overflow-clip [contain:paint] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export const childrenOpenClasses = "grid-rows-[1fr]";

export const childrenClosedClasses = "grid-rows-[0fr] pointer-events-none";

export const childrenVariantsClasses = new Map<boolean, string>([
  [true, childrenOpenClasses],
  [false, childrenClosedClasses],
]);

export const childrenClipClasses = "min-h-0 overflow-clip";

export const childrenInnerClasses = "flex h-max w-full flex-col gap-2 pt-2";
