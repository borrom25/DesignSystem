import type { ReactNode } from "react";
import { Block } from "@/components";
import { DocsCodeBlock } from "@docs/components/DocsCodeBlock";

interface QuickStartStepCardProps {
  description: ReactNode;
  code?: string;
  children?: ReactNode;
}

export function QuickStartStepCard({
  description,
  code,
  children,
}: QuickStartStepCardProps) {
  return (
    <Block className="p-6">
      <div className="flex flex-col gap-3 text-sm text-secondary">
        <div className="leading-relaxed">{description}</div>
        {code && <DocsCodeBlock code={code} />}
        {children}
      </div>
    </Block>
  );
}
