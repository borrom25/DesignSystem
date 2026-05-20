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
  showMenuButton = true,
  showNotification = true,
  menuButtonTestId,
  notificationButtonTestId,
  onMenuClick,
  onNotificationClick,
  className,
  accountMenu,
  ...props
}: HeaderProps) {
  const { isMobile } = useScreenSize();
  const { hasChildren, shouldShowSeparator } = getHeaderLayoutState(
    children,
    showNotification,
    isMobile
  );

  return (
    <header
      className={cn(headerStyles.root, className)}
      role="banner"
      data-mobile={isMobile}
      {...props}
    >
      <div className={headerStyles.content} data-mobile={isMobile}>
        <div className={headerStyles.logoSection}>
          {showMenuButton && (
            <MenuButton onClick={onMenuClick} testId={menuButtonTestId} />
          )}
          <LogoSection logo={logo} title={title} />
        </div>

        {shouldShowSeparator && (
          <div className={headerStyles.separator} aria-hidden="true" />
        )}

        {hasChildren && children}
      </div>

      <HeaderActions
        showNotification={showNotification}
        actionsClassName={headerStyles.actions}
        className={headerStyles.notificationButton}
        onNotificationClick={onNotificationClick}
        notificationButtonTestId={notificationButtonTestId}
        accountMenu={accountMenu}
      />
    </header>
  );
}
