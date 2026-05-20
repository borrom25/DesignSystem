import {
  useCallback,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useSidebarWidth } from "./useSidebarWidth";

interface UseAppLayoutSidebarStyleOptions {
  sidebar?: ReactNode;
  hasSidebar: boolean;
  isMobile: boolean;
}

export function useAppLayoutSidebarStyle({
  sidebar,
  hasSidebar,
  isMobile,
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

  const sidebarStyle: CSSProperties | undefined =
    !isMobile && sidebarWidth > 0 ? { width: sidebarWidth } : undefined;

  return {
    sidebarWrapperRef,
    sidebarStyle,
  };
}
