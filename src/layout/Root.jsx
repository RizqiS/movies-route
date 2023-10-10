import React from "react";
import NavbarMaterial from "../components/navbar/NavbarMaterial";

import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Footer from "./Footer";
const Root = () => {
  return (
    <>
      <ThemeProvider>
        <NavbarMaterial />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Root;
