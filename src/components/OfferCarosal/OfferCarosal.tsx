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
    <div className="relative w-full mx-auto overflow-hidden shadow-xl h-[400px] md:h-[450px] lg:h-[500px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="relative w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Slide Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})`,backgroundSize: "cover" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/40" />
            </div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-14 text-white text-left z-10">
              <div className="border-l-4 border-l-yellow-400 ps-2">
                <p className="text-xl font-semibold text-gray-50">South East Asia</p>
                <h2 className="text-[40px] font-extrabold text-[#00aeef]">{slide.title}</h2>
              </div>
              <p className="text-lg pt-2 text-gray-300">{slide.subtitle}</p>
              <p className="text-blue-400 font-semibold mt-2 text-xl">
                {slide.days} &bull; {slide.date} &bull; from{" "}
                <span className="text-yellow-400">{slide.price}</span>
              </p>
              <button className="px-8 py-3 bg-[#00aeef] mt-5 w-fit text-white text-xl font-bold rounded-2xl shadow-lg border-2 border-yellow-300 hover:bg-blue-900 transition-all">
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
