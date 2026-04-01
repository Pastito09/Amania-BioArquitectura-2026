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

interface Links {
  href: string;
  title: string;
  io: ReactElement;
}

const linksContacto: Links[] = [
  {
    href: 'https://www.instagram.com/amania.arquitectura/',
    title: 'instagram.com/amania.arquitectura',
    io: <IoLogoInstagram size={15} className='my-auto' />,
  },
  {
    href: 'https://www.facebook.com/Amania.bioarquitectura',
    title: 'facebook.com/Amania.bioarquitectura',
    io: <IoLogoFacebook size={16} />,
  },
  {
    href: 'mailto:amania.arquitectura@gmail.com',
    title: 'amania.arquitectura@gmail.com',
    io: <IoMail size={15} />,
  },
  {
    href: 'https://wa.me/541160272552',
    title: '+54 9 116-027-2552',
    io: <IoLogoWhatsapp size={15} className='justify-self-start' />,
  },
  {
    href: 'https://maps.app.goo.gl/4DAtnFsRNV5u3yKg8',
    title: 'Av. de los Comechingones, X5199 Villa Amancay, Córdoba',
    io: <IoLocationOutline size={15} />,
  },
];

export const Footer = () => {
  const closeMenu = useNavbarStore((state) => state.closeMenu);

  return (
    <div
      className='flex w-full justify-center text-center text-sm md:text-xs bg-gray-800 mt-auto'
      onClick={closeMenu}
    >
      <div className='flex flex-col'>
        <div className='mx-auto my-auto'>
          <Link href={'/'}>
            <Image
              src={'/Logo.png'}
              height={10}
              width={80}
              alt='Logo'
              className='mt-5'
            />
          </Link>
        </div>

        <div className='w-full h-px bg-gray-200 mt-8 mb-3 ' />

        <div className='my-2 mb-5'>
          <div className='my-2 text-gray-300'>
            <span>Contacto:</span>
          </div>

          {linksContacto.map(({ href, title, io }) => (
            <div className='flex justify-center' key={href}>
              <Link
                href={href}
                className='flex gap-2 m-1 text-gray-300 hover:text-gray-400'
                target='_blank'
                rel='noopener noreferrer'
              >
                {io}
                <span>{title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
