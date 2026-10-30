import { Carousel } from "@/components";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "../createComponentDocsPage";

type CarouselOrientation = "horizontal" | "vertical";

type CarouselPlaygroundState = {
  orientation: CarouselOrientation;
  showIndicators: boolean;
  zoomEnabled: boolean;
  autoSwipe: boolean;
};

const CAROUSEL_ORIENTATION_OPTIONS = [
  { value: "horizontal" as const, label: "Horizontal" },
  { value: "vertical" as const, label: "Vertical" },
];

const CAROUSEL_IMAGE_SLIDES = [
  "https://picsum.photos/640/400?1",
  "https://picsum.photos/800/400?2",
  "https://picsum.photos/720/400?3",
  "https://picsum.photos/560/400?4",
  "https://picsum.photos/900/400?5",
];

const CAROUSEL_DEFAULT_STATE: CarouselPlaygroundState = {
  orientation: "horizontal",
  showIndicators: true,
  zoomEnabled: true,
  autoSwipe: false,
};

const CAROUSEL_PROPS: PropDefinition[] = [
  {
    name: "defaultValue",
    type: "number",
    description: "Индекс слайда, с которого карусель открывается.",
    defaultValue: "0",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    description: "Направление трека и кнопок навигации.",
    defaultValue: '"horizontal"',
  },
  {
    name: "width",
    type: "number",
    description: "Ширина окна трека в пикселях.",
    defaultValue: "400",
  },
  {
    name: "height",
    type: "number",
    description: "Высота окна трека в пикселях.",
    defaultValue: "160",
  },
  {
    name: "autoSwipeDuration",
    type: "number",
    description:
      "Интервал автолистания в миллисекундах. 0 выключает автосвайп. На время fullscreen останавливается.",
    defaultValue: "0",
  },
  {
    name: "showIndicators",
    type: "boolean",
    description: "Показывает точки текущего слайда.",
    defaultValue: "false",
  },
  {
    name: "zoomEnabled",
    type: "boolean",
    description:
      "Клик по слайду открывает его на весь экран. В модалке можно листать остальные слайды стрелками и кнопками.",
    defaultValue: "true",
  },
  {
    name: "children",
    type: "ReactNode",
    description:
      "Составные части: Carousel.Track, Carousel.Item, Carousel.PrevButton, Carousel.NextButton, Carousel.Indicators.",
  },
];

function createCarouselUsageCode(
  packageName: string,
  state: CarouselPlaygroundState
) {
  const autoSwipeLine = state.autoSwipe
    ? "\n      autoSwipeDuration={3000}"
    : "";

  return `import { Carousel } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <Carousel
      orientation="${state.orientation}"
      showIndicators={${state.showIndicators}}
      zoomEnabled={${state.zoomEnabled}}${autoSwipeLine}
    >
      <Carousel.Track>
        <Carousel.Item>
          <img src="https://picsum.photos/640/400?1" alt="Слайд 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/800/400?2" alt="Слайд 2" />
        </Carousel.Item>
      </Carousel.Track>
      <Carousel.PrevButton />
      <Carousel.NextButton />
      <Carousel.Indicators />
    </Carousel>
  );
}`;
}

function CarouselPreview(state: CarouselPlaygroundState) {
  const isHorizontal = state.orientation === "horizontal";

  return (
    <Carousel
      orientation={state.orientation}
      showIndicators={state.showIndicators}
      zoomEnabled={state.zoomEnabled}
      autoSwipeDuration={state.autoSwipe ? 3000 : 0}
      width={isHorizontal ? 420 : 240}
      height={isHorizontal ? 220 : 360}
    >
      <Carousel.Track>
        {CAROUSEL_IMAGE_SLIDES.map((src, index) => (
          <Carousel.Item
            key={src}
            className={
              isHorizontal ? "w-[280px] overflow-hidden" : "overflow-hidden"
            }
          >
            <img
              src={src}
              alt={`Слайд ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.Track>
      <Carousel.PrevButton />
      <Carousel.NextButton />
      <Carousel.Indicators />
    </Carousel>
  );
}

function renderCarouselControls(
  state: CarouselPlaygroundState,
  {
    updateState,
  }: {
    updateState: (patch: Partial<CarouselPlaygroundState>) => void;
  }
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Orientation"
        options={CAROUSEL_ORIENTATION_OPTIONS}
        value={state.orientation}
        onChange={(orientation) => updateState({ orientation })}
      />
      <PlaygroundSwitchControl
        label="Show indicators"
        checked={state.showIndicators}
        onChange={(showIndicators) => updateState({ showIndicators })}
      />
      <PlaygroundSwitchControl
        label="Zoom enabled"
        checked={state.zoomEnabled}
        onChange={(zoomEnabled) => updateState({ zoomEnabled })}
      />
      <PlaygroundSwitchControl
        label="Auto swipe"
        checked={state.autoSwipe}
        onChange={(autoSwipe) => updateState({ autoSwipe })}
      />
    </>
  );
}

export const carouselDocsConfig: ComponentDocsConfig<CarouselPlaygroundState> =
  {
    title: "Carousel",
    description:
      "Carousel показывает набор слайдов с кнопками, индикаторами и опциональным автосвайпом. Клик по слайду открывает полноэкранный просмотр, в котором можно листать остальные слайды.",
    props: CAROUSEL_PROPS,
    initialState: CAROUSEL_DEFAULT_STATE,
    createUsageCode: createCarouselUsageCode,
    renderPreview: CarouselPreview,
    renderControls: renderCarouselControls,
  };
