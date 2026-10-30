import { useEffect, useState } from "react";

export function useFileObjectUrl(
  file?: File,
  src?: string | null
): string | null {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }

    setPreviewUrl(src ?? null);
  }, [file, src]);

  return previewUrl;
}
