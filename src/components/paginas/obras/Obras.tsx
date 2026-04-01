import { ObraSwiper } from './obra-slider/obra-swiper/ObraSwiper';
import ObraCard from './ObraCard';
import { ObraFondoTexto } from './ObraFondoTexto';
import { SwiperSlide } from 'swiper/react';

export const Obras = () => {
  return (
    <>
      <div className='grid grid-cols-1 mt-10 gap-2 md:gap-1 mb-10'>
        <h1 className='text-4xl text-center text-gray-800 font-bold m-2'>
          Obras
        </h1>
        <div>
          <ObraSwiper>
            <ObraFondoTexto />
            <ObraFondoTexto />
            <ObraFondoTexto />
          </ObraSwiper>
        </div>
        {/* <ObraFondoTexto ubicacion='end' key={1} /> */}

        {/* <ObraFondoTexto ubicacion='start' key={2} /> */}
        {/* <ObraFondoTexto ubicacion='end' key={3} /> */}
        {/* <ObraCard />

        <ObraCard />
        <ObraCard />
        <ObraCard /> */}
      </div>
    </>
  );
};

export default Obras;
