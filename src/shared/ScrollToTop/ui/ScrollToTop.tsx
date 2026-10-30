import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(() => {
      const mainContainer = document.querySelector("main");

      if (mainContainer) {
        mainContainer.scrollTo({
          top: 0,
          behavior: "auto",
        });
      }
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [pathname]);

  return null;
}
