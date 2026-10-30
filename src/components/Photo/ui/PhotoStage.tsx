import { useEffect, useState, type CSSProperties } from "react";
import { cn } from "@/utils";
import { photoStyles } from "../styles";
import type { PhotoItem } from "../Photo.types";

type SlideMotion = "idle" | "enter" | "exit";

type SlideLayer = {
  id: string;
  index: number;
  item: PhotoItem;
  rotation: number;
  motion: SlideMotion;
  direction: 1 | -1;
  instant?: boolean;
};

function PhotoSlide({ layer }: { layer: SlideLayer }) {
  return (
    <div
      className={cn(
        photoStyles.slide,
        photoStyles.getFilm(layer.motion, layer.direction)
      )}
    >
      <div
        className={photoStyles.slidePhoto}
        style={{
          transform: `rotate(${layer.rotation}deg)`,
          transition: layer.instant ? "none" : undefined,
        }}
      >
        <img
          src={layer.item.src}
          alt={layer.motion === "exit" ? "" : (layer.item.alt ?? "")}
          draggable={false}
          className={photoStyles.image}
        />
      </div>
    </div>
  );
}

export function PhotoStage({
  item,
  index,
  rotation,
  direction,
}: {
  item?: PhotoItem;
  index: number;
  rotation: number;
  direction: 1 | -1;
}) {
  const [layers, setLayers] = useState<SlideLayer[]>(() =>
    item
      ? [
          {
            id: `photo-${index}`,
            index,
            item,
            rotation,
            motion: "idle",
            direction: 1,
          },
        ]
      : []
  );

  useEffect(() => {
    if (!item) {
      setLayers([]);
      return;
    }

    setLayers((current) => {
      const active = [...current]
        .reverse()
        .find((layer) => layer.motion !== "exit");

      if (!active) {
        return [
          {
            id: `photo-${index}`,
            index,
            item,
            rotation,
            motion: "idle",
            direction,
          },
        ];
      }

      if (active.index === index) {
        if (active.rotation === rotation && active.item === item)
          return current;
        const instant =
          active.item.src !== item.src && active.rotation !== rotation;
        return current.map((layer) =>
          layer.id === active.id ? { ...layer, item, rotation, instant } : layer
        );
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        return [
          {
            id: `${active.id}>${index}`,
            index,
            item,
            rotation,
            motion: "idle",
            direction,
          },
        ];
      }

      if (
        current.some(
          (layer) => layer.motion === "enter" && layer.index === index
        )
      ) {
        return current;
      }

      return [
        ...current.map((layer) =>
          layer.id === active.id
            ? { ...layer, motion: "exit" as const, direction }
            : layer
        ),
        {
          id: `${active.id}>${index}`,
          index,
          item,
          rotation,
          motion: "enter",
          direction,
        },
      ];
    });
  }, [direction, index, item, rotation]);

  useEffect(() => {
    if (!layers.some((layer) => layer.instant)) return;
    const frame = window.requestAnimationFrame(() => {
      setLayers((current) =>
        current.map((layer) =>
          layer.instant ? { ...layer, instant: false } : layer
        )
      );
    });
    return () => window.cancelAnimationFrame(frame);
  }, [layers]);

  useEffect(() => {
    if (!layers.some((layer) => layer.motion === "exit")) return;

    const timer = window.setTimeout(() => {
      setLayers((current) =>
        current
          .filter((layer) => layer.motion !== "exit")
          .map((layer) =>
            layer.motion === "enter"
              ? { ...layer, motion: "idle" as const }
              : layer
          )
      );
    }, photoStyles.slideMs + 48);

    return () => window.clearTimeout(timer);
  }, [layers]);

  if (!item) return null;

  return (
    <div
      className={photoStyles.frame}
      style={
        {
          "--photo-slide-ms": `${photoStyles.slideMs}ms`,
          "--photo-rotate-ms": `${photoStyles.rotateMs}ms`,
        } as CSSProperties
      }
      onClick={(event) => event.stopPropagation()}
    >
      {layers.map((layer) => (
        <PhotoSlide key={layer.id} layer={layer} />
      ))}
    </div>
  );
}
