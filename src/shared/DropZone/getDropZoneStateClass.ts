type DropZoneStateClasses = {
  disabled: string;
  active: string;
  error: string;
  state: string;
};

type DropZoneStateFlags = {
  disabled?: boolean;
  isDragActive?: boolean;
  error?: boolean;
};

export function getDropZoneStateClass(
  styles: DropZoneStateClasses,
  { disabled, isDragActive, error }: DropZoneStateFlags
): string {
  if (disabled) return styles.disabled;
  if (isDragActive) return styles.active;
  if (error) return styles.error;
  return styles.state;
}
