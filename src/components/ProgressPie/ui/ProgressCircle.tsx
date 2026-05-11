import { cn } from "@/utils";
import { progressPieStyles } from "../styles";
import { ProgressCircleProps } from "../ProgressPie.types";

export function ProgressCircle({
  sizePx,
  color,
  correctedProgress,
}: ProgressCircleProps) {
  const r = 14.4;
  const dashArray = 2 * Math.PI * r;
  const dashOffset = dashArray - (dashArray / 100) * correctedProgress;

  return (
    <svg width={sizePx} height={sizePx} viewBox="0 0 32 32">
      <path
        d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM3.2 16C3.2 23.0692 8.93075 28.8 16 28.8C23.0692 28.8 28.8 23.0692 28.8 16C28.8 8.93075 23.0692 3.2 16 3.2C8.93075 3.2 3.2 8.93075 3.2 16Z"
        className={progressPieStyles.progressCircleBg}
      />

      <circle
        cx="16"
        cy="16"
        r={r}
        className={cn(
          progressPieStyles.progressCircle,
          progressPieStyles.color[color]
        )}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
    </svg>
  );
}
