import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(classes["responsive_nav"]);
  };

  const isActiveLink = (isActive) => {
    return isActive ? classes.active : "";
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef} className={classes["nav-container"]}>
        <ul>
          <li>
            <NavLink href="#" className={isActiveLink}>
              Popular Movies
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className={isActiveLink}>
              Trending Movies
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className={isActiveLink}>
              Best Movies Year
            </NavLink>
          </li>
        </ul>
        <button className={`${classes["nav-btn"]} ${classes["nav-close"]}`} onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className={`${classes["nav-btn"]}`} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
