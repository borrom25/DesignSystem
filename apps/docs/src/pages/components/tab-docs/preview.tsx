import { Bell } from "lucide-react";
import { Tab } from "@/components";
import type { TabPlaygroundState } from "./types";

type TabPreviewArgs = {
  updateState: (patch: Partial<TabPlaygroundState>) => void;
};

export function TabPreview(
  state: TabPlaygroundState,
  { updateState }: TabPreviewArgs
) {
  return (
    <Tab
      type={state.type}
      size={state.size}
      selected={state.selected}
      disabled={state.disabled}
      scaling={state.scaling}
      iconLeft={state.iconLeft ? Bell : undefined}
      count={state.count ? 12 : undefined}
      onClick={() =>
        !state.disabled && updateState({ selected: !state.selected })
      }
    >
      Notifications
    </Tab>
  );
}
