import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn, getIconSize } from "@/utils";
import { Size } from "@/types";
import { FloatingLabel, FloatingLabelRequiredMark } from "@/shared/Input";
import { triggerStyles } from "../styles";

export type BaseTriggerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  size?: Size;
  error?: boolean;
  open?: boolean;
  isFilled?: boolean;
  label?: ReactNode;
  required?: boolean;
  isLabelActive?: boolean;
  hideChevron?: boolean;
  multiline?: boolean;
  children?: ReactNode;
  iconSlot?: ReactNode;
};

export const BaseTrigger = forwardRef<HTMLButtonElement, BaseTriggerProps>(
  function BaseTrigger(
    {
      size = Size.Md,
      error = false,
      open = false,
      isFilled = false,
      label,
      required = false,
      isLabelActive = false,
      disabled = false,
      hideChevron = false,
      multiline = false,
      className,
      children,
      iconSlot,
      ...props
    },
    ref
  ) {
    const iconSize = getIconSize(size, triggerStyles.iconSizeMap);
    const hasFloatingLabel = !!label;

    if (multiline) {
      return (
        <button
          ref={ref}
          type="button"
          disabled={disabled}
          className={cn(
            triggerStyles.base,
            triggerStyles.stackedSize[size],
            open && !error && triggerStyles.open,
            error && !isFilled && triggerStyles.error.default,
            error && isFilled && triggerStyles.error.filled,
            error && open && triggerStyles.error.open,
            className
          )}
          {...props}
        >
          {hasFloatingLabel && required && <FloatingLabelRequiredMark />}

          <span className={triggerStyles.stackedBody}>
            {hasFloatingLabel && (
              <FloatingLabel
                as="span"
                label={label}
                size={size}
                active={isLabelActive}
                disabled={disabled}
              />
            )}

            <span
              className={cn(
                triggerStyles.stackedContent,
                !isLabelActive && triggerStyles.stackedContentHidden
              )}
            >
              {children}
            </span>
          </span>

          <span
            className={cn(
              triggerStyles.iconSlot,
              triggerStyles.iconSlotSize[size]
            )}
          >
            {iconSlot ??
              (!hideChevron && (
                <ChevronDown
                  size={iconSize}
                  className={cn(triggerStyles.icon, open && "rotate-180")}
                />
              ))}
          </span>
        </button>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
          triggerStyles.base,
          triggerStyles.size[size],
          open && !error && triggerStyles.open,
          error && !isFilled && triggerStyles.error.default,
          error && isFilled && triggerStyles.error.filled,
          error && open && triggerStyles.error.open,
          className
        )}
        {...props}
      >
        {hasFloatingLabel && required && <FloatingLabelRequiredMark />}

        <span className={triggerStyles.body}>
          {hasFloatingLabel && (
            <FloatingLabel
              as="span"
              label={label}
              size={size}
              active={isLabelActive}
              disabled={disabled}
            />
          )}

          {children}
        </span>

        <span
          className={cn(
            triggerStyles.iconSlot,
            triggerStyles.iconSlotSize[size]
          )}
        >
          {iconSlot ??
            (!hideChevron && (
              <ChevronDown
                size={iconSize}
                className={cn(triggerStyles.icon, open && "rotate-180")}
              />
            ))}
        </span>
      </button>
    );
  }
);
