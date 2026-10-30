import { useEffect, useRef, useState } from "react";

export const usePlayerTimer = () => {
  const [isActive, setIsActive] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => {
    setIsActive(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsActive(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { isActive, setIsActive, resetTimer };
};
