"use client";
// ImageSlider.js
import MainSwiper from "../MainSwiper"; // Ensure the correct path
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { createContext } from "react";

const ImageSlider = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        autoplay={{ delay: 1500, pauseOnMouseEnter: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className={"my-5 home-gallery-swiper"} // Ensure class name is consistent
      >
        {/* Add multiple slides */}
        <SwiperSlide>
          <MainSwiper img={"/pictures/balonka1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSwiper img={"/pictures/balonka2.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSwiper img={"/pictures/balonka3.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSwiper img={"/pictures/balonka3.jpg"} />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </>
  );
};

export default ImageSlider;
