import type { HTMLAttributes, ReactNode } from "react";
import type { Color } from "@/types";

export type AlertColor = Extract<
  Color,
  "positive" | "danger" | "warning" | "info"
>;

export type AlertVariantStyles = {
  container: string;
  iconWrapper: string;
  icon: string;
};

export type AlertLayoutState = {
  hasDescription: boolean;
  hasActions: boolean;
  isCompact: boolean;
};

export interface AlertProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  type?: AlertColor;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  closable?: boolean;
  onClose?: () => void;
}
