import { useLayoutEffect, useState, type ReactNode } from "react";

type UseSidebarWidthProps = {
  hasSidebar: boolean;
  isMobile: boolean;
  sidebar: ReactNode;
  sidebarElement: Element | null;
};

export function useSidebarWidth({
  hasSidebar,
  isMobile,
  sidebar,
  sidebarElement,
}: UseSidebarWidthProps) {
  const [sidebarWidth, setSidebarWidth] = useState(0);

  useLayoutEffect(() => {
    if (isMobile || !hasSidebar || !(sidebarElement instanceof HTMLElement)) {
      setSidebarWidth(0);
      return;
    }

    const updateSidebarWidth = () => {
      setSidebarWidth(sidebarElement.getBoundingClientRect().width);
    };

    updateSidebarWidth();

    const resizeObserver = new ResizeObserver(updateSidebarWidth);
    resizeObserver.observe(sidebarElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [hasSidebar, isMobile, sidebar, sidebarElement]);

  return sidebarWidth;
}
