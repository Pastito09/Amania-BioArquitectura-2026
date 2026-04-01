import Image from 'next/image';

const images = [
  '/techoCasa2.jpeg',
  '/interiorCasa.jpeg',
  '/mesaYTecho.png',
  '/techoCasa.jpeg',
];

export const ObraFondoTexto = () => {
  return (
    <div className='relative h-[60vh] w-full bg-black overflow-hidden '>
      {/* Fondo */}
      {/* 📱 MOBILE: solo 1 imagen */}
      <div className='absolute inset-0 block md:hidden'>
        <Image src={images[0]} alt='' fill className='object-cover' />
      </div>

      {/* 💻 DESKTOP: 3 imágenes */}
      <div className='absolute inset-0 hidden md:grid md:grid-cols-3'>
        <div className='relative'>
          <Image
            src={images[0]}
            alt=''
            fill
            className='object-cover'
          />
        </div>

        <div className='relative'>
          <Image
            src={images[1]}
            alt=''
            fill
            quality={100}
            className='object-cover'
          />
        </div>

        <div className='relative'>
          <Image
            src={images[3]}
            alt=''
            fill
            className='object-cover'
          />
        </div>
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/30' />

      {/* Texto */}
      <div className='relative z-10 flex h-full items-center justify-end p-6'>
        <div className='max-w-sm text-white'>
          <h2 className='text-2xl md:text-3xl font-bold'>Título</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Tempora dolore sequi repudiandae dicta aliquam eligendi
            quas praesentium. Sequi, nulla velit repudiandae optio
            atque, ducimus, non nihil minima odio porro eos?
          </p>
        </div>
      </div>
    </div>
  );
};
