import React, { Suspense } from "react";
import LoadingTrending from "./LoadingTrending";
const CardToday = (props) => {
  const { name, date, images } = props;
  const movieImg = import.meta.env.VITE_IMAGEMOVIE;
  return (
    <div className="border-2 rounded-lg shadow-md cursor-pointer overflow-hidden flex items-center md:w-64 md:flex-col">
      <img
        src={`${movieImg}/${images}`}
        alt="images"
        className="h-80 w-3/5 object-cover rounded-lg object-center m-3 md:w-full md:m-0"
      />
      <div className="p-3 text-center">
        <h5 className="text-sm md:text-lg font-medium leading-tight ">{name}</h5>
        <div className=" mt-2 font-medium">
          <small className="text-xs md:text-sm">{date}</small>
        </div>
      </div>
    </div>
  );
};

export default CardToday;
