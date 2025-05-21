import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import heroImg from '../../assets/bredcrubs/bredcrub.png'
import destination1 from '../../assets/destinations/img1.png'
import destination2 from '../../assets/destinations/img2.png'
import destination3 from '../../assets/destinations/img3.png'
import destination4 from '../../assets/destinations/img7.png'
import destination5 from '../../assets/destinations/img8.png'

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-left text-left text-white px-6 ps-44 pt-32">
        <h2 className="text-2xl font-bold uppercase tracking-widest">Tropical Island</h2>
        <h1 className="text-6xl font-extrabold">Trip to Paradise</h1>
        <p className="mt-4 max-w-2xl text-lg">
          "Traveling – it leaves you speechless, then turns you into a storyteller."
        </p>

        {/* Read More Button */}
        <button className="mt-6 mb-3 px-6 py-3 w-fit bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
          Read More
        </button>
      </div>

      {/* Image Gallery Slider */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-3/4">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true} 
          modules={[Autoplay]} 
        >
          <SwiperSlide>
            <img src={destination1} className="rounded-xl" alt="Beach" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={destination2} className="rounded-xl" alt="Island" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={destination3} className="rounded-xl" alt="Travel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={destination4} className="rounded-xl" alt="Travel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={destination5} className="rounded-xl" alt="Travel" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
