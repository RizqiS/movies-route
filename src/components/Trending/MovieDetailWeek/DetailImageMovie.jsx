import React from "react";
import { movieImg } from "../../../utils/movie-image";
import { useAsyncValue } from "react-router-dom";
const DetailImageMovie = () => {
  const { poster_path, title, status } = useAsyncValue();
  return (
    <section className="w-full lg:w-1/4 border-2 h-max overflow-hidden rounded-lg">
      <figure className="text-center flex flex-col items-center justify-center md:justify-normal">
        <img
          src={`${movieImg}${poster_path}`}
          alt=""
          className="w-max h-max scale-75 -mt-11 rounded-lg md:scale-100 md:mt-0 md:h-3/5"
        />
        <figcaption className="tracking-wide mb-3 -mt-12 font-bold text-sm sm:mt-3 md:text-lg">
          {title} {status}
        </figcaption>
      </figure>
    </section>
  );
};

export default DetailImageMovie;
