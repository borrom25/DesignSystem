import type { LucideIcon } from "lucide-react";

interface CascaderItem {
  id: string;
  icon?: LucideIcon;
  label: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface CascaderItemProps extends CascaderItem {
  nested?: CascaderItem[];
}

export interface CascaderProps {
  options: CascaderItemProps[];
  children?: React.ReactNode;
}
