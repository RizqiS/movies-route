import React, { useEffect } from "react";
import FormSearchMovie from "../components/search/FormSearchMovie";
import { useDispatch, useSelector } from "react-redux";
import CardToday from "../components/Trending/CardToday";
import { Link } from "react-router-dom";
import { searchAction } from "../store/search-movie";
import { searchMovie } from "../fetch-data/movieSearch";

const Search = () => {
  const dispatch = useDispatch();
  const { inputMovie } = useSelector((state) => state.searchData);
  const { results } = useSelector((state) => state.searchData.data);

  useEffect(() => {
    const fetchSearchMovie = async () => {
      const data = await searchMovie(localStorage.getItem("search") || "spiderman");
      dispatch(searchAction.listMovie(data));
    };
    fetchSearchMovie();
  }, [inputMovie, dispatch]);

  let content;
  if (results?.length === 0) {
    content = (
      <p className="text-center mx-auto">
        cannot find movie <span className="text-red-800">{localStorage.getItem("search")}</span>
      </p>
    );
  }

  if (results?.length > 0) {
    content = (
      <>
        {results?.map((item) => (
          <li key={item.id} className="mb-3 p-2 md:p-0">
            <Link to={`/trending/movie-list/${item.id}`}>
              <CardToday
                name={item.original_title || item.original_name}
                date={item.first_air_date || item.release_date}
                images={item.backdrop_path || item.poster_path}
              />
            </Link>
          </li>
        ))}
      </>
    );
  }

  return (
    <main>
      <FormSearchMovie />
      <section>
        <ul className="mt-5 flex flex-wrap items-center max-w-xl gap-3 justify-start md:justify-center md:max-w-full md:gap-5">
          {content}
        </ul>
      </section>
    </main>
  );
};

export default Search;
