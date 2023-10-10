export const searchMovie = async (movie) => {
  const moviedb = import.meta.env.VITE_MOVIES;
  const apikey = import.meta.env.VITE_MOVIE_APIKEY;

  const url = `${moviedb}/search/movie?api_key=${apikey}&query=${movie}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw json({ message: "could not get detail movie popular" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
};

// export const searchLoader = async () => {
//   return defer({
//     search: await searchMovie(localStorage.getItem("search")),
//   });
// };
