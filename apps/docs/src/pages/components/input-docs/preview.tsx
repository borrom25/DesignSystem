import { Mail, Search } from "lucide-react";
import { Input } from "@/components";
import type { InputPlaygroundState } from "./types";

type InputPreviewArgs = {
  updateState: (patch: Partial<InputPlaygroundState>) => void;
};

export function InputPreview(
  state: InputPlaygroundState,
  { updateState }: InputPreviewArgs
) {
  return (
    <div className="w-[360px]">
      <Input
        label={state.label || undefined}
        placeholder={state.placeholder || undefined}
        value={state.value}
        onChange={(event) => updateState({ value: event.target.value })}
        size={state.size}
        variant={state.variant}
        required={state.required}
        disabled={state.disabled}
        error={state.error}
        hint={state.error ? undefined : state.hint || undefined}
        hintError={state.error ? "Введите корректный email" : undefined}
        iconLeft={state.iconLeft ? Mail : undefined}
        iconRight={state.iconRight ? Search : undefined}
        clearable={state.clearable}
        count={state.count ? state.value.length : undefined}
        maxCount={state.count ? 48 : undefined}
      />
    </div>
  );
}
