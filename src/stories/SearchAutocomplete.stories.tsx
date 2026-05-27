import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchAutocomplete } from "@/components/SearchAutocomplete";
import type { SearchAutocompleteProps } from "@/components/SearchAutocomplete";

const meta = {
  title: "Components/SearchAutocomplete",
  component: SearchAutocomplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchAutocomplete>;

export default meta;
type Story = StoryObj<SearchAutocompleteProps>;

export const Playground: Story = {
  args: {
    value: "",
    placeholder: "Search",
    clearable: true,
    disabled: false,
  },
  render: (args) => {
    const [value, setValue] = useState(String(args.value ?? ""));

    return (
      <div className="flex w-[320px] flex-col gap-3">
        <SearchAutocomplete
          {...args}
          value={value}
          onValueChange={setValue}
        />
        <div className="text-sm text-secondary">
          Current query: {value || "empty"}
        </div>
      </div>
    );
  },
};
