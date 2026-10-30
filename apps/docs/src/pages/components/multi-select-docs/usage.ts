import type { MultiSelectPlaygroundState } from "./types";

export function createMultiSelectUsageCode(
  packageName: string,
  state: MultiSelectPlaygroundState
) {
  const initialValue = state.value.map((value) => `"${value}"`).join(", ");
  const labelProp = state.label ? `\n      label="${state.label}"` : "";
  const hintProp = state.error
    ? '\n      hintError="Required field"\n      error'
    : state.hint
      ? `\n      hint="${state.hint}"`
      : "";

  return `import { useState } from "react";
import { MultiSelect, type MultiSelectOption } from "${packageName}";
import "${packageName}/styles.css";

type StatusValue =
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

const options: MultiSelectOption<StatusValue>[] = [
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

export function Example() {
  const [value, setValue] = useState<StatusValue[]>([${initialValue}]);

  return (
    <MultiSelect<StatusValue>${labelProp}
      placeholder="${state.placeholder}"
      value={value}
      onValueChange={(nextValue) => {
        setValue(nextValue === "all" ? options.map((option) => option.value) : nextValue);
      }}
      onClear={() => setValue([])}
      options={options}
      size="${state.size}"${state.required ? "\n      required" : ""}${state.disabled ? "\n      disabled" : ""}${hintProp}${state.clearable ? "\n      clearable" : ""}${state.search ? "\n      search" : ""}${state.selectAll ? "\n      selectAll" : ""}${state.returnAll ? "\n      returnAll" : ""}
    />
  );
}`;
}
