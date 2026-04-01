// // import Image from 'next/image';
// import Image from 'next/image';
// import HomePageSlider from './HomePageSlider';

// export const HomePage = () => {
//   return (
//     <div className='grid grid-cols-1 md:grid-cols-3 my-2 gap-2 '>
//       <div className='col-span-1'>
//         {/*slider-container*/}
//         {/* <Image
//           src={'/interiorCasa.jpeg'}
//           width={550}
//           height={550}
//           alt='Logo Amania Bio-Arquitectura'
//           className='object-cover px-1 md:px-0'
//           quality={100}
//           priority={true}
//         /> */}
//         <HomePageSlider />
//       </div>

//       <div className='text-gray-600 font-light ms-4 mt-5 me-5 col-span-2 '>
//         <h1 className='text-2xl mt-6'>Amania Bioarquitectura</h1>
//         <p className='mt-2'>
//           <span className='ms-5'>La </span> bioarquitectura es aquella
//           arquitectura en armonía con las personas y con el entorno
//           natural y que se inspira, recupera y mejora técnicas
//           tradicionales.
//         </p>
//         <p className='mt-2'>
//           La arquitectura es arte al servicio de las personas y del
//           planeta. Desde que el ser humano habita en este mundo,
//           existe la arquitectura.
//         </p>
//         <p className='mt-2'>
//           Y creemos que el papel que juega la arquitectura es vital
//           para asegurar un futuro sano de la sociedad y del planeta.
//         </p>
//         <p className='mt-2'>
//           Somos conscientes de que muchas de las nuevas técnicas de
//           construcción, implican una alta demanda de energía y que por
//           lo general sobrepasan la capacidad de renovación de los
//           recursos naturales, suponiendo un desequilibrio para los
//           ecosistemas.
//         </p>
//         <p className='mt-2'>
//           Por eso, y frente a esta realidad, optamos por la
//           bioarquitectura como forma de hacer arquitectura. Una
//           arquitectura que se sustenta en principios naturales y donde
//           edificación y ecosistema se integran de forma equilibrada.
//         </p>
//         <p className='mt-2'>
//           Buscamos que las construcciones respeten el estado natural
//           del medio ambiente y del lugar, utilizando los recursos con
//           coherencia de la forma más sostenible posible y que generen
//           espacios saludables para las personas.
//         </p>
//         <p className='mt-2'>
//           Para crear espacios en armonía con las personas debemos
//           pensar en generar{' '}
//           <span className='font-semibold'>espacios sanos</span>, y
//           atmosferas que creen emociones positivas.
//         </p>
//         {/* <p className='mt-2'>
//           <span>
//             <span className='ms-5'>Lorem</span> ipsum dolor sit amet
//             consectetur adipisicing elit. Ipsa nisi quae quam fuga
//             sapiente culpa voluptatem nobis, distinctio fugiat velit,
//             iste eaque adipisci corporis non molestiae. Cupiditate
//             sapiente asperiores obcaecati.
//           </span>
//         </p> */}
//         <div className='mt-18 mb-2 hidden md:block'>
//           <Image
//             src={'/favicon.ico.png'}
//             alt='Logo'
//             height={100}
//             width={100}
//             className='mx-auto object-center self-end logo'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { Autoplay, EffectFade } from 'swiper/modules';

const slides = [
  {
    img: '/techoCasa2.jpeg',
    title: 'Construcción Sustentable',
    desc: 'Diseñamos espacios eficientes y ecológicos',
  },
  {
    img: '/interiorCasa.jpeg',
    title: 'Diseño Interior',
    desc: 'Ambientes cálidos y funcionales',
  },
  {
    img: '/mesaYTecho.png',
    title: 'Arquitectura Natural',
    desc: 'Materiales nobles y técnicas modernas',
  },
];

export const HomePage = () => {
  return (
    <div className='relative w-full h-[85vh]'>
      <Swiper
        autoplay={{
          delay: 5500,
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
            <div className='relative w-full h-screen'>
              {/* Imagen de fondo */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className='object-contain'
                priority={i === 0}
              />

              {/* Overlay oscuro */}
              <div className='absolute inset-0 bg-black/10 rounded-md z-10' />

              {/* Texto */}
              <div className='absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 mb-48'>
                <h1 className='text-4xl md:text-6xl font-bold'>
                  {slide.title}
                </h1>
                <p className='mt-4 text-lg md:text-xl max-w-xl'>
                  {slide.desc}
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
