import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/Button";
import { TableColumnsModal } from "@/components/TableColumnsModal";
import type {
  TableColumnsModalOption,
  TableColumnsModalProps,
} from "@/components/TableColumnsModal";
import { Size } from "@/types";

const options: TableColumnsModalOption<string>[] = [
  { id: "name", label: "Name" },
  { id: "owner", label: "Owner" },
  { id: "status", label: "Status" },
  { id: "budget", label: "Budget" },
  { id: "deadline", label: "Deadline" },
];

const meta = {
  title: "Components/TableColumnsModal",
  component: TableColumnsModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TableColumnsModal>;

export default meta;
type Story = StoryObj<TableColumnsModalProps<unknown, string>>;

export const Playground: Story = {
  args: {
    options,
    value: ["name", "owner", "status"],
    title: "Table settings",
    subtitle: "Choose which columns are visible in the table.",
    size: Size.Sm,
    showCloseButton: true,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string[]>(args.value);

    return (
      <div className="flex flex-col items-center gap-4">
        <Button size={Size.Sm} onClick={() => setOpen(true)}>
          Configure columns
        </Button>
        <div className="text-sm text-secondary">
          Visible columns: {value.join(", ")}
        </div>
        <TableColumnsModal
          {...args}
          open={open}
          onOpenChange={setOpen}
          value={value}
          onApply={setValue}
        />
      </div>
    );
  },
};
