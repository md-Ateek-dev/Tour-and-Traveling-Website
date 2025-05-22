import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import heroImg from '../../assets/bredcrubs/bredcrub.png';
import destination1 from '../../assets/destinations/img1.png';
import destination2 from '../../assets/destinations/img2.png';
import destination3 from '../../assets/destinations/img3.png';
import destination4 from '../../assets/destinations/img7.png';
import destination5 from '../../assets/destinations/img8.png';

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col text-white px-6 md:ps-44 pt-24 md:pt-32 text-left items-start">
        <h2 className="text-lg md:text-2xl font-bold uppercase tracking-widest">
          Tropical Island
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Trip to Paradise
        </h1>
        <p className="mt-4 max-w-xl text-sm md:text-lg">
          "Traveling – it leaves you speechless, then turns you into a storyteller."
        </p>

        <button className="mt-6 mb-3 px-6 py-3 w-fit bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
          Explore More
        </button>
      </div>

      {/* Image Gallery Slider */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] md:w-3/4">
        <Swiper
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src={destination1} className="rounded-xl w-80" alt="Beach" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={destination2} className="rounded-xl w-80" alt="Island" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={destination3} className="rounded-xl w-80" alt="Travel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={destination4} className="rounded-xl w-80" alt="Travel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={destination5} className="rounded-xl w-80" alt="Travel" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
