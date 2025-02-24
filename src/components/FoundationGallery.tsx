import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [
  { src: '/images/img1.jpg', alt: 'Event 1', type: 'landscape' },
  { src: '/images/img2.jpg', alt: 'Event 2', type: 'portrait' },
  { src: '/images/img3.jpg', alt: 'Event 3', type: 'landscape' },
  { src: '/images/img4.jpg', alt: 'Event 4', type: 'portrait' },
  { src: '/images/img5.jpg', alt: 'Event 5', type: 'portrait' },
];

const FoundationGallery = () => {
  return (
    <div className="bg-black py-10">
      <h2 className="text-3xl text-center text-yellow-500 font-semibold mb-6">
        Foundation Gallery
      </h2>
      <Swiper
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full max-w-4xl mx-auto"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className={`mx-auto object-cover rounded-xl shadow-lg ${
                image.type === 'portrait' ? 'h-96 w-auto' : 'w-full h-64'
              }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FoundationGallery;
