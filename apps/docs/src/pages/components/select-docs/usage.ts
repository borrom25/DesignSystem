import type { SelectPlaygroundState } from "./types";

export function createSelectUsageCode(
  packageName: string,
  state: SelectPlaygroundState
) {
  const initialValue = state.value ? `"${state.value}"` : "null";
  const labelProp = state.label ? `\n      label="${state.label}"` : "";
  const hintProp = state.error
    ? '\n      hintError="Required field"\n      error'
    : state.hint
      ? `\n      hint="${state.hint}"`
      : "";

  return `import { useState } from "react";
import { Select, type SelectOption } from "${packageName}";
import "${packageName}/styles.css";

type StatusValue = "pending" | "active" | "done";

const options: SelectOption<StatusValue>[] = [
  { value: "pending", label: "Pending" },
  { value: "active", label: "Active" },
  { value: "done", label: "Done" },
];

export function Example() {
  const [value, setValue] = useState<StatusValue | null>(${initialValue});

  const handleValueChange = (nextValue: StatusValue | null) => {
    setValue(nextValue);
  };

  const handleClear = () => {
    setValue(null);
  };

  return (
    <Select<StatusValue>${labelProp}
      placeholder="Select status"
      value={value}
      onValueChange={handleValueChange}
      onClear={handleClear}
      options={options}
      size="${state.size}"${state.required ? "\n      required" : ""}${state.disabled ? "\n      disabled" : ""}${hintProp}${!state.clearable ? "\n      clearable={false}" : ""}
    />
  );
}`;
}
