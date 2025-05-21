import React from "react";
import TourcardImg1 from '../../assets/tourcards/img1.png';
import TourcardImg2 from '../../assets/tourcards/img2.png';
import TourcardImg3 from '../../assets/tourcards/img3.png';
import TourcardImg4 from '../../assets/tourcards/img4.png';
import TourcardImg5 from '../../assets/tourcards/img5.png';
import TourcardImg6 from '../../assets/tourcards/img6.png';
import TourcardImg7 from '../../assets/tourcards/img7.png';
import TourcardImg8 from '../../assets/tourcards/img8.png';
import DepartureIcons from '../../assets/card_icons/departure.png';
import TravelIcons from '../../assets/card_icons/travel.png';

const tours = [
  { img: TourcardImg1, title: "Jammu and Kashmir", tours: 42, guests: 64269, departures: 260 },
  { img: TourcardImg2, title: "Sikkhim Darjeeling", tours: 15, guests: 18063, departures: 53 },
  { img: TourcardImg3, title: "North East", tours: 15, guests: 13846, departures: 35 },
  { img: TourcardImg4, title: "Kerala", tours: 18, guests: 50647, departures: 19 },
  { img: TourcardImg5, title: "Europe", tours: 156, guests: 88455, departures: 484 },
  { img: TourcardImg6, title: "America", tours: 49, guests: 12404, departures: 49 },
  { img: TourcardImg7, title: "South East Asia", tours: 75, guests: 136509, departures: 180 },
  { img: TourcardImg8, title: "Australia New Zealand", tours: 41, guests: 12595, departures: 38 },
];

const TourCardsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="w-full gap-2 border-4 border-blue-600 rounded-2xl p-2 shadow-md text-center relative"
            >
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-48 object-cover rounded-3xl"
              />
              <div className="tour-section-card bg-blue-400 px-4 py-1 rounded-xl mt-2">
                <p className="text-xl font-semibold text-white">{tour.title}</p>
              </div>
              <div className="mt-5 flex justify-between items-center">
                <div className="flex items-center gap-1 text-gray-700">
                  <img src={TravelIcons} className="h-7" />
                  <div className="flex flex-col">
                    <span className="text-md font-semibold">{tour.tours}</span>
                    <span className="text-[10px] font-semibold">Tours</span>
                  </div>
                </div>
                <div>
                  <p className="text-[28px] font-semibold text-gray-900">{tour.guests}</p>
                  <p className="text-xs text-gray-500">Guest Travelled</p>
                </div>
                <div className="flex items-center gap-1 text-gray-700">
                  <div className="flex flex-col">
                    <span className="text-md font-semibold">{tour.departures}</span>
                    <span className="text-[10px] font-semibold">Departures</span>
                  </div>
                  <img src={DepartureIcons} className="h-7" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCardsSection;
