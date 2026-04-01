import FichaTecnica from './ficha-tecnica/FichaTecnica';
import ObraSlider from './obra-slider/ObraSlider';

interface Props {
  params: {
    obra: string;
  };
}

export const ObraPage = ({ params }: Props) => {
  console.log(params.obra);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className='md:col-span-1'>
        <ObraSlider />
      </div>
      <div className='md:col-span-2 mx-4 md:ms-8 text-center mt-5'>
        <h1 className='text-xl font-sans font-semibold text-green-300 antialiased'>
          Detalles de la Obra:
        </h1>
        <hr className='w-3/4 mx-auto my-4' />
        <FichaTecnica />
      </div>
    </div>
  );
};

export default ObraPage;
