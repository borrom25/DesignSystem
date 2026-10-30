import { Size } from "@/types";

export type TagValue =
  | "react"
  | "typescript"
  | "design"
  | "frontend"
  | "backend"
  | "devops"
  | "product"
  | "qa";

export type MultiTagPlaygroundState = {
  size: (typeof Size)[keyof typeof Size];
  value: TagValue[];
  label: string;
  hint: string;
  placeholder: string;
  disabled: boolean;
  error: boolean;
  required: boolean;
  clearable: boolean;
  selectAll: boolean;
  returnAll: boolean;
};

export const MULTI_TAG_DEFAULT_STATE: MultiTagPlaygroundState = {
  size: Size.Md,
  value: ["react", "typescript"],
  label: "Теги",
  hint: "",
  placeholder: "Выберите...",
  disabled: false,
  error: false,
  required: false,
  clearable: true,
  selectAll: true,
  returnAll: false,
};
