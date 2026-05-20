import { useId } from "react";

type UseInputIdsProps = {
  id?: string;
  hint?: string;
  hintError?: string;
};

type UseInputIdsReturn = {
  inputId: string;
  hintId: string | undefined;
};

export const useInputIds = ({
  id: idProp,
  hint,
  hintError,
}: UseInputIdsProps): UseInputIdsReturn => {
  const generatedId = useId();
  const inputId = idProp ?? generatedId;
  const hintId = hint || hintError ? `${inputId}-hint` : undefined;

  return { inputId, hintId };
};
