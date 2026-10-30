import { TabsOverflow } from "@/components";
import { TABS_OVERFLOW_ITEMS } from "./options";
import type { TabsOverflowPlaygroundState, TabsOverflowValue } from "./types";

type TabsOverflowPreviewArgs = {
  updateState: (patch: Partial<TabsOverflowPlaygroundState>) => void;
};

export function TabsOverflowPreview(
  state: TabsOverflowPlaygroundState,
  { updateState }: TabsOverflowPreviewArgs
) {
  return (
    <div className="w-[430px]">
      <TabsOverflow<TabsOverflowValue>
        items={TABS_OVERFLOW_ITEMS}
        value={state.value}
        onValueChange={(value) => updateState({ value })}
        size={state.size}
        disabled={state.disabled}
        sideMenu={state.sideMenu}
      />
    </div>
  );
}
