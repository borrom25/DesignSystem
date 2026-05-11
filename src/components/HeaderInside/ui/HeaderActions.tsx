import { Avatar } from "@/components/Avatar";
import type { AccountMenuElement } from "@/components/AccountMenu";
import { NotificationButton } from "./NotificationButton";
import { cloneElement, isValidElement } from "react";

export interface HeaderActionsProps {
  showNotification?: boolean;
  actionsClassName: string;
  notificationButtonClassName: string;
  iconClassName: string;
  onNotificationClick?: () => void;
  notificationButtonTestId?: string;
  accountMenu?: AccountMenuElement;
}

export function HeaderActions({
  showNotification = true,
  actionsClassName,
  notificationButtonClassName,
  iconClassName,
  onNotificationClick,
  notificationButtonTestId,
  accountMenu,
}: HeaderActionsProps) {
  const accountMenuWithTrigger = isValidElement(accountMenu)
    ? cloneElement(accountMenu, {
        trigger: <Avatar size={36} src={accountMenu.props.src} withBorder />,
        ...accountMenu.props,
      })
    : accountMenu;

  return (
    <div className={actionsClassName}>
      {showNotification && (
        <NotificationButton
          onClick={onNotificationClick}
          testId={notificationButtonTestId}
          className={notificationButtonClassName}
          iconClassName={iconClassName}
        />
      )}
      {accountMenu && accountMenuWithTrigger}
    </div>
  );
}
