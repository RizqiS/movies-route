import React from "react";
import { Carousel } from "@material-tailwind/react";
import { useAsyncValue } from "react-router-dom";
import CarouselItem from "./CarouselItem";
const CarouselTrending = () => {
  const { results } = useAsyncValue();
  return (
    <Carousel
      className="rounded-lg w-full h-80 md:h-96 lg:h-[612px]"
      loop
      autoplay
      autoplayDelay={5000}>
      {results.map((item) => (
        <CarouselItem
          key={item.id}
          name={item.original_title || item.original_name}
          images={item.backdrop_path}
          overview={item.overview}
        />
      ))}
    </Carousel>
  );
};

export default CarouselTrending;
