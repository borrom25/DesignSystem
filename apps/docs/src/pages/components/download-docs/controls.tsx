import {
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { DownloadPlaygroundState } from "./types";

type DownloadControlsArgs = {
  updateState: (patch: Partial<DownloadPlaygroundState>) => void;
};

export function renderDownloadControls(
  state: DownloadPlaygroundState,
  { updateState }: DownloadControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="File name"
        value={state.fileName}
        onChange={(value) => updateState({ fileName: value })}
      />
      <PlaygroundTextControl
        label="File size"
        value={state.fileSize}
        onChange={(value) => updateState({ fileSize: value })}
      />
      <PlaygroundSwitchControl
        label="Show file size"
        checked={state.showFileSize}
        onChange={(value) => updateState({ showFileSize: value })}
      />
      <PlaygroundSwitchControl
        label="With background"
        checked={state.withBackground}
        onChange={(value) => updateState({ withBackground: value })}
      />
      <PlaygroundSwitchControl
        label="Custom icon"
        checked={state.customIcon}
        onChange={(value) => updateState({ customIcon: value })}
      />
    </>
  );
}
