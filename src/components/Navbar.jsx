import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#222831] px-6 py-5 font-['Poppins'] top-0 fixed w-full z-50">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Menu */}
          <div className="flex text-yellow-500 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold ">
                AwamUnNass
              </a>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#who-we-are"
                className="text-[#B9B28A] hover:text-green-500 transition-colors font-semibold"
              >
                Who we are
              </a>
              <a
                href="#how-we-help"
                className="text-[#B9B28A] hover:text-green-500 transition-colors font-semibold"
              >
                How we help
              </a>
              <a
                href="/news"
                className="text-[#B9B28A] hover:text-green-500 transition-colors font-semibold"
              >
                News & stories
              </a>
            </div>

            {/* Sign In Button */}
            <div className="hidden md:block">
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors font-semibold">
                Donate
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
            <div className="flex flex-col space-y-4">
              <a
                href="#who-we-are"
                className="text-green-400 hover:text-green-300 transition-colors font-semibold"
              >
                Who we are
              </a>
              <a
                href="#how-we-help"
                className="text-green-400 hover:text-green-300 transition-colors font-semibold"
              >
                How we help
              </a>
              <a
                href="/news"
                className="text-green-400 hover:text-green-300 transition-colors font-semibold"
              >
                News & stories
              </a>
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors font-semibold w-full">
                Donate
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${isOpen ? 'mt-48' : 'mt-0'} transition-all duration-300`}
      >
        {/* Your content goes here */}
      </div>
    </>
  );
};

export default Navbar;
