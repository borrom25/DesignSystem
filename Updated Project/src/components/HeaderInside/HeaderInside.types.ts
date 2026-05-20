import type { HTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { AccountMenuElement } from "../AccountMenu";
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
  showNotification?: boolean;
  accountMenu?: AccountMenuElement;
  backButtonTestId?: string;
  actionButtonTestId?: string;
  notificationButtonTestId?: string;
  onBackClick?: () => void;
  onActionClick?: () => void;
  onNotificationClick?: () => void;
}
