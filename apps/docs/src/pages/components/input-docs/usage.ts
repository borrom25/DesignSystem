import type { InputPlaygroundState } from "./types";

export function createInputUsageCode(
  packageName: string,
  state: InputPlaygroundState
) {
  const labelProp = state.label ? `\n      label="${state.label}"` : "";
  const placeholderProp = state.placeholder
    ? `\n      placeholder="${state.placeholder}"`
    : "";
  const hintProp = state.error
    ? '\n      error\n      hintError="Введите корректный email"'
    : state.hint
      ? `\n      hint="${state.hint}"`
      : "";

  return `import { useState } from "react";
import { Input } from "${packageName}";
import "${packageName}/styles.css";
import { Mail, Search } from "lucide-react";

export function Example() {
  const [value, setValue] = useState("${state.value}");

  return (
    <Input${labelProp}${placeholderProp}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      size="${state.size}"
      variant="${state.variant}"${state.required ? "\n      required" : ""}${state.iconLeft ? "\n      iconLeft={Mail}" : ""}${state.iconRight ? "\n      iconRight={Search}" : ""}${hintProp}${state.disabled ? "\n      disabled" : ""}${!state.clearable ? "\n      clearable={false}" : ""}${state.count ? "\n      count={value.length}\n      maxCount={48}" : ""}
    />
  );
}`;
}
