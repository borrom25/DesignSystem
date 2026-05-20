import { Avatar } from "@/components/Avatar";
import type { AccountMenuElement } from "@/components/AccountMenu";
import { NotificationButton } from "./NotificationButton";
import { cloneElement, isValidElement } from "react";

export interface HeaderActionsProps {
  showNotification?: boolean;
  actionsClassName: string;
  className: string;
  onNotificationClick?: () => void;
  notificationButtonTestId?: string;
  accountMenu?: AccountMenuElement;
}

export function HeaderActions({
  showNotification = true,
  actionsClassName,
  className,
  onNotificationClick,
  notificationButtonTestId,
  accountMenu,
}: HeaderActionsProps) {
  const AccountMenuWithTrigger = isValidElement(accountMenu)
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
          className={className}
        />
      )}
      {accountMenu && AccountMenuWithTrigger}
    </div>
  );
}
