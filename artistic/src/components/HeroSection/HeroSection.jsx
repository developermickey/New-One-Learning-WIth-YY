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
          <div className="bg-[url(./1.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="pl-24">
              <p className="text-lg text-white pb-5">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="text-6xl text-white text-left w-full pb-8">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./2.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="pl-24">
              <p className="text-lg text-black pb-5">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="text-6xl text-black text-left w-full pb-8">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./3.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="pl-24">
              <p className="text-lg text-white pb-5">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="text-6xl text-white text-left w-full pb-8">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./1.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="pl-24">
              <p className="text-lg text-white pb-5">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="text-6xl text-white text-left w-full pb-8">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./2.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="pl-24">
              <p className="text-lg text-black pb-5">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="text-6xl text-black text-left w-full pb-8">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(./3.jpg)] w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-start text-left">
            <div className="pl-24">
              <p className="text-lg text-white pb-5">
                CLEAN BEAUTY • CRUELTY FREE
              </p>
              <h1 className="text-6xl text-white text-left w-full pb-8">
                Enhance Your
                <br />
                Natural Beauty
              </h1>
              <button className="py-4 px-8 bg-[#9ea18e] text-white rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroSection;
