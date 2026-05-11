import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type UseWrappedStateProps = {
  singleRowHeight: number;
};

export function useWrappedState({ singleRowHeight }: UseWrappedStateProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWrapped, setIsWrapped] = useState(false);

  const checkIsWrapped = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const nextWrapped = container.scrollHeight > singleRowHeight + 1;

    setIsWrapped((prev) => (prev !== nextWrapped ? nextWrapped : prev));
  }, [singleRowHeight]);

  useLayoutEffect(() => {
    checkIsWrapped();
  }, [checkIsWrapped]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || typeof ResizeObserver === "undefined") {
      return undefined;
    }

    const observer = new ResizeObserver(() => {
      checkIsWrapped();
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [checkIsWrapped]);

  return { containerRef, isWrapped };
}
