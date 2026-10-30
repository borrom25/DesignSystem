import { Color, Size } from "@/types";
import { RotatePhotoLeft, RotatePhotoRight } from "../icons/RotatePhoto";
import { photoStyles } from "../styles";
import { PhotoIconAction } from "./PhotoIconAction";

export function PhotoRotateBar({
  onRotate,
}: {
  onRotate: (delta: 90 | -90) => void;
}) {
  return (
    <div
      className={photoStyles.rotateBar}
      onClick={(event) => event.stopPropagation()}
    >
      <PhotoIconAction
        icon={RotatePhotoLeft}
        label="Повернуть влево"
        color={Color.ContrastLight}
        size={Size.Md}
        onClick={() => onRotate(-90)}
      />
      <PhotoIconAction
        icon={RotatePhotoRight}
        label="Повернуть вправо"
        color={Color.ContrastLight}
        size={Size.Md}
        onClick={() => onRotate(90)}
      />
    </div>
  );
}
