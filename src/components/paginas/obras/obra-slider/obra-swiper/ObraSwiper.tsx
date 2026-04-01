'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

interface SliderProps {
  children: React.ReactNode;
}

export const ObraSwiper = ({ children }: SliderProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
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
  );
};
