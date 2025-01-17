import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import slide1 from "../assets/images/slider1.png";
import slide2 from "../assets/images/slider2.png";
import slide3 from "../assets/images/slider3.png";

export default function Slider() {
  return (
    <>
      <div className="main-slider">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Sử dụng custom pagination
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="Slide 1" width="250px" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="Slide 2" width="250px" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="Slide 3" width="250px" />
          </SwiperSlide>
        </Swiper>
        <div className="custom-pagination"></div>
      </div>
    </>
  );
}
