import React, { useState } from "react";
import {
  getCssTransformProperties,
  getCssOpacity,
  getCssDisplay,
} from "../../utils/carouselstyles";

export interface CardProps {
  index: number;
  activeIndex: number;
  children?: React.ReactNode;
}

const CarouselItem = ({ index, activeIndex, children }: CardProps) => {
  const [scale, setScale] = useState<boolean>(false);
  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProperties = getCssTransformProperties(
    offset,
    absOffset,
    direction,
    scale,
    index === activeIndex
  );
  const cssOpacity = getCssOpacity(index, activeIndex);
  const cssDisplay = getCssDisplay(index, activeIndex);

  return (
    <div
      className="carousel-item"
      style={{
        transform: cssTransformProperties,
        opacity: cssOpacity,
        display: cssDisplay,
        zIndex: `${scale ? 100 : 1}`,
      }}
      onClick={() => setScale(!scale)}
    >
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default CarouselItem;
