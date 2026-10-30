import { useMemo } from "react";
import { Check, Shield, UserRound } from "lucide-react";
import type { StepBarItem } from "@/components";
import type { StepBarPlaygroundState, StepId } from "./types";

export function useStepBarItems(state: StepBarPlaygroundState) {
  return useMemo<StepBarItem<StepId>[]>(() => {
    return [
      {
        id: "profile" as const,
        label: "Profile",
        leftIcon: state.withIcons ? UserRound : undefined,
        type: state.withItemStates ? "successful" : undefined,
      },
      {
        id: "contacts" as const,
        label: "Contacts",
      },
      {
        id: "security" as const,
        label: "Security",
        disabled: state.disableSecurity,
        leftIcon: state.withIcons ? Shield : undefined,
        type: state.withItemStates ? "error" : undefined,
      },
      {
        id: "confirm" as const,
        label: "Confirm",
        rightIcon: state.withIcons ? Check : undefined,
        type: state.withItemStates ? "successful" : undefined,
      },
    ];
  }, [state.withIcons, state.withItemStates, state.disableSecurity]);
}
