import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ section }) => {
  const [button, setButton] = useState(true);
  if (screen.width === 820) {
    setButton(true);
  }
  const ResponsiveNavbar = () => {
    setButton(true);
  };
  const CloseNavbar = () => {
    setButton(false);
  };
  return (
    <nav className="navbar">
      <a className="logo">
        <img src={logo} alt="Wasif Logo" />
      </a>
      <div
        className="nav-responsive"
        style={{
          maxHeight: button ? "450px" : "0px",
          overflow: button ? "none" : "hidden ",
          padding: button ? "30px 0" : "0px",
        }}
      >
        <div className="nav-items">
          <ul className="links">
            <li>
              <Link to="/" className={section === "home" ? "active" : "home"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={section === "about-us" ? "active" : "about-us"}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={
                  section === "our-services" ? "active" : "our-services"
                }
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/packages"
                className={section === "packages" ? "active" : "packages"}
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={section === "contact-us" ? "active" : "contact-us"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="button">
          <Link to="/register">Register now for free</Link>
        </div>
        <FontAwesomeIcon
          onClick={CloseNavbar}
          className="xmark"
          icon={faXmark}
          style={{ display: button ? "block" : "none" }}
        />
      </div>
      <FontAwesomeIcon
        onClick={ResponsiveNavbar}
        className="bars"
        icon={faBars}
      />
    </nav>
  );
};

export default Navbar;
