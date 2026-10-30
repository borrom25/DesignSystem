// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4423-5773
// source=src/components/BarMenu/BarMenu.tsx
// component=BarMenu
const figma = require("figma");
const instance = figma.selectedInstance;
void instance;

// Temporary mapping: Figma bottomBar stores items in slots. Runtime uses a
// data-driven items array; replace the sample navigation with application data.
const itemsCode = figma.tsx`[
  { id: "home", icon: Home, label: "Главная" },
  { id: "search", icon: Search, label: "Поиск" },
  { id: "profile", icon: User, label: "Профиль" },
  { id: "settings", icon: Settings, label: "Настройки" },
]`;

export default {
  example: figma.tsx`
    <BarMenu
      value="home"
      onSelect={() => {}}
      items={${itemsCode}}
    />
  `,
  imports: [
    'import { BarMenu } from "borrom-ds-test"',
    'import { Home, Search, Settings, User } from "lucide-react"',
  ],
  id: "barmenu",
  metadata: {
    nestable: true,
    props: {
      hasTemporaryFigmaPropertyMapping: true,
      hasTemporaryItemsMapping: true,
      figmaNodeReadStatus: "verified-read-only-2026-10-30",
    },
  },
};
