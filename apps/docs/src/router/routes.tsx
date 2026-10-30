import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { DocsLayout } from "@docs/layouts/DocsLayout";
import RootPage from "@docs/pages/RootPage";

const HomePage = lazy(() => import("@docs/pages/HomePage"));
const ColorsPage = lazy(() => import("@docs/pages/tokens/ColorsPage"));
const SpacingPage = lazy(() => import("@docs/pages/tokens/SpacingPage"));
const GapPage = lazy(() => import("@docs/pages/tokens/GapPage"));
const TailwindPrinciplePage = lazy(
  () => import("@docs/pages/tokens/TailwindPrinciplePage")
);
const TailwindExamplesPage = lazy(
  () => import("@docs/pages/tokens/TailwindExamplesPage")
);
const BannerPage = lazy(() => import("@docs/pages/components/BannerPage"));
const ButtonPage = lazy(() => import("@docs/pages/components/ButtonPage"));
const CopyLinkPage = lazy(() => import("@docs/pages/components/CopyLinkPage"));
const CardPage = lazy(() => import("@docs/pages/components/CardPage"));
const LabelPage = lazy(() => import("@docs/pages/components/LabelPage"));
const TagPage = lazy(() => import("@docs/pages/components/TagPage"));
const ChipsPage = lazy(() => import("@docs/pages/components/ChipsPage"));
const AvatarPage = lazy(() => import("@docs/pages/components/AvatarPage"));
const CounterPage = lazy(() => import("@docs/pages/components/CounterPage"));
const DownloadPage = lazy(() => import("@docs/pages/components/DownloadPage"));
const IconButtonPage = lazy(
  () => import("@docs/pages/components/IconButtonPage")
);
const SkeletonPage = lazy(() => import("@docs/pages/components/SkeletonPage"));
const AlertPage = lazy(() => import("@docs/pages/components/AlertPage"));
const LinePage = lazy(() => import("@docs/pages/components/LinePage"));
const SelectPage = lazy(() => import("@docs/pages/components/SelectPage"));
const InputPage = lazy(() => import("@docs/pages/components/InputPage"));
const InputNumberPage = lazy(
  () => import("@docs/pages/components/InputNumberPage")
);
const InputPasswordPage = lazy(
  () => import("@docs/pages/components/InputPasswordPage")
);
const PinInputPage = lazy(() => import("@docs/pages/components/PinInputPage"));
const InputPhonePage = lazy(
  () => import("@docs/pages/components/InputPhonePage")
);
const InputTagPage = lazy(() => import("@docs/pages/components/InputTagPage"));
const MultiTagPage = lazy(() => import("@docs/pages/components/MultiTagPage"));
const MultiSelectPage = lazy(
  () => import("@docs/pages/components/MultiSelectPage")
);
const InputFilesPage = lazy(
  () => import("@docs/pages/components/InputFilesPage")
);
const InputFileDropPage = lazy(
  () => import("@docs/pages/components/InputFileDropPage")
);
const InputImgPage = lazy(() => import("@docs/pages/components/InputImgPage"));
const UploaderPage = lazy(() => import("@docs/pages/components/UploaderPage"));
const ModalPage = lazy(() => import("@docs/pages/components/ModalPage"));
const PopoverPage = lazy(() => import("@docs/pages/components/PopoverPage"));
const ActionPopoverPage = lazy(
  () => import("@docs/pages/components/ActionPopoverPage")
);
const PlugPage = lazy(() => import("@docs/pages/components/PlugPage"));
const TextPage = lazy(() => import("@docs/pages/components/TextPage"));
const TooltipPage = lazy(() => import("@docs/pages/components/TooltipPage"));
const TabsOverflowPage = lazy(
  () => import("@docs/pages/components/TabsOverflowPage")
);
const TabPage = lazy(() => import("@docs/pages/components/TabPage"));
const SegmentedPage = lazy(
  () => import("@docs/pages/components/SegmentedPage")
);
const PaginationPage = lazy(
  () => import("@docs/pages/components/PaginationPage")
);
const SidebarPage = lazy(() => import("@docs/pages/components/SidebarPage"));
const InsideSidebarPage = lazy(
  () => import("@docs/pages/components/InsideSidebarPage")
);
const HeaderPage = lazy(() => import("@docs/pages/components/HeaderPage"));
const HeaderInsidePage = lazy(
  () => import("@docs/pages/components/HeaderInsidePage")
);
const BarMenuPage = lazy(() => import("@docs/pages/components/BarMenuPage"));
const UserItemPage = lazy(() => import("@docs/pages/components/UserItemPage"));
const ListItemPage = lazy(() => import("@docs/pages/components/ListItemPage"));
const DragHandlePage = lazy(
  () => import("@docs/pages/components/DragHandlePage")
);
const BubblePage = lazy(() => import("@docs/pages/components/BubblePage"));
const CarouselPage = lazy(() => import("@docs/pages/components/CarouselPage"));
const PhotoPage = lazy(() => import("@docs/pages/components/PhotoPage"));
const TimeBarPage = lazy(() => import("@docs/pages/components/TimeBarPage"));
const DateRangePage = lazy(
  () => import("@docs/pages/components/DateRangePage")
);
const TablePage = lazy(() => import("@docs/pages/components/TablePage"));
const TableFiltersPage = lazy(
  () => import("@docs/pages/components/TableFiltersPage")
);
const TableFilterSettingsPage = lazy(
  () => import("@docs/pages/components/TableFilterSettingsPage")
);
const AccordionPage = lazy(
  () => import("@docs/pages/components/AccordionPage")
);
const AccordionBlockPage = lazy(
  () => import("@docs/pages/components/AccordionBlockPage")
);
const StepBarPage = lazy(() => import("@docs/pages/components/StepBarPage"));
const BarChartVerticalPage = lazy(
  () => import("@docs/pages/components/BarChartVerticalPage")
);
const BarChartHorizontalPage = lazy(
  () => import("@docs/pages/components/BarChartHorizontalPage")
);
const LineChartPage = lazy(
  () => import("@docs/pages/components/LineChartPage")
);
const PieChartPage = lazy(() => import("@docs/pages/components/PieChartPage"));
const ProgressBarPage = lazy(
  () => import("@docs/pages/components/ProgressBarPage")
);
const ProgressPiePage = lazy(
  () => import("@docs/pages/components/ProgressPiePage")
);
const GenericComponentPage = lazy(
  () => import("@docs/pages/components/GenericComponentPage")
);
const PlaceholderPage = lazy(() => import("@docs/pages/PlaceholderPage"));

