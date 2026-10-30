import { Bell } from "lucide-react";
import { IconButton } from "@/components";
import type { IconButtonPlaygroundState } from "./types";

export function IconButtonPreview(state: IconButtonPlaygroundState) {
  return (
    <IconButton
      icon={Bell}
      type={state.type}
      color={state.color}
      size={state.size}
      rounded={state.rounded}
      disabled={state.disabled}
      showBadge={state.badge}
      aria-label="Notifications"
    />
  );
}
