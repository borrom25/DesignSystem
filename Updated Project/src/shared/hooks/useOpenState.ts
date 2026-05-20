import { useControllableBoolean } from "./useControllableState";

export type UseOpenStateProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function useOpenState({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: UseOpenStateProps) {
  const { value: open, setValue: setOpen } = useControllableBoolean({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  return { open, setOpen };
}
