import type { LucideIcon } from "lucide-react";
import {
  Home,
  Palette,
  MousePointerClick,
  Link as LinkIcon,
  TextCursorInput,
  Tag,
  Pointer,
  Bookmark,
  CircleDot,
  CircleUser,
  Hash,
  Type,
  Square,
  Power,
  Minus,
  Flag,
  LayoutDashboard,
  Bell,
  PanelTop,
  LayoutGrid,
  ChevronsUpDown,
  PanelLeft,
  Columns3,
  Menu,
  ArrowLeftRight,
  ListOrdered,
  Lock,
  KeyRound,
  Phone,
  Tags,
  Paperclip,
  Image,
  AlignLeft,
  ChevronDown,
  ListChecks,
  Check,
  Circle,
  ToggleLeft,
  SlidersHorizontal,
  CalendarRange,
  CalendarDays,
  Clock,
  GitBranch,
  Filter,
  ListFilter,
  Table,
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Gauge,
  Timer,
  Users,
  List,
  GripVertical,
  MessageCircle,
  GalleryHorizontal,
  Images,
  Layers,
  MessageSquare,
  Info,
  X,
  Sparkles,
  Paintbrush,
  Newspaper,
  Shapes,
  CloudDownload,
  AppWindow,
  ArrowLeft,
} from "lucide-react";
import packageJson from "../../../../package.json";

export type DocsTopNavId =
  | "home"
  | "components"
  | "icons"
  | "tokens"
  | "patterns"
  | "theming"
  | "news";

export interface DocsTopNavItem {
  id: DocsTopNavId;
  label: string;
  path: string;
}

export interface SidebarNavItem {
  id: string;
  label: string;
  path: string;
  icon: LucideIcon;
}

export interface SidebarNavGroup {
  id: string;
  label: string;
  versionLabel?: string;
  children: SidebarNavItem[];
}

export const docsVersionLabel = `v${packageJson.version}`;

export const topNavItems: DocsTopNavItem[] = [
  { id: "home", label: "Быстрый старт", path: "/quick-start" },
  { id: "components", label: "Компоненты", path: "/components/button" },
  { id: "tokens", label: "Дизайн токены", path: "/tokens/colors" },
  { id: "icons", label: "Иконки", path: "/icons" },
  { id: "patterns", label: "Паттерны", path: "/patterns" },
  { id: "theming", label: "Темизатор", path: "/theming" },
  { id: "news", label: "Новости", path: "/news" },
];

