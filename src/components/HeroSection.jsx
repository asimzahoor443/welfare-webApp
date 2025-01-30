import React from 'react';
import DecorativeImg from '../assets/decorative.png';
import ArrowArt from '../assets/ArrowArt.png';
import FamilyIcon from '../assets/familyImg.png';
const HeroSection = () => {
  return (
    <div className="bg-black min-h-screen px-6 pt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Content */}
        <div className="w-full ml-20 md:w-1/2 space-y-6 relative">
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
              className="absolute top-12 right-[45%]  transform -translate-y-1/2 w-[140px] h-[140px] "
            />
            <h1 className="text-[#22C55E] font-['Poppins'] text-6xl font-bold">
              Deservings
            </h1>
          </div>

          {/* Small Image on the right side of Need to Help */}

          {/* Description */}
          <p className="text-gray-300 font-['Poppins'] text-lg leading-relaxed max-w-xl">
            We are dedicated to supporting truly deserving families in villages
            by providing them with essential rations and financial assistance,
            ensuring they never struggle alone.
          </p>

          {/* Donate Button */}
          <button className="bg-[#F5F5F4] text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors font-medium text-base">
            Donate
          </button>
        </div>
        {/* Right side placeholder - we'll add the image later */}
        {/* Right Content */}
        <div className="w-full md:w-1/2 flex md:mt-0">
          {/* Map Image */}
          <img
            src={FamilyIcon} // Use the map image
            alt="Afghanistan Map"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
