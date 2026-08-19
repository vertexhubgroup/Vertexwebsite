import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../Vertexhubblack .png";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleNavLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <nav className="site-navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <NavLink className="navbar-brand" to="/" onClick={handleNavLinkClick} aria-label="Vertexhub Group home">
          <img src={logo} alt="Vertexhub Group" />
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={showNavbar}
          aria-controls="primary-navigation"
          aria-label={showNavbar ? "Close navigation menu" : "Open navigation menu"}
          onClick={handleShowNavbar}
        >
          <FontAwesomeIcon icon={showNavbar ? faXmark : faBars} />
        </button>

        <div id="primary-navigation" className={`nav-elements ${showNavbar ? "active" : ""}`}>
          <ul>
            <li><NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink></li>
            <li><NavLink to="/services" onClick={handleNavLinkClick}>Services</NavLink></li>
            <li><NavLink to="/about" onClick={handleNavLinkClick}>About Us</NavLink></li>
            <li><NavLink to="/contact" onClick={handleNavLinkClick}>Contact</NavLink></li>
          </ul>
          <NavLink className="navbar-cta" to="/contact" onClick={handleNavLinkClick}>Start a conversation <span aria-hidden="true">&#8594;</span></NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
