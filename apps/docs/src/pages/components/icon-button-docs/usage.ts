import type { IconButtonPlaygroundState } from "./types";

export function createIconButtonUsageCode(
  packageName: string,
  state: IconButtonPlaygroundState
) {
  return `import { IconButton } from "${packageName}";
import "${packageName}/styles.css";
import { Bell } from "lucide-react";

export function Example() {
  return (
    <IconButton
      icon={Bell}
      type="${state.type}"
      color="${state.color}"
      size="${state.size}"${state.rounded ? "\n      rounded" : ""}${state.disabled ? "\n      disabled" : ""}${state.badge ? "\n      showBadge" : ""}
    />
  );
}`;
}
