import type { HTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export type DownloadProps = HTMLAttributes<HTMLDivElement> & {
  fileName: ReactNode;
  fileSize?: ReactNode;
  icon?: LucideIcon;
  action?: ReactNode;
  onActionClick?: () => void;
  actionAriaLabel?: string;
  withBackground?: boolean;
};
