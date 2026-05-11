import {
  useState,
  useCallback,
  type KeyboardEvent,
  type ChangeEvent,
} from "react";
import type { UseInputTagValueProps } from "../InputTag.types";

export const useInputTagValue = ({
  value: controlledValue,
  defaultValue = [],
  onChange,
  onCreateTag,
  onClear,
  disabled,
}: UseInputTagValueProps) => {
  const isControlled = controlledValue !== undefined;
  const [internalTags, setInternalTags] = useState<string[]>(defaultValue);
  const [inputValue, setInputValue] = useState("");

  const tags = isControlled ? controlledValue : internalTags;

  const updateTags = useCallback(
    (newTags: string[]) => {
      if (!isControlled) {
        setInternalTags(newTags);
      }
      onChange?.(newTags);
    },
    [isControlled, onChange]
  );

  const addTag = useCallback(
    (rawValue: string) => {
      if (disabled) return;

      const trimmed = rawValue.trim();
      if (!trimmed) return;

      const tagValue = onCreateTag ? onCreateTag(trimmed) : trimmed;
      if (tagValue === null || tagValue === "") return;

      updateTags([...tags, tagValue]);
      setInputValue("");
    },
    [disabled, onCreateTag, tags, updateTags]
  );

  const removeTag = useCallback(
    (index: number) => {
      if (disabled) return;
      const newTags = tags.filter((_, i) => i !== index);
      updateTags(newTags);
    },
    [disabled, tags, updateTags]
  );

  const removeLastTag = useCallback(() => {
    if (disabled || tags.length === 0) return;
    updateTags(tags.slice(0, -1));
  }, [disabled, tags, updateTags]);

  const clearAll = useCallback(() => {
    if (disabled) return;
    setInputValue("");
    updateTags([]);
    onClear?.();
  }, [disabled, updateTags, onClear]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addTag(inputValue);
      } else if (
        event.key === "Backspace" &&
        inputValue === "" &&
        tags.length > 0
      ) {
        removeLastTag();
      }
    },
    [addTag, inputValue, removeLastTag, tags.length]
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  const hasValue = tags.length > 0 || inputValue !== "";

  return {
    tags,
    inputValue,
    hasValue,
    handleKeyDown,
    handleInputChange,
    removeTag,
    clearAll,
  };
};
