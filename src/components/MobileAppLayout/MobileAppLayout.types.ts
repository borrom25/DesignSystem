import type { ReactNode, HTMLAttributes } from "react";

export type MobileAppLayoutProps = HTMLAttributes<HTMLDivElement> & {
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
};
