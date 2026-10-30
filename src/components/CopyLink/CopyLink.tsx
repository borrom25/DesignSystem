import { Check, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/Button";
import { buttonStyles } from "@/components/Button/styles";
import { Color, HtmlType, Size, Type } from "@/types";
import { cn, getIconSize } from "@/utils";
import { useCopyLink } from "./hooks";
import { copyLinkStyles } from "./styles";
import type { CopyLinkProps } from "./CopyLink.types";

export function CopyLink({
  value,
  size,
  htmlType = HtmlType.Button,
  scaling = true,
  defaultText = "Копировать ссылку",
  successText = "Скопировано",
  icon: Icon = LinkIcon,
  successIcon: SuccessIcon = Check,
  successDuration = 2000,
  disabled,
  onClick,
  onCopy,
  onCopyError,
  className,
  ...restProps
}: CopyLinkProps) {
  const { isCopied, handleClick } = useCopyLink({
    value,
    successDuration,
    disabled,
    onClick,
    onCopy,
    onCopyError,
  });
  const resolvedSize = size ?? Size.Md;
  const iconSize = getIconSize(resolvedSize, buttonStyles.iconSizeMap);

  return (
    <Button
      {...restProps}
      htmlType={htmlType}
      type={Type.Flat}
      color={isCopied ? Color.Positive : Color.Secondary}
      size={size}
      scaling={scaling}
      className={cn(copyLinkStyles.root, className)}
      disabled={disabled}
      onClick={handleClick}
    >
      <span className={copyLinkStyles.label}>
        <span
          aria-hidden="true"
          className={cn(
            copyLinkStyles.labelMeasure,
            copyLinkStyles.contentGap[resolvedSize]
          )}
        >
          <span>{defaultText}</span>
          <Icon size={iconSize} className={copyLinkStyles.icon} />
        </span>
        <span
          aria-hidden="true"
          className={cn(
            copyLinkStyles.labelMeasure,
            copyLinkStyles.contentGap[resolvedSize]
          )}
        >
          <span>{successText}</span>
          <SuccessIcon size={iconSize} className={copyLinkStyles.icon} />
        </span>
        <span
          className={cn(
            copyLinkStyles.labelState,
            copyLinkStyles.contentGap[resolvedSize],
            copyLinkStyles.labelAnimated,
            isCopied ? copyLinkStyles.labelHidden : copyLinkStyles.labelVisible
          )}
        >
          <span>{defaultText}</span>
          <Icon size={iconSize} className={copyLinkStyles.icon} />
        </span>
        <span
          className={cn(
            copyLinkStyles.labelState,
            copyLinkStyles.contentGap[resolvedSize],
            copyLinkStyles.labelAnimated,
            isCopied ? copyLinkStyles.labelVisible : copyLinkStyles.labelHidden
          )}
        >
          <span>{successText}</span>
          <SuccessIcon size={iconSize} className={copyLinkStyles.icon} />
        </span>
      </span>
    </Button>
  );
}
