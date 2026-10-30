export type ActionPopoverPlaygroundState = {
  selectedLabel: string;
  closeAriaLabel: string;
  showChildren: boolean;
  showClose: boolean;
};

export const ACTION_POPOVER_DEFAULT_STATE: ActionPopoverPlaygroundState = {
  selectedLabel: "Выбрано: 3",
  closeAriaLabel: "Скрыть popover действий",
  showChildren: true,
  showClose: true,
};
