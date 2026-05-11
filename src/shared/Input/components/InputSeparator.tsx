export interface InputSeparatorProps {
  className: string;
}

export function InputSeparator({ className }: InputSeparatorProps) {
  return <div className={className} aria-hidden="true" />;
}
