'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperObject } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import {
  Autoplay,
  FreeMode,
  Navigation,
  Thumbs,
} from 'swiper/modules';
import Image from 'next/image';

import { Images } from '@/data/imagenes-random/images';

// interface Props {
//   images: string[];
//   title: string;
//   className?: string;
// }

// export const ObraSlider = ({
//   images,
//   title,
//   className,
// }: Props) => {
export const ObraSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={''}>
      <Swiper
        style={
          {
            height: '600px',
            '--swiper-navigation-color': 'gray',
            '--swiper-pagination-color': 'black',
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 7000,
        }}
        speed={1500}
        loop
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className='mySwiper2'
      >
        {Images.map((image) => (
          <SwiperSlide key={image.title}>
            <Image
              src={image.src}
              height={800}
              width={1024}
              alt={image.title}
              className='object-contain'
              quality={100}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className='mySwiper'
      >
        {Images.map((image) => (
          <SwiperSlide key={image.title}>
            <Image
              src={image.src}
              height={300}
              width={300}
              alt={image.title}
              className='object-contain'
              style={{
                display: 'block',
                height: '100%',
                width: '100%',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ObraSlider;
