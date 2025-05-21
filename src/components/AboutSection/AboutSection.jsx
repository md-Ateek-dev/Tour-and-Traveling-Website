
import React from "react";

const AboutSection = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-[url('src/assets/images/air4.avif')] bg-cover bg-center text-white h-[60vh] flex items-center justify-center">
        <div className="bg-white bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-black">About Us</h1>
          <p className="mt-4 text-lg ">Explore the world with comfort and confidence</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
        <p className="text-lg leading-relaxed text-center">
          At <strong>WanderWorld Travels</strong>, we are passionate about helping people discover new places.
          From personalized tour packages to 24/7 support, we make sure your journey is smooth, exciting, and memorable.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p>
              To provide extraordinary travel experiences that create memories of a lifetime.
              We make travel planning simple and stress-free.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p>
              To be the most trusted travel partner that inspires people to explore the world with ease and excitement.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            "Domestic & International Tours",
            "Customized Packages",
            "Flight & Hotel Bookings",
            "Visa Assistance",
            "Honeymoon & Group Tours",
            "24x7 Customer Support",
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 px-4">
          {[
            "✔️ Expert Travel Consultants",
            "✔️ Best Price Guarantee",
            "✔️ 1000+ Happy Clients",
            "✔️ Quick Response Team",
          ].map((reason, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition"
            >
              {reason}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white text-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Ready to Start Your Journey?</h2>
        <p className="mb-6 text-lg text-black">Contact us today and let us plan your perfect trip!</p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutSection;
