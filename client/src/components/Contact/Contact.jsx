import React from 'react'
import "./Contact.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <Navbar section={"contact-us"} />
        <div className="main-container">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="contact-main-container">
        <div className="contact-ways">
          <div className="way">
            <FontAwesomeIcon className='icon-ways' icon={faEnvelope} />
            <p>info@wasifbinasif.com</p>
          </div>
          <div className="way">
            <FontAwesomeIcon className='icon-ways' icon={faLocationDot} />
            <p>Karachi , PK</p>
          </div>
          <div className="way">
            <FontAwesomeIcon className='icon-ways' icon={faWhatsapp} />
            <p>+923162032112</p>
          </div>
        </div>
        <div className="contact-form">
          <div className="input-label">
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder='Your Name' />
          </div>
          <div className="input-label">
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder='Email Address' />
          </div>
          <div className="input-label">
            <label htmlFor="Phone">Phone</label>
            <input type="number" placeholder='Phone Number' />
          </div>
          <div className="input-label course">
            <label htmlFor="Course">Course</label>
            <select name="basic" id="Course">
              <option value="Learn Basic Islamic Concepts">Learn Basic Islamic Concepts</option>
            </select>
          </div>
          <div className="input-label packages">
            <label htmlFor="Packages">Pacakges</label>
            <select name="basic" id="Packages">
              <option value="Package 1 2 Days / Week8 Classes/Month">Package 1 2 Days / Week8 Classes/Month</option>
            </select>
          </div>
          <div className="input-label message">
            <label htmlFor="message">Messages</label>
            <textarea placeholder='Your Messages'></textarea>
          </div>
          <button>Send Message</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
