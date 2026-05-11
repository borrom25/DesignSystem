import { cn } from "@/utils";
import { progressBarStyles } from "../styles";
import { getProgressWidth } from "../ProgressBar.utils";
import { ProgressSegmentProps } from "../ProgressBar.types";

export function ProgressBarItem({ status, progress }: ProgressSegmentProps) {
  return (
    <div className={progressBarStyles.progressTrack}>
      <div
        className={cn(
          progressBarStyles.progressBar,
          progressBarStyles.status[status]
        )}
        style={{ width: getProgressWidth(progress, status) }}
      />
    </div>
  );
}
