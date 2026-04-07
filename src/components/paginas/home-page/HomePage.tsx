'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { Autoplay, EffectFade } from 'swiper/modules';

const positionClasses: Record<string, string> = {
  'left-top': 'items-start justify-start text-left',
  'left-center': 'items-start justify-center text-left ps-12',
  'left-bottom': 'items-start justify-end text-left',

  'center-top': 'items-center justify-start text-center pt-4',
  'center-center': 'items-center justify-center text-center',
  'center-bottom': 'items-center justify-end text-center',

  'right-top': 'items-end justify-start text-right',
  'right-center': 'items-end justify-center text-right pe-6',
  'right-bottom': 'items-end justify-end text-right',
};

interface SlideProps {
  img: string;
  description: string;
  position: string;
  textColor: string;
}

const slides: SlideProps[] = [
  {
    img: '/Umepay_Acacias/acacias6.jpg',
    description:
      'HOGARES SALUDABLES PARA UNA VIDA SANA Y EN CONTACTO CON LA NATURALEZA',
    position: 'right-center',
    textColor: 'text-white',
  },
  {
    img: '/Umepay_Aldea/aldea20.jpg',
    description: 'MATERIALES NATURALES PARA TU CONFORT Y BIENESTAR',
    position: 'left-center',
    textColor: 'text-white',
  },
  {
    img: '/San_Jose/sanjose3.jpg',
    description:
      'DISEÑO SUSTENTABLE EFICIENCIA ENERGÉTICA CUIDANDO LOS RECURSOS NATURALES',
    position: 'center-top',
    textColor: 'text-black',
  },
];

export const HomePage = () => {
  return (
    <div className='relative w-full h-[65vh] md:h-[85vh] px-0.5'>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={2000}
        effect='fade'
        loop
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        className='w-full h-full swiper-custom'
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className='relative w-full h-full'>
              {/* Imagen de fondo */}
              <Image
                src={slide.img}
                alt={slide.description}
                fill
                quality={100}
                className='md:object-fit object-cover h-full w-full'
                priority={i === 0}
              />

              {/* Overlay oscuro */}
              <div className='absolute inset-0 bg-black/10 rounded-md z-10' />

              {/* Texto */}
              <div
                className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 py-1 ${
                  positionClasses[slide.position]
                } ${slide.textColor}`}
              >
                <p className='mt-4 text-2xl md:text-5xl max-w-xl text-center shadow-lg'>
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HomePage;
