import type { TabPlaygroundState } from "./types";

export function createTabUsageCode(
  packageName: string,
  state: TabPlaygroundState
) {
  return `import { Tab } from "${packageName}";
import "${packageName}/styles.css";
import { Bell } from "lucide-react";

export function Example() {
  return (
    <Tab
      type="${state.type}"
      size="${state.size}"${state.selected ? "\n      selected" : ""}${state.iconLeft ? "\n      iconLeft={Bell}" : ""}${state.count ? "\n      count={12}" : ""}${state.disabled ? "\n      disabled" : ""}${state.scaling ? "\n      scaling" : ""}
    >
      Notifications
    </Tab>
  );
}`;
}
