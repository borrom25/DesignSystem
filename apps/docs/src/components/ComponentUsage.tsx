import { Copy, Check } from "lucide-react";
import { Block } from "@/components";
import { useCopyToClipboard } from "@docs/hooks/useCopyToClipboard";
import { ComponentSectionHeading } from "./ComponentSectionHeading";

interface ComponentUsageProps {
  code: string;
  title?: string;
}

export function ComponentUsage({
  code,
  title = "Общественное использование",
}: ComponentUsageProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <Block>
      <div className="flex flex-col gap-4">
        <ComponentSectionHeading>{title}</ComponentSectionHeading>

        <div className="relative rounded-scale-3xl bg-page">
          <button
            type="button"
            onClick={() => void copy(code)}
            className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-md text-secondary transition-colors hover:bg-generic hover:text-primary"
          >
            {copied ? <Check /> : <Copy />}
          </button>

          <pre className="overflow-x-auto p-6 pr-14 text-sm leading-relaxed text-secondary">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </Block>
  );
}
