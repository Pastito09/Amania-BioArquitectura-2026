'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

interface SliderProps {
  children: React.ReactNode;
}

export const ObraSwiper = ({ children }: SliderProps) => {
  return (
    <div className='relative'>
      <div className='flex justify-evenly mb-4 md:mb-6'>
        <button className='prev text-5xl font-extrabold cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-300'>
          ←
        </button>
        <button className='next text-5xl font-extrabold cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-300'>
          →
        </button>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop
        className='w-full h-[60vh]'
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide className='h-full ' key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
