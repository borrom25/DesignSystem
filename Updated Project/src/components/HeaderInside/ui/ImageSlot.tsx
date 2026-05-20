import { headerInsideStyles } from "../styles";

export interface ImageSlotProps {
  imageSrc: string;
}

export function ImageSlot({ imageSrc }: ImageSlotProps) {
  return (
    <div className={headerInsideStyles.imageSlot}>
      <img
        src={imageSrc}
        alt=""
        className={headerInsideStyles.imageSlotImage}
      />
    </div>
  );
}
