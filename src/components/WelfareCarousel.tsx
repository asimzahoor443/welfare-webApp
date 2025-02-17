'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const WelfareCarousel = () => {
  // Data for the 8 blocks
  const foundationActivities = [
    {
      id: 1,
      title: 'Electricity & Water Supply',
      image: '/src/assets/Logo.jpeg', // Replace with your PNG path
      description:
        'Providing uninterrupted electricity and clean water to underserved communities.',
    },
    {
      id: 2,
      title: 'Education',
      image: '/src/assets/Education.jpg',
      description:
        'Building schools and offering scholarships for underprivileged children.',
    },
    {
      id: 3,
      title: 'Rashan',
      image: 'src/assets/Rashan.jpg',
      description:
        'Building schools and offering scholarships for underprivileged children.',
    },
    {
      id: 4,
      title: 'Medicine',
      image: '/src/assets/Medicine.jpg',
      description:
        'Building schools and offering scholarships for underprivileged children.',
    },
    {
      id: 5,
      title: '  Donar Request',
      image: '/src/assets/DonarRequests.jpg',
      description:
        'Building schools and offering scholarships for underprivileged children.',
    },
    {
      id: 6,
      title: 'Financial Assistance',
      image: '/src/assets/Financial Assistance.jpg',
      description:
        'Building schools and offering scholarships for underprivileged children.',
    },
    {
      id: 7,
      title: 'Water',
      image: '/src/assets/Water.jpg',
      description:
        'Building schools and offering scholarships for underprivileged children.',
    },
    // Add all 8 items here...
    {
      id: 8,
      title: 'Dream Project',
      image: '/src/assets/DreamProject.jpg',
      description:
        'Distributing free copies of the Quran and organizing religious education.',
    },
  ];

  return (
    <div className="py-12 px-8 bg-black">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={30}
        className="h-[400px]" // Adjust height as needed
      >
        {foundationActivities.map((activity) => (
          <SwiperSlide key={activity.id}>
            <div className="h-full bg-[#E2E2B6] rounded-xl shadow-lg p-6 mx-2 hover:shadow-xl transition-all cursor-pointer flex flex-col">
              {/* Title */}
              <div className="flex-1 mb-4 flex items-center justify-center">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
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
                <p className="text-gray-600 text-center text-sm leading-relaxed px-2">
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
