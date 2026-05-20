import { Bell } from "lucide-react";
import { Color, Size, Type } from "@/types";
import { Button } from "@/components";

export interface NotificationButtonProps {
  onClick?: () => void;
  testId?: string;
  className: string;
}

export function NotificationButton({
  onClick,
  testId,
  className,
}: NotificationButtonProps) {
  return (
    <Button
      onClick={onClick}
      data-testid={testId}
      className={className}
      aria-label="Уведомления"
      iconOnly={Bell}
      color={Color.Brand}
      type={Type.Flat}
      size={Size.Sm}
    />
  );
}
