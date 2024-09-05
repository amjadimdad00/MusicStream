import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import CarouselItem from "./CarouselItem";
import CarouselIndicator from "./CarouselIndicatior";

export interface CarouselProps {
  width?: number;
  height?: number;
  items: React.ReactNode[];
}

const Carousel = ({ width, height, items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrevItemBtn = () => {
    setActiveIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : prev;
    });
  };

  const handleNextItemBtn = () => {
    setActiveIndex((prev) => {
      return prev + 1 < items.length ? prev + 1 : prev;
    });
  };

  return (
    <div className="carousel-container max-lg:mt-10">
      {/* Previous Button */}
      {activeIndex > 0 && (
        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={handlePrevItemBtn}
        >
          <IoIosArrowBack />
        </button>
      )}

      {/* Carousel */}

      {items?.map((item, index) => (
        <CarouselItem key={index} index={index} activeIndex={activeIndex}>
          {item}
        </CarouselItem>
      ))}

      {/* Next Button */}

      {activeIndex < items.length - 1 && (
        <button
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={handleNextItemBtn}
        >
          <IoIosArrowBack style={{ transform: "rotate(180deg)" }} />
        </button>
      )}

      {/* Carousel Indicator */}

      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex) => {
          setActiveIndex(activeIndex);
        }}
      ></CarouselIndicator>
    </div>
  );
};

export default Carousel;
