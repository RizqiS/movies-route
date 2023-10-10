import { Link, useAsyncValue } from "react-router-dom";
import { movieImg } from "../../../utils/movie-image";

const CardDetailMovie = () => {
  const movieWeek = useAsyncValue();
  return (
    <div className="ml-10 mb-10">
      <h2 className="mb-5 text-lg font-semibold md:text-2xl">Movies Week</h2>
      <ul className="flex flex-wrap items-center gap-3 ">
        {movieWeek.results.map((item) => (
          <li key={item.id}>
            <Link to={`/trending/movie-list/${item.id}`}>
              <div className="w-36 h-28 rounded-lg overflow-hidden" key={item.id}>
                <img
                  className="w-full h-full hover:scale-90 duration-300 transition-all ease-out"
                  src={`${movieImg}${item.poster_path}`}
                  alt=""
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardDetailMovie;
