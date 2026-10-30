import type { TabsOverflowItem } from "@/components";

export type ConnectionTabs = "npm" | "pnpm" | "yarn";

export const tabsOverflowItems: TabsOverflowItem<ConnectionTabs>[] = [
  { value: "npm", label: "npm" },
  { value: "pnpm", label: "pnpm" },
  { value: "yarn", label: "yarn" },
];

export const connectionText: Record<ConnectionTabs, string> = {
  npm: "npm install",
  pnpm: "pnpm add",
  yarn: "yarn add",
};

export const connectionCode = "borrom-ds-test";
