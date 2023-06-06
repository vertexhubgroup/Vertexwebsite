import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import brand from "./../vertexlogo.png"
import logo1 from "./../vertexhubwhite_adobe_express.svg"
import logo2 from "./../Vertexhubblack .png"
import Hamburger from "./../burger-menu.svg"

import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img 
          src={logo1} 
          alt="logo" 
        />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img 
          src={Hamburger} 
          alt="logo" 
        />        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;