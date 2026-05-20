import { cn, formatFileSize } from "@/utils";
import {
  CircleCheck,
  CircleAlert,
  Download,
  FileIcon,
  LoaderCircle,
  X,
} from "lucide-react";
import { IconButton } from "@/components/IconButton";
import { Color, Size, Type } from "@/types";
import type { FilePreviewProps } from "../InputFiles.types";
import { downloadBlob } from "../InputFiles.utils";
import { inputFilesStyles } from "../styles";

export function FilePreview({
  file,
  size,
  error,
  downloadUrl,
  onDownload,
  showDownload,
  viewMode,
  onRemove,
  isLoading,
  uploaderPercent,
  className,
}: FilePreviewProps) {
  const previewStyles = inputFilesStyles.preview;

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDownload) {
      onDownload(file);
    } else if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();
    } else if (showDownload) {
      downloadBlob(file, file.name);
    }
  };

  const canDownload = showDownload || !!downloadUrl || !!onDownload;
  return (
    <div
      className={cn(
        previewStyles.base,
        previewStyles.size[size],
        error ? previewStyles.error : previewStyles.state,
        className
      )}
    >
      <div className={previewStyles.info}>
        {viewMode ? (
          <FileIcon
            className={cn(previewStyles.icon, previewStyles.iconViewMode)}
            size={20}
          />
        ) : error ? (
          <CircleAlert
            className={cn(previewStyles.icon, previewStyles.iconError)}
            size={20}
          />
        ) : isLoading ? (
          <LoaderCircle
            className={cn(previewStyles.icon, previewStyles.iconLoading)}
            size={20}
          />
        ) : (
          <CircleCheck
            className={cn(previewStyles.icon, previewStyles.iconSuccess)}
            size={20}
          />
        )}
        {typeof uploaderPercent === "number" && (
          <span className={previewStyles.loading}>{uploaderPercent}</span>
        )}
        <span className={previewStyles.name}>{file.name}</span>
      </div>

      <div className={previewStyles.actions}>
        <span className={previewStyles.sizeText}>
          {formatFileSize(file.size)}
        </span>
        {canDownload && (
          <IconButton
            icon={Download}
            size={size}
            type={Type.Flat}
            color={Color.Brand}
            onClick={handleDownload}
            aria-label="Скачать файл"
            title="Скачать файл"
          />
        )}
        {!viewMode && (
          <IconButton
            icon={X}
            size={Size.Sm}
            type={Type.Ghost}
            color={Color.Inverse}
            onClick={onRemove}
            aria-label="Скачать файл"
            title="Скачать файл"
          />
        )}
      </div>
    </div>
  );
}
