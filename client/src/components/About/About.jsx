import React from 'react'
import line from '../../img/line.png'
import './About.css'
import { Link } from 'react-router-dom'
import quran from '../../img/1607671953972-removebg-preview.png'

const About = () => {
    return (
        <div className="about-section">
            <div className="content">
                <h1>Welcome to Wasif Bin Asif quran institute</h1>
                <img src={line} className="bismillah" alt="asdas" />
                <p>Wasif Bin Asif Quran institute provides opportunity to learn Quran by just sitting at home.These courses are
                    specially for people that live in western countries like US,UK,Australia,Canada or anywhere in the
                    world.</p>
                <div className="list">
                    <ul>
                        <li>Quran Courses</li>
                        <li>Quran Memorization Course</li>
                        <li>Tafsir Course</li>
                        <li>Fiqh Course</li>
                    </ul>
                    <ul>
                        <li>Tajweed Course</li>
                        <li>Hadith Course</li>
                        <li>Quran Reading Course</li>
                    </ul>
                </div>
                <Link to="/about">Read More</Link>
            </div>
            <div className="image">
                <div className="outline">
                    <h3>Online Academy</h3>
                    <img src={line} className="bismillah" alt="asdas" />
                    <img className="quran" src={quran} alt="" />
                    <div className="dotted-line"></div>
                </div>
            </div>
        </div>
    )
}

export default About
