import { cn } from "@/utils";
import { useScreenSize } from "@/providers";
import type { AppLayoutProps } from "./AppLayout.types";
import { appLayoutStyles } from "./styles";
import { useAppLayoutSidebarStyle } from "./hooks";

export function AppLayout({
  container,
  size,
  header,
  sidebar,
  children,
  className,
  ...restProps
}: AppLayoutProps) {
  const hasSidebar = !!sidebar;
  const { isMobile } = useScreenSize();
  const { sidebarWrapperRef, sidebarStyle } = useAppLayoutSidebarStyle({
    sidebar,
    hasSidebar,
    isMobile,
    hasHeader: !!header,
    isFill: container === "fill",
  });

  const isFill = container === "fill";
  const containerClassName = isFill
    ? appLayoutStyles.container.fill
    : appLayoutStyles.container.default;
  const containerStyle = appLayoutStyles.getContainerStyle(isFill, size);

  return (
    <div className={cn(appLayoutStyles.root, className)} {...restProps}>
      {header && (
        <header className={appLayoutStyles.header} data-mobile={isMobile}>
          {header}
        </header>
      )}

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
          <div className={containerClassName} style={containerStyle}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
