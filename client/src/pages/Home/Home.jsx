import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import "./Home.css";
import Services from "../../components/Services/Services";
import Student from "../../components/Students/Student";
import Footer from "../../components/Footer/Footer";
import Way from "../../components/Ways/Way";
import { Link } from "react-router-dom";
import { UserContext, UserContextProvider } from "../../../context/userContext";
const Home = () => {
  return (
    <>
      <UserContextProvider>
        <div className="container">
          <Navbar section={"home"} />
          <div className="main-container">
            <img
              src="https://alsafaaquran.com/wp-content/uploads/2023/07/dividers-1.png"
              alt=""
            />
            <img
              className="bismillah"
              src="https://alsafaaquran.com/wp-content/uploads/2023/07/bsml-txt.png"
            />
            <h1>“WELCOME TO WASIF BIN ASIF QURAN INSTITUTE”</h1>
            <p>
              Learn Qur'an the right way with well-versed tutors who have years
              of experience in teaching.
            </p>
            <h3>
              We offer free trial online classes anytime.Urdu and English
              language. Duration of class: 30 min
            </h3>
            <Link to="/contact">
              Request Demo Class{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
        <About />
        <Services />
        <Student />
        <Way />
        <Footer />
      </UserContextProvider>
    </>
  );
};

export default Home;
