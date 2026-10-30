import { MultiTag } from "@/components";
import { MULTI_TAG_OPTIONS } from "./options";
import type { MultiTagPlaygroundState, TagValue } from "./types";

type MultiTagPreviewArgs = {
  updateState: (patch: Partial<MultiTagPlaygroundState>) => void;
};

export function MultiTagPreview(
  state: MultiTagPlaygroundState,
  { updateState }: MultiTagPreviewArgs
) {
  const sharedProps = {
    label: state.label || undefined,
    options: MULTI_TAG_OPTIONS,
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
    onClear: () => updateState({ value: [] }),
  } as const;

  return (
    <div className="w-[360px]">
      {state.returnAll ? (
        <MultiTag<TagValue>
          {...sharedProps}
          returnAll
          onChange={(value) =>
            updateState({
              value:
                value === "all"
                  ? MULTI_TAG_OPTIONS.map((option) => option.value)
                  : value,
            })
          }
        />
      ) : (
        <MultiTag<TagValue>
          {...sharedProps}
          onChange={(value) => updateState({ value })}
        />
      )}
    </div>
  );
}
