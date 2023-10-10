import React, { Suspense } from "react";
import LoadingTrending from "./LoadingTrending";
import DetailImageMovie from "./MovieDetailWeek/DetailImageMovie";
import DetailItemMovie from "./MovieDetailWeek/DetailItemMovie";
import CardDetailMovie from "./MovieDetailWeek/CardDetailMovie";
import { Await } from "react-router-dom";

const MovieDetailUpcoming = () => {
  const { movieDetail, moviePopular: movieUpcoming } = useRouteLoaderData("detail-movie");
  return (
    <main>
      <div className="m-11">
        <Suspense fallback={<LoadingTrending />}>
          <Await resolve={movieUpcoming}>
            <CarouselTrending />
          </Await>
        </Suspense>
      </div>

      <div className="h-full flex gap-x-3 m-10 flex-col md:flex-row">
        <Suspense fallback={<LoadingTrending />}>
          <Await resolve={movieDetail}>
            <DetailImageMovie />
          </Await>
        </Suspense>

        <Suspense fallback={<LoadingTrending />}>
          <Await resolve={movieDetail}>
            <DetailItemMovie />
          </Await>
        </Suspense>
      </div>

      <Suspense fallback={<LoadingTrending />}>
        <Await resolve={movieUpcoming}>
          <CardDetailMovie />
        </Await>
      </Suspense>
    </main>
  );
};

export default MovieDetailUpcoming;
