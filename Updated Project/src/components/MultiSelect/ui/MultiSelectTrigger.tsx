import { forwardRef } from "react";
import type { MouseEvent, PointerEvent } from "react";
import { ChevronDown } from "lucide-react";
import { Size } from "@/types";
import { closeButtonSize, cn, getIconSize } from "@/utils";
import closeCircleIconRaw from "@/assets/icons/closeCircle.svg?raw";
import { Popover } from "@/components/Popover";
import { closeBtnStyles } from "@/components/CloseBtn/styles";
import { BaseTrigger, triggerStyles } from "@/shared/Select";
import { useMultiSelectContext } from "../MultiSelect.context";
import type { MultiSelectTriggerProps } from "../MultiSelect.types.ts";

export const MultiSelectTrigger = forwardRef<
  HTMLButtonElement,
  MultiSelectTriggerProps
>(function MultiSelectTrigger(
  {
    size = Size.Md,
    error = false,
    open: openProp,
    isFilled: isFilledProp,
    disabled: disabledProp,
    className,
    children,
    clearable: clearableProp,
    onClear: onClearProp,
    hasValue: hasValueProp,
    hideChevron: hideChevronProp,
    ...props
  },
  ref
) {
  const {
    value,
    open: contextOpen,
    disabled: contextDisabled,
    label,
    required,
    clearable: clearableContext,
    onClear: onClearContext,
  } = useMultiSelectContext();

  const open = openProp ?? contextOpen;
  const disabled = disabledProp ?? contextDisabled;
  const hasValue = hasValueProp ?? value.length > 0;
  const isFilled = isFilledProp ?? hasValue;
  const isLabelActive = !!label && (open || hasValue);
  const clearable = clearableProp ?? clearableContext;
  const onClear = onClearProp ?? onClearContext;
  const showClear = clearable && hasValue;
  const hideChevron = hideChevronProp ?? showClear;
  const iconSize = getIconSize(size, triggerStyles.iconSizeMap);
  const clearSize = closeButtonSize(size);
  const clearIconSize = closeBtnStyles.iconSizeMap[clearSize];

  const handleClear = (
    e: MouseEvent<HTMLSpanElement> | PointerEvent<HTMLSpanElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    onClear?.();
  };

  return (
    <Popover.Trigger>
      <BaseTrigger
        ref={ref}
        size={size}
        error={error}
        open={open}
        isFilled={isFilled}
        label={label}
        required={required}
        isLabelActive={isLabelActive}
        disabled={disabled}
        className={className}
        hideChevron={hideChevron}
        aria-haspopup="listbox"
        aria-expanded={open}
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
                  closeBtnStyles.size[clearSize],
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
        {...props}
      >
        {children}
      </BaseTrigger>
    </Popover.Trigger>
  );
});
