import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { sidebarStyles } from "../styles";
import { getCollapsedLabel } from "../Sidebar.utils";
import { SidebarItem as SidebarItemType } from "@/shared/Sidebar";
import type { MouseEvent } from "react";

export interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
  active: boolean;
  onItemClick?: (id: string) => void;
}

export function SidebarItem({
  item,
  collapsed,
  active,
  onItemClick,
}: SidebarItemProps) {
  const { id, icon: Icon, label, disabled, href, asChild, onClick } = item;
  const hasClickAction = Boolean(href || onClick || onItemClick);
  const isDisabled = Boolean(disabled || !hasClickAction);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick?.();
    onItemClick?.(item.id);
  };

  const itemClassName = cn(
    sidebarStyles.item,
    collapsed && sidebarStyles.itemCollapsed
  );

  const labelText = typeof label === "string" ? label : undefined;
  const ariaLabel = labelText || `Sidebar item ${id}`;
  const title = getCollapsedLabel(label, collapsed);

  const itemContent = (
    <>
      <Icon size={20} className={sidebarStyles.itemIcon} />
      <span
        className={cn(
          sidebarStyles.itemLabel,
          collapsed && sidebarStyles.itemLabelHidden,
          !collapsed && sidebarStyles.itemLabelVisible
        )}
      >
        <span className={sidebarStyles.itemLabelInner}>{label}</span>
      </span>
    </>
  );

  const commonProps = {
    className: itemClassName,
    title,
    onClick: handleClick,
    tabIndex: isDisabled ? -1 : undefined,
  };

  if (href) {
    if (asChild) {
      return (
        <Slot>
          <a
            key={id}
            href={href}
            {...commonProps}
            aria-label={ariaLabel}
            aria-disabled={isDisabled}
            aria-pressed={active}
          >
            {itemContent}
          </a>
        </Slot>
      );
    }

    return (
      <a
        key={id}
        href={href}
        {...commonProps}
        aria-label={ariaLabel}
        aria-disabled={isDisabled}
        aria-pressed={active}
      >
        {itemContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={itemClassName}
      disabled={isDisabled}
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-pressed={active}
      aria-disabled={isDisabled}
      title={title}
    >
      {itemContent}
    </button>
  );
}
