import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const HorizontalScrollCard = ({ data = [], heading, media_type }) => {
  const containerRef = useRef(null);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 320;
    }
  };

  const handlePrevious = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 320;
    }
  };

  return (
    <div className="container mx-auto px-3 sm:px-4 my-8 sm:my-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white capitalize">
        {heading}
      </h2>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto overflow-y-hidden z-10 scroll-smooth scroll-none snap-x snap-mandatory"
        >
          {data.map((item, index) => (
            <Card
              key={item.id + "heading" + index}
              data={item}
              index={index + 1}
              trending={true}
              media_type={media_type}
            />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 right-0 hidden lg:flex justify-between items-center pointer-events-none">
          <button
            onClick={handlePrevious}
            className="bg-white p-2 text-black rounded-full ml-1 xl:-ml-3 z-10 pointer-events-auto"
            aria-label={`Previous ${heading}`}
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-white p-2 text-black rounded-full mr-1 xl:-mr-3 z-10 pointer-events-auto"
            aria-label={`Next ${heading}`}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;