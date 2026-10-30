import { useEffect, useState } from "react";
import { getPdfPagePreviews } from "@/shared/FileTilePreview/pdf";

interface UsePdfModalPagesParams {
  file?: File;
  src?: string | null;
  isOpen: boolean;
}

export function usePdfModalPages({
  file,
  src,
  isOpen,
}: UsePdfModalPagesParams) {
  const [pages, setPages] = useState<string[]>([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setPages([]);
      setFailed(false);
      return;
    }

    let cancelled = false;

    const loadPages = async () => {
      try {
        const previews = await getPdfPagePreviews(file, src);
        if (cancelled) return;
        setPages(previews);
        setFailed(previews.length === 0);
      } catch {
        if (cancelled) return;
        setPages([]);
        setFailed(true);
      }
    };

    void loadPages();

    return () => {
      cancelled = true;
    };
  }, [file, src, isOpen]);

  return { pages, failed };
}
