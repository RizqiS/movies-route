import { json } from "react-router-dom";

export const loaderMovieUpcoming = async () => {
  const moviedb = import.meta.env.VITE_MOVIES;
  const apikey = import.meta.env.VITE_MOVIE_APIKEY;
  const url = `${moviedb}/movie/upcoming/?language=en-US&page=1&api_key=${apikey}`;
  const responses = await fetch(url);
  if (!responses.ok) {
    throw json({ message: "could not get data movie trending all day" }, { status: 500 });
  } else {
    const resData = await responses.json();
    return resData;
  }
};

export const loaderMoviePopular = async () => {
  const moviedb = import.meta.env.VITE_MOVIES;
  const apikey = import.meta.env.VITE_MOVIE_APIKEY;

  const url = `${moviedb}/movie/popular?api_key=${apikey}&page=1`;
  const responses = await fetch(url);

  if (!responses.ok) {
    throw json({ message: "could not get data movie popular" }, { status: 500 });
  } else {
    const resData = await responses.json();
    return resData;
  }
};

export const loaderDetailOfMovie = async (id) => {
  const moviedb = import.meta.env.VITE_MOVIES;
  const apikey = import.meta.env.VITE_MOVIE_APIKEY;

  const url = `${moviedb}/movie/${id}?api_key=${apikey}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw json({ message: "could not get detail movie popular" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
};
