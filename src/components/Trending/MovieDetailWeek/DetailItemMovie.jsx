import React from "react";
import { useAsyncValue } from "react-router-dom";
import { itemWeek } from "../../../utils/detail-movies";

const ItemDetail = ({ item }) => {
  return (
    <div className="flex flex-wrap">
      {item.map((item) => (
        <p key={item.name} className="mr-3 mb-1 md:mb-2 text-md md:text-lg">
          {item.name}
        </p>
      ))}
    </div>
  );
};

const DetailItemMovie = () => {
  const detail = useAsyncValue();
  return (
    <section className="w-full mt-10 border-2 max-h-max rounded-lg md:mt-0 md:w-3/4">
      <div className="m-3 md:mt-5 lg:ml-11">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">{detail.title}</h1>
        <h2 className="mt-1 text-md">{detail.tagline}</h2>
        <p className="text-lg font-normal w-full lg:w-1/2 leading-6 mt-3">{detail.overview}</p>
        <p className="mt-3 font-bold">Release Date: {detail.release_date}</p>
      </div>

      <div className="m-3 md:mt-5 lg:ml-11">
        <ul className="flex flex-col mt-1 text-md">
          {itemWeek.map((item) => (
            <li key={item.id} className="mb-2 md:mb-4">
              <h1 className="text-lg lg:text-2xl font-bold">{item.title}</h1>
              <ItemDetail item={detail[item.identifier]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DetailItemMovie;
