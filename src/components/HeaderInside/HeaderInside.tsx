import { cn } from "@/utils";
import { Color, Size, Type } from "@/types";
import { Button } from "@/components/Button";
import type { HeaderInsideProps } from "./HeaderInside.types";
import { getHeaderInsideLayoutState } from "./HeaderInside.utils";
import { headerInsideStyles } from "./styles";
import { BackButton, ImageSlot, TitleSection, HeaderActions } from "./ui";
import { useScreenSize } from "@/providers";

export function HeaderInside({
  imageSrc,
  title,
  subtitle,
  showActionButton = true,
  actionIcon: ActionIcon,
  children,
  topSlot,
  showNotification = true,
  showThemeSwitcher = false,
  accountMenuProps,
  backButtonTestId,
  actionButtonTestId,
  notificationButtonTestId,
  onBackClick,
  onActionClick,
  onNotificationClick,
  className,
  ...props
}: HeaderInsideProps) {
  const { isMobile } = useScreenSize();
  const hasRightActions =
    !!topSlot || showNotification || showThemeSwitcher || !!accountMenuProps;
  const { hasChildren, hasActionButton, shouldShowSeparator } =
    getHeaderInsideLayoutState(
      children,
      showActionButton,
      ActionIcon,
      isMobile
    );

  return (
    <header
      className={cn(
        headerInsideStyles.rootPosition[isMobile ? "mobile" : "desktop"],
        headerInsideStyles.root,
        className
      )}
      role="banner"
      data-mobile={isMobile}
      data-has-children={hasChildren}
      {...props}
    >
      <div className={headerInsideStyles.content} data-mobile={isMobile}>
        <div className={headerInsideStyles.actionSection}>
          <BackButton onClick={onBackClick} testId={backButtonTestId} />

          {imageSrc && <ImageSlot imageSrc={imageSrc} />}

          <TitleSection title={title} subtitle={subtitle} />

          {hasActionButton && ActionIcon && (
            <Button
              iconOnly={ActionIcon}
              type={Type.Flat}
              color={Color.Brand}
              size={Size.Xs}
              onClick={onActionClick}
              data-testid={actionButtonTestId}
              className={headerInsideStyles.actionButton}
            />
          )}

          {shouldShowSeparator && (
            <div className={headerInsideStyles.separator} aria-hidden="true" />
          )}
        </div>

        {hasChildren && (
          <div className={headerInsideStyles.children} data-mobile={isMobile}>
            {children}
          </div>
        )}
      </div>

      {hasRightActions && (
        <HeaderActions
          topSlot={topSlot}
          showNotification={showNotification}
          showThemeSwitcher={showThemeSwitcher}
          actionsClassName={headerInsideStyles.actions}
          notificationButtonClassName={headerInsideStyles.notificationButton}
          iconClassName={headerInsideStyles.icon}
          onNotificationClick={onNotificationClick}
          notificationButtonTestId={notificationButtonTestId}
          accountMenuProps={accountMenuProps}
        />
      )}
    </header>
  );
}
