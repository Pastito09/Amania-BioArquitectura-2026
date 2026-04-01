import Image from 'next/image';

interface ServicioProps {
  title: string;
  description: string;
  image: string;
  src?: string;
}

export const Servicio = ({
  title = 'Servicio',
  description = 'Descripción del servicio',
  image = '/techoCasa2.jpeg',
  src,
}: ServicioProps) => {
  return (
    <>
      <div
        className='relative bg-cover bg-center flex items-center justify-center-safe'
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* overlay oscuro */}
        <div className='absolute inset-0 bg-black/40'></div>

        {/* contenido */}
        <div className='relative text-white text-center'>
          <h2 className='text-2xl md:text-4xl font-bold'>{title}</h2>
          <p className='text-md pt-1'>{description}</p>
        </div>
      </div>
    </>
  );
};
