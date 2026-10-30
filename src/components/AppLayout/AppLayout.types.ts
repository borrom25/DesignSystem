import type { ReactNode, HTMLAttributes } from "react";

export type AppLayoutContainer = "fill" | (string & {});

export type AppLayoutProps = HTMLAttributes<HTMLDivElement> & {
  container?: AppLayoutContainer;
  size?: number;
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
};
