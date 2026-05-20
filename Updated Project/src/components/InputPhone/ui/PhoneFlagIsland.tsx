import type { Size } from "@/types";
import { cn } from "@/utils";
import flagRussiaIcon from "@/assets/icons/flagRussia.svg";
import { phoneCountryCode } from "../InputPhone.utils";
import { inputPhoneStyles, islandIconSizes } from "../styles";

interface PhoneFlagIslandProps {
  size: Size;
  disabled?: boolean;
}

export function PhoneFlagIsland({
  size,
  disabled = false,
}: PhoneFlagIslandProps) {
  const iconSize = islandIconSizes[size];

  return (
    <span
      className={cn(
        inputPhoneStyles.island,
        inputPhoneStyles.islandSize[size],
        disabled && inputPhoneStyles.disabled
      )}
    >
      <img
        src={flagRussiaIcon}
        alt=""
        width={iconSize}
        height={iconSize}
        className={inputPhoneStyles.iconSize[size]}
      />
      <span>{phoneCountryCode}</span>
    </span>
  );
}
