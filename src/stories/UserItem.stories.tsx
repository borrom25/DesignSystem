import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserItem, UserItemAvatarPosition, Label } from "@/components";
import { Size } from "@/types";
import type { ReactNode } from "react";

const SIZES = Object.values(Size);
const AVATAR_POSITIONS = Object.values(UserItemAvatarPosition);

type UserItemArgs = {
  size?: Size;
  avatarPosition?: UserItemAvatarPosition;
  children?: ReactNode;
};

const meta = {
  title: "Components/UserItem",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: SIZES,
    },
    avatarPosition: {
      control: "select",
      options: AVATAR_POSITIONS,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<UserItemArgs>;

export default meta;
type Story = StoryObj<UserItemArgs>;

export const Playground: Story = {
  args: {
    size: Size.Sm,
    avatarPosition: UserItemAvatarPosition.Left,
  },
  render: (args) => (
    <div className="w-[360px] rounded-(--br-component-md) bg-page p-(--spacing-4)">
      <UserItem
        size={args.size}
        avatarPosition={args.avatarPosition}
        className="rounded-(--br-component-md) bg-generic-medium p-(--spacing-3)"
      >
        <UserItem.Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=team-member"
          alt="Константинов К.К."
          withBorder
        />
        <UserItem.Content>
          <UserItem.Title>Константинов К.К.</UserItem.Title>
          <UserItem.Subtitle>label label label label</UserItem.Subtitle>
          <UserItem.Labels>
            <Label>label 1</Label>
            <Label>label 2</Label>
            <Label>label 3</Label>
            <Label>label 4</Label>
          </UserItem.Labels>
        </UserItem.Content>
      </UserItem>
    </div>
  ),
};
