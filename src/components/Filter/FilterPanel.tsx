import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Size, Type, Color } from "@/types";
import { cn } from "@/utils";
import type { FilterPanelProps } from "./Filter.types";
import { filterStyles } from "./styles";

export function FilterPanel({
  className,
  width,
  bodyClassName,
  footerClassName,
  children,
  searchValue,
  onSearchChange,
  onSearchClear,
  searchPlaceholder = "Поиск",
  searchSlot,
  showSearch,
  maxBodyHeight = 280,
  onReset,
  onApply,
  resetLabel = "Сбросить",
  applyLabel = "Применить",
  resetDisabled = false,
  applyDisabled = false,
  resetButtonType = Type.Flat,
  resetButtonColor = Color.Inverse,
  applyButtonType = Type.Fill,
  applyButtonColor = Color.Brand,
  actionButtonSize = Size.Sm,
  footer,
}: FilterPanelProps) {
  const shouldRenderSearch =
    showSearch ??
    Boolean(
      searchSlot || onSearchChange || searchValue !== undefined || onSearchClear
    );

  const shouldRenderFooter = Boolean(footer || onReset || onApply);

  return (
    <div
      className={cn(filterStyles.base, className)}
      style={width !== undefined ? { width } : undefined}
    >
      {shouldRenderSearch && (
        <div className={filterStyles.base}>
          {searchSlot ?? (
            <Input
              size={Size.Sm}
              value={searchValue ?? ""}
              placeholder={searchPlaceholder}
              clearable
              onClear={onSearchClear ?? (() => onSearchChange?.(""))}
              onChange={(event) => onSearchChange?.(event.target.value)}
            />
          )}
        </div>
      )}

      <div
        className={cn(filterStyles.body, bodyClassName)}
        style={
          maxBodyHeight !== undefined ? { maxHeight: maxBodyHeight } : undefined
        }
      >
        {children}
      </div>

      {shouldRenderFooter && (
        <div className={cn(filterStyles.footer, footerClassName)}>
          {footer ?? (
            <>
              <Button
                type={resetButtonType}
                color={resetButtonColor}
                size={actionButtonSize}
                className={filterStyles.button}
                disabled={resetDisabled}
                onClick={onReset}
              >
                {resetLabel}
              </Button>
              <Button
                type={applyButtonType}
                color={applyButtonColor}
                size={actionButtonSize}
                className={filterStyles.button}
                disabled={applyDisabled}
                onClick={onApply}
              >
                {applyLabel}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
