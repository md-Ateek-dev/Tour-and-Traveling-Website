import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const OfferCarousel: React.FC = () => {
  const slides = [
    {
      img: "src/assets/images/ari1.jpg",
      title: "Hong Kong Macao Shenzhen",
      subtitle: "Hong Kong Shenzhen Macao",
      days: "7 Days",
      date: "19 April",
      price: "₹1,67,000",
    },
    {
      img: "src/assets/images/UAE.avif",
      title: "Saudi Arabia - Umrah",
      subtitle: "Explore Saudi Arabia beauty",
      days: "5 Days",
      date: "25 May",
      price: "₹1,20,000",
    },
    {
      img: "src/assets/images/Lucknow.avif",
      title: "Thailand - Bangkok & Phuket",
      subtitle: "Bangkok & Phuket Tour",
      days: "6 Days",
      date: "10 June",
      price: "₹1,50,000",
    },
    {
      img: "src/assets/images/air4.avif",
      title: "Russia - Moscow & St. Petersburg",
      subtitle: "Russia Beauty",
      days: "6 Days",
      date: "10 June",
      price: "₹1,50,000",
    },
  ];

  return (
    <div className="relative w-full mx-auto overflow-hidden shadow-xl h-[400px] sm:h-[420px] md:h-[450px] lg:h-[500px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-start px-5 sm:px-10 md:px-16 text-white z-10">
              <div className="border-l-4 border-yellow-400 pl-3">
                <p className="text-base sm:text-lg md:text-xl font-medium">South East Asia</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{slide.title}</h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg mt-2 text-gray-300">{slide.subtitle}</p>
              <p className="text-sm sm:text-base md:text-xl text-blue-400 font-semibold mt-2">
                {slide.days} &bull; {slide.date} &bull; from{" "}
                <span className="text-yellow-400">{slide.price}</span>
              </p>
              <button className="mt-4 px-6 py-2 sm:px-8 sm:py-3 bg-[#00aeef] text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl shadow-md border-2 border-yellow-300 hover:bg-blue-800 transition-all">
                Book Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferCarousel;
