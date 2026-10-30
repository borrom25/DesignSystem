import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import { INPUT_FILES_SIZE_OPTIONS } from "./options";
import type { InputFilesPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<InputFilesPlaygroundState>) => void;
};

export function renderInputFilesControls(
  state: InputFilesPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Size"
        options={INPUT_FILES_SIZE_OPTIONS}
        value={state.size}
        onChange={(size) => updateState({ size })}
      />
      <PlaygroundSwitchControl
        label="Multiple"
        checked={state.multiple}
        onChange={(multiple) => updateState({ multiple })}
      />
      <PlaygroundSwitchControl
        label="View mode"
        checked={state.viewMode}
        onChange={(viewMode) => updateState({ viewMode })}
      />
      <PlaygroundSwitchControl
        label="Loading"
        checked={state.loading}
        onChange={(loading) => updateState({ loading })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(disabled) => updateState({ disabled })}
      />
      <PlaygroundSwitchControl
        label="Error"
        checked={state.error}
        onChange={(error) => updateState({ error })}
      />
    </>
  );
}
