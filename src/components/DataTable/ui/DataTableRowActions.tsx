import { useCallback } from "react";
import { ButtonDrop } from "@/components/ButtonDrop";
import type { ButtonDropItem } from "@/components/ButtonDrop/ButtonDrop.types";
import { Color, Size, Type } from "@/types";
import { useDataTableRowActionPopoverContext } from "../hooks/useDataTableRowActionPopover";
import { tableStyles } from "../styles";

interface DataTableRowActionsProps {
  rowId: string;
  actions?: ButtonDropItem[] | null;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function DataTableRowActions({
  rowId,
  actions,
  open,
  onOpenChange,
}: DataTableRowActionsProps) {
  const popover = useDataTableRowActionPopoverContext();
  const handleClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);
  const handleCloseAutoFocus = useCallback(
    (event: Event) => {
      if (popover?.shouldPreventCloseAutoFocus()) {
        event.preventDefault();
      }
    },
    [popover]
  );

  const items = actions ?? [];

  return (
    <div
      className={tableStyles.actionsControl}
      data-row-action-trigger={rowId}
      onClick={handleClick}
    >
      <ButtonDrop
        items={items}
        iconOnly
        size={Size.Xs}
        color={Color.Secondary}
        type={Type.Ghost}
        disabled={items.length === 0}
        open={open}
        onOpenChange={onOpenChange}
        onCloseAutoFocus={handleCloseAutoFocus}
        contentClassName="data-[state=closed]:animate-none"
      />
    </div>
  );
}
