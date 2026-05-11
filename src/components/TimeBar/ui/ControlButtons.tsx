import { Button } from "@/components/Button";
import { Color, Size, Type } from "@/types";
import { buttonsContainerClasses } from "../styles";
import type { ControlButtonsProps } from "../TimeBar.types";

export function ControlButtons({
  onNow,
  onConfirm,
  disabled = false,
  nowButtonText = "Сейчас",
  confirmButtonText = "Ок",
  showNowButton = true,
  showConfirmButton = true,
}: ControlButtonsProps) {
  if (!showNowButton && !showConfirmButton) {
    return null;
  }

  return (
    <div className={buttonsContainerClasses}>
      {showNowButton ? (
        <Button
          type={Type.Ghost}
          color={Color.Brand}
          size={Size.Sm}
          onClick={onNow}
          disabled={disabled}
        >
          {nowButtonText}
        </Button>
      ) : (
        <div />
      )}

      {showConfirmButton && (
        <Button
          type={Type.Flat}
          color={Color.Brand}
          size={Size.Sm}
          onClick={onConfirm}
          disabled={disabled}
        >
          {confirmButtonText}
        </Button>
      )}
    </div>
  );
}
