import { CloudDownload, FileText } from "lucide-react";
import { Button } from "@/components";
import { Color, Size, Type } from "@/types";
import { cn } from "@/utils";
import { bubbleStyles } from "../styles";
import { BubbleFileProps } from "../Bubble.types.ts";

export function BubbleFile({
  fileName,
  fileSize,
  icon: Icon = FileText,
  action,
  onActionClick,
  actionAriaLabel = "Скачать файл",
  className,
  ...restProps
}: BubbleFileProps) {
  const defaultAction = (
    <Button
      iconOnly={CloudDownload}
      type={Type.Flat}
      color={Color.Brand}
      size={Size.Xs}
      aria-label={actionAriaLabel}
      onClick={onActionClick}
    />
  );

  return (
    <div className={cn(bubbleStyles.file.root, className)} {...restProps}>
      <div className={bubbleStyles.file.iconWrapper} aria-hidden="true">
        <Icon className={bubbleStyles.file.icon} />
      </div>

      <div className={bubbleStyles.file.body}>
        <div className={bubbleStyles.file.title}>{fileName}</div>
        {fileSize && <div className={bubbleStyles.file.size}>{fileSize}</div>}
      </div>

      <div className={bubbleStyles.file.action}>{action ?? defaultAction}</div>
    </div>
  );
}
