import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { INPUT_FILE_DROP_SIZE_OPTIONS } from "./options";
import type { InputFileDropPlaygroundState } from "./types";
import {
  INPUT_FILE_DROP_VALIDATION,
  INPUT_FILE_DROP_VALIDATION_OPTIONS,
} from "./validation";

type RenderControlsArgs = {
  updateState: (patch: Partial<InputFileDropPlaygroundState>) => void;
};

export function renderInputFileDropControls(
  state: InputFileDropPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Size"
        options={INPUT_FILE_DROP_SIZE_OPTIONS}
        value={state.size}
        onChange={(size) => updateState({ size })}
      />
      <PlaygroundSelectControl
        label="Validation"
        options={INPUT_FILE_DROP_VALIDATION_OPTIONS}
        value={state.validation}
        onChange={(validation) =>
          updateState({
            validation,
            files: INPUT_FILE_DROP_VALIDATION[validation].demoFiles,
            error: false,
            hintError: undefined,
          })
        }
      />
      <PlaygroundSwitchControl
        label="Text mode"
        checked={state.textMode}
        onChange={(textMode) => updateState({ textMode })}
      />
      {state.textMode && (
        <>
          <PlaygroundTextControl
            label="Text"
            value={state.textDrop}
            onChange={(textDrop) => updateState({ textDrop })}
          />
          <PlaygroundTextControl
            label="Placeholder"
            value={state.placeholder}
            onChange={(placeholder) => updateState({ placeholder })}
          />
        </>
      )}
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
        onChange={(error) =>
          updateState({
            error,
            hintError: error ? "Проверьте тип файла или размер" : undefined,
          })
        }
      />
    </>
  );
}
