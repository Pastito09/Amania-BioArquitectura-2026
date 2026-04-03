import { dataObras } from '@/data/data-obras/dataObras';
import { ObraSwiper } from './obra-slider/obra-swiper/ObraSwiper';

import { ObraFondoTexto } from './ObraFondoTexto';

export const Obras = () => {
  return (
    <>
      <div className='grid grid-cols-1 mt-10 gap-2 md:gap-1 mb-10'>
        <h1 className='text-4xl text-center text-gray-700 font-bold m-2'>
          OBRAS
        </h1>
        <div>
          <ObraSwiper>
            {dataObras.map((obra) => (
              <ObraFondoTexto
                key={obra.id}
                title={obra.title}
                description={obra.description}
                imagenes={obra.imagenes}
              />
            ))}
          </ObraSwiper>
        </div>
      </div>
    </>
  );
};

export default Obras;
