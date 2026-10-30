import { cn } from "@/utils";
import type { HeaderProps } from "./Header.types";
import { getHeaderLayoutState } from "./Header.utils";
import { headerStyles } from "./styles";
import { MenuButton, LogoSection, HeaderActions } from "./ui";
import { useScreenSize } from "@/providers";

export function Header({
  logo,
  title = "платформа",
  children,
  topSlot,
  showMenuButton = true,
  showNotification = true,
  showThemeSwitcher = false,
  menuButtonTestId,
  notificationButtonTestId,
  onMenuClick,
  onNotificationClick,
  menuItems,
  className,
  accountMenuProps,
  ...props
}: HeaderProps) {
  const { isMobile } = useScreenSize();
  const hasRightActions =
    !!topSlot || showNotification || showThemeSwitcher || !!accountMenuProps;
  const { hasChildren, shouldShowSeparator } = getHeaderLayoutState(
    children,
    isMobile
  );

  return (
    <header
      className={cn(
        headerStyles.rootPosition[isMobile ? "mobile" : "desktop"],
        headerStyles.root,
        className
      )}
      role="banner"
      data-mobile={isMobile}
      data-has-children={hasChildren}
      {...props}
    >
      <div
        className={headerStyles.content}
        data-mobile={isMobile}
        data-has-actions={hasRightActions}
      >
        <div className={headerStyles.logoSection}>
          {showMenuButton && (
            <MenuButton
              onClick={onMenuClick}
              testId={menuButtonTestId}
              menuItems={menuItems}
            />
          )}
          <LogoSection logo={logo} title={title} />
        </div>

        {shouldShowSeparator && (
          <div className={headerStyles.separator} aria-hidden="true" />
        )}

        {hasChildren && children}
      </div>

      {hasRightActions && (
        <HeaderActions
          topSlot={topSlot}
          showNotification={showNotification}
          showThemeSwitcher={showThemeSwitcher}
          actionsClassName={headerStyles.actions}
          className={headerStyles.notificationButton}
          onNotificationClick={onNotificationClick}
          notificationButtonTestId={notificationButtonTestId}
          accountMenuProps={accountMenuProps}
        />
      )}
    </header>
  );
}
