import React from "react";
import logo from "../images/logo-book.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "rgb(108, 108, 108)" }}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/genre"
          style={{ textDecoration: "none", color: "rgb(108, 108, 108)" }}
        >
          <li>Genre</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
