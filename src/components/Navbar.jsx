import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-yellow-500">
            humanity
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="/who-we-are"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            Who we are
          </a>
          <a
            href="/how-we-help"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            How we help
          </a>
          <a
            href="/news"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            News & stories
          </a>
        </div>

        {/* Sign In Button */}
        <div>
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
