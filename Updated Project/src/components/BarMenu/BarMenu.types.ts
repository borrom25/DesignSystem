import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface BarMenuItem {
  id: string;
  icon: LucideIcon;
  label: ReactNode;
  disabled?: boolean;
  href?: string;
  asChild?: boolean;
  onClick?: () => void;
}

export interface BarMenuTriggerProps {
  item: BarMenuItem;
  className: string;
  selected?: boolean;
  registerTabButton: (value: string, element: HTMLButtonElement | null) => void;
  onSelect: (value: string) => void;
}

export interface BarMenuProps {
  items: BarMenuItem[];
  value?: string;
  onMoreClick: () => void;
  onSelect: (value: string) => void;
}
