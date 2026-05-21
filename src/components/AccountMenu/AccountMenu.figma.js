// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1998-5763
// source=src/components/AccountMenu/AccountMenu.tsx
// component=AccountMenu
const figma = require("figma");
const instance = figma.selectedInstance;

const props = instance.getEnum("Props", {
  1: "1",
});

const slotContent = instance.getSlot("<slotContent>");

// Temporary mapping:
// Figma exposes menu rows through <slotContent>, while AccountMenu runtime owns
// functional rows through actions/logoutFn. Prefer data-driven actions so the
// generated snippet keeps real click handlers and menu behavior.
void slotContent;

export default {
  example: figma.tsx`
    <AccountMenu
      isOpen
      src="https://i.pravatar.cc/160?img=68"
      fullName="Name User"
      role="Caption Caption Caption Caption Caption"
      languages={[
        { value: "ru", label: "Ru" },
        { value: "en", label: "En" },
        { value: "fr", label: "FR" },
        { value: "ch", label: "CH" },
      ]}
      language="ru"
      onChangeLanguage={(nextLanguage) => {
        setLanguage(nextLanguage);
      }}
      showTheme
      actions={[
        { iconLeft: CircleUserRound, title: "Сменить роль" },
        { iconLeft: Settings, title: "Настройки" },
        { iconLeft: CircleQuestionMark, title: "Поддержка" },
      ]}
      logoutFn={() => {
        handleLogout();
      }}
      trigger={<Button>Аккаунт</Button>}
    />
  `,
  imports: [
    'import { AccountMenu, Button } from "borrom-ds-test"',
    'import { CircleQuestionMark, CircleUserRound, Settings } from "lucide-react"',
  ],
  id: "account-menu",
  metadata: {
    nestable: false,
    props: {
      props,
      figmaNodeId: "1998:5763",
      figmaComponent: "menuAccount",
      slotContentMappedToRuntimeActions: true,
      runtimeOwnsThemeSwitcher: true,
      runtimeOwnsLogoutRow: true,
    },
  },
};
