import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  UserItem,
  UserItemAvatarPosition,
  Label,
  InsideSidebar,
} from "@/components";
import { Size } from "@/types";

const meta = {
  title: "Components/UserItem/Integration Examples",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const mockUsers = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Owner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    isOnline: true,
  },
  {
    id: "2",
    name: "Mike Thompson",
    email: "mike@example.com",
    role: "Admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    isOnline: true,
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily@example.com",
    role: "Member",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    isOnline: false,
  },
  {
    id: "4",
    name: "Chris Anderson",
    email: "chris@example.com",
    role: "Guest",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=chris",
    isOnline: false,
  },
];

export const WithInsideSidebar: Story = {
  name: "Integration with InsideSidebar",
  render: () => (
    <div className="w-[400px] h-[600px]">
      <InsideSidebar title="Team Members">
        <div className="flex flex-col gap-2 p-4">
          {mockUsers.map((user) => (
            <UserItem
              key={user.id}
              size={Size.Sm}
              avatarPosition={UserItemAvatarPosition.Left}
              className="hover:bg-gray-50 transition-colors cursor-pointer rounded-lg p-2 -mx-2"
            >
              <UserItem.Avatar src={user.avatar} alt={user.name} withBorder />
              <UserItem.Content>
                <UserItem.Title>{user.name}</UserItem.Title>
                <UserItem.Subtitle>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        user.isOnline ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                    <span>{user.isOnline ? "Online" : "Offline"}</span>
                  </div>
                </UserItem.Subtitle>
                <UserItem.Labels>
                  <Label size={Size.Xs}>{user.role}</Label>
                </UserItem.Labels>
              </UserItem.Content>
            </UserItem>
          ))}
        </div>
      </InsideSidebar>
    </div>
  ),
};

export const ResponsiveCards: Story = {
  name: "Responsive Card Grid",
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-[900px]">
      {mockUsers.map((user) => (
        <div
          key={user.id}
          className="bg-generic-medium border border-generic-medium rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          <UserItem size={Size.Md} avatarPosition={UserItemAvatarPosition.Top}>
            <UserItem.Avatar src={user.avatar} alt={user.name} withBorder />
            <UserItem.Content>
              <UserItem.Title>{user.name}</UserItem.Title>
              <UserItem.Subtitle>{user.email}</UserItem.Subtitle>
              <UserItem.Labels>
                <Label size={Size.Xs}>{user.role}</Label>
                {user.isOnline && (
                  <Label size={Size.Xs} className="bg-green-100 text-green-800">
                    Online
                  </Label>
                )}
              </UserItem.Labels>
            </UserItem.Content>
          </UserItem>
        </div>
      ))}
    </div>
  ),
};

export const CompactList: Story = {
  name: "Compact Contact List",
  render: () => (
    <div className="w-[320px] bg-generic-medium border border-generic-medium rounded-lg overflow-hidden">
      <div className="p-4 border-b border-generic-medium">
        <h3 className="text-lg font-semibold text-brand">Contacts</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {mockUsers.map((user) => (
          <div
            key={user.id}
            className="px-4 py-3 hover:bg-generic-medium-hover cursor-pointer transition-colors"
          >
            <UserItem
              size={Size.Xs}
              avatarPosition={UserItemAvatarPosition.Left}
            >
              <UserItem.Avatar src={user.avatar} alt={user.name} />
              <UserItem.Content>
                <UserItem.Title>{user.name}</UserItem.Title>
                <UserItem.Subtitle className="text-xxs">
                  {user.email}
                </UserItem.Subtitle>
              </UserItem.Content>
            </UserItem>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const ProfileHeader: Story = {
  name: "Profile Header",
  render: () => (
    <div className="w-full max-w-[600px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8">
      <UserItem
        size={Size.Md}
        avatarPosition={UserItemAvatarPosition.Left}
        className="text-white"
      >
        <UserItem.Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=profile-user"
          alt="Profile User"
          size={80}
          withBorder
        />
        <UserItem.Content>
          <UserItem.Title className="text-white text-2xl">
            Alex Morgan
          </UserItem.Title>
          <UserItem.Subtitle className="text-blue-100">
            Senior Product Designer • San Francisco, CA
          </UserItem.Subtitle>
          <UserItem.Labels>
            <Label
              size={Size.Xs}
              className="bg-white/20 text-white border-white/30"
            >
              Pro Member
            </Label>
            <Label
              size={Size.Xs}
              className="bg-white/20 text-white border-white/30"
            >
              Verified
            </Label>
          </UserItem.Labels>
        </UserItem.Content>
      </UserItem>
    </div>
  ),
};

export const CommentThread: Story = {
  name: "Comment Thread",
  render: () => (
    <div className="w-full max-w-[600px] space-y-4">
      {[
        {
          author: "John Doe",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
          time: "2 hours ago",
          comment: "This looks great! Love the new design direction.",
        },
        {
          author: "Jane Smith",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
          time: "1 hour ago",
          comment: "Agreed! The color scheme works really well.",
        },
        {
          author: "Bob Wilson",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob",
          time: "30 minutes ago",
          comment: "Can we discuss the spacing in the next review?",
        },
      ].map((comment, idx) => (
        <div
          key={idx}
          className="bg-generic-medium border border-generic-medium rounded-lg p-4"
        >
          <UserItem
            size={Size.Xs}
            avatarPosition={UserItemAvatarPosition.Left}
            className="mb-3"
          >
            <UserItem.Avatar src={comment.avatar} alt={comment.author} />
            <UserItem.Content>
              <UserItem.Title>{comment.author}</UserItem.Title>
              <UserItem.Subtitle className="text-xxs text-gray-500">
                {comment.time}
              </UserItem.Subtitle>
            </UserItem.Content>
          </UserItem>
          <p className="text-sm text-brand ml-12">{comment.comment}</p>
        </div>
      ))}
    </div>
  ),
};
