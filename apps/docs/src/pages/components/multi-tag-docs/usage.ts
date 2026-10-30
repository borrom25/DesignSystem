import type { MultiTagPlaygroundState } from "./types";

export function createMultiTagUsageCode(
  packageName: string,
  state: MultiTagPlaygroundState
) {
  const initialValue = state.value.map((value) => `"${value}"`).join(", ");
  const labelProp = state.label ? `\n      label="${state.label}"` : "";
  const hintProp = state.error
    ? '\n      hintError="Required field"\n      error'
    : state.hint
      ? `\n      hint="${state.hint}"`
      : "";

  return `import { useState } from "react";
import { MultiTag, type MultiTagOption } from "${packageName}";
import "${packageName}/styles.css";

type TagValue =
  | "react"
  | "typescript"
  | "design"
  | "frontend"
  | "backend"
  | "devops"
  | "product"
  | "qa";

const options: MultiTagOption<TagValue>[] = [
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "design", label: "Design" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "devops", label: "DevOps" },
  { value: "product", label: "Product" },
  { value: "qa", label: "QA" },
];

export function Example() {
  const [value, setValue] = useState<TagValue[]>([${initialValue}]);

  return (
    <MultiTag<TagValue>${labelProp}
      placeholder="${state.placeholder}"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue === "all" ? options.map((option) => option.value) : nextValue);
      }}
      onClear={() => setValue([])}
      options={options}
      size="${state.size}"${state.required ? "\n      required" : ""}${state.disabled ? "\n      disabled" : ""}${hintProp}${state.clearable ? "\n      clearable" : ""}${state.selectAll ? "\n      selectAll" : ""}${state.returnAll ? "\n      returnAll" : ""}
    />
  );
}`;
}
