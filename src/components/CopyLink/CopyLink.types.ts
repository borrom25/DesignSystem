import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { HtmlType, Size } from "@/types";

export interface CopyLinkProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "type" | "value" | "onCopy"
> {
  value: string;
  size?: Size;
  htmlType?: HtmlType;
  scaling?: boolean;
  defaultText?: ReactNode;
  successText?: ReactNode;
  icon?: LucideIcon;
  successIcon?: LucideIcon;
  successDuration?: number;
  onCopy?: (value: string) => void | Promise<void>;
  onCopyError?: (error: unknown) => void;
}
