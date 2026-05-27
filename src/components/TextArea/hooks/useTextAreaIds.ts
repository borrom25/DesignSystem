import { useId } from "react";

type UseTextAreaIdsProps = {
  id?: string;
  hint?: string;
  hintError?: string;
};

type UseTextAreaIdsReturn = {
  textareaId: string;
  hintId: string | undefined;
};

export const useTextAreaIds = ({
  id: idProp,
  hint,
  hintError,
}: UseTextAreaIdsProps): UseTextAreaIdsReturn => {
  const generatedId = useId();
  const textareaId = idProp ?? generatedId;
  const hintId = hint || hintError ? `${textareaId}-hint` : undefined;

  return { textareaId, hintId };
};

export { useTextAreaResize } from "./useTextAreaResize";
export { useTextAreaClassNames } from "./useTextAreaClassNames";
export { useTextAreaFieldState } from "./useTextAreaFieldState";
