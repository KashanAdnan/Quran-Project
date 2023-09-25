import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./AboutPage.css";
import muhammed from "../../img/muhammed.png";
import line from "../../img/line.png"

const AboutPage = () => {
    return (
        <>
            <div className="about-page-container">
                <Navbar section={"about-us"} />
                <div className="main-container">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="about-page-section">
                <div className="about-heading">
                    <h1>Welcome to Al Safaa quran institute</h1>
                </div>
                <div className="about-left-right">

                    <div className="left">
                        <img src={line} alt="" />
                        <h3>Few Words About</h3>
                        <h1>Al Safaa Quran Institute</h1>
                        <img className='line-2' src={line} alt="" />
                        <p>Al Safaa Quran institute provides opportunity to learn Quran by just sitting at home.These courses are specially for people that live in western countries like US,UK,Australia,Canada or anywhere in the world.
                            <br />
                            <br />
                            Al Safaa Quran institute is an independent entity managed by a small group of dedicated professionals. We welcome everyone to learn the teachings of the holy Quran and the commandments of Islam irrespective of their race, colour, or cast. We aim to make every Muslim understand and follow the basic principles of our religion so as to ensure we can become a better Ummah as well as make this world a better place for everyone to live in.</p>
                    </div>
                    <div className="right">
                        <img src={muhammed} alt="" />
                    </div>
                </div>
            </div>
            <div className="inviting">
                <img src="https://alsafaaquran.com/wp-content/uploads/2023/07/dividers-2.png" alt="" />
                <h1>“AND ALLAH INVITES TO THE HOME OF PEACE”</h1>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage
