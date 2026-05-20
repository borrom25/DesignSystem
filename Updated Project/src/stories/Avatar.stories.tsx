import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@/components";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number", min: 24, max: 200, step: 8 },
    },
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    withBorder: {
      control: "boolean",
    },
    showEditBadge: {
      control: "boolean",
    },
    initials: {
      control: "text",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 64,
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=playground",
    alt: "User avatar",
    withBorder: false,
    showEditBadge: false,
  },
};

export const WithBorder: Story = {
  args: {
    size: 64,
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=with-border",
    withBorder: true,
  },
};

export const WithEditBadge: Story = {
  args: {
    size: 64,
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=with-badge",
    showEditBadge: true,
  },
};

export const WithBorderAndBadge: Story = {
  args: {
    size: 64,
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=border-and-badge",
    withBorder: true,
    showEditBadge: true,
  },
};

export const WithInitials: Story = {
  args: {
    size: 64,
    src: "",
    initials: "КК",
  },
};

export const WithInitialsAndBadge: Story = {
  args: {
    size: 112,
    src: "",
    initials: "КК",
    withBorder: true,
    showEditBadge: true,
  },
};

export const Sizes: Story = {
  args: { size: 64, src: "" },
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar
        size={32}
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=size-32"
      />
      <Avatar
        size={48}
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=size-48"
      />
      <Avatar
        size={64}
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=size-64"
      />
      <Avatar
        size={80}
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=size-80"
      />
      <Avatar
        size={96}
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=size-96"
      />
    </div>
  ),
};

export const SizesWithBadge: Story = {
  args: { size: 64, src: "" },
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar
        size={32}
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=badge-32"
        showEditBadge
      />
      <Avatar
        size={48}
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=badge-48"
        showEditBadge
      />
      <Avatar
        size={64}
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=badge-64"
        showEditBadge
      />
      <Avatar
        size={80}
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=badge-80"
        showEditBadge
      />
      <Avatar
        size={96}
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=badge-96"
        showEditBadge
      />
    </div>
  ),
};

export const WithDefaultState: Story = {
  args: { size: 64, src: "" },
  render: () => {
    const avatars = [
      {
        label: "Рабочая",
        src: "https://api.dicebear.com/7.x/avataaars/svg?seed=badge-96",
      },
      {
        label: "Не рабочая",
        src: "https://img.freepik.com/premium-photo/wooden-dock-overlooking-lake-mountains_184076-118012.jpg?semt=ais_hybrid&w=740",
      },
    ];

    return (
      <div className="flex flex-col gap-4">
        {avatars.map(({ label, src }, index) => (
          <>
            <div className="flex flex-col justify-between items-start">
              <label className="text-[12px]">{label}</label>
              <Avatar size={32} src={src} showEditBadge />
            </div>
            <hr />
            <div className="flex flex-col justify-between items-start">
              <label className="text-[12px]">С бордером</label>
              <Avatar size={32} src={src} showEditBadge withBorder />
            </div>
            {index !== avatars.length - 1 && <hr />}
          </>
        ))}
      </div>
    );
  },
};
