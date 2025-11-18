import React from "react";
import { ChevronDown } from "lucide-react";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <img src="images/Logo.png" alt="" />
        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#destinations">Destinations</a>
          </li>
          <li className="nav-item">
            <a href="#hotels">Hotels</a>
          </li>
          <li className="nav-item">
            <a href="#flights">Flights</a>
          </li>
          <li className="nav-item">
            <a href="#bookings">Bookings</a>
          </li>
        </ul>

        {/* Auth & Language */}
        <div className="auth-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign up</button>

          <div className="lang-switcher">
            <span>EN</span>
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="hamburger">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
