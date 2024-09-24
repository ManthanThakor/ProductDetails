import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">MR PRODUCT</NavLink>
      </div>

      <div className={`navbar-links ${isMobile ? "mobile" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active-link" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active-link" : ""}`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active-link" : ""}`
          }
        >
          Dashboard
        </NavLink>

        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active-link" : ""}`
          }
        >
          <FaCartPlus /> <span>0</span>
        </NavLink>
      </div>

      <div
        className={`hamburger ${isMobile ? "toggle" : ""}`}
        onClick={() => setIsMobile(!isMobile)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
