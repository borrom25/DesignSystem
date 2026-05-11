import { cn } from "@/utils";
import { Size } from "@/types";
import closeCircleIconRaw from "@/assets/icons/closeCircle.svg?raw";
import { CloseBtnProps } from "./CloseBtn.types";
import { closeBtnStyles } from "./styles";

export function CloseBtn({
  size = Size.Sm,
  className,
  type = "button",
  error = false,
  ...restProps
}: CloseBtnProps) {
  const svgSize = closeBtnStyles.iconSizeMap[size];

  return (
    <button
      type={type}
      className={cn(closeBtnStyles.base, closeBtnStyles.size[size], className)}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
      {...restProps}
    >
      <span
        aria-hidden="true"
        className={cn(closeBtnStyles.icon, closeBtnStyles.error.get(error))}
        style={{ width: `${svgSize}px`, height: `${svgSize}px` }}
        dangerouslySetInnerHTML={{ __html: closeCircleIconRaw }}
      />
    </button>
  );
}
