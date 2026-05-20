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
  showNotification = true,
  accountMenu,
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
  const { hasChildren, hasActionButton, shouldShowSeparator } =
    getHeaderInsideLayoutState(
      children,
      showActionButton,
      ActionIcon,
      isMobile
    );

  return (
    <header
      className={cn(headerInsideStyles.root, className)}
      role="banner"
      data-mobile={isMobile}
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
              size={Size.Sm}
              onClick={onActionClick}
              data-testid={actionButtonTestId}
            />
          )}

          {shouldShowSeparator && (
            <div className={headerInsideStyles.separator} aria-hidden="true" />
          )}
        </div>

        {hasChildren && children}
      </div>

      <HeaderActions
        showNotification={showNotification}
        actionsClassName={headerInsideStyles.actions}
        notificationButtonClassName={headerInsideStyles.notificationButton}
        iconClassName={headerInsideStyles.icon}
        onNotificationClick={onNotificationClick}
        notificationButtonTestId={notificationButtonTestId}
        accountMenu={accountMenu}
      />
    </header>
  );
}
