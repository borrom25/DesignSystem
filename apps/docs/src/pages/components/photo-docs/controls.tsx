import { PlaygroundSwitchControl } from "@docs/components/ComponentPlaygroundControls";
import type { PhotoPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<PhotoPlaygroundState>) => void;
};

export function renderPhotoControls(
  state: PhotoPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundSwitchControl
        label="Скачать"
        checked={state.withDownload}
        onChange={(withDownload) => updateState({ withDownload })}
      />
      <PlaygroundSwitchControl
        label="Изменить"
        checked={state.withEdit}
        onChange={(withEdit) => updateState({ withEdit })}
      />
      <PlaygroundSwitchControl
        label="Удалить"
        checked={state.withDelete}
        onChange={(withDelete) => updateState({ withDelete })}
      />
    </>
  );
}