export const sidebarConfig: Record<DocsTopNavId, SidebarNavGroup[]> = {
  home: [
    {
      id: "docs",
      label: "Документация",
      children: [
        {
          id: "home",
          label: "Быстрый старт",
          path: "/quick-start",
          icon: Home,
        },
      ],
    },
  ],

  components: [
    {
      id: "ui-kit",
      label: "UI Kit",
      versionLabel: docsVersionLabel,
      children: [
        {
          id: "button",
          label: "Button",
          path: "/components/button",
          icon: MousePointerClick,
        },
        {
          id: "copy-link",
          label: "CopyLink",
          path: "/components/copy-link",
          icon: LinkIcon,
        },
        {
          id: "icon-button",
          label: "IconButton",
          path: "/components/icon-button",
          icon: Pointer,
        },
        { id: "text", label: "Text", path: "/components/text", icon: Type },
        {
          id: "label",
          label: "Label",
          path: "/components/label",
          icon: Bookmark,
        },
        { id: "tag", label: "Tag", path: "/components/tag", icon: Tag },
        {
          id: "chips",
          label: "Chips",
          path: "/components/chips",
          icon: CircleDot,
        },
        {
          id: "counter",
          label: "Counter",
          path: "/components/counter",
          icon: Hash,
        },
        {
          id: "download",
          label: "Download",
          path: "/components/download",
          icon: CloudDownload,
        },
        {
          id: "avatar",
          label: "Avatar",
          path: "/components/avatar",
          icon: CircleUser,
        },
        {
          id: "card",
          label: "Card",
          path: "/components/card",
          icon: LayoutDashboard,
        },
        { id: "line", label: "Line", path: "/components/line", icon: Minus },
        {
          id: "skeleton",
          label: "Skeleton",
          path: "/components/skeleton",
          icon: Square,
        },
        { id: "plug", label: "Plug", path: "/components/plug", icon: Power },
        { id: "alert", label: "Alert", path: "/components/alert", icon: Bell },
        {
          id: "banner",
          label: "Banner",
          path: "/components/banner",
          icon: Flag,
        },
      ],
    },
    {
      id: "data-entry",
      label: "Data Entry",
      versionLabel: docsVersionLabel,
      children: [
        {
          id: "input",
          label: "Input",
          path: "/components/input",
          icon: TextCursorInput,
        },
        {
          id: "input-number",
          label: "InputNumber",
          path: "/components/input-number",
          icon: Hash,
        },
        {
          id: "input-password",
          label: "InputPassword",
          path: "/components/input-password",
          icon: Lock,
        },
        {
          id: "pin-input",
          label: "PinInput",
          path: "/components/pin-input",
          icon: KeyRound,
        },
        {
          id: "input-phone",
          label: "InputPhone",
          path: "/components/input-phone",
          icon: Phone,
        },
        {
          id: "text-area",
          label: "TextArea",
          path: "/components/text-area",
          icon: AlignLeft,
        },
        {
          id: "select",
          label: "Select",
          path: "/components/select",
          icon: ChevronDown,
        },
        {
          id: "multi-select",
          label: "MultiSelect",
          path: "/components/multi-select",
          icon: ListChecks,
        },
        {
          id: "input-tag",
          label: "InputTag",
          path: "/components/input-tag",
          icon: Tags,
        },
        {
          id: "multi-tag",
          label: "MultiTag",
          path: "/components/multi-tag",
          icon: Tags,
        },
        {
          id: "input-files",
          label: "InputFiles",
          path: "/components/input-files",
          icon: Paperclip,
        },
        {
          id: "input-file-drop",
          label: "InputFileDrop",
          path: "/components/input-file-drop",
          icon: Paperclip,
        },
        {
          id: "input-img",
          label: "InputImg",
          path: "/components/input-img",
          icon: Image,
        },
        {
          id: "uploader",
          label: "Uploader",
          path: "/components/uploader",
          icon: Paperclip,
        },
        {
          id: "check-box",
          label: "CheckBox",
          path: "/components/check-box",
          icon: Check,
        },
        {
          id: "minus-check-box",
          label: "MinusCheckBox",
          path: "/components/minus-check-box",
          icon: Minus,
        },
        {
          id: "radio",
          label: "Radio",
          path: "/components/radio",
          icon: Circle,
        },
        {
          id: "switcher",
          label: "Switcher",
          path: "/components/switcher",
          icon: ToggleLeft,
        },
        {
          id: "slider",
          label: "Slider",
          path: "/components/slider",
          icon: SlidersHorizontal,
        },
        {
          id: "date-range",
          label: "DateRange",
          path: "/components/date-range",
          icon: CalendarRange,
        },
        {
          id: "calendar",
          label: "Calendar",
          path: "/components/calendar",
          icon: CalendarDays,
        },
        {
          id: "time-picker",
          label: "TimePicker",
          path: "/components/time-picker",
          icon: Clock,
        },
        {
          id: "cascader",
          label: "Cascader",
          path: "/components/cascader",
          icon: GitBranch,
        },
        {
          id: "filter",
          label: "Filter",
          path: "/components/filter",
          icon: Filter,
        },
        {
          id: "filter-list",
          label: "FilterList",
          path: "/components/filter-list",
          icon: ListFilter,
        },
      ],
    },
    {
      id: "navigation",
      label: "Navigation",
      versionLabel: docsVersionLabel,
      children: [
        { id: "tab", label: "Tab", path: "/components/tab", icon: LayoutGrid },
        {
          id: "segmented",
          label: "Segmented",
          path: "/components/segmented",
          icon: LayoutGrid,
        },
        {
          id: "tabs-overflow",
          label: "TabsOverflow",
          path: "/components/tabs-overflow",
          icon: PanelTop,
        },
        {
          id: "accordion",
          label: "Accordion",
          path: "/components/accordion",
          icon: ChevronsUpDown,
        },
        {
          id: "accordion-block",
          label: "AccordionBlock",
          path: "/components/accordion-block",
          icon: Layers,
        },
        {
          id: "pagination",
          label: "Pagination",
          path: "/components/pagination",
          icon: ArrowLeftRight,
        },
        {
          id: "step-bar",
          label: "StepBar",
          path: "/components/step-bar",
          icon: ListOrdered,
        },
        {
          id: "sidebar",
          label: "Sidebar",
          path: "/components/sidebar",
          icon: PanelLeft,
        },
        {
          id: "inside-sidebar",
          label: "InsideSidebar",
          path: "/components/inside-sidebar",
          icon: Columns3,
        },
        {
          id: "header",
          label: "Header",
          path: "/components/header",
          icon: AppWindow,
        },
        {
          id: "header-inside",
          label: "HeaderInside",
          path: "/components/header-inside",
          icon: ArrowLeft,
        },
        {
          id: "bar-menu",
          label: "BarMenu",
          path: "/components/bar-menu",
          icon: Menu,
        },
      ],
    },
    {
      id: "data-display",
      label: "Data Display",
      versionLabel: docsVersionLabel,
      children: [
        { id: "table", label: "Table", path: "/components/table", icon: Table },
        {
          id: "table-filters",
          label: "Table Filters",
          path: "/components/table-filters",
          icon: Filter,
        },
        {
          id: "table-filter-settings",
          label: "Table Filter Settings",
          path: "/components/table-filter-settings",
          icon: ListFilter,
        },
        {
          id: "user-item",
          label: "UserItem",
          path: "/components/user-item",
          icon: Users,
        },
        {
          id: "list-item",
          label: "ListItem",
          path: "/components/list-item",
          icon: List,
        },
        {
          id: "drag-handle",
          label: "DragHandle",
          path: "/components/drag-handle",
          icon: GripVertical,
        },
        {
          id: "bubble",
          label: "Bubble",
          path: "/components/bubble",
          icon: MessageCircle,
        },
        {
          id: "carousel",
          label: "Carousel",
          path: "/components/carousel",
          icon: GalleryHorizontal,
        },
        {
          id: "photo",
          label: "Photo",
          path: "/components/photo",
          icon: Images,
        },
        {
          id: "bar-chart-vertical",
          label: "BarChartVertical",
          path: "/components/bar-chart-vertical",
          icon: BarChart3,
        },
        {
          id: "bar-chart-horizontal",
          label: "BarChartHorizontal",
          path: "/components/bar-chart-horizontal",
          icon: BarChart3,
        },
        {
          id: "line-chart",
          label: "LineChart",
          path: "/components/line-chart",
          icon: TrendingUp,
        },
        {
          id: "pie-chart",
          label: "PieChart",
          path: "/components/pie-chart",
          icon: PieChart,
        },
        {
          id: "progress-bar",
          label: "ProgressBar",
          path: "/components/progress-bar",
          icon: Activity,
        },
        {
          id: "progress-pie",
          label: "ProgressPie",
          path: "/components/progress-pie",
          icon: Gauge,
        },
        {
          id: "time-bar",
          label: "TimeBar",
          path: "/components/time-bar",
          icon: Timer,
        },
      ],
    },
    {
      id: "feedback",
      label: "Feedback",
      versionLabel: docsVersionLabel,
      children: [
        {
          id: "tooltip",
          label: "Tooltip",
          path: "/components/tooltip",
          icon: Info,
        },
        {
          id: "popover",
          label: "Popover",
          path: "/components/popover",
          icon: MessageSquare,
        },
        {
          id: "action-popover",
          label: "ActionPopover",
          path: "/components/action-popover",
          icon: MousePointerClick,
        },
        {
          id: "modal",
          label: "Modal",
          path: "/components/modal",
          icon: Layers,
        },
        {
          id: "close-btn",
          label: "CloseBtn",
          path: "/components/close-btn",
          icon: X,
        },
      ],
    },
  ],

  icons: [
    {
      id: "icons",
      label: "Иконки",
      children: [
        {
          id: "all-icons",
          label: "Все иконки",
          path: "/icons",
          icon: Sparkles,
        },
      ],
    },
  ],

  tokens: [
    {
      id: "tokens",
      label: "Токены",
      children: [
        { id: "colors", label: "Цвета", path: "/tokens/colors", icon: Palette },
        {
          id: "spacing",
          label: "Отступы",
          path: "/tokens/spacing",
          icon: Square,
        },
        {
          id: "gap",
          label: "Gap",
          path: "/tokens/gap",
          icon: LayoutGrid,
        },
        {
          id: "tailwind-principle",
          label: "Tailwind: принцип",
          path: "/tokens/tailwind-principle",
          icon: ArrowLeftRight,
        },
        {
          id: "tailwind-examples",
          label: "Tailwind: примеры",
          path: "/tokens/tailwind-examples",
          icon: ListChecks,
        },
      ],
    },
  ],

  patterns: [
    {
      id: "patterns",
      label: "Паттерны",
      children: [
        {
          id: "patterns-overview",
          label: "Обзор",
          path: "/patterns",
          icon: Shapes,
        },
      ],
    },
  ],

  theming: [
    {
      id: "theming",
      label: "Темизатор",
      children: [
        { id: "themes", label: "Темы", path: "/theming", icon: Paintbrush },
      ],
    },
  ],

  news: [
    {
      id: "news",
      label: "Новости",
      children: [
        {
          id: "all-news",
          label: "Все новости",
          path: "/news",
          icon: Newspaper,
        },
      ],
    },
  ],
};

export function getActiveTopNavId(pathname: string): DocsTopNavId {
  if (pathname.startsWith("/components")) return "components";
  if (pathname.startsWith("/icons")) return "icons";
  if (pathname.startsWith("/tokens")) return "tokens";
  if (pathname.startsWith("/patterns")) return "patterns";
  if (pathname.startsWith("/theming")) return "theming";
  if (pathname.startsWith("/news")) return "news";
  return "home";
}

export function flattenSidebarPaths(
  groups: SidebarNavGroup[] = Object.values(sidebarConfig).flat()
): string[] {
  return groups.flatMap((group) => group.children.map((item) => item.path));
}
