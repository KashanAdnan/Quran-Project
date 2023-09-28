import React from 'react'
import "./Footer.css"
import logo from "../../img/logo.png"

const Footer = () => {
    return (

        <footer>
            <div className="cols">
                <div className="col col-1">
                    <img src={logo} alt="logo" />
                    <p>We offer free online classes online anytime.Urdu and English language</p>
                    <div className="icons">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className="col col-2">
                    <h1>QUICK MENU</h1>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Packages</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="col col-3">
                    <h1>SERVICES</h1>
                    <ul>
                        <li>Learn Basic Islamic Concepts</li>
                        <li> Quranic Courses For Children</li>
                        <li> Memorizing Quran Course</li>
                        <li> Quranic Courses For Women</li>
                        <li> Elementary Quran Reading Course</li>
                    </ul>
                </div>
                <div className="col col-4">
                    <h1>CONTACT</h1>
                    <ul>
                        <li><i className="fa-solid fa-envelope"></i>info@wasifbinasif.com</li>
                        <li><i className="fa-solid fa-phone"></i>+92 331 3633434</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>Copyright © 2023 . All rights reserved by Wasif Bin Asif</p>
            </div>
        </footer>
    )
}

export default Footer
