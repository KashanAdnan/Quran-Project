import React from 'react'
import './Navbar.css'
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="logo">
                <img src={logo} alt="Wasif Logo" />
            </a>
            <div className="nav-responsive">
                <div className="nav-items">
                    <ul className="links">
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="button">
                    <Link to="/login">Login Now !</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
