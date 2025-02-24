import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

type GalleryImage = {
  src: string;
  alt: string;
  description: string;
  orientation: 'landscape' | 'portrait';
};

type FoundationGalleryProps = {
  images: GalleryImage[];
};

const FoundationGallery = ({ images }: FoundationGalleryProps) => {
  const overlayStyles = `absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-t from-black/75 via-transparent to-transparent p-6 text-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100 backdrop-blur-sm`;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Our Foundation Journey
        </h2>

        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.3 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-14 h-[700px]"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="relative rounded-xl shadow-xl overflow-hidden aspect-[3/4] max-w-[400px] border-4 border-white"
            >
              <div className={overlayStyles}>
                <p className="text-2xl font-semibold mb-4">{image.alt}</p>
                <p className="text-lg opacity-90">{image.description}</p>
              </div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
          {/* Navigation Buttons */}
          <div className="swiper-button-next !text-white !right-10 !scale-150" />
          <div className="swiper-button-prev !text-white !left-10 !scale-150" />
        </Swiper>
      </div>
    </section>
  );
};

export default FoundationGallery;
