// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4423-5773
// source=src/components/BarMenu/BarMenu.tsx
// component=BarMenu
const figma = require("figma");
const instance = figma.selectedInstance;

// Temporary mapping: Figma MCP metadata for this node is unavailable in the
// current environment, so the snippet uses safe runtime defaults inferred
// from BarMenu public API.
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
      onMoreClick={() => {}}
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
      figmaNodeReadStatus: "unavailable",
    },
  },
};
