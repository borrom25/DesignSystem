import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import { SKELETON_MODE_OPTIONS, SKELETON_SHAPE_OPTIONS } from "./options";
import type { SkeletonPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<SkeletonPlaygroundState>) => void;
};

export function renderSkeletonControls(
  state: SkeletonPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Mode"
        options={SKELETON_MODE_OPTIONS}
        value={state.mode}
        onChange={(value) =>
          updateState({ mode: value as SkeletonPlaygroundState["mode"] })
        }
      />
      <PlaygroundSelectControl
        label="Shape"
        options={SKELETON_SHAPE_OPTIONS}
        value={state.shape}
        onChange={(value) =>
          updateState({ shape: value as SkeletonPlaygroundState["shape"] })
        }
      />
      <PlaygroundSwitchControl
        label="Loading"
        checked={state.loading}
        onChange={(value) => updateState({ loading: value })}
      />
    </>
  );
}
