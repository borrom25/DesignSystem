import { createContext, useContext } from "react";
import { Size } from "@/types";
import {
  UserItemAvatarPosition,
  type UserItemContextValue,
} from "./UserItem.types";

export const UserItemContext = createContext<UserItemContextValue>({
  size: Size.Md,
  avatarPosition: UserItemAvatarPosition.Left,
});

export const useUserItemContext = () => {
  const context = useContext(UserItemContext);
  if (!context) {
    throw new Error("UserItem sub-components must be used within UserItem");
  }
  return context;
};
