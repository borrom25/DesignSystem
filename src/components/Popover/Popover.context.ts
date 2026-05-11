import { createContext, useContext } from "react";

interface PopoverContextProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const PopoverContext = createContext<PopoverContextProps | null>(null);

export const usePopover = () => {
  const context = useContext(PopoverContext);

  if (!context) throw new Error("usePopover must be used with in Popover");
  return context;
};
