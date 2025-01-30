import React from 'react';
import DecorativeImg from '../assets/decorative.png';
const HeroSection = () => {
  return (
    <div className="bg-black min-h-screen px-6 pt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 relative">
          {/* Title with specific styling for each line */}
          <div className="space-y-1">
            <h1 className="text-white font-['Poppins'] text-6xl font-bold">
              Need
            </h1>
            <h1 className="text-white font-['Poppins'] text-6xl font-bold">
              to Help
            </h1>
            <img
              src={DecorativeImg}
              alt="Decorative"
              className="absolute top-12 right-80  transform -translate-y-1/2 w-[140px] h-[140px] "
            />
            <h1 className="text-[#22C55E] font-['Poppins'] text-6xl font-bold">
              Deservings
            </h1>
          </div>

          {/* Small Image on the right side of Need to Help */}

          {/* Description */}
          <p className="text-gray-300 font-['Poppins'] text-lg leading-relaxed max-w-xl">
            We are responding with emergency assistance where needed and
            supporting families who have lost their homes due to conflict.
          </p>

          {/* Donate Button */}
          <button className="bg-[#F5F5F4] text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors font-medium text-base">
            Donate
          </button>
        </div>

        {/* Right side placeholder - we'll add the image later */}
        <div className="w-full md:w-1/2">
          {/* Image content will go here */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
