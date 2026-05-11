import { Search } from "lucide-react";
import { Input } from "@/components/Input";
import { ButtonDrop } from "@/components/ButtonDrop";
import { cn } from "@/utils";
import { Size } from "@/types";
import type { DataTableToolbarProps } from "../types";
import { tableStyles } from "../styles";

export function DataTableToolbar({
  topSlot,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Поиск",
  rowCount,
  rowCountLabel = "Счетчик строк",
  rowCountValue,
  actions,
  actionsPlaceholder = "Действия",
  onActionChange,
  middleSlot,
  bottomSlot,
  className,
}: DataTableToolbarProps) {
  return (
    <div className={cn(tableStyles.toolbarRoot, className)}>
      {topSlot && <div className={tableStyles.toolbarTopSlot}>{topSlot}</div>}

      <div className={tableStyles.toolbarMainRow}>
        <div className={tableStyles.toolbarSearch}>
          <Input
            size={Size.Sm}
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder={searchPlaceholder}
            iconLeft={Search}
            clearable
          />
        </div>

        {rowCount !== undefined && (
          <div className={tableStyles.toolbarCounter}>
            {rowCountLabel !== null && rowCountLabel !== undefined && (
              <span className={tableStyles.toolbarCounterLabel}>
                {rowCountLabel}:
              </span>
            )}
            <span className={tableStyles.toolbarCounterValue}>
              {rowCountValue ?? rowCount}
            </span>
          </div>
        )}

        {!!middleSlot && (
          <div className={tableStyles.toolbarMiddleSlot}>{middleSlot}</div>
        )}

        {actions && actions.length > 0 && (
          <div className={tableStyles.toolbarActions}>
            <ButtonDrop
              items={actions}
              placeholder={actionsPlaceholder}
              size={Size.Sm}
              onChange={onActionChange}
              matchTriggerWidth={false}
            />
          </div>
        )}
      </div>

      {bottomSlot && (
        <div className={tableStyles.toolbarBottomSlot}>{bottomSlot}</div>
      )}
    </div>
  );
}
