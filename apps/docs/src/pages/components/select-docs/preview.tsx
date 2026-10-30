import { Select } from "@/components";
import { SELECT_OPTIONS } from "./options";
import type { SelectPlaygroundState } from "./types";

type SelectPreviewArgs = {
  updateState: (patch: Partial<SelectPlaygroundState>) => void;
};

export function SelectPreview(
  state: SelectPlaygroundState,
  { updateState }: SelectPreviewArgs
) {
  return (
    <div className="w-[320px]">
      <Select
        label={state.label || undefined}
        options={SELECT_OPTIONS}
        value={state.value}
        size={state.size}
        required={state.required}
        disabled={state.disabled}
        error={state.error}
        hint={state.error ? undefined : state.hint || undefined}
        hintError={state.error ? "Required field" : undefined}
        clearable={state.clearable}
        onValueChange={(value) => updateState({ value })}
      />
    </div>
  );
}
