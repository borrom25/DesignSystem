import { SelectOption } from "@/components";
import { Size } from "@/types";
import type { SelectValueControlValue, StatusValue } from "./types";

export const SELECT_OPTIONS: SelectOption<StatusValue>[] = [
  { value: "pending", label: "Pending" },
  { value: "active", label: "Active" },
  { value: "done", label: "Done" },
  { value: "draft", label: "Draft" },
  { value: "review", label: "In review" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "archived", label: "Archived" },
  { value: "scheduled", label: "Scheduled" },
  { value: "paused", label: "Paused" },
  { value: "cancelled", label: "Cancelled" },
  { value: "blocked", label: "Blocked" },
];

export const SELECT_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
];

export const SELECT_VALUE_OPTIONS: {
  value: SelectValueControlValue;
  label: string;
}[] = [
  { value: "empty", label: "Empty" },
  { value: "pending", label: "Pending" },
  { value: "active", label: "Active" },
  { value: "done", label: "Done" },
  { value: "draft", label: "Draft" },
  { value: "review", label: "In review" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "archived", label: "Archived" },
  { value: "scheduled", label: "Scheduled" },
  { value: "paused", label: "Paused" },
  { value: "cancelled", label: "Cancelled" },
  { value: "blocked", label: "Blocked" },
] as const;
