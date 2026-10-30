import { useEffect, useState } from "react";
import { getPdfThumbnail } from "../pdf";
import {
  getVideoThumbnail,
  isImageFile,
  isPdfFile,
  isVideoFile,
} from "../utils";

export interface UseFileTilePreviewParams {
  file: File;
}

export function useFileTilePreview({ file }: UseFileTilePreviewParams) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isImage = isImageFile(file);
  const isVideo = isVideoFile(file);
  const isPdf = isPdfFile(file);
  const hasMediaPreview = (isImage || isVideo || isPdf) && !!previewUrl;

  useEffect(() => {
    let revokedObjectUrl: string | null = null;
    let cancelled = false;

    const loadPreview = async () => {
      if (isVideo) {
        try {
          const thumbnail = await getVideoThumbnail(file);
          if (!cancelled) setPreviewUrl(thumbnail);
        } catch {
          if (!cancelled) setPreviewUrl(null);
        }
        return;
      }

      if (isPdf) {
        try {
          const thumbnail = await getPdfThumbnail(file);
          if (!cancelled) setPreviewUrl(thumbnail);
        } catch {
          if (!cancelled) setPreviewUrl(null);
        }
        return;
      }

      if (!isImage) {
        if (!cancelled) setPreviewUrl(null);
        return;
      }

      const url = URL.createObjectURL(file);
      revokedObjectUrl = url;
      if (!cancelled) setPreviewUrl(url);
    };

    setPreviewUrl(null);
    void loadPreview();

    return () => {
      cancelled = true;
      if (revokedObjectUrl) URL.revokeObjectURL(revokedObjectUrl);
    };
  }, [file, isImage, isPdf, isVideo]);

  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const viewAriaLabel = isVideo
    ? "Воспроизвести видео"
    : isPdf
      ? "Просмотреть документ"
      : "Просмотреть изображение";

  return {
    previewUrl,
    isImage,
    isVideo,
    isPdf,
    hasMediaPreview,
    isModalOpen,
    handleView,
    closeModal,
    viewAriaLabel,
  };
}
