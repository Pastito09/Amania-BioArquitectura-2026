'use client';

import { useState } from 'react';

interface ServicioProps {
  title: string;
  description: string;
  image: string;
}

export const Servicio = ({
  title,
  description,
  image,
}: ServicioProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className='relative bg-cover bg-center flex items-center justify-center group cursor-pointer overflow-hidden'
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div className='absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300'></div>

      <div className='relative text-white text-center px-4 py-6'>
        <h2 className='text-2xl md:text-4xl font-bold transition-all duration-300 group-hover:scale-110'>
          {title}
        </h2>

        {/* botón */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className='mt-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300 border border-white px-4 py-1 text-sm'
        >
          Ver más
        </button>

        {/* descripción animada */}
        <div
          className={`origin-top transform transition-all duration-300 ${
            open
              ? 'scale-y-100 opacity-100 mt-3'
              : 'scale-y-0 opacity-0'
          }`}
        >
          <p className='text-sm'>{description}</p>
        </div>
      </div>
    </div>
  );
};
