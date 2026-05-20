import { cn } from "@/utils";
import type { SelectGroupProps, SelectLabelProps } from "../types";

export function SelectGroup({ className, children }: SelectGroupProps) {
  return <div className={cn("py-1", className)}>{children}</div>;
}

export function SelectLabel({ className, children }: SelectLabelProps) {
  return (
    <div
      className={cn(
        "px-3 py-1 text-xs font-semibold text-secondary",
        className
      )}
    >
      {children}
    </div>
  );
}
