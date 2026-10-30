import { CloseBtn } from "@/components/CloseBtn";
import { Size } from "@/types";
import { cn } from "@/utils";
import type { ActionPopoverProps } from "./ActionPopover.types";
import { getActionPopoverLayoutState } from "./ActionPopover.utils";
import { actionPopoverStyles } from "./styles";

export function ActionPopover({
  selectedLabel,
  children,
  onClose,
  closeAriaLabel,
  className,
  ...restProps
}: ActionPopoverProps) {
  const { showSelectedLabel, showContent, showClose } =
    getActionPopoverLayoutState(selectedLabel, children, onClose);

  return (
    <div className={cn(actionPopoverStyles.wrapper, className)} {...restProps}>
      {showContent && (
        <div className={actionPopoverStyles.content}>
          {showSelectedLabel && (
            <span className={actionPopoverStyles.selectedLabel}>
              {selectedLabel}
            </span>
          )}
          {children && (
            <div className={actionPopoverStyles.slot}>{children}</div>
          )}
        </div>
      )}
      {showClose && (
        <CloseBtn
          size={Size.Md}
          className={actionPopoverStyles.close}
          aria-label={closeAriaLabel}
          onClick={onClose}
        />
      )}
    </div>
  );
}
