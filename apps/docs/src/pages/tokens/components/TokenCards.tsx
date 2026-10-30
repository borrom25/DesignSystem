import { Block } from "@/components";
import { TokenMeta } from "./TokenMeta";

interface ColorTokenCardProps {
  name: string;
  variable: string;
  utility?: string;
  kind: "background" | "text";
}

export function ColorTokenCard({
  name,
  variable,
  utility,
  kind,
}: ColorTokenCardProps) {
  return (
    <Block className="flex flex-col gap-2 p-3">
      {kind === "background" ? (
        <div
          className="h-12 rounded-md border border-line"
          style={{ background: `var(${variable})` }}
        />
      ) : (
        <p
          className="text-md font-medium"
          style={{ color: `var(${variable})` }}
        >
          {name}
        </p>
      )}
      <div className="flex flex-col gap-0.5">
        {kind === "background" && (
          <span className="text-sm font-medium text-primary">{name}</span>
        )}
        <TokenMeta variable={variable} utility={utility} />
      </div>
    </Block>
  );
}

interface SpacingTokenCardProps {
  name: string;
  variable: string;
  utility: string;
  value: string;
}

export function SpacingTokenCard({
  name,
  variable,
  utility,
  value,
}: SpacingTokenCardProps) {
  return (
    <Block className="flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-primary">
            spacing {name}
          </span>
          <code className="text-xs text-secondary">{variable}</code>
        </div>
        <span className="text-sm font-medium text-primary">{value}</span>
      </div>
      <div className="flex items-center gap-3">
        <div
          className="h-4 rounded-sm bg-brand-heavy"
          style={{ width: `var(${variable})` }}
        />
        <code className="text-xs text-primary">{utility}</code>
      </div>
    </Block>
  );
}

interface GapTokenCardProps {
  title: string;
  variable: string;
  utility: string;
  value: string;
}

export function GapTokenCard({
  title,
  variable,
  utility,
  value,
}: GapTokenCardProps) {
  return (
    <Block className="flex flex-col gap-3 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-primary">{title}</span>
          <code className="text-xs text-secondary">{variable}</code>
        </div>
        <span className="text-sm font-medium text-primary">{value}</span>
      </div>
      <div className="flex flex-col gap-2">
        <code className="text-xs text-primary">Tailwind: {utility}</code>
        <div
          className="flex items-center rounded-md bg-page p-3"
          style={{ gap: `var(${variable})` }}
        >
          <div className="h-6 w-6 rounded-sm bg-brand-heavy" />
          <div className="h-6 w-6 rounded-sm bg-brand-heavy" />
          <div className="h-6 w-6 rounded-sm bg-brand-heavy" />
        </div>
      </div>
    </Block>
  );
}
