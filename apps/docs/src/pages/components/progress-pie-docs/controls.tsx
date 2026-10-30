import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  PROGRESS_PIE_COLOR_OPTIONS,
  PROGRESS_PIE_PROGRESS_OPTIONS,
  PROGRESS_PIE_SIZE_OPTIONS,
} from "./options";
import type { ProgressPiePlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<ProgressPiePlaygroundState>) => void;
};

export function renderProgressPieControls(
  state: ProgressPiePlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Size"
        options={PROGRESS_PIE_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as ProgressPiePlaygroundState["size"] })
        }
      />
      <PlaygroundSelectControl
        label="Progress"
        options={PROGRESS_PIE_PROGRESS_OPTIONS}
        value={state.progress}
        onChange={(value) =>
          updateState({
            progress: value as ProgressPiePlaygroundState["progress"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Color"
        options={PROGRESS_PIE_COLOR_OPTIONS}
        value={state.color}
        onChange={(value) =>
          updateState({ color: value as ProgressPiePlaygroundState["color"] })
        }
      />
      <PlaygroundSwitchControl
        label="Show icon"
        checked={state.showIcon}
        onChange={(value) => updateState({ showIcon: value })}
      />
      <PlaygroundSwitchControl
        label="Show progress"
        checked={state.showProgress}
        onChange={(value) => updateState({ showProgress: value })}
      />
    </>
  );
}
