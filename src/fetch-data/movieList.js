import { defer } from "react-router-dom";
import { loaderDetailOfMovie, loaderMoviePopular, loaderMovieUpcoming } from "./trending";

export const detailLoader = async ({ params }) => {
  const { id } = params;
  return defer({
    movieDetail: await loaderDetailOfMovie(id),
    moviePopular: loaderMoviePopular(),
    movieUpcoming: loaderMovieUpcoming(),
  });
};
