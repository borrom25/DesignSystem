import type { ReactNode, HTMLAttributes } from "react";

export type AppLayoutContainer = "640" | "720" | "fill";

export type AppLayoutProps = HTMLAttributes<HTMLDivElement> & {
  container?: AppLayoutContainer;
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
};
