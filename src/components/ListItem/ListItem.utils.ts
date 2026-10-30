import { cn } from "@/utils";

const listItemTextBaseClassName =
  "flex-1 min-w-0 text-left transition-[opacity,max-width,transform] duration-200 ease-out motion-reduce:transition-none";

export function getListItemTextClassName(
  iconOnly: boolean,
  wrapText = true
): string {
  return cn(
    listItemTextBaseClassName,
    wrapText
      ? "whitespace-normal break-words"
      : "whitespace-nowrap overflow-hidden",
    iconOnly && "opacity-0 max-w-0 -translate-x-1 pointer-events-none delay-0",
    !iconOnly && "opacity-100 max-w-full translate-x-0 delay-100"
  );
}
