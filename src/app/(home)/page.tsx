import HomePage from '@/components/paginas/home-page/HomePage';
import Obras from '@/components/paginas/obras/Obras';
import TecnicasConstructivas from '@/components/paginas/tecnicas-constructivas/TecnicasConstructivas';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <hr />
      <HomePage />
      <hr />
      <Obras />
      <TecnicasConstructivas />
    </div>
  );
}
