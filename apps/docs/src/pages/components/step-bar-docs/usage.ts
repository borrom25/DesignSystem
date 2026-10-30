import type { StepBarPlaygroundState } from "./types";

export function createStepBarUsageCode(
  packageName: string,
  state: StepBarPlaygroundState
) {
  const iconImport = state.withIcons
    ? '\nimport { Check, Shield, UserRound } from "lucide-react";'
    : "";
  const withSuccessButton = state.showSuccessButton
    ? `\n      onClickSuccessButton={() => console.log("Done")}\n      successButtonText="${state.successButtonText || "Submit"}"`
    : "";
  const withLoading = [
    state.loadingPrev ? "\n      loadingPrev" : "",
    state.loadingNext ? "\n      loadingNext" : "",
    state.loadingSuccess ? "\n      loadingSuccess" : "",
  ].join("");

  const firstStepMeta = [
    state.withIcons ? "leftIcon: UserRound" : "",
    state.withItemStates ? 'type: "successful"' : "",
  ]
    .filter(Boolean)
    .join(", ");

  const thirdStepMeta = [
    state.disableSecurity ? "disabled: true" : "",
    state.withIcons ? "leftIcon: Shield" : "",
    state.withItemStates ? 'type: "error"' : "",
  ]
    .filter(Boolean)
    .join(", ");

  const lastStepMeta = [
    state.withIcons ? "rightIcon: Check" : "",
    state.withItemStates ? 'type: "successful"' : "",
  ]
    .filter(Boolean)
    .join(", ");

  return `import { StepBar } from "${packageName}";
import "${packageName}/styles.css";${iconImport}

const items = [
  { id: "profile", label: "Profile"${firstStepMeta ? `, ${firstStepMeta}` : ""} },
  { id: "contacts", label: "Contacts" },
  { id: "security", label: "Security"${thirdStepMeta ? `, ${thirdStepMeta}` : ""} },
  { id: "confirm", label: "Confirm"${lastStepMeta ? `, ${lastStepMeta}` : ""} },
];

export function Example() {
  const handleStepChange = (step) => {
    console.log("Step changed:", step);
  };

  return (
    <StepBar
      items={items}
      defaultActive="${state.active}"${withSuccessButton}${withLoading}
      onChangeStep={handleStepChange}
    />
  );
}`;
}

export function createStepBarLoadingUsageCode(packageName: string) {
  return `import { useState } from "react";
import { StepBar } from "${packageName}";
import "${packageName}/styles.css";

const items = [
  { id: "profile", label: "Profile" },
  { id: "contacts", label: "Contacts" },
  { id: "security", label: "Security" },
  { id: "confirm", label: "Confirm" },
];

export function StepBarLoadingExample() {
  const [active, setActive] = useState("profile");
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleStepChange = async (step) => {
    setSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setActive(step);
    setSaving(false);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
  };

  return (
    <StepBar
      items={items}
      active={active}
      loadingNext={saving}
      loadingSuccess={submitting}
      onChangeStep={handleStepChange}
      onClickSuccessButton={handleSubmit}
      successButtonText="Submit"
    />
  );
}`;
}

export function createStepDirectionUsageCode(packageName: string) {
  return `import { StepBar } from "${packageName}";
import "${packageName}/styles.css";

const items = [
  { id: "profile", label: "Profile" },
  { id: "contacts", label: "Contacts" },
  { id: "security", label: "Security" },
  { id: "confirm", label: "Confirm" },
];

export function StepBarDirectionExample() {
  return (
    <StepBar
      items={items}
      defaultActive="contacts"
      onStepTransition={(transition) => {
        if (transition.direction === "backward") {
          console.log("User returned back:", transition);
          return;
        }

        console.log("User moved forward:", transition);
      }}
    />
  );
}`;
}

export function createUseStepBarUsageCode(packageName: string) {
  return `import { useStepBar } from "${packageName}";
import "${packageName}/styles.css";

const items = [
  { id: "profile", label: "Profile" },
  { id: "contacts", label: "Contacts" },
  { id: "confirm", label: "Confirm" },
];

export function StepBarCustomExample() {
  const {
    active,
    stepsRef,
    indicatorStyle,
    isFirstStep,
    isLastStep,
    setStepRef,
    onStepClick,
    goPrev,
    goNext,
  } = useStepBar({
    items,
    defaultActive: "profile",
  });

  return (
    <div>
      <button onClick={goPrev} disabled={isFirstStep}>Prev</button>
      <div ref={stepsRef}>
        {items.map((item, index) => (
          <button
            key={item.id}
            ref={(element) => setStepRef(index, element)}
            onClick={() => onStepClick(item.id)}
          >
            {item.label} {item.id === active ? "•" : ""}
          </button>
        ))}
        <span style={indicatorStyle} />
      </div>
      <button onClick={goNext} disabled={isLastStep}>Next</button>
    </div>
  );
}`;
}
