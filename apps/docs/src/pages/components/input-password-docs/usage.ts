import type { InputPasswordPlaygroundState } from "./types";

export function createInputPasswordUsageCode(
  packageName: string,
  state: InputPasswordPlaygroundState
) {
  return `import { useState } from "react";
import { InputPassword } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [value, setValue] = useState("${state.value}");

  return (
    <InputPassword
      label="${state.label}"
      placeholder="${state.placeholder}"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      size="${state.size}"${state.disabled ? "\n      disabled" : ""}${
        state.error
          ? '\n      error\n      hintError="Password must include letters, numbers and symbols."'
          : `\n      hint="${state.hint}"`
      }${state.showPasswordByDefault ? "\n      showPasswordByDefault" : ""}
    />
  );
}`;
}
