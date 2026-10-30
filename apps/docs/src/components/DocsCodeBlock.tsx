interface DocsCodeBlockProps {
  code: string;
}

export function DocsCodeBlock({ code }: DocsCodeBlockProps) {
  return (
    <pre className="overflow-x-auto rounded-md bg-page p-4 text-sm text-secondary">
      <code>{code}</code>
    </pre>
  );
}
