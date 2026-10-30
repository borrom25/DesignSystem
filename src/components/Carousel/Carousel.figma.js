// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=6649-1327
// source=src/components/Carousel/Carousel.tsx
// component=Carousel
const figma = require("figma");
const instance = figma.selectedInstance;
const orientation = instance.getEnum("Deirection", { Horizontal: "horizontal", Vertical: "vertical" });
const showIndicators = instance.getBoolean("Pagintaion");
const controls = instance.getBoolean("controlContainer");
// Temporary mapping: freeform slot content is represented by sample items.
// Controls Position=Outside is owned by the runtime layout.
export default {
  example: figma.tsx`
    <Carousel orientation="${orientation}" showIndicators={${showIndicators}}>
      <Carousel.Track>
        <Carousel.Item><div>Слайд 1</div></Carousel.Item>
        <Carousel.Item><div>Слайд 2</div></Carousel.Item>
      </Carousel.Track>
      ${controls ? figma.tsx`<Carousel.PrevButton /><Carousel.NextButton />` : ""}
      ${showIndicators ? figma.tsx`<Carousel.Indicators />` : ""}
    </Carousel>
  `,
  imports: ['import { Carousel } from "borrom-ds-test"'],
  id: "carousel",
  metadata: { nestable: true },
};
