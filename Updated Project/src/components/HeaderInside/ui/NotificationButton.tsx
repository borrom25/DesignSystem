import { Bell } from "lucide-react";
import { HtmlType } from "@/types";

export interface NotificationButtonProps {
  onClick?: () => void;
  testId?: string;
  className: string;
  iconClassName: string;
}

export function NotificationButton({
  onClick,
  testId,
  className,
  iconClassName,
}: NotificationButtonProps) {
  return (
    <button
      type={HtmlType.Button}
      className={className}
      onClick={onClick}
      data-testid={testId}
      aria-label="Уведомления"
    >
      <Bell size={16} className={iconClassName} />
    </button>
  );
}