export const docsRoutes: RouteObject[] = [
  {
    element: <DocsLayout />,
    children: [
      { index: true, element: <RootPage /> },
      { path: "quick-start", element: <HomePage /> },
      { path: "tokens/colors", element: <ColorsPage /> },
      { path: "tokens/spacing", element: <SpacingPage /> },
      { path: "tokens/gap", element: <GapPage /> },
      { path: "tokens/tailwind-principle", element: <TailwindPrinciplePage /> },
      { path: "tokens/tailwind-examples", element: <TailwindExamplesPage /> },
      { path: "components/button", element: <ButtonPage /> },
      { path: "components/copy-link", element: <CopyLinkPage /> },
      { path: "components/icon-button", element: <IconButtonPage /> },
      { path: "components/label", element: <LabelPage /> },
      { path: "components/tag", element: <TagPage /> },
      { path: "components/chips", element: <ChipsPage /> },
      { path: "components/counter", element: <CounterPage /> },
      { path: "components/download", element: <DownloadPage /> },
      { path: "components/avatar", element: <AvatarPage /> },
      { path: "components/card", element: <CardPage /> },
      { path: "components/line", element: <LinePage /> },
      { path: "components/skeleton", element: <SkeletonPage /> },
      { path: "components/alert", element: <AlertPage /> },
      { path: "components/banner", element: <BannerPage /> },
      { path: "components/text", element: <TextPage /> },
      { path: "components/plug", element: <PlugPage /> },
      { path: "components/input", element: <InputPage /> },
      { path: "components/input-number", element: <InputNumberPage /> },
      { path: "components/input-password", element: <InputPasswordPage /> },
      { path: "components/pin-input", element: <PinInputPage /> },
      { path: "components/input-phone", element: <InputPhonePage /> },
      { path: "components/input-tag", element: <InputTagPage /> },
      { path: "components/multi-tag", element: <MultiTagPage /> },
      { path: "components/input-files", element: <InputFilesPage /> },
      { path: "components/input-file-drop", element: <InputFileDropPage /> },
      { path: "components/input-img", element: <InputImgPage /> },
      { path: "components/uploader", element: <UploaderPage /> },
      { path: "components/select", element: <SelectPage /> },
      { path: "components/multi-select", element: <MultiSelectPage /> },
      { path: "components/modal", element: <ModalPage /> },
      { path: "components/popover", element: <PopoverPage /> },
      { path: "components/action-popover", element: <ActionPopoverPage /> },
      { path: "components/tooltip", element: <TooltipPage /> },
      { path: "components/tab", element: <TabPage /> },
      { path: "components/segmented", element: <SegmentedPage /> },
      { path: "components/user-item", element: <UserItemPage /> },
      { path: "components/list-item", element: <ListItemPage /> },
      { path: "components/drag-handle", element: <DragHandlePage /> },
      { path: "components/bubble", element: <BubblePage /> },
      { path: "components/carousel", element: <CarouselPage /> },
      { path: "components/photo", element: <PhotoPage /> },
      { path: "components/time-bar", element: <TimeBarPage /> },
      { path: "components/date-range", element: <DateRangePage /> },
      { path: "components/table", element: <TablePage /> },
      { path: "components/table-filters", element: <TableFiltersPage /> },
      {
        path: "components/table-filter-settings",
        element: <TableFilterSettingsPage />,
      },
      { path: "components/tabs-overflow", element: <TabsOverflowPage /> },
      { path: "components/accordion", element: <AccordionPage /> },
      { path: "components/accordion-block", element: <AccordionBlockPage /> },
      { path: "components/pagination", element: <PaginationPage /> },
      { path: "components/step-bar", element: <StepBarPage /> },
      { path: "components/sidebar", element: <SidebarPage /> },
      { path: "components/inside-sidebar", element: <InsideSidebarPage /> },
      { path: "components/header", element: <HeaderPage /> },
      { path: "components/header-inside", element: <HeaderInsidePage /> },
      { path: "components/bar-menu", element: <BarMenuPage /> },
      {
        path: "components/bar-chart-vertical",
        element: <BarChartVerticalPage />,
      },
      {
        path: "components/bar-chart-horizontal",
        element: <BarChartHorizontalPage />,
      },
      { path: "components/line-chart", element: <LineChartPage /> },
      { path: "components/pie-chart", element: <PieChartPage /> },
      { path: "components/progress-bar", element: <ProgressBarPage /> },
      { path: "components/progress-pie", element: <ProgressPiePage /> },
      { path: "components/:componentId", element: <GenericComponentPage /> },

      { path: "icons", element: <PlaceholderPage /> },
      { path: "patterns", element: <PlaceholderPage /> },
      { path: "theming", element: <PlaceholderPage /> },
      { path: "news", element: <PlaceholderPage /> },
    ],
  },
];
