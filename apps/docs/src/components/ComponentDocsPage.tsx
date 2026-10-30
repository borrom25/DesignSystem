import type { ReactNode } from "react";

interface ComponentDocsPageProps {
  children: ReactNode;
}

export function ComponentDocsPage({ children }: ComponentDocsPageProps) {
  return <div className="flex flex-col gap-6 p-9">{children}</div>;
}
