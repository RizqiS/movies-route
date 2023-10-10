import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import Home, { movieListLoader } from "./layout/Home";
import NavbarMaterial from "./components/navbar/NavbarMaterial";
import MovieDetailPopular from "./components/Trending/MovieDetailPopular";
import { detailLoader } from "./fetch-data/movieList";
import store from "./store/movie-store";
import { Provider } from "react-redux";
import MovieDetailUpcoming from "./components/Trending/MovieDetailUpcoming";
import Search from "./layout/Search";
import Error from "./layout/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: movieListLoader,
        element: <Home />,
      },
      {
        path: "test",
        element: <NavbarMaterial />,
      },
      {
        id: "detail-movie",
        path: "trending",
        loader: detailLoader,
        children: [
          {
            path: "movie-list/:id",
            element: <MovieDetailPopular />,
          },
          {
            path: "movie-list/upcoming/:id",
            element: <MovieDetailUpcoming />,
          },
        ],
      },
      {
        path: "search-movie",
        element: <Search />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
};

export default App;
