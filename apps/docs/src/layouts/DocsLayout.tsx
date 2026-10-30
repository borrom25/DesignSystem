import { useCallback, useMemo } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  AppLayout,
  Header,
  InsideSidebar,
  SearchAutocomplete,
  Segmented,
  TabsOverflow,
} from "@/components";
import { useTheme } from "@/providers";
import { Size } from "@/types";
import logoMin from "@/assets/icons/logo-min.svg";
import { Moon, SunMedium } from "lucide-react";
import { DocsSidebarNav } from "@docs/navigation/DocsSidebarNav";
import {
  getActiveTopNavId,
  topNavItems,
  type DocsTopNavId,
} from "@docs/navigation/sidebarConfig";
import { useDocsSidebarSearch } from "@docs/navigation/useDocsSidebarSearch";

const NO_ACTIVE_TOP_NAV = "__none__" as const;
type HeaderTopNavValue = DocsTopNavId | typeof NO_ACTIVE_TOP_NAV;

const THEME_OPTIONS = [
  { label: <SunMedium size={14} />, value: "light" as const },
  { label: <Moon size={14} />, value: "dark" as const },
];

export function DocsLayout() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { searchValue, setSearchValue, groups, isSearchActive } =
    useDocsSidebarSearch(location.pathname);
  const isRootPage = location.pathname === "/";
  const activeTopNavValue: HeaderTopNavValue = isRootPage
    ? NO_ACTIVE_TOP_NAV
    : getActiveTopNavId(location.pathname);
  const tabsOverflowItems = useMemo(
    () =>
      topNavItems.map((item) => ({
        label: item.label,
        value: item.id as HeaderTopNavValue,
      })),
    []
  );

  const handleTopNavChange = useCallback(
    (value: HeaderTopNavValue) => {
      if (value === NO_ACTIVE_TOP_NAV) {
        return;
      }

      const nextItem = topNavItems.find((item) => item.id === value);

      if (nextItem) {
        navigate(nextItem.path);
      }
    },
    [navigate]
  );

  return (
    <AppLayout
      size={isRootPage ? 1440 : 1100}
      header={
        <Header
          logo={
            <Link
              to="/"
              className="flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={logoMin}
                alt="Логотип Alabuga UI"
                className="h-[24px] w-[24px] shrink-0 object-contain"
              />
              <span className="text-primary font-roboto-flex text-[16px] font-bold leading-[24px] tracking-[-0.16px] whitespace-nowrap">
                Alabuga UI
              </span>
            </Link>
          }
          showMenuButton={false}
          title={""}
          showNotification={false}
          className="[&>div:first-child]:w-full"
        >
          <div className="flex w-full min-w-0 items-center justify-between gap-4">
            <TabsOverflow
              items={tabsOverflowItems}
              value={activeTopNavValue}
              size={Size.Sm}
              indicatorOffset={8}
              onValueChange={handleTopNavChange}
            />
            <Segmented
              className="!w-auto shrink-0"
              shape="round"
              size="xs"
              options={THEME_OPTIONS}
              value={theme}
              onChange={setTheme}
            />
          </div>
        </Header>
      }
      sidebar={
        isRootPage ? undefined : (
          <InsideSidebar
            title={
              <SearchAutocomplete
                aria-label="Поиск по документации"
                placeholder="Поиск"
                className="w-full"
                value={searchValue}
                onValueChange={setSearchValue}
              />
            }
            slotContent={
              <DocsSidebarNav groups={groups} isSearchActive={isSearchActive} />
            }
          />
        )
      }
    >
      <div
        key={location.pathname}
        className="min-h-0 flex-1 animate-[docs-page-enter_180ms_ease-out] will-change-[opacity,transform] motion-reduce:animate-none"
      >
        <Outlet />
      </div>
    </AppLayout>
  );
}
