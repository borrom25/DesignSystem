import type { HTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { AccountMenuProps } from "../AccountMenu";

export interface HeaderInsideProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> {
  imageSrc?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  showActionButton?: boolean;
  actionIcon?: LucideIcon;
  children?: ReactNode;
  topSlot?: ReactNode;
  showNotification?: boolean;
  showThemeSwitcher?: boolean;
  accountMenuProps?: Omit<AccountMenuProps, "trigger">;
  backButtonTestId?: string;
  actionButtonTestId?: string;
  notificationButtonTestId?: string;
  onBackClick?: () => void;
  onActionClick?: () => void;
  onNotificationClick?: () => void;
}
