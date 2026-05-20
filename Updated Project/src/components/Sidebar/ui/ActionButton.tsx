import { cn } from "@/utils";
import { Button } from "@/components/Button";
import type { SidebarAction } from "../Sidebar.types";
import { Color, Size, Type } from "@/types";
import { sidebarStyles } from "../styles";

export interface ActionButtonProps {
  action: SidebarAction;
  collapsed: boolean;
}

export function ActionButton({ action, collapsed }: ActionButtonProps) {
  const { icon, label, ariaLabel, buttonProps } = action;

  const baseClassName = cn(sidebarStyles.actionButton, buttonProps?.className);

  return (
    <Button
      {...buttonProps}
      size={buttonProps?.size ?? Size.Sm}
      type={buttonProps?.type ?? Type.Flat}
      color={buttonProps?.color ?? Color.Inverse}
      className={cn(
        baseClassName,
        collapsed
          ? sidebarStyles.actionButtonCollapsed
          : sidebarStyles.actionButtonExpanded
      )}
      iconLeft={collapsed ? undefined : icon}
      iconOnly={collapsed ? icon : undefined}
      aria-label={ariaLabel ?? "Sidebar action"}
    >
      <span
        className={cn(
          sidebarStyles.actionButtonLabel,
          collapsed
            ? sidebarStyles.actionButtonLabelHidden
            : sidebarStyles.actionButtonLabelVisible
        )}
      >
        {label}
      </span>
    </Button>
  );
}
