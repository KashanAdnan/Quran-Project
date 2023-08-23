import React from 'react'
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import './Home.css'
import Services from '../Services/Services';
import Student from '../Students/Student';
import Footer from '../Footer/Footer';
import Way from '../Ways/Way';
import axios from 'axios';


const Home = () => {
    axios.get("http://localhost:3000/api/v1/me").then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
    return (
        <>
            <div className="container">
                <Navbar />
                <div className="main-container">
                    <img src="https://alsafaaquran.com/wp-content/uploads/2023/07/dividers-1.png" alt='' />
                    <img className="bismillah" src="https://alsafaaquran.com/wp-content/uploads/2023/07/bsml-txt.png" />
                    <h1>“WELCOME TO WASIF BIN ASIF QURAN INSTITUTE”</h1>
                    <p>
                        Learn Qur'an the right way with well-versed tutors
                        who have years of experience in teaching.
                    </p>
                    <h3>We offer free trial online classes anytime.Urdu and English language.
                        Duration of class: 30 min</h3>
                    <a href="">Request Demo Class <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
            <About />
            <Services />
            <Student />
            <Way />
            <Footer />
        </>
    )
}

export default Home
