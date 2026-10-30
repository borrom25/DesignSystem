import type { SkeletonPlaygroundState } from "./types";

export function createSkeletonUsageCode(
  packageName: string,
  state: SkeletonPlaygroundState
) {
  if (state.mode === "wrapper") {
    return `import { Skeleton, Card } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <Skeleton loading={${state.loading}}>
      <Card size="sm">
        <div style={{ padding: 16 }}>Контент карточки</div>
      </Card>
    </Skeleton>
  );
}`;
  }

  return `import { Skeleton } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <Skeleton className="${state.shape === "card" ? "h-[120px] w-[280px] rounded-xl" : "h-[16px] w-[280px] rounded-full"}" />
  );
}`;
}
