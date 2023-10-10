import React, { Suspense } from "react";
import Trending from "./Trending";
import { loaderMovieUpcoming, loaderMoviePopular } from "../fetch-data/trending";
import { Await, defer, useLoaderData } from "react-router-dom";
import CarouselTrending from "../components/carousel/CarouselTrending";
import LoadingTrending from "../components/Trending/LoadingTrending";
import Header from "./Header";
const Home = () => {
  const { movieUpcoming } = useLoaderData();
  return (
    <>
      <Header />
      <main>
        <section className="m-1 mt-3">
          <Suspense fallback={<LoadingTrending />}>
            <Await resolve={movieUpcoming}>
              <CarouselTrending />
            </Await>
          </Suspense>
        </section>

        <section className="m-5">
          <Trending />
        </section>
      </main>
    </>
  );
};

export default Home;

export const movieListLoader = async () => {
  const movieUpcoming = await loaderMovieUpcoming();
  const moviePopular = loaderMoviePopular();
  return defer({
    movieUpcoming,
    moviePopular,
  });
};
