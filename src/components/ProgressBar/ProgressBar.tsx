import { cn } from "@/utils";
import { PieChart as ChartPie } from "lucide-react";
import type { ProgressBarProps } from "./ProgressBar.types";
import { progressBarStyles } from "./styles";
import { clampProgress } from "./ProgressBar.utils";
import { ProgressBarItem, StatusLabel } from "./ui";
import { Text, TextColor } from "../Text";

export function ProgressBar({
  icon: Icon = ChartPie,
  iconSize = 18,
  title,
  titleVariant,
  titleColor = TextColor.Basic,
  titleShade,
  labelSize,
  labelColor,
  labelPosition,
  progress: progressProp = 0,
  status = "loading",
  showStatusLabel = true,
  className,
  segmentedItems,
  ...restProps
}: ProgressBarProps) {
  const fullClampedProgress = clampProgress(segmentedItems ?? progressProp);
  const resolvedLabelPosition = labelPosition ?? (title ? "top" : "end");
  const showLabelTop = showStatusLabel && resolvedLabelPosition === "top";
  const showLabelEnd = showStatusLabel && resolvedLabelPosition === "end";
  const showTopRow = Boolean(title) || showLabelTop;

  const statusLabel = (
    <StatusLabel
      status={status}
      fullClampedProgress={fullClampedProgress}
      size={labelSize}
      color={labelColor}
    />
  );

  return (
    <div className={cn(progressBarStyles.wrapper, className)} {...restProps}>
      {showTopRow && (
        <div className={progressBarStyles.topRow}>
          {title ? (
            <div className={progressBarStyles.header}>
              {Icon && <Icon size={iconSize} />}
              <Text
                color={titleColor}
                shade={titleShade}
                variant={titleVariant}
              >
                {title}
              </Text>
            </div>
          ) : null}
          {showLabelTop && (
            <div
              className={
                title
                  ? progressBarStyles.statusSlotWithTitle
                  : progressBarStyles.statusSlotTopOnly
              }
            >
              {statusLabel}
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
        {showLabelEnd && (
          <div className={progressBarStyles.statusSlotBesideTrack}>
            {statusLabel}
          </div>
        )}
      </div>
    </div>
  );
}
