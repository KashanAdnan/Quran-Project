import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import line from "../../img/line.png"
import "./Student.css"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Student = () => {
  return (
    <div class="student-says">
      <h3>What Our</h3>
      <h1 class="heading">Students Says</h1>
      <img src={line} alt=""/>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div class="students-container">
              <p><i>
                "Enrolling in the Al Safaa quran institute was the best decision I made. The interactive classes, comprehensive curriculum, and supportive community have helped me grow spiritually and intellectually."
              </i>
              </p>
              <img src="https://alsafaaquran.com/wp-content/uploads/2023/07/arabic-businessman-traditional-wear-sitting-table-with-laptop-computer-happy-positive-smiling-showing-thumbs-up-working-office-min-scaled.jpg"
                alt="" />
              <h1>Hamzah</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="students-container">
              <p><i>
                "I highly recommend the Al Safaa quran institute. Their dedicated teachers provide
                personalized
                guidance, fostering a nurturing environment that enhances both my knowledge and love for
                the
                Quran."
              </i>
              </p>
              <img src="https://alsafaaquran.com/wp-content/uploads/2023/07/manaff.jpg"
                alt="" />
              <h1>Aliful Hamzah</h1>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Student
