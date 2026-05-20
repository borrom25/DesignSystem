import { cn } from "@/utils";

const listItemTextBaseClassName =
  "flex-1 min-w-0 text-left transition-[opacity,max-width,transform] duration-200 ease-out motion-reduce:transition-none whitespace-nowrap overflow-hidden";

export function getListItemTextClassName(iconOnly: boolean): string {
  return cn(
    listItemTextBaseClassName,
    iconOnly && "opacity-0 max-w-0 -translate-x-1 pointer-events-none delay-0",
    !iconOnly && "opacity-100 max-w-full translate-x-0 delay-100"
  );
}
