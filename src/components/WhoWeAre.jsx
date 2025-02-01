import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="bg-black w-full py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center h-full">
        {/* Left Side - Golden Rectangle with "About Us" */}
        <div className="w-full md:w-1/3 flex justify-center items-center h-full">
          {/* Vertical Layout for Desktop */}
          <div className="hidden md:flex bg-[#D4AF37] h-96 w-24 flex-col items-center justify-center space-y-2 p-8 rounded-full">
            <span className="text-black text-4xl font-bold">A</span>
            <span className="text-black text-4xl font-bold">B</span>
            <span className="text-black text-4xl font-bold">O</span>
            <span className="text-black text-4xl font-bold">U</span>
            <span className="text-black text-4xl font-bold">T</span>
            <div className="h-8"></div> {/* Space between "ABOUT" and "US" */}
            <span className="text-black text-4xl font-bold">U</span>
            <span className="text-black text-4xl font-bold">S</span>
          </div>

          {/* Horizontal Layout for Mobile/Tablet */}
          <div className="md:hidden bg-[#D4AF37] py-4 px-8 rounded-lg">
            <h2 className="text-black text-4xl font-bold text-center">
              ABOUT US
            </h2>
          </div>
        </div>

        {/* Right Side - Paragraph */}
        <div className="w-full md:w-2/3 justify-center flex items-center h-full px-6 md:px-12 mt-8 md:mt-0">
          <p className="text-gray-300 text-lg leading-relaxed">
            Since <span className="text-[#D4AF37]">2016</span>, Awam-un-Nass
            Khidmat Foundation has been dedicated to supporting deserving
            village families through essential Ration (Food Assistance),
            Education, and Water Aid. Now in our 10th year, we continue to serve
            those in need with unwavering commitment. Our foundation stands on
            three core pillars: <br />{' '}
            <span className="text-[#D4AF37]">–Ration Assistance</span> <br />
            <span className="text-[#D4AF37]">
              –Educational Support
            </span> <br /> <span className="text-[#D4AF37]">–Water </span>
            <br /> This mission is made possible by a dedicated team of
            volunteers, donors, and management who work selflessly to uplift
            struggling families. May Allah Almighty bless our efforts and enable
            us to continue being a source of relief and support for those in
            need. Ameen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
