import { useNavbarStore } from '@/store/navbar-store';
import Link from 'next/link';

interface paginas {
  nombre: string;
  href: string;
}
interface Props {
  paginas: paginas[];
}

export const NavbarCol = ({ paginas }: Props) => {
  const closeMenu = useNavbarStore((state) => state.closeMenu);

  return (
    <nav className='flex flex-col gap-1 text-center'>
      {paginas.map((page) => (
        <Link
          key={page.nombre}
          href={page.href}
          className='text-lg font-medium antialised text-gray-300  hover:text-gray-400'
          onClick={closeMenu}
        >
          {page.nombre}
        </Link>
      ))}
      <Link
        href={'/'}
        className='text-lg font-medium mb-1 antialised text-gray-300  hover:text-gray-400'
        onClick={closeMenu}
      >
        Home
      </Link>
    </nav>
  );
};
