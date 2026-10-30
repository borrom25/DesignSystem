import { BarChartHorizontal } from "@/components";
import { HORIZONTAL_DATASETS } from "./options";
import type { BarChartHorizontalPlaygroundState } from "./types";

export function BarChartHorizontalPreview(
  state: BarChartHorizontalPlaygroundState
) {
  return (
    <div className="w-full p-10">
      <BarChartHorizontal data={HORIZONTAL_DATASETS[state.dataset]} />
    </div>
  );
}
