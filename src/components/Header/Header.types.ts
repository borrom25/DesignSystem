import type { HTMLAttributes, ReactNode } from "react";
import type { AccountMenuProps } from "../AccountMenu";

export interface MenuItem {
  key: string;
  label: string;
  onClick: () => void;
}

export interface HeaderProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> {
  logo?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  topSlot?: ReactNode;
  showMenuButton?: boolean;
  showNotification?: boolean;
  /** Show the theme switcher between notifications and the account menu. */
  showThemeSwitcher?: boolean;
  menuButtonTestId?: string;
  notificationButtonTestId?: string;
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
  menuItems?: MenuItem[];
  accountMenuProps?: Omit<AccountMenuProps, "trigger">;
}
