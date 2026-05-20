import { cn } from "@/utils";
import { tableStyles } from "../styles";
import type {
  DataTablePopoverActionContext,
  DataTablePopoverActionProps,
} from "../types";
import {
  resolveDataTablePopoverActionChildren,
  resolveDataTablePopoverActionSelectedLabel,
} from "../utils";
import { DataTablePopoverActionContent } from "./DataTablePopoverActionContent";

interface DataTablePopoverActionComponentProps<TData> {
  context: DataTablePopoverActionContext<TData>;
  options: DataTablePopoverActionProps<TData>;
}

export function DataTablePopoverAction<TData>({
  context,
  options,
}: DataTablePopoverActionComponentProps<TData>) {
  const children = resolveDataTablePopoverActionChildren(
    options.children,
    context
  );
  const selectedLabel = resolveDataTablePopoverActionSelectedLabel(
    options.selectedLabel,
    context.selectedCount
  );

  const handleClose = () => {
    options.onClose?.(context);
    context.hide();
  };

  return (
    <div className={tableStyles.popoverActionWrapper}>
      <div className={cn(tableStyles.popoverAction, options.className)}>
        <DataTablePopoverActionContent
          selectedLabel={selectedLabel}
          onClose={handleClose}
        >
          {children}
        </DataTablePopoverActionContent>
      </div>
    </div>
  );
}
