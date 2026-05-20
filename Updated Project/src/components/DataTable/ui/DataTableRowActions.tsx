import { useCallback } from "react";
import { ButtonDrop } from "@/components/ButtonDrop";
import type { ButtonDropItem } from "@/components/ButtonDrop/ButtonDrop.types";
import { Color, Size, Type } from "@/types";
import { tableStyles } from "../styles";

interface DataTableRowActionsProps {
  actions?: ButtonDropItem[] | null;
}

export function DataTableRowActions({ actions }: DataTableRowActionsProps) {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  if (!actions || actions.length === 0) return null;

  return (
    <div className={tableStyles.actionsControl} onClick={handleClick}>
      <ButtonDrop
        items={actions}
        iconOnly
        size={Size.Xs}
        color={Color.Inverse}
        type={Type.Ghost}
      />
    </div>
  );
}
