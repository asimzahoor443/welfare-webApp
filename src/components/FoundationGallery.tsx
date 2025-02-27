import React from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import images
const galleryImages = [
  '/src/assets/FoundationalGallery/5Families.jpeg',
  '/src/assets/FoundationalGallery/5FamiliesPackage.jpeg',
  '/src/assets/FoundationalGallery/RationBox.jpeg',
  '/src/assets/FoundationalGallery/MasajidCaps.jpeg',
  '/src/assets/FoundationalGallery/MasajidCaps2.jpeg',
  '/src/assets/FoundationalGallery/WaterCampaign.jpeg',
  '/src/assets/FoundationalGallery/WaterCooler.jpeg',
  '/src/assets/FoundationalGallery/QuranPak.jpeg',
  '/src/assets/FoundationalGallery/Ramadan2023.jpeg',
  '/src/assets/FoundationalGallery/Ramadan2024.jpeg',
  '/src/assets/FoundationalGallery/1Familypackage.jpeg',
  '/src/assets/FoundationalGallery/Impact.png',
  '/src/assets/FoundationalGallery/4FamiliesRationPackage.jpeg',
];

const FoundationGallery = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="container mx-auto my-10 px-4 overflow-hidden">
      {/* Custom Navigation */}
      <div className="flex justify-end gap-4 mb-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          ←
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          →
        </button>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!overflow-visible"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gray-100">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/fallback-image.jpg';
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-slide {
          opacity: 1 !important;
          transform: scale(0.95);
          transition: transform 0.3s ease;
        }

        .swiper-slide-active {
          transform: scale(1);
        }

        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default FoundationGallery;
