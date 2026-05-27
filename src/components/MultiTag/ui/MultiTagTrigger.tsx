import { ChevronDown } from "lucide-react";
import { Size } from "@/types";
import { cn, getIconSize } from "@/utils";
import { CloseBtn } from "@/components/CloseBtn";
import { FloatingLabel, FloatingLabelRequiredMark } from "@/shared/Input";
import { getTagsMaxHeight } from "../utils/getTagsMaxHeight";
import { multiTagStyles, iconSizeMap, triggerStyles } from "../styles";
import type { MultiTagTriggerProps } from "../types";

export function MultiTagTrigger({
  size = Size.Md,
  error,
  open = false,
  isFilled = false,
  disabled,
  className,
  ref,
  children,
  clearable = false,
  onClear,
  label,
  required = false,
  maxVisibleRows = 2,
  ...props
}: MultiTagTriggerProps) {
  const hasLabel = !!label;
  const isLabelActive = hasLabel && (open || isFilled);
  const showLabelSpacer = hasLabel && isLabelActive;
  const showClear = clearable && isFilled && !disabled;
  const iconSize = getIconSize(size, iconSizeMap);
  const maxHeight = getTagsMaxHeight(size, maxVisibleRows);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onClear?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-haspopup="listbox"
      aria-expanded={open}
      onKeyDown={handleKeyDown}
      className={cn(
        triggerStyles.base,
        multiTagStyles.trigger.size[size],
        isFilled
          ? multiTagStyles.trigger.withTags
          : multiTagStyles.trigger.empty,
        open && !error && multiTagStyles.trigger.open,
        error && !isFilled && multiTagStyles.trigger.error.default,
        error && isFilled && multiTagStyles.trigger.error.filled,
        error && open && multiTagStyles.trigger.error.open,
        className
      )}
      {...props}
    >
      {hasLabel && required && <FloatingLabelRequiredMark />}

      {hasLabel && (
        <FloatingLabel
          as="span"
          label={label}
          size={size}
          active={isLabelActive}
          disabled={disabled}
          className={cn(
            multiTagStyles.floatingLabel.offsetSize[size],
            isLabelActive && multiTagStyles.floatingLabel.active,
            isLabelActive &&
              multiTagStyles.floatingLabel.activeTypographySize[size]
          )}
        />
      )}

      <div
        className={cn(
          multiTagStyles.tagsContainerWrapper,
          multiTagStyles.tagsContainerSize[size],
          !showLabelSpacer && !isFilled && "justify-center"
        )}
      >
        {showLabelSpacer && (
          <div
            className={multiTagStyles.labelZoneSpacer[size]}
            aria-hidden="true"
          />
        )}

        <div
          className={cn(
            multiTagStyles.tagsContainer,
            isFilled && multiTagStyles.tagsContainerWithTags,
            !isFilled && multiTagStyles.tagsContainerEmpty
          )}
          style={isFilled ? { maxHeight } : undefined}
        >
          {children}
        </div>
      </div>

      <div
        className={cn(
          multiTagStyles.controls.base,
          multiTagStyles.controls.size[size],
          isFilled && multiTagStyles.controls.withTags,
          isFilled && showLabelSpacer && multiTagStyles.labelZoneOffset[size],
          isFilled &&
            !showLabelSpacer &&
            multiTagStyles.controls.withTagsSize[size]
        )}
      >
        {showClear ? (
          <CloseBtn
            size={Size.Md}
            onClick={handleClear}
            disabled={disabled}
            aria-label="Очистить все"
            error={error}
          />
        ) : (
          <ChevronDown
            size={iconSize}
            className={cn(
              multiTagStyles.icon,
              open && multiTagStyles.chevronOpen
            )}
          />
        )}
      </div>
    </div>
  );
}
