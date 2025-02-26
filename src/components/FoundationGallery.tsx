import React from 'react';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const FoundationGallery = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleItems = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (images.length - visibleItems + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + (images.length - visibleItems + 1)) %
        (images.length - visibleItems + 1)
    );
  };

  return (
    <div className="relative bg-white p-8">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentSlide * (100 / visibleItems)}%)`,
            width: `${(images.length / visibleItems) * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-1/3 p-4 flex-shrink-0">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Optional caption */}
              {image.title && (
                <div className="mt-2 text-center">
                  <h3 className="font-medium">{image.title}</h3>
                  {image.description && (
                    <p className="text-sm text-gray-600">{image.description}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
        disabled={currentSlide === 0}
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
        disabled={currentSlide === images.length - visibleItems}
      >
        <FiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FoundationGallery;
