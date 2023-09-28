import React from 'react'
import './Ways.css'
import line from "../../img/line.png"
import quran from "../../img/quran.png"

const Way = () => {
    return (
        <div className="easy-ways">
            <h3>Begin Learning</h3>
            <h1 className="heading">Quran Now in 3 Easy Steps</h1>
            <div className="lines">
                <img src={line} alt="" />
                <img src={line} alt="" />
            </div>
            <div className="ways-container">
                <div className="ways">
                    <div className="ways-card">
                        <div className="icons">
                            <i className="fa-regular fa-hand-pointer"></i>
                        </div>
                        <div className="content">
                            <h1>Click on Register Online</h1>
                            <p>Simply click on “Register Online” and a tab for online registration will open. There, enter
                                your
                                basic details such as name, residential address, and contact information. Once you are done
                                with
                                providing us theses basic credentials, your process for registration will be complete.</p>
                        </div>
                    </div>
                    <div className="ways-card">
                        <div className="icons">
                            <i className="fa-solid fa-calendar-days"></i>
                        </div>
                        <div className="content">
                            <h1>Pick a Time for Free Trial:</h1>
                            <p>Upon receiving your request for registration, we will get in touch with you to set a time as
                                to
                                when can you take your free trial class. In addition, we will guide you about our Quran
                                teaching
                                process and tell you a little bit about our organization.</p>
                        </div>
                    </div>
                    <div className="ways-card">
                        <div className="icons">
                            <i className="fa-solid fa-book-quran"></i>
                        </div>
                        <div className="content">
                            <h1>
                                Embark On this Holy Journey with your 1st Class:</h1>
                            <p>Initiate your Quran learning process by logging in with the credentials we provide you and
                                start
                                taking your first class with our Quran teachers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ways-image">
                    <img className="quran" src={quran} alt="" />
                    <img src={line} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Way
