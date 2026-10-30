import { useCallback, useState, type ReactNode } from "react";
import { useSidebarWidth } from "./useSidebarWidth";
import { getAppLayoutSidebarStyle } from "../styles";

interface UseAppLayoutSidebarStyleOptions {
  sidebar?: ReactNode;
  hasSidebar: boolean;
  isMobile: boolean;
  hasHeader: boolean;
  isFill?: boolean;
}

export function useAppLayoutSidebarStyle({
  sidebar,
  hasSidebar,
  isMobile,
  hasHeader,
  isFill = false,
}: UseAppLayoutSidebarStyleOptions) {
  const [sidebarWrapperElement, setSidebarWrapperElement] =
    useState<HTMLElement | null>(null);

  const sidebarWrapperRef = useCallback((element: HTMLElement | null) => {
    setSidebarWrapperElement(element);
  }, []);

  const sidebarWidth = useSidebarWidth({
    hasSidebar,
    isMobile,
    sidebar,
    sidebarElement: sidebarWrapperElement?.firstElementChild ?? null,
  });

  const sidebarStyle =
    !isMobile && hasSidebar
      ? getAppLayoutSidebarStyle(sidebarWidth, hasHeader, isFill)
      : undefined;

  return {
    sidebarWrapperRef,
    sidebarStyle,
  };
}
