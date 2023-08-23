import React from 'react'
import './Ways.css'
import line from "../../img/line.png"
import quran from "../../img/quran.png"

const Way = () => {
    return (
        <div class="easy-ways">
            <h3>Begin Learning</h3>
            <h1 class="heading">Quran Now in 3 Easy Steps</h1>
            <div class="lines">
                <img src={line} alt="" />
                <img src={line} alt="" />
            </div>
            <div class="ways-container">
                <div class="ways">
                    <div class="ways-card">
                        <div class="icons">
                            <i class="fa-regular fa-hand-pointer"></i>
                        </div>
                        <div class="content">
                            <h1>Click on Register Online</h1>
                            <p>Simply click on “Register Online” and a tab for online registration will open. There, enter
                                your
                                basic details such as name, residential address, and contact information. Once you are done
                                with
                                providing us theses basic credentials, your process for registration will be complete.</p>
                        </div>
                    </div>
                    <div class="ways-card">
                        <div class="icons">
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>
                        <div class="content">
                            <h1>Pick a Time for Free Trial:</h1>
                            <p>Upon receiving your request for registration, we will get in touch with you to set a time as
                                to
                                when can you take your free trial class. In addition, we will guide you about our Quran
                                teaching
                                process and tell you a little bit about our organization.</p>
                        </div>
                    </div>
                    <div class="ways-card">
                        <div class="icons">
                            <i class="fa-solid fa-book-quran"></i>
                        </div>
                        <div class="content">
                            <h1>
                                Embark On this Holy Journey with your 1st Class:</h1>
                            <p>Initiate your Quran learning process by logging in with the credentials we provide you and
                                start
                                taking your first class with our Quran teachers.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="ways-image">
                    <img class="quran" src={quran} alt="" />
                    <img src={line} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Way
