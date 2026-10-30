import { Banner } from "@/components";
import type { BannerPlaygroundState } from "./types";

export function BannerPreview(state: BannerPlaygroundState) {
  return (
    <div className="w-[560px]">
      <Banner size={state.size} color={state.color}>
        {state.text}
      </Banner>
    </div>
  );
}
