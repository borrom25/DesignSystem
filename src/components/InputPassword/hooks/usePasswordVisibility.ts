import { useState, useCallback } from "react";

interface UsePasswordVisibilityProps {
  showPasswordByDefault?: boolean;
}

export function usePasswordVisibility({
  showPasswordByDefault = false,
}: UsePasswordVisibilityProps = {}) {
  const [visible, setVisible] = useState(showPasswordByDefault);

  const toggleVisibility = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
    []
  );

  return {
    visible,
    toggleVisibility,
    handleMouseDown,
  };
}
