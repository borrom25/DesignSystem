import { cn } from "@/utils";
import { Size } from "@/types";
import type { TagProps } from "./Tag.types";
import { avatarSizeMap, tagStyles } from "./styles";
import { CloseBtn } from "@/components/CloseBtn";
import { Avatar } from "@/components/Avatar";

export function Tag({
  size = Size.Md,
  avatar,
  leftContent,
  onClose,
  error = false,
  disabled = false,
  className,
  children,
  ...restProps
}: TagProps) {
  const hasAvatar = !!avatar;

  return (
    <span
      className={cn(
        tagStyles.base,
        tagStyles.size[size],
        error && tagStyles.error,
        disabled && tagStyles.disabled,
        hasAvatar && tagStyles.gap[size],
        hasAvatar && tagStyles.withAvatar,
        hasAvatar && tagStyles.withAvatarSize[size],
        className
      )}
      {...restProps}
    >
      {hasAvatar && (
        <Avatar
          {...avatar}
          size={avatarSizeMap[size]}
          className={cn("shrink-0", avatar.className)}
        />
      )}
      <span className={cn("inline-flex items-center", tagStyles.gap[size])}>
        {!hasAvatar && leftContent}
        {children}
        {onClose && (
          <CloseBtn
            size={Size.Md}
            onClick={onClose}
            aria-label="Закрыть"
            error={error}
            disabled={disabled}
          />
        )}
      </span>
    </span>
  );
}
