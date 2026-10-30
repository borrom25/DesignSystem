interface TokenMetaProps {
  variable: string;
  utility?: string;
}

export function TokenMeta({ variable, utility }: TokenMetaProps) {
  return (
    <div className="flex flex-col gap-1">
      <code className="text-xs text-secondary">{variable}</code>
      {utility && (
        <code className="text-xs text-primary">
          Tailwind alias: <span>{utility}</span>
        </code>
      )}
    </div>
  );
}
