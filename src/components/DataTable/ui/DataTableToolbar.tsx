import { Button } from "@/components/Button";
import { ButtonDrop } from "@/components/ButtonDrop";
import { SearchAutocomplete } from "@/components/SearchAutocomplete";
import { Color, Size, Type } from "@/types";
import { cn } from "@/utils";
import { FunnelX, Settings } from "lucide-react";
import { tableStyles } from "../styles";
import type { DataTableToolbarProps } from "../types";

export function DataTableToolbar({
  topSlot,
  showSearch = true,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Поиск",
  actions,
  actionsPlaceholder = "Настройки",
  actionsIcon,
  onActionChange,
  middleSlot,
  bottomSlot,
  className,
  maxSearchCount,
  filters,
  showResetFilters = true,
}: DataTableToolbarProps) {
  const hasFilters = filters && Object.keys(filters.values).length > 0;
  const hasActiveFilters = filters && filters.activeCount > 0;

  return (
    <div className={cn(tableStyles.toolbarRoot, className)}>
      {topSlot && <div className={tableStyles.toolbarTopSlot}>{topSlot}</div>}

      <div className={tableStyles.toolbarMainRow}>
        {showSearch && (
          <div className={tableStyles.toolbarSearch}>
            <SearchAutocomplete
              value={searchValue}
              onValueChange={onSearchChange}
              placeholder={searchPlaceholder}
              clearable
              maxCount={maxSearchCount}
            />
          </div>
        )}

        {!!middleSlot && (
          <div className={tableStyles.toolbarMiddleSlot}>{middleSlot}</div>
        )}

        {hasFilters && showResetFilters && (
          <Button
            color={Color.Secondary}
            type={Type.Flat}
            className={tableStyles.toolbarIconSize}
            iconLeft={FunnelX}
            size={Size.Sm}
            disabled={!hasActiveFilters}
            onClick={() => filters?.clearAll()}
          >
            Сбросить фильтры
          </Button>
        )}

        {actions && actions.length > 0 && (
          <div className={tableStyles.toolbarActions}>
            <ButtonDrop
              className={tableStyles.toolbarIconSize}
              items={actions}
              iconLeft={
                actionsIcon === null ? undefined : (actionsIcon ?? Settings)
              }
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
