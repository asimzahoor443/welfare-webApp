'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const WelfareCarousel = () => {
  // Data for the 8 blocks
  const foundationActivities = [
    {
      id: 1,
      title: 'Electricity & Water Supply',
      image: '/src/assets/Logo.jpeg', // Replace with your PNG path
      description: 'Covering bills for deserving families.',
    },
    {
      id: 2,
      title: 'Education',
      image: '/src/assets/Education.jpg',
      description: 'Helping students with financial aid.',
    },
    {
      id: 3,
      title: 'Rashan',
      image: 'src/assets/Rashan.jpg',
      description: 'Monthly food support + Eid distributions.',
    },
    {
      id: 4,
      title: 'Medicine',
      image: '/src/assets/Medicine.jpg',
      description: 'Financial help for medicines & treatments.',
    },
    {
      id: 5,
      title: '  Donar Request',
      image: '/src/assets/DonarRequests.jpg',
      description: 'Supporting cases based on donor appeals.',
    },
    {
      id: 6,
      title: 'Financial Assistance',
      image: '/src/assets/Financial Assistance.jpg',
      description: 'Helping families with urgent needs.',
    },
    {
      id: 7,
      title: 'Water',
      image: '/src/assets/Water.jpg',
      description: 'Installing water coolers in schools & madaris.',
    },
    // Add all 8 items here...
    {
      id: 8,
      title: 'Dream Project',
      image: '/src/assets/DreamProject.jpg',
      description: 'Building a school with quality education.',
    },
  ];

  return (
    <div id="how-we-help" className="py-12 px-8 bg-black">
      <style>{`
        @media (min-width: 1024px) {
          .swiper-slide {
            transition: all 0.5s ease !important;
            opacity: 0.4 !important;
            transform: scale(0.85) !important;
          }

          .swiper-slide-active {
            opacity: 1 !important;
            transform: scale(1) !important;
            z-index: 10 !important;
          }

          .swiper-slide-next,
          .swiper-slide-prev {
            opacity: 0.6 !important;
            transform: scale(0.9) !important;
          }
        }
      `}</style>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="h-[400px]" // Adjust height as needed
      >
        {foundationActivities.map((activity) => (
          <SwiperSlide key={activity.id}>
            <div className="h-full bg-[#E2E2B6] rounded-xl shadow-lg p-6 mx-2 hover:shadow-xl transition-all cursor-pointer flex flex-col">
              {/* Title */}
              <div
                className="flex-1 mb-4 flex items-center justify-center
              
              "
              >
                <h3 className="text-xl font-bold mb-4 text-[#222831]">
                  {activity.title}
                </h3>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-center justify-center mb-4">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="max-h-[200px] w-auto object-contain" // Adjust image size
                />
              </div>

              {/* Description */}
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[#222831] text-center font-medium leading-relaxed px-2 font-[Poppins]">
                  {activity.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WelfareCarousel;
