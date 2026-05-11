import { cn } from "@/utils";
import { PieChart as ChartPie } from "lucide-react";
import type { ProgressPieProps } from "./ProgressPie.types";
import {
  getCorrectedProgress,
  progressPieConfig,
  sizePxFromSize,
} from "./ProgressPie.utils.ts";
import { Color } from "@/types";
import { progressPieStyles } from "./styles";
import { ProgressCircle } from "./ui";

export function ProgressPie({
  icon: Icon = ChartPie,
  progress = 0,
  color = Color.Brand,
  size = "md",
  showIcon: showIconProp,
  showProgress: showProgressProp,
  className,
  ...restProps
}: ProgressPieProps) {
  const { showIcon, showProgress } = progressPieConfig[size];
  const sizePx = sizePxFromSize[size];
  const correctedProgress = getCorrectedProgress(progress);

  return (
    <div
      className={cn(progressPieStyles.base, className)}
      style={{ width: sizePx, height: sizePx }}
      {...restProps}
    >
      <div className={progressPieStyles.wrapper}>
        <ProgressCircle
          sizePx={sizePx}
          color={color}
          correctedProgress={correctedProgress}
        />

        <div className={progressPieStyles.contentWrapper}>
          <div
            className={cn(
              progressPieStyles.contentBlock,
              progressPieStyles.contentGapSize[size]
            )}
          >
            {(showIconProp ?? showIcon) && (
              <Icon size={16} className={progressPieStyles.icon} />
            )}
            {(showProgressProp ?? showProgress) && (
              <span
                className={cn(
                  progressPieStyles.text,
                  progressPieStyles.textSize[size]
                )}
              >
                {correctedProgress}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
