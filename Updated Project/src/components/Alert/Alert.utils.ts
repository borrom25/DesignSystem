import type { ReactNode } from "react";
import { Bell, Check, CircleAlert, type LucideIcon } from "lucide-react";
import { Color } from "@/types";
import type { AlertColor, AlertLayoutState } from "./Alert.types";

export const alertIconMap = {
  [Color.Positive]: Check,
  [Color.Danger]: CircleAlert,
  [Color.Warning]: CircleAlert,
  [Color.Info]: Bell,
} as const satisfies Record<AlertColor, LucideIcon>;

export function getAlertLayoutState(
  description?: ReactNode,
  actions?: ReactNode
): AlertLayoutState {
  const hasDescription = Boolean(description);
  const hasActions = Boolean(actions);

  return {
    hasDescription,
    hasActions,
    isCompact: !hasDescription && !hasActions,
  };
}
