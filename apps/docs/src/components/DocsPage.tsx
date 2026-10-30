import type { ReactNode } from "react";
import { Block } from "@/components";

interface DocsPageProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function DocsPage({ title, description, children }: DocsPageProps) {
  return (
    <div className="flex flex-col gap-8 p-9">
      <header className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-primary">{title}</h1>
        {description && (
          <p className="max-w-3xl text-sm leading-relaxed text-secondary">
            {description}
          </p>
        )}
      </header>
      {children}
    </div>
  );
}

interface DocsSectionProps {
  title: string;
  children: ReactNode;
}

export function DocsSection({ title, children }: DocsSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-md font-medium text-primary">{title}</h2>
      {children}
    </section>
  );
}

export function DocsDemo({ children }: { children: ReactNode }) {
  return <Block className="p-6">{children}</Block>;
}
