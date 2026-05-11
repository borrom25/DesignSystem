import { useState, useEffect } from "react";

export function useModalVisibility(open: boolean, duration = 300) {
  const [state, setState] = useState<"open" | "closed">(
    open ? "open" : "closed"
  );
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setTimeout(() => setState("open"), 10);
    } else {
      setState("closed");
      const timer = setTimeout(() => setShouldRender(false), duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration]);

  return {
    shouldRender,
    state,
  };
}
