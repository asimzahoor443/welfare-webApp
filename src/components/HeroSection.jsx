import React from 'react';
import { motion } from 'framer-motion';
import DecorativeImg from '/decorative.png';
// import ArrowArt from '../assets/ArrowArt.png';
import FamilyIcon from '/familyImg.png';
const HeroSection = () => {
  return (
    <div className="bg-black min-h-screen px-6 pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Content */}
        <motion.div
          className="w-full ml-20 md:w-1/2 space-y-6 relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Title with specific styling for each line */}
          <div className="space-y-1">
            <h1 className="text-white font-['Poppins'] text-6xl font-bold sm:text-5xl md:text-6xl">
              Need
            </h1>
            <h1 className="text-white font-['Poppins'] text-6xl font-bold sm:text-5xl md:text-6xl">
              to Help
            </h1>
            <img
              src={DecorativeImg}
              alt="Decorative"
              className="absolute top-12 right-[30%] sm:right-[35%] md:hidden lg:block transform -translate-y-1/2 w-[140px] h-[140px] sm:w-[140px] sm:h-[140px] md:w-[140px] md:h-[140px]"
            />
            <h1 className="text-[#22C55E] font-['Poppins'] text-6xl font-bold sm:text-5xl md:text-6xl">
              Deservings
            </h1>
          </div>

          {/* Small Image on the right side of Need to Help */}

          {/* Description */}
          <p className="text-gray-300 font-['Poppins'] sm:text-lg text-lg leading-relaxed max-w-xl mr-2">
            We are dedicated to supporting truly deserving families in villages
            by providing them with essential rations and financial assistance,
            ensuring they never struggle alone.
          </p>

          {/* Donate Button */}
          <button className="bg-[#F5F5F4] text-black px-8 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-gray-200 transition-colors font-medium text-base">
            Donate
          </button>
        </motion.div>
        {/* Right side placeholder - we'll add the image later */}
        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Family Image */}
          <img
            src={FamilyIcon} // Use the map image
            alt="Afghanistan Map"
            className="w-full md:max-w-md max-w-sm"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
