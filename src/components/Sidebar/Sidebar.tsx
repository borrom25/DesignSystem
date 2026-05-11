import { useState } from "react";
import { cn } from "@/utils";
import { sidebarStyles } from "./styles";
import { SidebarItem, CollapseButton, ActionButton } from "./ui";
import { useScreenSize } from "@/providers";
import { Modal, SidebarProps } from "@/components";
import { SidebarTrigger } from "@/shared/Sidebar";

export function Sidebar({
  defaultCollapsed = false,
  title,
  items,
  action,
  activeItemId,
  onItemClick,
  className,
  type = "main",
  ...restProps
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const { isMobile } = useScreenSize();

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  const rootCLasses =
    !isMobile &&
    (collapsed ? sidebarStyles.rootCollapsed : sidebarStyles.rootExpanded);

  const headerCLasses =
    !isMobile &&
    (collapsed ? sidebarStyles.headerCollapsed : sidebarStyles.headerGap);

  const titleCLasses =
    !isMobile &&
    (collapsed ? sidebarStyles.titleHidden : sidebarStyles.titleVisible);

  const isDesktopCollapsed = !isMobile && collapsed;

  const content = (
    <aside
      className={cn(
        isMobile ? sidebarStyles.mobileRoot : sidebarStyles.root,
        rootCLasses,
        className
      )}
      {...restProps}
    >
      <div className={cn(sidebarStyles.header, headerCLasses)}>
        {!isMobile && (
          <CollapseButton collapsed={collapsed} onClick={toggleCollapsed} />
        )}

        {title && (
          <span
            data-mobile={isMobile}
            className={cn(sidebarStyles.title, titleCLasses)}
          >
            {title}
          </span>
        )}
      </div>

      <nav
        className={cn(
          sidebarStyles.itemsContainer,
          isDesktopCollapsed && sidebarStyles.itemsContainerCollapsed
        )}
      >
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            collapsed={isDesktopCollapsed}
            active={activeItemId === item.id}
            onItemClick={onItemClick}
          />
        ))}
      </nav>

      {action && (
        <div
          className={cn(
            sidebarStyles.footer,
            isDesktopCollapsed && sidebarStyles.footerCollapsed
          )}
          data-mobile={isMobile}
        >
          <ActionButton action={action} collapsed={isDesktopCollapsed} />
        </div>
      )}
    </aside>
  );

  if (isMobile) {
    return (
      <>
        <SidebarTrigger
          type={type}
          onClick={toggleCollapsed}
          items={items}
          value={activeItemId}
          onItemClick={onItemClick}
        />
        <Modal sideMenu open={collapsed} onOpenChange={setCollapsed}>
          {content}
        </Modal>
      </>
    );
  }

  return content;
}
