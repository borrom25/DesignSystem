import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  PROGRESS_BAR_LABEL_COLOR_OPTIONS,
  PROGRESS_BAR_LABEL_POSITION_OPTIONS,
  PROGRESS_BAR_LABEL_SIZE_OPTIONS,
  PROGRESS_BAR_MODE_OPTIONS,
  PROGRESS_BAR_PROGRESS_OPTIONS,
  PROGRESS_BAR_STATUS_OPTIONS,
  PROGRESS_BAR_TITLE_COLOR_OPTIONS,
  PROGRESS_BAR_TITLE_SHADE_OPTIONS,
  PROGRESS_BAR_TITLE_VARIANT_OPTIONS,
} from "./options";
import type { ProgressBarPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<ProgressBarPlaygroundState>) => void;
};

export function renderProgressBarControls(
  state: ProgressBarPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(value) => updateState({ title: value })}
      />
      <PlaygroundSelectControl
        label="Title variant"
        options={PROGRESS_BAR_TITLE_VARIANT_OPTIONS}
        value={state.titleVariant}
        onChange={(value) =>
          updateState({
            titleVariant: value as ProgressBarPlaygroundState["titleVariant"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Title color"
        options={PROGRESS_BAR_TITLE_COLOR_OPTIONS}
        value={state.titleColor}
        onChange={(value) =>
          updateState({
            titleColor: value as ProgressBarPlaygroundState["titleColor"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Title shade"
        options={PROGRESS_BAR_TITLE_SHADE_OPTIONS}
        value={state.titleShade}
        onChange={(value) =>
          updateState({
            titleShade: value as ProgressBarPlaygroundState["titleShade"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Label size"
        options={PROGRESS_BAR_LABEL_SIZE_OPTIONS}
        value={state.labelSize}
        onChange={(value) =>
          updateState({
            labelSize: value as ProgressBarPlaygroundState["labelSize"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Label color"
        options={PROGRESS_BAR_LABEL_COLOR_OPTIONS}
        value={state.labelColor}
        onChange={(value) =>
          updateState({
            labelColor: value as ProgressBarPlaygroundState["labelColor"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Label position"
        options={PROGRESS_BAR_LABEL_POSITION_OPTIONS}
        value={state.labelPosition}
        onChange={(value) =>
          updateState({
            labelPosition: value as ProgressBarPlaygroundState["labelPosition"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Mode"
        options={PROGRESS_BAR_MODE_OPTIONS}
        value={state.mode}
        onChange={(value) =>
          updateState({ mode: value as ProgressBarPlaygroundState["mode"] })
        }
      />
      <PlaygroundSelectControl
        label="Status"
        options={PROGRESS_BAR_STATUS_OPTIONS}
        value={state.status}
        onChange={(value) =>
          updateState({ status: value as ProgressBarPlaygroundState["status"] })
        }
      />
      {state.mode === "single" && (
        <PlaygroundSelectControl
          label="Progress"
          options={PROGRESS_BAR_PROGRESS_OPTIONS}
          value={state.progress}
          onChange={(value) =>
            updateState({
              progress: value as ProgressBarPlaygroundState["progress"],
            })
          }
        />
      )}
      <PlaygroundSwitchControl
        label="Status label"
        checked={state.showStatusLabel}
        onChange={(value) => updateState({ showStatusLabel: value })}
      />
    </>
  );
}
