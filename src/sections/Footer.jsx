import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Column 1: Brand */}
        <div className="footer-brand">
          <h2 className="logo">Jadoo.</h2>
          <p className="brand-desc">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {/* Column 2: Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul className="footer-links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Help/FAQ</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
          </ul>
        </div>

        {/* Column 4: More */}
        <div className="footer-col">
          <h4>More</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Airlinefees</a>
            </li>
            <li>
              <a href="#">Airline</a>
            </li>
            <li>
              <a href="#">Low fare tips</a>
            </li>
          </ul>
        </div>

        {/* Column 5: Social & App */}
        <div className="footer-col">
          <div className="social-row">
            <div className="social-icon-circle">
              <Facebook size={20} color="#080809" />
            </div>
            <div className="social-icon-circle insta">
              <Instagram size={20} color="#080809" />
            </div>
            <div className="social-icon-circle">
              <Twitter size={20} color="#080809" />
            </div>
          </div>

          <h5 className="app-title">Discover our app</h5>

          <div className="app-buttons">
            <button className="app-button">
              <img
                src="/images/Google Play.png"
                alt=""
                className="h-5"
                onError={(e) => (e.target.style.display = "none")}
              />
            </button>
            <button className="app-button">
              <img
                src="/images/Play Store.png"
                alt=""
                className="h-5"
                onError={(e) => (e.target.style.display = "none")}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="copyright">All rights reserved@jadoo.co</p>
    </footer>
  );
};

export default Footer;
