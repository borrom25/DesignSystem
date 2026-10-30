import { InputPassword } from "@/components";
import type { InputPasswordPlaygroundState } from "./types";

type InputPasswordPreviewArgs = {
  updateState: (patch: Partial<InputPasswordPlaygroundState>) => void;
};

export function InputPasswordPreview(
  state: InputPasswordPlaygroundState,
  { updateState }: InputPasswordPreviewArgs
) {
  return (
    <div className="w-[360px]">
      <InputPassword
        label={state.label}
        placeholder={state.placeholder}
        value={state.value}
        onChange={(event) => updateState({ value: event.target.value })}
        size={state.size}
        disabled={state.disabled}
        error={state.error}
        showPasswordByDefault={state.showPasswordByDefault}
        hint={state.error ? undefined : state.hint}
        hintError={
          state.error
            ? "Password must include letters, numbers and symbols."
            : undefined
        }
      />
    </div>
  );
}
