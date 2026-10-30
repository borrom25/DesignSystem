import { PlayButton, SeekButton } from "@vidstack/react";
import { RotateCcw } from "lucide-react";
import { playerStyles } from "../styles";
import { cn } from "@/utils";
import { PlayIcon } from "../icons/Play.tsx";
import { PauseIcon } from "../icons/Pause.tsx";
import { SkipForwardIcon } from "../icons/SkipForward.tsx";
import { SkipBackIcon } from "../icons/SkipBack.tsx";

export const PlayerControls = () => {
  const controlsStyles = playerStyles.controls;

  return (
    <div className={controlsStyles.container}>
      <SeekButton seconds={-10} className={controlsStyles.button}>
        <SkipBackIcon className={controlsStyles.skipIcon} />
      </SeekButton>

      <PlayButton className={cn(controlsStyles.button, "p-[20px]")}>
        <PlayIcon className={cn(controlsStyles.play, controlsStyles.icon)} />
        <PauseIcon className={cn(controlsStyles.pause, controlsStyles.icon)} />
        <RotateCcw size={40} className={controlsStyles.rotate} />
      </PlayButton>

      <SeekButton seconds={10} className={controlsStyles.button}>
        <SkipForwardIcon className={controlsStyles.skipIcon} />
      </SeekButton>
    </div>
  );
};
