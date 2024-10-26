import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CalendarIcon } from "lucide-react";

const EventCard = ({ title, desc, date, location, image, images }) => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div className=" container mx-auto flex items-center justify-between">
      <div className="w-[70%] perspective-1000 relative">
        <div className="line absolute h-[3px] w-[303px] bg-[#18aeed] right-[-33.9%] top-[50%]"></div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6] to-[#3B82F6] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-[#1F2937] ring-1 ring-[#0F172A] rounded-lg leading-none flex items-center flex-col-reverse lg:flex-row gap-[20px] xl:gap-[90px] items-top justify-start space-x-6 transform transition duration-500 hover:scale-105 hover:rotate-1">
            <div className="space-y-2 flex flex-col gap-[16px]">
              <p className="text-[#F1F5F9] text-xl sm:text-3xl font-semibold">
                {title}
              </p>
              <div className=" flex flex-col gap-[8px]">
                <p className="text-[#CBD5E1] text-xs sm:text-sm xl:text-lg  max-h-[130px] overflow-y-scroll">
                  {desc}
                </p>
                <div className="flex flex-col gap-[4px]">
                  <div className="flex items-center text-[#94B8A3] text-sm sm:text-md xl:text-xl">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span>{date}</span>
                  </div>
                  <p className="text-[#CBD5E1] text-sm sm:text-md xl:text-lg">
                    {location}
                  </p>
                </div>
              </div>
              <button className="w-full py-[15px] text-sm sm:text-lg rounded-lg bg-[#1E88E5] hover:bg-[#1976D2] text-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
                Learn more
              </button>
            </div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper max-w-[180px] max-h-[180px] sm:max-w-[300px] sm:max-h-[300px] sm:min-w-[300px] sm:min-h-[300px]  xl:max-w-[360px] xl:max-h-[360px] xl:min-w-[360px] xl:min-h-[360px]"
            >
              {images?.map((image) => (
                <SwiperSlide>
                  <img
                    src={image}
                    className="w-full h-full object-cover rounded-xl"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div
        ref={sectionRef}
        className={`${
          isInView ? "in-view" : ""
        } w-[80px] transition-all duration-300 transform bg-[#1F2937] border-[1px] border-[#18aeed] h-[80px] rounded-full`}
      >
        <img
          src={image}
          alt=""
          className="w-full h-full rounded-full object-contain"
        />
      </div>
    </div>
  );
};

export default EventCard;
