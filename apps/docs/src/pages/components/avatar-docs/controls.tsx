import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { AVATAR_SIZE_OPTIONS } from "./options";
import type { AvatarPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<AvatarPlaygroundState>) => void;
};

export function renderAvatarControls(
  state: AvatarPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Size"
        options={AVATAR_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as AvatarPlaygroundState["size"] })
        }
      />
      <PlaygroundTextControl
        label="Alt"
        value={state.alt}
        onChange={(value) => updateState({ alt: value })}
      />
      <PlaygroundTextControl
        label="Initials"
        value={state.initials}
        onChange={(value) => updateState({ initials: value })}
      />
      <PlaygroundTextControl
        label="Image URL"
        value={state.src}
        onChange={(value) => updateState({ src: value })}
      />
      <PlaygroundSwitchControl
        label="Show image"
        checked={state.showImage}
        onChange={(value) => updateState({ showImage: value })}
      />
      <PlaygroundSwitchControl
        label="With border"
        checked={state.withBorder}
        onChange={(value) => updateState({ withBorder: value })}
      />
      <PlaygroundSwitchControl
        label="Edit badge"
        checked={state.showEditBadge}
        onChange={(value) => updateState({ showEditBadge: value })}
      />
    </>
  );
}
