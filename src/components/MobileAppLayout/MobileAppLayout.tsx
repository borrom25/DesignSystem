import { cn } from "@/utils";
import { useScreenSize } from "@/providers";
import { useAppLayoutSidebarStyle } from "@/components/AppLayout/hooks";
import { mobileAppLayoutStyles } from "./styles";
import type { MobileAppLayoutProps } from "./MobileAppLayout.types";

export function MobileAppLayout({
  header,
  sidebar,
  children,
  className,
  ...restProps
}: MobileAppLayoutProps) {
  const hasSidebar = !!sidebar;
  const { isMobile } = useScreenSize();
  const { sidebarWrapperRef, sidebarStyle } = useAppLayoutSidebarStyle({
    sidebar,
    hasSidebar,
    isMobile,
    hasHeader: !!header,
  });

  return (
    <div className={cn(mobileAppLayoutStyles.root, className)} {...restProps}>
      {header && (
        <header className={mobileAppLayoutStyles.header} data-mobile={isMobile}>
          {header}
        </header>
      )}

      <div className={mobileAppLayoutStyles.body}>
        {hasSidebar && (
          <aside
            ref={sidebarWrapperRef}
            className={mobileAppLayoutStyles.sidebar}
            style={sidebarStyle}
          >
            {sidebar}
          </aside>
        )}

        <main className={mobileAppLayoutStyles.main}>
          <div className={mobileAppLayoutStyles.container}>{children}</div>
        </main>
      </div>
    </div>
  );
}
