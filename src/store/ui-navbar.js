import { createSlice } from "@reduxjs/toolkit";

const navbar = createSlice({
  name: "open-nav",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openNav(state) {
      state.isOpen = true;
    },
    closeNav(state) {
      state.isOpen = false;
    },
  },
});

export const navbarAction = navbar.actions;
export default navbar.reducer;
