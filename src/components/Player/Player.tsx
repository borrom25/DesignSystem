import { MediaPlayer, MediaProvider, VideoMimeType } from "@vidstack/react";
import { PlayerProps } from "./Player.types";
import { PlayerBottomBar, PlayerControls } from "./ui";
import { playerStyles } from "./styles";
import { cn } from "@/utils";
import { usePlayerTimer } from "./hooks/usePlayerTimer.ts";

export function Player({
  src,
  className,
  videoType = "video/mp4",
  title,
  titleVariant,
  labelVariant,
  labelPosition,
  ...props
}: PlayerProps) {
  const { resetTimer, isActive, setIsActive } = usePlayerTimer();

  return (
    <div className={cn(playerStyles.container, className)}>
      <MediaPlayer
        preload="auto"
        src={{
          src,
          type: videoType as VideoMimeType,
        }}
        viewType="video"
        onMouseMove={resetTimer}
        onMouseLeave={() => setIsActive(false)}
        className={cn(playerStyles.base, isActive ? "group" : "cursor-none")}
        {...props}
      >
        <MediaProvider className={playerStyles.provider} />
        <PlayerControls />
        <PlayerBottomBar
          title={title}
          titleVariant={titleVariant}
          labelVariant={labelVariant}
          labelPosition={labelPosition}
        />
      </MediaPlayer>
    </div>
  );
}
