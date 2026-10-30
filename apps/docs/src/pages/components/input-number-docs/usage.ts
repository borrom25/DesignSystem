import type { InputNumberPlaygroundState } from "./types";

const serializeOptionalNumber = (value: string) => {
  if (!value.trim()) return undefined;

  const parsed = Number(value);

  return Number.isNaN(parsed) ? undefined : parsed;
};

export function createInputNumberUsageCode(
  packageName: string,
  state: InputNumberPlaygroundState
) {
  const initialValue = serializeOptionalNumber(state.value);
  const min = serializeOptionalNumber(state.min);
  const max = serializeOptionalNumber(state.max);
  const step = serializeOptionalNumber(state.step) ?? 1;

  return `import { useState } from "react";
import { InputNumber } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [value, setValue] = useState<number | undefined>(${
    initialValue === undefined ? "undefined" : initialValue
  });

  return (
    <InputNumber
      label="${state.label}"
      value={value}
      onChange={setValue}
      size="${state.size}"${state.disabled ? "\n      disabled" : ""}${
        state.error
          ? '\n      error\n      hintError="Value must be within the selected range."'
          : `\n      hint="${state.hint}"`
      }${!state.clearable ? "\n      clearable={false}" : ""}${
        min === undefined ? "" : `\n      min={${min}}`
      }${max === undefined ? "" : `\n      max={${max}}`}\n      step={${step}}
    />
  );
}`;
}
