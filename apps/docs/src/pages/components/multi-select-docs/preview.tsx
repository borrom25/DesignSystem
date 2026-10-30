import { MultiSelect } from "@/components";
import { MULTI_SELECT_OPTIONS } from "./options";
import type { MultiSelectPlaygroundState, StatusValue } from "./types";

type MultiSelectPreviewArgs = {
  updateState: (patch: Partial<MultiSelectPlaygroundState>) => void;
};

export function MultiSelectPreview(
  state: MultiSelectPlaygroundState,
  { updateState }: MultiSelectPreviewArgs
) {
  const sharedProps = {
    label: state.label || undefined,
    options: MULTI_SELECT_OPTIONS,
    value: state.value,
    size: state.size,
    placeholder: state.placeholder,
    required: state.required,
    disabled: state.disabled,
    error: state.error,
    hint: state.error ? undefined : state.hint || undefined,
    hintError: state.error ? "Required field" : undefined,
    clearable: state.clearable,
    selectAll: state.selectAll,
    search: state.search,
    onClear: () => updateState({ value: [] }),
  } as const;

  return (
    <div className="w-[360px]">
      {state.returnAll ? (
        <MultiSelect<StatusValue>
          {...sharedProps}
          returnAll
          onValueChange={(value) =>
            updateState({
              value:
                value === "all"
                  ? MULTI_SELECT_OPTIONS.map((option) => option.value)
                  : value,
            })
          }
        />
      ) : (
        <MultiSelect<StatusValue>
          {...sharedProps}
          onValueChange={(value) => updateState({ value })}
        />
      )}
    </div>
  );
}
