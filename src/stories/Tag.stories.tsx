import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag as TagIcon } from "lucide-react";
import { Tag as TagComponent } from "@/components";
import { Size } from "@/types";

const meta = {
  title: "Components/Tag",
  component: TagComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: Object.values(Size),
    },
  },
} satisfies Meta<typeof TagComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Extra Small",
    size: Size.Xs,
    leftContent: <TagIcon size={12} />,
    onClose: () => console.log("Close clicked"),
  },
};

export const WithAvatar: Story = {
  args: {
    children: "With Avatar",
    size: Size.Md,

    avatar: {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=tag-avatar",
      alt: "User avatar",
    },

    onClose: () => console.log("Close clicked"),
    error: false,
  },
};

export const WithAvatarSizes: Story = {
  args: {
    children: "Medium",
    size: Size.Md,
  },
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <TagComponent
        size={Size.Xs}
        avatar={{
          src: "https://api.dicebear.com/7.x/avataaars/svg?seed=tag-size-xs",
          alt: "Avatar XS",
          withBorder: false,
        }}
        onClose={() => {}}
      >
        Extra Small
      </TagComponent>
      <TagComponent
        size={Size.Sm}
        avatar={{
          src: "https://api.dicebear.com/7.x/avataaars/svg?seed=tag-size-sm",
          alt: "Avatar SM",
          withBorder: true,
        }}
        onClose={() => {}}
      >
        Small
      </TagComponent>
      <TagComponent
        size={Size.Md}
        avatar={{
          src: "https://api.dicebear.com/7.x/avataaars/svg?seed=tag-size-md",
          alt: "Avatar MD",
          withBorder: false,
        }}
        onClose={() => {}}
      >
        Medium
      </TagComponent>
    </div>
  ),
};
