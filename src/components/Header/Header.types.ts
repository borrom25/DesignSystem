import type { HTMLAttributes, ReactNode } from "react";
import type { AccountMenuElement } from "../AccountMenu";

export interface HeaderProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> {
  logo?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  showMenuButton?: boolean;
  showNotification?: boolean;
  menuButtonTestId?: string;
  notificationButtonTestId?: string;
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
  accountMenu?: AccountMenuElement;
}
