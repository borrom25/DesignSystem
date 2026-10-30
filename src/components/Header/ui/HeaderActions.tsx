import { AccountMenu } from "@/components/AccountMenu";
import type { AccountMenuProps } from "@/components/AccountMenu";
import { Avatar } from "@/components/Avatar";
import { NotificationButton } from "./NotificationButton";
import type { ReactNode } from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export interface HeaderActionsProps {
  showNotification?: boolean;
  showThemeSwitcher?: boolean;
  actionsClassName: string;
  className: string;
  onNotificationClick?: () => void;
  notificationButtonTestId?: string;
  accountMenuProps?: Omit<AccountMenuProps, "trigger">;
  topSlot?: ReactNode;
}

export function HeaderActions({
  showNotification = true,
  showThemeSwitcher = false,
  actionsClassName,
  className,
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
          className={className}
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
