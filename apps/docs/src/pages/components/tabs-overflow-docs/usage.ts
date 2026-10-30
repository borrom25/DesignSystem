import type { TabsOverflowPlaygroundState } from "./types";

export function createTabsOverflowUsageCode(
  packageName: string,
  state: TabsOverflowPlaygroundState
) {
  return `import { useState } from "react";
import { TabsOverflow, type TabsOverflowItem } from "${packageName}";
import "${packageName}/styles.css";

type TabValue = "overview" | "analytics" | "reports" | "history" | "settings";

const items: TabsOverflowItem<TabValue>[] = [
  { value: "overview", label: "Overview" },
  { value: "analytics", label: "Analytics", counter: 8 },
  { value: "reports", label: "Reports", counter: 12 },
  { value: "history", label: "History" },
  { value: "settings", label: "Settings" },
];

export function Example() {
  const [value, setValue] = useState<TabValue>("${state.value === "access" ? "overview" : state.value}");

  return (
    <TabsOverflow
      items={items}
      value={value}
      onValueChange={setValue}
      size="${state.size}"${state.disabled ? "\n      disabled" : ""}${state.sideMenu ? "\n      sideMenu" : ""}
    />
  );
}`;
}
