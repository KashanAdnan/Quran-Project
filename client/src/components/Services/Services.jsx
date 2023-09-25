import line from '../../img/line.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Services.css'
import { faBookQuran, faPeopleCarryBox, faMosque } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div className="service-container">
            <h3>Our Services</h3>
            <h1>Serving Humanity</h1>
            <img src={line} alt="" />
            <div className="services">
                <div className="service-card">
                    <FontAwesomeIcon className='icon' icon={faBookQuran} />
                    <h3>Learn Basic Islamic Concepts</h3>
                    <p>For the purpose of making our Muslim brothers and sisters better Muslims, we have designed various
                        courses to make you understand the teachings of Islam and the commandments of Allah (SWT). You can
                        choose a course that you have an interest in, begin taking classes online, and apply the principles
                        of Islam in every aspect of your life.</p>
                    <Link to={"/services"}>Read More</Link>
                </div>
                <div className="service-card">
                    <FontAwesomeIcon className='icon' icon={faMosque} />
                    <h3>Quranic Courses For Children</h3>
                    <p>Being a Muslim, we are expected to recite the Holy Quran properly and this is the reason why Quran
                        Learn Academy offers various Quranic courses for kids. We offer interactive and one-on-one Quran
                        learning classes to ensure your child can recite the holy Quran without any hesitation and
                        understand the translation
                        as well.</p>
                    <Link to={"/services"}>Read More</Link>
                </div>
                <div className="service-card">
                    <FontAwesomeIcon className='icon' icon={faPeopleCarryBox} />
                    <h3>Memorizing Quran Course</h3>
                    <p>Our Quran memorization course is designed for those who have a desire for Hifz but have been unable
                        to do so due to the unavailability of competent tutors or absence of proper guidance. They can
                        memorize the holy Quran word by word under the supervision of our skilled Quran teachers and that
                        too, through
                        online classes.

                    </p>
                    <Link to={"/services"}>Read More</Link>
                </div>
                <div className="service-card">
                    <FontAwesomeIcon className='icon' icon={faBookQuran} />
                    <h3>Learn Basic Islamic Concepts</h3>
                    <p>For the purpose of making our Muslim brothers and sisters better Muslims, we have designed various
                        courses to make you understand the teachings of Islam and the commandments of Allah (SWT). You can
                        choose a course that you have an interest in, begin taking classes online, and apply the principles
                        of Islam in every aspect of your life.</p>
                    <Link to={"/services"}>Read More</Link>
                </div>
                <div className="service-card">
                    <FontAwesomeIcon className='icon' icon={faMosque} />
                    <h3>Quranic Courses For Children</h3>
                    <p>Being a Muslim, we are expected to recite the Holy Quran properly and this is the reason why Quran
                        Learn Academy offers various Quranic courses for kids. We offer interactive and one-on-one Quran
                        learning classes to ensure your child can recite the holy Quran without any hesitation and
                        understand the translation
                        as well.</p>
                    <Link to={"/services"}>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Services
