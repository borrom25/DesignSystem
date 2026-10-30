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
export type SelectValueControlValue = StatusValue | "empty";

export type SelectPlaygroundState = {
  size: (typeof Size)[keyof typeof Size];
  value: StatusValue | null;
  label: string;
  hint: string;
  disabled: boolean;
  error: boolean;
  required: boolean;
  clearable: boolean;
};

export const SELECT_DEFAULT_STATE: SelectPlaygroundState = {
  size: Size.Md,
  value: "pending",
  label: "Status",
  hint: "",
  disabled: false,
  error: false,
  required: false,
  clearable: true,
};
