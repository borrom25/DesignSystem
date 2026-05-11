import { cn } from "@/utils";
import { Size } from "@/types";
import { ListItem } from "@/components/ListItem";
import { Slot } from "@radix-ui/react-slot";
import { sidebarStyles } from "../styles";
import { getCollapsedLabel } from "../Sidebar.utils";
import { SidebarItem as SidebarItemType } from "@/shared/Sidebar";

export interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
  active: boolean;
  onItemClick?: (id: string) => void;
}

//ToDo:

export function SidebarItem({
  item,
  collapsed,
  active,
  onItemClick,
}: SidebarItemProps) {
  const { id, icon: Icon, label, disabled, href, asChild, onClick } = item;

  const handleClick = () => {
    if (disabled) return;
    onClick?.();
    onItemClick?.(item.id);
  };

  const itemClassName = cn(
    !collapsed && sidebarStyles.item,
    collapsed && sidebarStyles.itemCollapsed
  );

  const labelText = typeof label === "string" ? label : undefined;
  const ariaLabel = labelText || `Sidebar item ${id}`;
  const title = getCollapsedLabel(label, collapsed);

  if (asChild && href) {
    return (
      <ListItem
        key={id}
        size={Size.Sm}
        selected={active}
        iconOnly={collapsed}
        className={itemClassName}
        asChild
        aria-label={ariaLabel}
      >
        <Slot>
          <a
            href={href}
            onClick={handleClick}
            title={title}
            aria-disabled={disabled}
            className={cn(disabled && sidebarStyles.linkDisabled)}
          >
            <Icon size={20} className={sidebarStyles.collapseIcon} />
            <span
              className={cn(
                sidebarStyles.itemLabel,
                collapsed && sidebarStyles.itemLabelHidden,
                !collapsed && sidebarStyles.itemLabelVisible
              )}
            >
              {label}
            </span>
          </a>
        </Slot>
      </ListItem>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        title={title}
        className={cn(
          sidebarStyles.linkNoUnderline,
          disabled && sidebarStyles.linkDisabled
        )}
        aria-disabled={disabled}
      >
        <ListItem
          size={Size.Sm}
          selected={active}
          iconOnly={collapsed}
          iconLeft={Icon}
          className={itemClassName}
          disabled={disabled}
          aria-label={ariaLabel}
        >
          {label}
        </ListItem>
      </a>
    );
  }

  return (
    <ListItem
      size={Size.Xs}
      selected={active}
      iconOnly={collapsed}
      iconLeft={Icon}
      className={itemClassName}
      disabled={disabled}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {label}
    </ListItem>
  );
}
