import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { TAG_SIZE_OPTIONS } from "./options";
import type { TagPlaygroundState } from "./types";

type TagControlsArgs = {
  updateState: (patch: Partial<TagPlaygroundState>) => void;
};

export function renderTagControls(
  state: TagPlaygroundState,
  { updateState }: TagControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Size"
        options={TAG_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as TagPlaygroundState["size"] })
        }
      />
      <PlaygroundTextControl
        label="Text"
        value={state.text}
        onChange={(value) => updateState({ text: value })}
      />
      <PlaygroundSwitchControl
        label="Left icon"
        checked={state.withLeftIcon}
        onChange={(value) =>
          updateState({
            withLeftIcon: value,
            withAvatar: value ? false : state.withAvatar,
          })
        }
      />
      <PlaygroundSwitchControl
        label="Avatar"
        checked={state.withAvatar}
        onChange={(value) =>
          updateState({
            withAvatar: value,
            withLeftIcon: value ? false : state.withLeftIcon,
          })
        }
      />
      <PlaygroundSwitchControl
        label="Closable"
        checked={state.closable}
        onChange={(value) => updateState({ closable: value })}
      />
      <PlaygroundSwitchControl
        label="Error"
        checked={state.error}
        onChange={(value) => updateState({ error: value })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(value) => updateState({ disabled: value })}
      />
    </>
  );
}
