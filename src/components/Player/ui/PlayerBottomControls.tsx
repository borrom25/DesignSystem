import {
  FullscreenButton,
  MuteButton,
  PlayButton,
  SeekButton,
  VolumeSlider,
} from "@vidstack/react";
import { Maximize2, Minimize2, Volume2, VolumeX } from "lucide-react";
import { SkipBackIcon } from "../icons/SkipBack";
import { SkipForwardIcon } from "../icons/SkipForward";
import { PlayIcon } from "../icons/Play";
import { PauseIcon } from "../icons/Pause";
import { playerStyles } from "../styles";
import { PlayerSettingsMenu } from "./PlayerSettingMenu.tsx";
import { cn } from "@/utils";

export const PlayerBottomControls = () => {
  const bottomControlsStyles = playerStyles.bottom;
  return (
    <div className={bottomControlsStyles.container}>
      <div className={bottomControlsStyles.block}>
        <PlayButton className={bottomControlsStyles.button}>
          <PlayIcon
            className={cn(bottomControlsStyles.play, bottomControlsStyles.icon)}
          />
          <PauseIcon
            className={cn(
              bottomControlsStyles.pause,
              bottomControlsStyles.icon
            )}
          />
        </PlayButton>

        <SeekButton seconds={-10} className={bottomControlsStyles.button}>
          <SkipBackIcon className={bottomControlsStyles.icon} />
        </SeekButton>

        <SeekButton seconds={10} className={bottomControlsStyles.button}>
          <SkipForwardIcon className={bottomControlsStyles.icon} />
        </SeekButton>
      </div>

      <div className={bottomControlsStyles.block}>
        <MuteButton className={bottomControlsStyles.button}>
          <VolumeX size={16} className={bottomControlsStyles.volumeX} />
          <Volume2 size={16} className={bottomControlsStyles.volume} />
        </MuteButton>

        <VolumeSlider.Root className={bottomControlsStyles.volumeRoot}>
          <VolumeSlider.Track className={bottomControlsStyles.volumeTrack}>
            <VolumeSlider.TrackFill
              className={bottomControlsStyles.volumeTrackFill}
              style={{ width: `var(--slider-fill)` }}
            />
          </VolumeSlider.Track>

          <VolumeSlider.Thumb
            className={bottomControlsStyles.volumeThumb}
            style={{ left: `var(--slider-fill)` }}
          />
        </VolumeSlider.Root>

        <PlayerSettingsMenu />

        <FullscreenButton className={bottomControlsStyles.button}>
          <Maximize2 size={16} className={bottomControlsStyles.maximize} />
          <Minimize2 size={16} className={bottomControlsStyles.minimize} />
        </FullscreenButton>
      </div>
    </div>
  );
};
