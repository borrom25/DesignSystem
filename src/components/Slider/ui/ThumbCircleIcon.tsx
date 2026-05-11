import { sliderStyles } from "../styles";

export function ThumbCircleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={sliderStyles.thumbCircle}
    >
      <circle cx="8" cy="8" r="6" strokeWidth="3" />
    </svg>
  );
}
