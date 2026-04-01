import TecnicaCard from './TecnicaCard';

export const TecnicasConstructivas = () => {
  return (
    <>
      <div className='grid grid-cols-1 mt-0 md:mt-5 gap-2 md:gap-5'>
        <h1 className='text-xl md:text-3xl mb-2 font-semibold antialiased text-gray-600 text-center'>
          Las tecnicas constructivas con las que trabajamos
          diariamente
        </h1>
        <hr />
        <TecnicaCard />
        <hr />
        <TecnicaCard />
      </div>
    </>
  );
};

export default TecnicasConstructivas;
