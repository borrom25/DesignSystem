import { useEffect } from "react";

export function useGalleryKeyboard(
  isOpen: boolean,
  onPrev?: () => void,
  onNext?: () => void
) {
  useEffect(() => {
    if (!isOpen || (!onPrev && !onNext)) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev?.();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext?.();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onPrev, onNext]);
}
