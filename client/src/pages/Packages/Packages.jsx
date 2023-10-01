import React, {useEffect, useState } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import "./Packages.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from "axios"

const Packages = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [user, setUser] = useState({})
  const getData = () => {
    axios.get("http://localhost:3000/api/v1/profile/" + cookies?.token).then((res) => {
      setUser(res.data)
    }).catch((err) => {
      console.log("Logout");
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className="pacakges-container">
        <Navbar section={"packages"} user={user} />
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
              <p>3 Days /Week</p>
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
              <p>5 Days /Week</p>
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
              <p>Weekend Days /Week</p>
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
