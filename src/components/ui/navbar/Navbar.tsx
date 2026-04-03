'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import { IoHomeOutline, IoMenu } from 'react-icons/io5';
import { NavbarCol } from './NavbarCol';
import { useNavbarStore } from '@/store/navbar-store';

const paginas = [
  {
    nombre: 'NOSOTROS',
    href: '#nosotros',
  },
  {
    nombre: 'SERVICIOS',
    href: '#servicios',
  },
  {
    nombre: 'OBRAS',
    href: '#obras',
  },
  {
    nombre: 'CONTACTO',
    href: '#contacto',
  },
];

export const Navbar = () => {
  const isOpen = useNavbarStore((state) => state.isMenuOpen);
  const closeMenu = useNavbarStore((state) => state.closeMenu);
  const toggleMenu = useNavbarStore((state) => state.toggleMenu);

  const id = useId();
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setScrollDirection('down'); // Al hacer scroll hacia abajo, ocultamos la barra
      } else {
        setScrollDirection('up'); // Al hacer scroll hacia arriba, mostramos la barra
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let isInsideSection = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // 👇 detecta si la sección está en el centro de la pantalla
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          isInsideSection = true;
        }
      });

      // 👇 si no estás en ninguna sección "principal"
      if (!isInsideSection) {
        window.history.replaceState(null, '', '/');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`bg-gray-100/90 fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ${
        scrollDirection === 'down'
          ? '-translate-y-full'
          : 'translate-y-0'
      }`}
    >
      <nav className=' w-full flex justify-between px-5 h-auto'>
        <div className=' flex items-center'>
          <Link href={'/'}>
            <Image
              src={'/Logo.png'}
              alt='Logo Amania Bio-Arquitectura'
              width={130}
              height={100}
              className=''
              onClick={closeMenu}
            />
          </Link>
        </div>
        <div className='flex flex-wrap justify-items-center items-center gap-8 pr-2 mt-5'>
          {paginas.map(({ nombre, href }) => (
            <div className='hidden md:block' key={`${id}-${nombre}`}>
              <Link
                href={href}
                className='text-lg font-medium antialised text-gray-700/75 hover:text-gray-700'
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();

                  setTimeout(() => {
                    window.location.hash = href;
                  }, 0);
                }}
              >
                {nombre}
              </Link>
            </div>
          ))}
        </div>
        <div className='flex items-center mt-4'>
          <button className='block md:hidden' onClick={toggleMenu}>
            <IoMenu
              size={25}
              className='text-gray-600/75 hover:text-gray-700'
            />
          </button>
          <Link href={'/'} className='hidden md:block'>
            <IoHomeOutline
              size={25}
              className='text-gray-600/75 hover:text-gray-700'
            />
          </Link>
        </div>
      </nav>
      {isOpen && (
        <div className={`block md:hidden `}>
          <NavbarCol paginas={paginas} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
