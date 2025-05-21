
import React from 'react'
const images = [
    "/src/assets/images/UK.Avif",
    "/src/assets/images/air3.jpg",
    "/src/assets/images/air2.jpg",
    "/src/assets/images/air3.jpg",
    "/src/assets/images/ari1.jpg",
    "/src/assets/images/UK.avif",
    "/src/assets/images/air3.jpg",
    "/src/assets/images/ari1.jpg",

    
  ];
const Gallery = () => {
  return (
    <div className="py-12 px-4 w-full bg-center bg-cover"  style={{ backgroundImage: "url('/src/assets/images/air5.jpg')" }}
> 
    <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
      Explore Our Travel Gallery
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative h-60 bg-center bg-cover rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          style={{ backgroundImage: `url(${src})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
  
          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold">
              Travel {index + 1}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default Gallery