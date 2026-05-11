import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils";
import type { Size } from "@/types";
import type { TabType } from "@/components/Tab";
import { Tab } from "@/components/Tab";
import { paginationStyles } from "../styles";

interface PaginationButtonProps {
  type: TabType;
  size: Size;
  icon: LucideIcon;
  disabled: boolean;
  onClick: () => void;
  label: string;
  text?: string;
}

export function PaginationButton({
  type,
  size,
  icon,
  disabled,
  onClick,
  label,
  text,
}: PaginationButtonProps) {
  return (
    <Tab
      type={type}
      size={size}
      iconLeft={icon}
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      className={cn(!text && paginationStyles.iconButton[size])}
    >
      {text || ""}
    </Tab>
  );
}
