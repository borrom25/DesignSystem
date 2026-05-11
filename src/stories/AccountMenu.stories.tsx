import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Settings, CircleUser } from "lucide-react";
import { AccountMenu, Button, type AccountMenuProps } from "@/components";
import type { SegmentedOption } from "@/components/Segmented/Segmented.types";

const lagugageOptions: SegmentedOption[] = [
  { value: "ru", label: "Ru" },
  { value: "en", label: "En" },
  { value: "fr", label: "FR" },
  { value: "ch", label: "CH" },
];

const baseArgs: AccountMenuProps = {
  src: "https://i.pravatar.cc/160?img=68",
  fullName: "Константинов К.К.",
  role: "Product Designer",
  languages: lagugageOptions,
  language: "ru",
  actions: [
    { iconLeft: CircleUser, title: "Сменить роль" },
    { iconLeft: Settings, title: "Настройки" },
  ],
  logoutFn: () => console.log("logoutFn"),
  trigger: undefined,
};

const meta = {
  title: "Components/AccountMenu",
  component: AccountMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AccountMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    ...baseArgs,
  },
  render: (args) => {
    const [language, setLanguage] = useState(args.language ?? "ru");

    return (
      <AccountMenu
        {...args}
        language={language}
        onChangeLanguage={setLanguage}
        showTheme
        trigger={<Button>Открыть меню аккаунта</Button>}
      />
    );
  },
};

export const WithoutSwitchers: Story = {
  args: {
    ...baseArgs,
    language: undefined,
    languages: undefined,
    themes: undefined,
  },
  render: (args) => (
    <AccountMenu {...args} trigger={<Button>Без переключателей</Button>} />
  ),
};

export const CustomSlots: Story = {
  args: {
    ...baseArgs,
  },
  render: (args) => {
    const [language, setLanguage] = useState(args.language ?? "ru");

    return (
      <AccountMenu
        {...args}
        language={language}
        onChangeLanguage={setLanguage}
        switchersSlot={
          <div className="text-sm text-neutral-500 px-2 py-1">
            custom switcherSlot
          </div>
        }
        actionSlot={
          <div className="text-sm text-neutral-500 px-2 py-1">
            custom actionSlot
          </div>
        }
        trigger={<Button>Кастомные слоты</Button>}
      />
    );
  },
};
