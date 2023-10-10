import React, { Suspense } from "react";
import { Await, Link, useRouteLoaderData } from "react-router-dom";
import DetailItemMovie from "./MovieDetailWeek/DetailItemMovie";
import DetailImageMovie from "./MovieDetailWeek/DetailImageMovie";
import CarouselTrending from "../carousel/CarouselTrending";
import CardDetailMovie from "./MovieDetailWeek/CardDetailMovie";
import LoadingTrending from "./LoadingTrending";

const DetailTrending = () => {
  const { movieDetail, moviePopular } = useRouteLoaderData("detail-movie");
  return (
    <main>
      <div className="m-11">
        <Suspense fallback={<LoadingTrending />}>
          <Await resolve={moviePopular}>
            <CarouselTrending />
          </Await>
        </Suspense>
      </div>

      <div>
        <Link
          className="md:text2xl border-2 px-2 py-2 rounded-lg cursor-pointer font-semibold ml-11"
          to="/">
          Back To Home
        </Link>
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
        <Await resolve={moviePopular}>
          <CardDetailMovie />
        </Await>
      </Suspense>
    </main>
  );
};

export default DetailTrending;
