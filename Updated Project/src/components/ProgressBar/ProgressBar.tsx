import { cn } from "@/utils";
import { PieChart as ChartPie } from "lucide-react";
import type { ProgressBarProps } from "./ProgressBar.types";
import { progressBarStyles } from "./styles";
import { clampProgress } from "./ProgressBar.utils";
import { ProgressBarItem, StatusLabel } from "./ui";

export function ProgressBar({
  icon: Icon = ChartPie,
  title,
  progress: progressProp = 0,
  status = "loading",
  showStatusLabel = true,
  className,
  segmentedItems,
  ...restProps
}: ProgressBarProps) {
  const fullClampedProgress = clampProgress(segmentedItems ?? progressProp);

  return (
    <div className={cn(progressBarStyles.wrapper, className)} {...restProps}>
      {title && (
        <div className={progressBarStyles.topRow}>
          <div className={progressBarStyles.header}>
            {Icon && <Icon size={16} />}
            <span className={progressBarStyles.title}>{title}</span>
          </div>
          {showStatusLabel && (
            <div className={progressBarStyles.statusSlotWithTitle}>
              <StatusLabel
                status={status}
                fullClampedProgress={fullClampedProgress}
              />
            </div>
          )}
        </div>
      )}

      <div className={progressBarStyles.progressWrapper}>
        {segmentedItems?.length ? (
          segmentedItems.map(({ progress = 0, status }, index) => {
            const clampedProgress = clampProgress(progress);

            return (
              <ProgressBarItem
                key={`segment_${index}`}
                status={status}
                progress={clampedProgress}
              />
            );
          })
        ) : (
          <ProgressBarItem status={status} progress={fullClampedProgress} />
        )}
        {!title && showStatusLabel && (
          <div className={progressBarStyles.statusSlotBesideTrack}>
            <StatusLabel
              status={status}
              fullClampedProgress={fullClampedProgress}
            />
          </div>
        )}
      </div>
    </div>
  );
}
