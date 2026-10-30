import { BarChart3, FileText } from "lucide-react";
import { TabsOverflowItem } from "@/components";
import { Size } from "@/types";
import type { TabsOverflowValue } from "./types";

export const TABS_OVERFLOW_ITEMS: TabsOverflowItem<TabsOverflowValue>[] = [
  { value: "overview", label: "Overview", leftSlot: <FileText size={16} /> },
  {
    value: "analytics",
    label: "Analytics",
    leftSlot: <BarChart3 size={16} />,
    counter: 8,
  },
  { value: "reports", label: "Reports", counter: 12 },
  { value: "history", label: "History" },
  { value: "settings", label: "Settings" },
  { value: "access", label: "Access", disabled: true },
];

export const TABS_OVERFLOW_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
];

export const TABS_OVERFLOW_VALUE_OPTIONS = [
  { value: "overview", label: "Overview" },
  { value: "analytics", label: "Analytics" },
  { value: "reports", label: "Reports" },
  { value: "history", label: "History" },
  { value: "settings", label: "Settings" },
  { value: "access", label: "Access" },
];
