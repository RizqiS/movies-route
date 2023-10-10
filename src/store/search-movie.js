import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: [],
    inputMovie: "",
  },
  reducers: {
    listMovie(state, action) {
      state.data = action.payload;
    },
    setInputMovie(state, action) {
      state.inputMovie = action.payload;
    },
  },
});

export const searchAction = searchSlice.actions;

export default searchSlice.reducer;
