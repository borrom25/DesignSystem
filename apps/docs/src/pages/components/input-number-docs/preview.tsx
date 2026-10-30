import { InputNumber } from "@/components";
import type { InputNumberPlaygroundState } from "./types";

const parseOptionalNumber = (value: string) => {
  if (!value.trim()) return undefined;

  const parsed = Number(value);

  return Number.isNaN(parsed) ? undefined : parsed;
};

type InputNumberPreviewArgs = {
  updateState: (patch: Partial<InputNumberPlaygroundState>) => void;
};

export function InputNumberPreview(
  state: InputNumberPlaygroundState,
  { updateState }: InputNumberPreviewArgs
) {
  return (
    <div className="w-[360px]">
      <InputNumber
        label={state.label}
        value={parseOptionalNumber(state.value)}
        onChange={(value) => updateState({ value: value?.toString() ?? "" })}
        size={state.size}
        disabled={state.disabled}
        error={state.error}
        clearable={state.clearable}
        hint={state.error ? undefined : state.hint}
        hintError={
          state.error ? "Value must be within the selected range." : undefined
        }
        min={parseOptionalNumber(state.min)}
        max={parseOptionalNumber(state.max)}
        step={parseOptionalNumber(state.step) ?? 1}
      />
    </div>
  );
}
