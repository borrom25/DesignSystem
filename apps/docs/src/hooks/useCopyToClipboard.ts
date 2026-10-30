import { useCallback, useEffect, useRef, useState } from "react";

interface UseCopyToClipboardOptions {
  resetDelay?: number;
}

export function useCopyToClipboard({
  resetDelay = 2000,
}: UseCopyToClipboardOptions = {}) {
  const [copied, setCopied] = useState(false);
  const resetTimeoutRef = useRef<number | undefined>(undefined);

  const copy = useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);

        if (resetTimeoutRef.current !== undefined) {
          window.clearTimeout(resetTimeoutRef.current);
        }

        resetTimeoutRef.current = window.setTimeout(() => {
          setCopied(false);
          resetTimeoutRef.current = undefined;
        }, resetDelay);
      } catch {
        setCopied(false);
      }
    },
    [resetDelay]
  );

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current !== undefined) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  return { copied, copy };
}
