import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEventHandler,
} from "react";
import { copyText } from "../CopyLink.utils";

type UseCopyLinkParams = {
  value: string;
  successDuration: number;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onCopy?: (value: string) => void | Promise<void>;
  onCopyError?: (error: unknown) => void;
};

export function useCopyLink({
  value,
  successDuration,
  disabled,
  onClick,
  onCopy,
  onCopyError,
}: UseCopyLinkParams) {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const scheduleReset = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsCopied(false);
      timeoutRef.current = null;
    }, successDuration);
  }, [successDuration]);

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    async (event) => {
      onClick?.(event);

      if (event.defaultPrevented || disabled) {
        return;
      }

      try {
        await copyText(value);
        await onCopy?.(value);
        setIsCopied(true);
        scheduleReset();
      } catch (error) {
        onCopyError?.(error);
      }
    },
    [disabled, onClick, onCopy, onCopyError, scheduleReset, value]
  );

  return {
    isCopied,
    handleClick,
  };
}
