import { Slot } from "@radix-ui/react-slot";

interface SlotProps extends React.ComponentPropsWithoutRef<typeof Slot> {
  disabled?: boolean;
}

export const TypedSlot = ({ children, ...props }: SlotProps) => (
  <Slot {...props}>{children}</Slot>
);
