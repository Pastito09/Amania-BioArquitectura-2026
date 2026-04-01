'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import './slider.css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

interface Images {
  url: string;
  title: string;
}

const images: Images[] = [
  {
    url: '/interiorCasa.jpeg',
    title: 'casa x dentro',
  },
  {
    url: '/mesaYTecho.png',
    title: 'Foto panoramica interior de la casa',
  },
  {
    url: '/techoCasa.jpeg',
    title: 'techo de la casa',
  },
];

export const HomePageSlider = () => {
  return (
    <div className={''}>
      <Swiper
        autoplay={{
          delay: 5500,
        }}
        speed={1000}
        loop
        style={{
          width: '100wh',
          // height: '800px',
        }}
        modules={[Autoplay]}
        className='swiper-custom'
      >
        {images.map((image) => (
          <SwiperSlide key={image.title}>
            <Image
              src={image.url}
              height={900}
              width={900}
              alt={image.title}
              className='object-contain object-top p-1 md:p-0'
              quality={100}
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageSlider;
