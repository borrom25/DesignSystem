import { Size } from "@/types";

export type StatusValue =
  | "pending"
  | "active"
  | "done"
  | "draft"
  | "review"
  | "approved"
  | "rejected"
  | "archived"
  | "scheduled"
  | "paused"
  | "cancelled"
  | "blocked";

export type MultiSelectPlaygroundState = {
  size: (typeof Size)[keyof typeof Size];
  value: StatusValue[];
  label: string;
  hint: string;
  placeholder: string;
  disabled: boolean;
  error: boolean;
  required: boolean;
  clearable: boolean;
  selectAll: boolean;
  returnAll: boolean;
  search: boolean;
};

export const MULTI_SELECT_DEFAULT_STATE: MultiSelectPlaygroundState = {
  size: Size.Md,
  value: ["pending", "active"],
  label: "Status",
  hint: "",
  placeholder: "Select items...",
  disabled: false,
  error: false,
  required: false,
  clearable: true,
  selectAll: true,
  returnAll: false,
  search: false,
};
