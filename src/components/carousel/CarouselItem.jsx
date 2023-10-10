import React from "react";

const CarouselItem = (props) => {
  const { name, images, overview } = props;
  const movieImg = import.meta.env.VITE_IMAGEMOVIE;
  return (
    <>
      <div
        className="h-full w-full object-cover bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${movieImg}/${images})`,
        }}>
        <div className="h-full w-full bg-black/70 flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-lg md:text-2xl lg:text-4xl">{name}</h2>
          <p className="w-4/5 text-xs lg:text-md lg:w-1/2 text-white mt-5 ">{overview}</p>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
