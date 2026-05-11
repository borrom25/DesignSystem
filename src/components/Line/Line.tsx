import { Avatar } from "../Avatar";
import { cn } from "@/utils";
import { lineStyles } from "./styles";
import { Label } from "../Label";
import { UserItem } from "../UserItem";
import { LineProps } from "./Line.types";
import { TypedSlot } from "@/shared/TypedSlot";
import { Size, Type } from "@/types";

export function Line({
  title,
  className,
  subtitle,
  disabled,
  labelGroup,
  leftSlot,
  position = "horizontal",
  rightSlot,
  type = "default",
  src,
}: LineProps) {
  return (
    <div
      className={cn(
        className,
        lineStyles.base,
        lineStyles.position[position],
        lineStyles.type[type]
      )}
      aria-disabled={disabled}
    >
      {leftSlot && <TypedSlot disabled={disabled}>{leftSlot}</TypedSlot>}
      <div
        className={cn(
          lineStyles.head,
          position === "vertical" && lineStyles.headCol
        )}
      >
        <Avatar src={src} size={44} alt={title} />
        <UserItem size="sm" className={lineStyles.content}>
          <UserItem.Title className={lineStyles.title}>{title}</UserItem.Title>
          <UserItem.Subtitle className={lineStyles.subtitle}>
            {subtitle}
          </UserItem.Subtitle>
          {!!labelGroup?.length && (
            <div className={lineStyles.list}>
              {labelGroup.map((label, i) => (
                <Label
                  key={i}
                  type={Type.Flat}
                  size={Size.Xs}
                  disabled={disabled}
                >
                  {label}
                </Label>
              ))}
            </div>
          )}
        </UserItem>
      </div>
      {rightSlot && <TypedSlot disabled={disabled}>{rightSlot}</TypedSlot>}
    </div>
  );
}
