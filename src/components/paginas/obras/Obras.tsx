import ObraCard from './ObraCard';
import { ObraFondoTexto } from './ObraFondoTexto';

export const Obras = () => {
  return (
    <>
      <div className='grid grid-cols-1 mt-10 gap-2 md:gap-1 mb-10'>
        <h1 className='text-4xl text-center text-gray-800 font-bold'>
          Obras:
        </h1>
        <ObraFondoTexto />
        <ObraFondoTexto />
        <ObraFondoTexto />
        {/* <ObraCard />

        <ObraCard />
        <ObraCard />
        <ObraCard /> */}
      </div>
    </>
  );
};

export default Obras;
