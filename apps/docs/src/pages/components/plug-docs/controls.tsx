import {
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PlugPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<PlugPlaygroundState>) => void;
};

export function renderPlugControls(
  state: PlugPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(title) => updateState({ title })}
      />
      <PlaygroundTextControl
        label="Subtitle"
        value={state.subtitle}
        onChange={(subtitle) => updateState({ subtitle })}
      />
      <PlaygroundSwitchControl
        label="Image"
        checked={state.withImage}
        onChange={(withImage) => updateState({ withImage })}
      />
      <PlaygroundSwitchControl
        label="Action slot"
        checked={state.withAction}
        onChange={(withAction) => updateState({ withAction })}
      />
    </>
  );
}
