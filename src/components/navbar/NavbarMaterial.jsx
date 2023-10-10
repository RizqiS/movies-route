import React from "react";
import { Navbar, Typography, IconButton, Collapse } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const NavbarMaterial = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const isActiveLink = ({ isActive }) => {
    return isActive ? "text-black" : "";
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <NavLink to="/" className={`flex items-center text-sm md:text-lg ${isActiveLink}`} end>
          Movies
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <NavLink to="search-movie" className="flex items-center text-sm md:text-lg">
          Searching
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-0 px-0 lg:py-2 lg:px-8">
      <div className="flex items-center m-4 lg:m-5 justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="cursor-pointer py-1.5 text-xl md:text-2xl font-semibold lg:ml-16">
          Movies
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav} className="-m-2">
        <div className="ml-5 flex justify-center lg:justify-between ">{navList}</div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarMaterial;
