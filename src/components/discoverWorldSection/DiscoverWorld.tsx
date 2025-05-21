import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { HiPhone } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import imageDemo1 from "../../assets/destinations/img1.png";

// Sample slides data
const slides = [
    {
        image: imageDemo1,
        title: "Paris, France",
        description: "Experience the beauty of the Eiffel Tower and more.",
        duration: "7 Days / 6 Nights",
    },
    {
        image: imageDemo1,
        title: "Santorini, Greece",
        description: "Breathtaking sunsets and blue domes await you.",
        duration: "5 Days / 4 Nights",
    },
    {
        image: imageDemo1,
        title: "Maldives",
        description: "Enjoy pristine beaches and luxurious resorts.",
        duration: "4 Days / 3 Nights",
    },
];

const DiscoverWorld: React.FC = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto py-10 px-6">
            {/* Left Side - Image Carousel */}
            <div className="relative w-full lg:w-1/2">
                {/* Custom Navigation Buttons */}
                <button
                    ref={prevRef}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 z-10"
                >
                    <FaChevronLeft className="w-5 h-5" />
                </button>

                <button
                    ref={nextRef}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 z-10"
                >
                    <FaChevronRight className="w-5 h-5" />
                </button>

                <Swiper
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }}
                    modules={[Navigation, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="rounded-xl shadow-lg"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-[400px] object-cover rounded-xl"
                            />
                            <div className="absolute bottom-0 left-0 w-full text-yellow-400 text-sm font-semibold bg-black bg-opacity-50 p-3 rounded-b-xl text-center">
                                <h3 className="text-lg text-yellow-300">{slide.title}</h3>
                                <p className="text-white">{slide.description}</p>
                                <p className="text-white font-bold">{slide.duration}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Right Side - Text and Call to Action */}
            <div className="w-full lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 ">
                    Discover the World, <br />
                    specially curated for you!
                </h1>
                <p className="text-gray-600 mt-4 text-xl text-justify">
                    Our exclusive customized holidays division can cater to every travel
                    need: hotel, air tickets, VISA, sightseeing, transfers, or the entire
                    package, all designed keeping in mind your interests!
                </p>
                <p className="font-semibold text-lg text-gray-800 mt-3 text-justify">
                    Tell us what you want, and we will design it for you.
                </p>
                {/* Call to Action */}
                <div className="mt-6 flex items-center">
                    <button className="px-8 py-3 bg-[#00aeef] text-white text-xl font-bold rounded-2xl shadow-lg border-2 border-yellow-300 hover:bg-blue-600 transition-all">
                        Enquiry Now
                    </button>
                    <span className="ml-4 flex items-center text-gray-700 font-bold text-xl">
                        <HiPhone className="w-5 h-5 text-blue-600 mr-2" />
                        0522 – 4072275
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DiscoverWorld;
