import React, { useRef } from 'react'
import "./Contact.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { toast, Toaster } from "react-hot-toast"
import emailjs from '@emailjs/browser';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6z2p40e",
        "template_7onh4w4",
        form.current,
        "yX22SMW2_Fw3DgS9G"
      )
      .then(
        (result) => {
          toast.success("Email Send To Wasif Bin Asif!")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
        <form onSubmit={sendEmail} ref={form} className="contact-form">
          <div className="input-label">
            <label htmlFor="Name">Name</label>
            <input name='name' type="text" placeholder='Your Name' />
          </div>
          <div className="input-label">
            <label htmlFor="Email">Email</label>
            <input name='email' type="email" placeholder='Email Address' />
          </div>
          <div className="input-label">
            <label htmlFor="Phone">Phone</label>
            <input name='number' type="number" placeholder='Phone Number' />
          </div>
          <div className="input-label course">
            <label htmlFor="Course">Course</label>
            <select name="course" id="Course">
              <option value="Learn Basic Islamic Concepts">Learn Basic Islamic Concepts</option>
              <option value="Quranic Courses For Children">Quranic Courses For Children</option>
              <option value="Memorizing Quran Course">Memorizing Quran Course</option>
              <option value="Quranic Courses For Women">Quranic Courses For Women</option>
              <option value="Seerat-Un-Nabi">Seerat-Un-Nabi</option>
              <option value="Elementary Quran Reading Course">Elementary Quran Reading Course</option>
            </select>
          </div>
          <div className="input-label packages">
            <label htmlFor="Packages">Pacakges</label>
            <select name="packages" id="Packages">
              <option value="Package 1 2 Days / Week8 Classes/Month">Package 1 2 Days / Week8 Classes/Month</option>
              <option value="Package 2 3 Days /Week 8 Classes/Month">Package 2 3 Days /Week 8 Classes/Month</option>
              <option value="Pakage 3 5 Days /Week 8 Classes/Month">Pakage 3 5 Days /Week 8 Classes/Month</option>
              <option value="Package 4 Weekend Days /Week 8 Classes/Month">Package 4 Weekend Days /Week 8 Classes/Month</option>
            </select>
          </div>
          <div className="input-label message">
            <label htmlFor="message">Messages</label>
            <textarea name='message' placeholder='Your Messages'></textarea>
          </div>
          <button>Send Message</button>
        </form>
      </div>
      <Footer />
      <Toaster className="toast" />
    </>
  )
}

export default Contact
