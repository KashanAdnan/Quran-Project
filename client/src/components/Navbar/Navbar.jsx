import React from 'react'
import './Navbar.css'
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";

const Navbar = ({section}) => {
    return (
        <nav className="navbar">
            <a className="logo">
                <img src={logo} alt="Wasif Logo" />
            </a>
            <div className="nav-responsive">
                <div className="nav-items">
                    <ul className="links">
                        <li><Link to="/" className={section === "home" && "active"}>Home</Link></li>
                        <li><Link to="/about" className={section === "about-us" && "active"}>About Us</Link></li>
                        <li><Link to="/services" className={section === "our-services" && "active"}>Our Services</Link></li>
                        <li><Link to="/packages" className={section === "packages" && "active"}>Packages</Link></li>
                        <li><Link to="/contact" className={section === "contact-us" && "active"}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="button">
                    <Link to="/register">Register now for free</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
