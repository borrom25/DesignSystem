import type { ChangeEvent } from "react";
import { useId } from "react";
import { Input, Select, Switcher } from "@/components";
import { Size } from "@/types";

type SelectOption<TValue extends string> = {
  value: TValue;
  label: string;
};

interface PlaygroundSelectControlProps<TValue extends string> {
  label: string;
  options: readonly SelectOption<TValue>[];
  value: TValue;
  onChange: (value: TValue) => void;
}

export function PlaygroundSelectControl<TValue extends string>({
  label,
  options,
  value,
  onChange,
}: PlaygroundSelectControlProps<TValue>) {
  return (
    <Select
      label={label}
      options={[...options]}
      value={value}
      clearable={false}
      onValueChange={(nextValue) => nextValue && onChange(nextValue as TValue)}
      size={Size.Sm}
    />
  );
}

interface PlaygroundTextControlProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function PlaygroundTextControl({
  label,
  value,
  onChange,
}: PlaygroundTextControlProps) {
  return (
    <Input
      label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      size={Size.Sm}
    />
  );
}

interface PlaygroundSwitchControlProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

export function PlaygroundSwitchControl({
  label,
  checked,
  onChange,
}: PlaygroundSwitchControlProps) {
  const switcherId = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="flex items-center gap-1">
      <Switcher
        id={switcherId}
        checked={checked}
        onChange={handleChange}
        size={Size.Sm}
      />
      <label
        htmlFor={switcherId}
        className="text-xs text-secondary cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}
