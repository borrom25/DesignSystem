export type EventWithDefaults = {
  preventDefault: () => void;
  stopPropagation: () => void;
};

export function withPreventDefaults<TEvent extends EventWithDefaults>(
  handler?: (event: TEvent) => void
) {
  return (event: TEvent) => {
    event.preventDefault();
    event.stopPropagation();
    handler?.(event);
  };
}
