import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./ServicesPage.css"
import line from "../../img/line.png"
import Footer from '../Footer/Footer'

const ServicesPage = () => {
  return (
    <>
      <div className="services-container">
        <Navbar section={"our-services"} />
        <div className="main-container">
          <h1>Our Services</h1>
        </div>
      </div>
      <div className="service-main-container">
        <div className="left-side-service">
          <h3>Service</h3>
          <h1>Serving Humanity</h1>
          <img src={line} alt="" />
          <p>Al Safaa quran institute has different Quranic and Islamic courses on offer depending upon your requirements. Quran Learn Academy has got expert Quran teachers, both male and female for women and children, with fluency in the English language. These highly qualified Online Quran Tutors in UK take their students step by step to learn tajweed Quran word by word. We understand that not everyone has the same learning capability. Therefore, our Quran teachers work at a pace that matches each and every one of our student’s learning ability, enabling them to learn the recitation of Quran comprehensively.</p>
        </div>
        <div className="right-side-service">
          <img className='fixed' src="https://alsafaaquran.com/wp-content/uploads/2023/07/bg-pattern.png" alt="" />
          <img className='serive' src="https://alsafaaquran.com/wp-content/uploads/2023/07/service-contents.jpg" alt="" />
        </div>
      </div>
      <div className="services-cards">
        <div className="service-page-card">
          <img src="https://alsafaaquran.com/wp-content/uploads/2023/07/quran-1.png" alt="" />
          <h1>Learn Basic Islamic Concepts</h1>
          <p>For the purpose of making our Muslim brothers and sisters better Muslims, we have designed various courses to make you understand the teachings of Islam and the commandments of Allah (SWT). You can choose a course that you have an interest in, begin taking classes online, and apply the principles of Islam in every aspect of your life.</p>
        </div>
        <div className="service-page-card">
          <img src="https://alsafaaquran.com/wp-content/uploads/2023/07/about_us_image.jpg" alt="" />
          <h1>Quranic Courses For Children</h1>
          <p>Being a Muslim, we are expected to recite the Holy Quran properly and this is the reason why Quran Learn Academy offers various Quranic courses for kids. We offer interactive and one-on-one Quran learning classes to ensure your child can recite the holy Quran without any hesitation and understand the translation as well.</p>
        </div>
        <div className="service-page-card">
          <img src="https://alsafaaquran.com/wp-content/uploads/2023/07/memorizing_quran.png" alt="" />
          <h1>Memorizing Quran Course</h1>
          <p>Our Quran memorization course is designed for those who have a desire for Hifz but have been unable to do so due to the unavailability of competent tutors or absence of proper guidance. They can memorize the holy Quran word by word under the supervision of our skilled Quran teachers and that too, through online classes.</p>
        </div>
        <div className="service-page-card">
          <img src="https://alsafaaquran.com/wp-content/uploads/2023/07/th.jpeg" alt="" />
          <h1>Quranic Courses For Women</h1>
          <p>Women often face difficulties while going to Islamic centers or mosques to learn Quran. Therefore, Quran Learn Academy has designed various Quranic courses for females and arranged female tutors to facilitate our Muslim sisters in learning the teachings of Quran right from the comfort of their home.</p>
        </div>
        <div className="service-page-card">
          <img src="https://alsafaaquran.com/wp-content/uploads/2023/07/wp6824640-1024x768.jpg" alt="" />
          <h1>Seerat-Un-Nabi</h1>
          <p>Seerat un Nabi (the life of Prophet Muhammad). Students can explore his teachings, character, and historical events remotely. Engaging multimedia resources, interactive quizzes, and expert guidance enhance the learning experience. geographical limitations.</p>
        </div>
        <div className="service-page-card">
          <img src="https://alsafaaquran.com/wp-content/uploads/2023/07/quran_online.png" alt="" />
          <h1>Elementary Quran Reading Course</h1>
          <p>The basic Quran reading course has been designed specifically for children who do not have any prior knowledge about recitation of the holy Quran. Our experienced Online Quran Tutors in UK take them step by step through the Noorani Quaida, teaching them the pronunciation of
            Arabic alphabets</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ServicesPage
