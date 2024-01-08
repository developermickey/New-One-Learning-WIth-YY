import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Hero.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function HeroSection() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="bg-[url(./1.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./2.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./3.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./1.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./2.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./3.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroSection;
