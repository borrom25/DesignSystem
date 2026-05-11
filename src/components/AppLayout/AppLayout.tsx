import { useRef } from "react";
import { cn } from "@/utils";
import { useScreenSize } from "@/providers";
import type { AppLayoutProps } from "./AppLayout.types";
import { appLayoutStyles } from "./styles";
import { useSidebarWidth } from "./hooks";

export function AppLayout({
  container = "fill",
  header,
  sidebar,
  children,
  className,
  ...restProps
}: AppLayoutProps) {
  const hasSidebar = !!sidebar;
  const { isMobile } = useScreenSize();
  const sidebarWrapperRef = useRef<HTMLElement | null>(null);
  const sidebarWidth = useSidebarWidth({
    hasSidebar,
    isMobile,
    sidebar,
    sidebarElement: sidebarWrapperRef.current?.firstElementChild ?? null,
  });

  const sidebarStyle =
    !isMobile && sidebarWidth > 0 ? { width: sidebarWidth } : undefined;

  return (
    <div className={cn(appLayoutStyles.root, className)} {...restProps}>
      {header && <header className={appLayoutStyles.header}>{header}</header>}

      <div className={appLayoutStyles.body}>
        {hasSidebar && (
          <aside
            ref={sidebarWrapperRef}
            className={appLayoutStyles.sidebar}
            style={sidebarStyle}
          >
            {sidebar}
          </aside>
        )}

        <main className={appLayoutStyles.main}>
          <div className={appLayoutStyles.container[container]}>{children}</div>
        </main>
      </div>
    </div>
  );
}
