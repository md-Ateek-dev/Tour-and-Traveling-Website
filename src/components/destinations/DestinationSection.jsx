import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import destinationBG from "../../assets/destinations/destinations_bg.jpg";
import cardBG from "../../assets/destinations/cardbg.png";
import Destination1 from "../../assets/destinations/img1.png";
import Destination2 from "../../assets/destinations/img2.png";
import Destination3 from "../../assets/destinations/img3.png";
import Destination4 from "../../assets/destinations/img7.png";
import Destination5 from "../../assets/destinations/img8.png";

// Destination Data
const destinations = [
  {
    img: Destination1,
    title: "Baltic Europe Estonia Latvia Lithuania",
  },
  {
    img: Destination2,
    title: "Croatia Slovenia Slovakia Hungary",
  },
  {
    img: Destination3,
    title: "Swiss Austria Italy ",
  },
  {
    img: Destination4,
    title: "Spain Portugal Morocco ",
  },
  {
    img: Destination5,
    title: "Scandinavia Midnight Sun",
  },
  {
    img: Destination1,
    title: "England Scotland Ireland Wales London",
  },
  {
    img: Destination2,
    title: "European Marvels ",
  },
];

const DestinationSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-12"
      style={{
        backgroundImage: `url(${destinationBG})`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="relative max-w-7xl mx-auto px-6 text-center text-[#244e8a]">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Choose your destination
        </h2>
        <p className="text-lg mt-2">
          Travel and explore your dream destination with us!
        </p>

        {/* Destination Swiper */}
        <div className="mt-10 ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-40 md:w-48  px-3 pt-16  mx-auto h-80"
                  style={{
                    backgroundImage: `url(${cardBG})`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={destination.img}
                    alt={destination.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-2 text-sm text-gray-700 text-center">
                    {destination.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View More Button */}
        <button className="mt-8 bg-[#244e8a] text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-900 transition">
          View More
        </button>
      </div>
    </section>
  );
};

export default DestinationSection;
