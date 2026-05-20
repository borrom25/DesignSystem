import { CloudDownload, FileText } from "lucide-react";
import { Button } from "@/components";
import { Color, Size, Type } from "@/types";
import { cn } from "@/utils";
import { bubbleStyles } from "../styles";
import { BubbleFileProps } from "../Bubble.types.ts";
import { useBubbleContext } from "../Bubble.context.ts";

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
  const { fileOnly } = useBubbleContext();
  const fileStyles = bubbleStyles.file;
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
    <div
      className={cn(!fileOnly && fileStyles.file, fileStyles.root, className)}
      {...restProps}
    >
      <div className={fileStyles.iconWrapper} aria-hidden="true">
        <Icon className={fileStyles.icon} />
      </div>

      <div className={fileStyles.body}>
        <div className={fileStyles.title}>{fileName}</div>
        {fileSize && <div className={fileStyles.size}>{fileSize}</div>}
      </div>

      <div className={fileStyles.action}>{action ?? defaultAction}</div>
    </div>
  );
}
