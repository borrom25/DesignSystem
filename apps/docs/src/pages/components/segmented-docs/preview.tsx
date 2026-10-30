import { Segmented } from "@/components";
import type { SegmentedPlaygroundState } from "./types";

export function SegmentedPreview(state: SegmentedPlaygroundState) {
  return (
    <div className="w-full max-w-[420px]">
      <Segmented
        position={state.position}
        shape={state.shape}
        size={state.size}
        defaultValue="apple"
        options={[
          { label: "Apple", value: "apple" },
          {
            label: "Banana",
            value: "banana",
            disabled: state.withDisabledOption,
          },
          { label: "Pineapple", value: "pineapple" },
        ]}
      />
    </div>
  );
}
