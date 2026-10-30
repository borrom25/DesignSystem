import type { TextVariant } from "@/components/Text";
import type { PlayerLabelPosition } from "../Player.types";
import { PlayerProgressBar } from "./PlayerProgressBar";
import { PlayerBottomControls } from "./PlayerBottomControls";
import { playerStyles } from "../styles";

interface PlayerBottomBarProps {
  title?: string;
  titleVariant?: TextVariant;
  labelVariant?: TextVariant;
  labelPosition?: PlayerLabelPosition;
}

export const PlayerBottomBar = ({
  title,
  titleVariant,
  labelVariant,
  labelPosition,
}: PlayerBottomBarProps) => {
  return (
    <div className={playerStyles.bottom.root}>
      <PlayerProgressBar
        title={title}
        titleVariant={titleVariant}
        labelVariant={labelVariant}
        labelPosition={labelPosition}
      />
      <PlayerBottomControls />
    </div>
  );
};
