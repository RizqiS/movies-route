import React, { Suspense, useState } from "react";
import TodayTrending from "../components/Trending/MovieUpcoming";
import WeekTrending from "../components/Trending/WeekTrending";
import { Await, useLoaderData } from "react-router-dom";
import LoadingTrending from "../components/Trending/LoadingTrending";
const Trending = () => {
  const { movieUpcoming } = useLoaderData();
  const { moviePopular } = useLoaderData();

  const [activeToday, setActiveToday] = useState(true);
  const [activeWeek, setActiveWeek] = useState(false);

  const isActiveToday = () => {
    setActiveToday(true);
    setActiveWeek(false);
  };

  const isActiveWeek = () => {
    setActiveWeek(true);
    setActiveToday(false);
  };

  const classActiveToday = activeToday ? "text-white" : "text-sky-700";
  const classActiveWeek = activeWeek ? "text-white" : "text-sky-700";

  const bgActiveToday = activeToday ? "bg-black" : "";
  const bgActiveWeek = activeWeek ? "bg-black" : "";

  let contentTrending;
  if (activeToday) {
    contentTrending = (
      <Suspense fallback={<LoadingTrending />}>
        <Await resolve={movieUpcoming}>
          {/* {(todayLoaded) => <TodayTrending item={todayLoaded.results} />} */}
          <TodayTrending />
        </Await>
      </Suspense>
    );
  }

  if (activeWeek) {
    contentTrending = (
      <Suspense fallback={<LoadingTrending />}>
        <Await resolve={moviePopular}>
          {/* {(weekLoaded) => <WeekTrending item={weekLoaded.results} />} */}
          <WeekTrending />
        </Await>
      </Suspense>
    );
  }

  return (
    <article className="w-full">
      <section className="flex font-semibold mt-10">
        <h2 className="p-3 text-md md:text-2xl ">Trending</h2>
        <div
          className={`ml-3 cursor-pointer flex items-center border-2 overflow-hidden rounded-full`}>
          <div
            className={`${bgActiveToday} w-full h-full flex items-center transition-all duration-300 ease-in`}
            onClick={isActiveToday}>
            <h2 className={`${classActiveToday} p-3 md:p-3 text-sm md:text-2xl`}>Popular</h2>
          </div>
          <div
            className={`${bgActiveWeek}  w-full h-full flex items-center transition-all duration-300 ease-in`}
            onClick={isActiveWeek}>
            <h2 className={`${classActiveWeek} p-3 md:p-3 text-sm md:text-2xl`}>Upcoming</h2>
          </div>
        </div>
      </section>
      <section className="ml-0 overflow-y-scroll p-2 h-[684px] mt-5 shadow-lg shadow-black rounded-lg md:p-0 lg:rounded-none lg:shadow-none lg:ml-14 lg:overflow-auto lg:h-max">
        {contentTrending}
      </section>
    </article>
  );
};

export default Trending;
