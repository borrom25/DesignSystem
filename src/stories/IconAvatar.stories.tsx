import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  User,
  Settings,
  Heart,
  Star,
  Bell,
  Mail,
  Calendar,
  Camera,
} from "lucide-react";
import { IconAvatar } from "@/components";
import type { IconAvatarBorderVariant } from "@/components/IconAvatar/IconAvatar.types";

const BORDER_VARIANTS: IconAvatarBorderVariant[] = [
  "default",
  "generic",
  "genericMedium",
];

const ICON_OPTIONS = {
  User,
  Settings,
  Heart,
  Star,
  Bell,
  Mail,
  Calendar,
  Camera,
};

const meta = {
  title: "Components/IconAvatar",
  component: IconAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number", min: 24, max: 200, step: 8 },
    },
    icon: {
      control: "select",
      options: Object.keys(ICON_OPTIONS),
      mapping: ICON_OPTIONS,
    },
    borderVariant: {
      control: "select",
      options: BORDER_VARIANTS,
    },
  },
} satisfies Meta<typeof IconAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 64,
    icon: User,
    borderVariant: "default",
  },
};

export const BorderVariants: Story = {
  args: { size: 64, icon: User },
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <IconAvatar size={64} icon={User} borderVariant="default" />
        <span className="text-xs">default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconAvatar size={64} icon={User} borderVariant="generic" />
        <span className="text-xs">generic</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconAvatar size={64} icon={User} borderVariant="genericMedium" />
        <span className="text-xs">genericMedium</span>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  args: { size: 64, icon: User },
  render: () => (
    <div className="flex items-end gap-4">
      <IconAvatar size={32} icon={User} />
      <IconAvatar size={48} icon={Settings} />
      <IconAvatar size={64} icon={Heart} />
      <IconAvatar size={80} icon={Star} />
      <IconAvatar size={96} icon={Bell} />
    </div>
  ),
};

export const DifferentIcons: Story = {
  args: { size: 64, icon: User },
  render: () => (
    <div className="flex items-center gap-4">
      <IconAvatar size={64} icon={User} />
      <IconAvatar size={64} icon={Settings} />
      <IconAvatar size={64} icon={Heart} />
      <IconAvatar size={64} icon={Star} />
      <IconAvatar size={64} icon={Bell} />
      <IconAvatar size={64} icon={Mail} />
      <IconAvatar size={64} icon={Calendar} />
      <IconAvatar size={64} icon={Camera} />
    </div>
  ),
};
