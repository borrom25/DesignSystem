import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn, withStopPropagationClick } from "@/utils";

export interface InputAdornmentButtonProps {
  icon: LucideIcon;
  iconSize: number;
  disabled?: boolean;
  buttonClassName: string;
  hoverClassName?: string;
  iconClassName?: string;
  hoverContent?: ReactNode;
  hoverContentClassName?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

export function InputAdornmentButton({
  icon: Icon,
  iconSize,
  disabled = false,
  buttonClassName,
  hoverClassName,
  iconClassName,
  hoverContent,
  hoverContentClassName,
  onClick,
  "aria-label": ariaLabel,
}: InputAdornmentButtonProps) {
  const handleClick = withStopPropagationClick(
    !disabled && onClick ? onClick : undefined
  );

  return (
    <button
      type="button"
      className={cn(buttonClassName, !disabled && hoverClassName)}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={handleClick}
    >
      <span className={iconClassName}>
        <Icon size={iconSize} />
      </span>
      {hoverContent && (
        <span className={hoverContentClassName}>{hoverContent}</span>
      )}
    </button>
  );
}
