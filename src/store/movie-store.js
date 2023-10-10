import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./ui-navbar";
import searchReducer from "./search-movie";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    searchData: searchReducer,
  },
});

export default store;
