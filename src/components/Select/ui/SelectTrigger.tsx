import { ChevronDown } from "lucide-react";
import { Size } from "@/types";
import { cn, getIconSize } from "@/utils";
import closeCircleIconRaw from "@/assets/icons/closeCircle.svg?raw";
import { Popover } from "@/components/Popover";
import { closeBtnStyles } from "@/components/CloseBtn/styles";
import { BaseTrigger, triggerStyles } from "@/shared/Select";
import { useSelectContext } from "../Select.context";
import type { SelectTriggerProps } from "../types";

export function SelectTrigger({
  size = Size.Md,
  error = false,
  className,
  children,
  clearable: clearableProp,
  onClear: onClearProp,
  hideChevron: hideChevronProp,
  isFilled: isFilledProp,
}: SelectTriggerProps) {
  const {
    open,
    disabled,
    value,
    clearable: clearableContext,
    label,
    required,
    onClear: onClearContext,
  } = useSelectContext();

  const hasScalarValue = value != null && value !== "";
  const isFilled = isFilledProp ?? hasScalarValue;
  const isLabelActive = !!label && (open || isFilled);
  const onClear = onClearProp ?? onClearContext;
  const clearable = clearableProp ?? clearableContext;
  const showClear = clearable && hasScalarValue && !disabled;
  const hideChevron = hideChevronProp ?? showClear;
  const iconSize = getIconSize(size, triggerStyles.iconSizeMap);
  const clearIconSize = closeBtnStyles.iconSizeMap["md"];

  const handleClear = (
    e: React.MouseEvent<HTMLSpanElement> | React.PointerEvent<HTMLSpanElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    onClear?.();
  };

  return (
    <Popover.Trigger>
      <BaseTrigger
        size={size}
        error={error}
        open={open}
        isFilled={isFilled}
        label={label}
        required={required}
        isLabelActive={isLabelActive}
        disabled={disabled}
        hideChevron={hideChevron}
        className={className}
        iconSlot={
          showClear ? (
            <span className="relative inline-flex size-full items-center justify-center">
              <ChevronDown
                size={iconSize}
                className={cn(
                  triggerStyles.icon,
                  open && "rotate-180",
                  "opacity-100 scale-100 transition-[opacity,scale,transform] duration-200 ease-out group-hover:opacity-0 group-hover:scale-95",
                  open && "opacity-0 scale-95"
                )}
              />
              <span
                role="button"
                tabIndex={-1}
                onPointerDown={handleClear}
                onClick={handleClear}
                className={cn(
                  closeBtnStyles.base,
                  closeBtnStyles.size["md"],
                  triggerStyles.clearButton,
                  open && "opacity-100 scale-100 pointer-events-auto",
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                )}
                aria-label="Clear"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    closeBtnStyles.icon,
                    closeBtnStyles.error.get(false)
                  )}
                  style={{
                    width: `${clearIconSize}px`,
                    height: `${clearIconSize}px`,
                  }}
                  dangerouslySetInnerHTML={{ __html: closeCircleIconRaw }}
                />
              </span>
            </span>
          ) : undefined
        }
      >
        {children}
      </BaseTrigger>
    </Popover.Trigger>
  );
}
