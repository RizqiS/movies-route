import React from "react";
import CardToday from "./CardToday";
import { Link, useAsyncValue } from "react-router-dom";

const WeekTrending = (props) => {
  const { results } = useAsyncValue();
  return (
    <ul className="mt-5 flex flex-wrap items-center max-w-xl gap-3 justify-start md:justify-center md:max-w-full md:gap-5">
      {results.map((item) => (
        <li className="mb-3" key={item.id}>
          <Link to={`/trending/movie-list/${item.id}`}>
            <CardToday
              key={item.id}
              name={item.original_title || item.original_name}
              date={item.first_air_date || item.release_date}
              images={item.backdrop_path}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default WeekTrending;
