"use client";
// ImageSlider.js
import MainSwiper from "../MainSwiper"; // Ensure the correct path
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles

const ImageSlider = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"} // Use coverflow effect
        grabCursor={false} // Set to false to remove the grabbing cursor
        centeredSlides={true}
        loop={true}
        slidesPerView={1} // Show one slide at a time for full screen
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className={"my-5 home-gallery-swiper"} // Ensure class name is consistent
        style={{}} // Full screen
      >
        {/* Add multiple slides */}
        <SwiperSlide>
          <MainSwiper img={"/pictures/swiper1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSwiper img={"/pictures/swiper2.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSwiper img={"/pictures/swiper3.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSwiper img={"/pictures/swiper4.jpg"} />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </>
  );
};

export default ImageSlider;
