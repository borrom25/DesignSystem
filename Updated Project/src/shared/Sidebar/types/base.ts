import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export const SidebarTypes = {
  Main: "main",
  Inside: "inside",
  Process: "process",
} as const;

export type SidebarTypes = (typeof SidebarTypes)[keyof typeof SidebarTypes];

export interface SidebarItem {
  id: string;
  icon: LucideIcon;
  label: ReactNode;
  disabled?: boolean;
  href?: string;
  asChild?: boolean;
  onClick?: () => void;
}

export interface SidebarTriggerProps {
  type: SidebarTypes;
  items?: SidebarItem[];
  value?: string;
  onClick: () => void;
  onItemClick?: (value: string) => void;
}
