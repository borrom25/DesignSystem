import { Card, Skeleton } from "@/components";
import { Size } from "@/types";
import type { SkeletonPlaygroundState } from "./types";

export function SkeletonPreview(state: SkeletonPlaygroundState) {
  if (state.mode === "wrapper") {
    return (
      <div className="w-[320px]">
        <Skeleton loading={state.loading}>
          <Card size={Size.Sm}>
            <div className="flex flex-col gap-2 p-2">
              <div className="text-sm font-medium text-primary">Profile</div>
              <div className="text-xs text-secondary">
                Content appears when loading is false
              </div>
            </div>
          </Card>
        </Skeleton>
      </div>
    );
  }

  return (
    <Skeleton
      className={
        state.shape === "card"
          ? "h-[120px] w-[280px] rounded-xl"
          : "h-[16px] w-[280px] rounded-full"
      }
    />
  );
}
