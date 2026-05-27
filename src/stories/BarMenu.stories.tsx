import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  Home,
  Settings,
  Users,
  WalletCards,
} from "lucide-react";
import { BarMenu } from "@/components/BarMenu/BarMenu";
import type { BarMenuItem, BarMenuProps } from "@/components/BarMenu/BarMenu.types";

const items: BarMenuItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "team", label: "Team", icon: Users },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "budget", label: "Budget", icon: WalletCards },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "docs", label: "Docs", icon: BookOpen },
  { id: "settings", label: "Settings", icon: Settings },
];

const meta = {
  title: "Components/BarMenu",
  component: BarMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BarMenu>;

export default meta;
type Story = StoryObj<BarMenuProps>;

export const Playground: Story = {
  args: {
    items,
    value: "home",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    const [moreClicks, setMoreClicks] = useState(0);

    return (
      <div className="flex w-[680px] flex-col gap-4">
        <BarMenu
          {...args}
          value={value}
          onSelect={setValue}
          onMoreClick={() => setMoreClicks((count) => count + 1)}
        />
        <div className="text-sm text-secondary">
          Selected: {value ?? "none"}; more clicks: {moreClicks}
        </div>
      </div>
    );
  },
};

export const Overflow: Story = {
  args: {
    items,
    value: "analytics",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <div className="w-[320px]">
        <BarMenu
          {...args}
          value={value}
          onSelect={setValue}
          onMoreClick={() => setValue("settings")}
        />
      </div>
    );
  },
};
