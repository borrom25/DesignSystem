import { DownloadProps } from "./Download.types.ts";
import { ArrowDownToLine, File } from "lucide-react";
import { cn } from "@/utils";
import { Color, Size, Type } from "@/types";
import { Button } from "@/components";
import { downloadStyles } from "./styles";

export const Download = ({
  fileName,
  fileSize,
  withBackground = true,
  icon: Icon = File,
  action,
  onActionClick,
  actionAriaLabel = "Скачать файл",
  className,
  ...restProps
}: DownloadProps) => {
  return (
    <div
      className={cn(
        downloadStyles.root,
        withBackground && downloadStyles.file,
        className
      )}
      {...restProps}
    >
      <div className={downloadStyles.iconWrapper} aria-hidden="true">
        <Icon size={16} className={downloadStyles.icon} />
      </div>

      <div className={downloadStyles.body}>
        <div className={downloadStyles.title}>{fileName}</div>
        {fileSize && <div className={downloadStyles.size}>{fileSize}</div>}
      </div>

      <div className={downloadStyles.action}>
        {action ?? (
          <Button
            iconOnly={ArrowDownToLine}
            type={Type.Flat}
            color={Color.Brand}
            size={Size.Xs}
            className={downloadStyles.actionButton}
            aria-label={actionAriaLabel}
            onClick={onActionClick}
          />
        )}
      </div>
    </div>
  );
};
