import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const galleryImages = [
  '/FoundationalGallery/5Families.jpeg',
  '/FoundationalGallery/5FamiliesPackage.jpeg',
  '/FoundationalGallery/Ramadan2024.jpeg',
  '/FoundationalGallery/4FamiliesRationPackage.jpeg',
  '/FoundationalGallery/RationBox.jpeg',
];

const FoundationGallery = () => {
  return (
    <div
      id="gallery"
      className="container mx-auto my-10 bg-black px-4 relative"
    >
      {/* Header */}
      <h2 className="text-4xl font-bold text-[#22C55E] text-center mb-8 font-poppins">
        Foundation Gallery
      </h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        className="w-full relative group"
      >
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between z-10">
          <button className="custom-prev bg-[#0D4715] text-[#000000] hover:bg-white p-2 rounded-full shadow-lg ml-2 transition-all opacity-0 group-hover:opacity-100">
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button className="custom-next bg-[#0D4715] text-[#000000] hover:bg-white p-2 rounded-full shadow-lg mr-2 transition-all opacity-0 group-hover:opacity-100">
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>

        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className=" object-cover"
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-slide {
          opacity: 1 !important;
          transition: transform 0.3s ease;
        }

        .swiper-button-disabled {
          opacity: 0.3 !important;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .aspect-video {
            aspect-ratio: 3/2;
          }
        }
      `}</style>
    </div>
  );
};

export default FoundationGallery;
