export type StepId = "profile" | "contacts" | "security" | "confirm";

export type StepBarPlaygroundState = {
  active: StepId;
  withIcons: boolean;
  withItemStates: boolean;
  disableSecurity: boolean;
  showSuccessButton: boolean;
  successButtonText: string;
  loadingPrev: boolean;
  loadingNext: boolean;
  loadingSuccess: boolean;
};

export const STEP_OPTIONS: { value: StepId; label: string }[] = [
  { value: "profile", label: "Profile" },
  { value: "contacts", label: "Contacts" },
  { value: "security", label: "Security" },
  { value: "confirm", label: "Confirm" },
];

export const STEP_BAR_DEFAULT_STATE: StepBarPlaygroundState = {
  active: "contacts",
  withIcons: true,
  withItemStates: true,
  disableSecurity: false,
  showSuccessButton: true,
  successButtonText: "Submit",
  loadingPrev: false,
  loadingNext: false,
  loadingSuccess: false,
};
