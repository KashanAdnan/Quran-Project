import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Packages.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Packages = () => {
  return (
    <>
      <div className="pacakges-container">
        <Navbar section={"packages"} />
        <div className="main-container">
          <h1>Pacakges</h1>
        </div>
      </div>
      <div className="packages-main-container">
        <div className="packages-cards">
          <div className="pacakges-card">
            <div className="package-header">
              <h1>Package 1</h1>
              <p>2 Days /Week</p>
              <h2>8 Classes/Month</h2>
            </div>
            <div className="packages-center">
              <h1><span>$</span>30<sub>/ Monthly </sub></h1>
              <ul>
                <li><FontAwesomeIcon icon={faCircleCheck} /> 30 Min / Day</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Quran Reading</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Namaz / Salah</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Duas & Kalmas</li>
              </ul>
              <Link to={"/contact"}>Order Now</Link>
            </div>
          </div>
          <div className="pacakges-card">
            <div className="package-header">
              <h1>Package 2</h1>
              <p>2 Days /Week</p>
              <h2>8 Classes/Month</h2>
            </div>
            <div className="packages-center">
              <h1><span>$</span>40<sub>/ Monthly </sub></h1>
              <ul>
                <li><FontAwesomeIcon icon={faCircleCheck} /> 30 Min / Day</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Quran Reading</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Namaz / Salah</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Duas & Kalmas</li>
              </ul>
              <Link to={"/contact"}>Order Now</Link>
            </div>
          </div>
          <div className="pacakges-card">
            <div className="package-header">
              <h1>Package 3</h1>
              <p>2 Days /Week</p>
              <h2>8 Classes/Month</h2>
              <span>POPULAR</span>
            </div>
            <div className="packages-center">
              <h1><span>$</span>60<sub>/ Monthly </sub></h1>
              <ul>
                <li><FontAwesomeIcon icon={faCircleCheck} /> 30 Min / Day</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Quran Reading</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Namaz / Salah</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Duas & Kalmas</li>
              </ul>
              <Link to={"/contact"}>Order Now</Link>
            </div>
          </div>
          <div className="pacakges-card">
            <div className="package-header">
              <h1>Package 4</h1>
              <p>2 Days /Week</p>
              <h2>8 Classes/Month</h2>
            </div>
            <div className="packages-center">
              <h1><span>$</span>50<sub>/ Monthly </sub></h1>
              <ul>
                <li><FontAwesomeIcon icon={faCircleCheck} /> 30 Min / Day</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Quran Reading</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Namaz / Salah</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Duas & Kalmas</li>
              </ul>
              <Link to={"/contact"}>Order Now</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Packages
