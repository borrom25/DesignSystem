import { AccountMenu } from "@/components/AccountMenu";
import type { AccountMenuProps } from "@/components/AccountMenu";
import { Avatar } from "@/components/Avatar";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { NotificationButton } from "./NotificationButton";
import type { ReactNode } from "react";

export interface HeaderActionsProps {
  showNotification?: boolean;
  showThemeSwitcher?: boolean;
  actionsClassName: string;
  notificationButtonClassName: string;
  iconClassName: string;
  onNotificationClick?: () => void;
  notificationButtonTestId?: string;
  accountMenuProps?: Omit<AccountMenuProps, "trigger">;
  topSlot?: ReactNode;
}

export function HeaderActions({
  showNotification = true,
  showThemeSwitcher = false,
  actionsClassName,
  notificationButtonClassName,
  iconClassName,
  onNotificationClick,
  notificationButtonTestId,
  accountMenuProps,
  topSlot,
}: HeaderActionsProps) {
  return (
    <div className={actionsClassName}>
      {topSlot}
      {showNotification && (
        <NotificationButton
          onClick={onNotificationClick}
          testId={notificationButtonTestId}
          className={notificationButtonClassName}
          iconClassName={iconClassName}
        />
      )}
      {showThemeSwitcher && <ThemeSwitcher size="xs" />}
      {accountMenuProps && (
        <AccountMenu
          {...accountMenuProps}
          trigger={<Avatar size={36} src={accountMenuProps.src} withBorder />}
        />
      )}
    </div>
  );
}
