'use client';
import { useNavbarStore } from '@/store/navbar-store';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import {
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMail,
} from 'react-icons/io5';

const linksContacto = [
  {
    href: 'https://www.instagram.com/amania.arquitectura/',
    title: 'instagram.com/amania.arquitectura',
    io: <IoLogoInstagram size={35} className='my-auto' />,
  },
  {
    href: 'https://www.facebook.com/Amania.bioarquitectura',
    title: 'facebook.com/Amania.bioarquitectura',
    io: <IoLogoFacebook size={35} />,
  },
  {
    href: 'mailto:amania.arquitectura@gmail.com',
    title: 'amania.arquitectura@gmail.com',
    io: <IoMail size={35} />,
  },
  {
    href: 'https://wa.me/541160272552',
    title: '+54 9 116-027-2552',
    io: <IoLogoWhatsapp size={35} className='justify-self-start' />,
  },
  {
    href: 'https://maps.app.goo.gl/4DAtnFsRNV5u3yKg8',
    title: 'Av. de los Comechingones, X5199 Villa Amancay, Córdoba',
    io: <IoLocationOutline size={35} />,
  },
];

export const Contacto = () => {
  const closeMenu = useNavbarStore((state) => state.closeMenu);

  return (
    <div
      className='flex flex-col-reverse p-1 md:p-0 md:flex-row w-full justify-center text-center bg-gray-800 mt-auto md:pb-1'
      onClick={closeMenu}
    >
      <div className='w-full h-full p-1'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5248.7067565689285!2d-64.57323382460777!3d-32.18635417949866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d297913fdf217b%3A0x5c8863f243321d69!2sAmania%20Bioarquitectura!5e0!3m2!1ses-419!2sar!4v1775078393509!5m2!1ses-419!2sar'
          width='100%'
          height='600'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='mx-auto my-auto'>
          <Link href={'/'}>
            <Image
              src={'/Logo.png'}
              height={100}
              width={300}
              alt='Logo'
              className='mt-5'
            />
          </Link>
        </div>

        <div className='my-2 mb-5 gap-2 flex flex-col justify-center items-center w-full h-full'>
          {linksContacto.map(({ href, title, io }) => (
            <div className='flex justify-center' key={href}>
              <Link
                href={href}
                className='flex gap-2 m-1 text-gray-300 hover:text-gray-400'
                target='_blank'
                rel='noopener noreferrer'
              >
                {io}
                <span className='text-xl mt-1'>{title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacto;
