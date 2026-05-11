import type { ReactNode, HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import type { ButtonProps } from "@/components/Button";
import { SidebarItem, SidebarTypes } from "@/shared/Sidebar/types";

export interface SidebarProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> {
  defaultCollapsed?: boolean;
  title?: ReactNode;
  items: SidebarItem[];
  action?: SidebarAction;
  activeItemId?: string;
  type?: SidebarTypes;
  onItemClick?: (item: string) => void;
}

export interface SidebarAction {
  icon: LucideIcon;
  label: ReactNode;
  ariaLabel?: string;
  buttonProps?: Omit<
    ButtonProps,
    "children" | "iconOnly" | "iconLeft" | "iconRight" | "asChild"
  >;
}

export type { SidebarItem };
