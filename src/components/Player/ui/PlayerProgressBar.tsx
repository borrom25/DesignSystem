import { Time, TimeSlider } from "@vidstack/react";
import { Text, TextVariant } from "@/components/Text";
import { cn } from "@/utils";
import type { PlayerLabelPosition } from "../Player.types";
import { playerStyles } from "../styles";

interface PlayerProgressBarProps {
  title?: string;
  titleVariant?: TextVariant;
  labelVariant?: TextVariant;
  labelPosition?: PlayerLabelPosition;
}

export const PlayerProgressBar = ({
  title,
  titleVariant = TextVariant.H1,
  labelVariant = TextVariant.B1,
  labelPosition = "top",
}: PlayerProgressBarProps) => {
  const progressBarStyles = playerStyles.progressBar;
  const isLabelAtEnd = labelPosition === "end";

  const timeLabel = (
    <Text as="div" variant={labelVariant} className={progressBarStyles.label}>
      <Time type="current" />
      <span>/</span>
      <Time type="duration" />
    </Text>
  );

  const slider = (
    <TimeSlider.Root
      className={cn(
        progressBarStyles.root,
        isLabelAtEnd ? progressBarStyles.rootEnd : progressBarStyles.rootTop
      )}
    >
      <TimeSlider.Track className={progressBarStyles.track}>
        <TimeSlider.Progress
          className={progressBarStyles.progress}
          style={{ width: `var(--slider-progress)` }}
        />

        <TimeSlider.TrackFill
          className={progressBarStyles.trackFill}
          style={{ width: `var(--slider-fill)` }}
        />
      </TimeSlider.Track>

      <TimeSlider.Thumb
        className={progressBarStyles.thumb}
        style={{ left: `var(--slider-fill)` }}
      />

      <TimeSlider.Preview
        className={progressBarStyles.preview}
        style={{ left: `var(--preview-time)` }}
      >
        <div className={progressBarStyles.timePopover}>
          <TimeSlider.Value />
        </div>
      </TimeSlider.Preview>
    </TimeSlider.Root>
  );

  if (isLabelAtEnd) {
    return (
      <div className={progressBarStyles.container}>
        {title ? (
          <Text variant={titleVariant} className={progressBarStyles.title}>
            {title}
          </Text>
        ) : null}
        <div className={progressBarStyles.endRow}>
          {slider}
          {timeLabel}
        </div>
      </div>
    );
  }

  return (
    <div className={progressBarStyles.container}>
      <div className={progressBarStyles.text}>
        <Text variant={titleVariant} className={progressBarStyles.title}>
          {title}
        </Text>
        {timeLabel}
      </div>
      {slider}
    </div>
  );
};
