import HomePage from '@/components/paginas/home-page/HomePage';
import Obras from '@/components/paginas/obras/Obras';
import Servicios from '@/components/paginas/servicios/Servicios';
import Contacto from '@/components/paginas/contacto/Contacto';
import { Nosotros } from '@/components/paginas/nosotros/Nosotros';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className=''>
        <HomePage />
      </div>

      <div id='nosotros'>
        <Nosotros />
      </div>
      <div id='servicios' className='p-1 mt-2'>
        <Servicios />
      </div>
      <div id='obras'>
        <Obras />
      </div>

      <div id='contacto'>
        <Contacto />
      </div>
    </div>
  );
}
