import type { ReactNode } from "react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useShallow } from "zustand/react/shallow";
import { Color } from "@/types";

export type ProgrammaticAlertType = "info" | "success" | "warning" | "error";

export interface ProgrammaticAlertOptions {
  message: ReactNode;
  type?: ProgrammaticAlertType;
  duration?: number;
  onClose?: () => void;
  description?: ReactNode;
  actions?: ReactNode;
  closable?: boolean;
}

export interface ProgrammaticAlertEntry extends ProgrammaticAlertOptions {
  id: string;
  type: ProgrammaticAlertType;
  duration: number;
  closable: boolean;
  isOpen: boolean;
}

interface AlertState {
  alerts: ProgrammaticAlertEntry[];
}

interface AlertActions {
  showAlert: (options: ProgrammaticAlertOptions) => string;
  closeAlert: (id?: string) => void;
  removeAlert: (id: string) => void;
}

type AlertStore = AlertState & AlertActions;

const DEFAULT_ALERT_DURATION = 4000;
const ALERT_REMOVE_DELAY = 220;
const alertTimers = new Map<string, ReturnType<typeof setTimeout>>();

function clearAlertTimer(id: string) {
  const timer = alertTimers.get(id);
  if (timer) {
    clearTimeout(timer);
    alertTimers.delete(id);
  }
}

function normalizeAlertOptions(
  options: ProgrammaticAlertOptions
): ProgrammaticAlertEntry {
  return {
    id: crypto.randomUUID(),
    type: options.type ?? "info",
    duration: options.duration ?? DEFAULT_ALERT_DURATION,
    closable: options.closable ?? true,
    isOpen: true,
    ...options,
  };
}

function getAlertRemoveTimerKey(alertId: string) {
  return `${alertId}:remove`;
}

function isAlertOptions(
  value: ReactNode | ProgrammaticAlertOptions
): value is ProgrammaticAlertOptions {
  return value !== null && typeof value === "object" && "message" in value;
}

function scheduleAlertAutoClose(alertEntry: ProgrammaticAlertEntry) {
  if (!alertEntry.isOpen || alertTimers.has(alertEntry.id)) return;
  const timer = setTimeout(() => {
    useAlertStoreBase.getState().closeAlert(alertEntry.id);
  }, alertEntry.duration);
  alertTimers.set(alertEntry.id, timer);
}

function scheduleClosedAlertRemoval(alertEntry: ProgrammaticAlertEntry) {
  const removeTimerKey = getAlertRemoveTimerKey(alertEntry.id);
  if (alertTimers.has(removeTimerKey)) return;

  const timer = setTimeout(() => {
    useAlertStoreBase.getState().removeAlert(alertEntry.id);
    clearAlertTimer(alertEntry.id);
    clearAlertTimer(removeTimerKey);
  }, ALERT_REMOVE_DELAY);

  alertTimers.set(removeTimerKey, timer);
}

const useAlertStoreBase = create<AlertStore>()(
  immer((set) => ({
    alerts: [],

    showAlert: (options) => {
      const alertEntry = normalizeAlertOptions(options);
      set((state) => {
        state.alerts.push(alertEntry);
      });
      return alertEntry.id;
    },

    closeAlert: (id) =>
      set((state) => {
        const targetAlert =
          id !== undefined
            ? state.alerts.find((alert) => alert.id === id)
            : state.alerts[state.alerts.length - 1];

        if (!targetAlert || !targetAlert.isOpen) return;

        targetAlert.isOpen = false;
        targetAlert.onClose?.();
      }),

    removeAlert: (id) =>
      set((state) => {
        state.alerts = state.alerts.filter((alert) => alert.id !== id);
      }),
  }))
);

const selectAlertActions = (state: AlertStore): AlertActions => ({
  showAlert: state.showAlert,
  closeAlert: state.closeAlert,
  removeAlert: state.removeAlert,
});

const selectAlerts = (state: AlertStore) => state.alerts;

export function useAlertStore() {
  return useAlertStoreBase(useShallow(selectAlertActions));
}

export function useAlerts() {
  return useAlertStoreBase(useShallow(selectAlerts));
}

export const alertController = {
  show(
    messageOrOptions: ReactNode | ProgrammaticAlertOptions,
    type: ProgrammaticAlertType = "info"
  ) {
    const options = isAlertOptions(messageOrOptions)
      ? messageOrOptions
      : ({ message: messageOrOptions, type } as ProgrammaticAlertOptions);

    return useAlertStoreBase.getState().showAlert(options);
  },

  close(id?: string) {
    useAlertStoreBase.getState().closeAlert(id);
  },
};

export function mapAlertTypeToColor(type: ProgrammaticAlertType) {
  switch (type) {
    case "success":
      return Color.Positive;
    case "error":
      return Color.Danger;
    case "warning":
      return Color.Warning;
    case "info":
    default:
      return Color.Info;
  }
}

useAlertStoreBase.subscribe((state) => {
  state.alerts.forEach((alertEntry) => {
    scheduleAlertAutoClose(alertEntry);
    if (!alertEntry.isOpen) scheduleClosedAlertRemoval(alertEntry);
  });

  [...alertTimers.keys()].forEach((timerKey) => {
    if (timerKey.endsWith(":remove")) return;

    const hasAlert = state.alerts.some(
      (alertEntry) => alertEntry.id === timerKey
    );
    if (!hasAlert) {
      clearAlertTimer(timerKey);
      clearAlertTimer(getAlertRemoveTimerKey(timerKey));
    }
  });
});
