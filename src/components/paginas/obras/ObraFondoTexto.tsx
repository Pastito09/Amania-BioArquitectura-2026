import Image from 'next/image';

interface ObraFondoTextoProps {
  title: string;
  description: string;
  imagenes: string[];
  href?: string;
}

export const ObraFondoTexto = ({
  title,
  description,
  imagenes,
  href,
}: ObraFondoTextoProps) => {
  return (
    <div className='relative h-full w-full overflow-hidden '>
      <div className='absolute inset-0 block md:hidden'>
        <Image
          src={imagenes[0]}
          alt=''
          fill
          className='object-cover'
        />
      </div>

      <div className='absolute gap-0.5 inset-0 hidden md:grid md:grid-cols-3'>
        <div className='relative'>
          <Image
            src={imagenes[0]}
            alt=''
            fill
            className='object-cover'
          />
        </div>

        <div className='relative'>
          <Image
            src={imagenes[1]}
            alt=''
            fill
            quality={100}
            className='object-cover'
          />
        </div>

        <div className='relative'>
          <Image
            src={imagenes[2]}
            alt=''
            fill
            className='object-cover'
          />
        </div>
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/30' />

      {/* Texto */}
      <div className='relative z-10 flex h-full items-end p-6 justify-end'>
        <div className='max-w-sm text-white text-center'>
          <h2 className='text-2xl md:text-3xl  font-bold'>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
