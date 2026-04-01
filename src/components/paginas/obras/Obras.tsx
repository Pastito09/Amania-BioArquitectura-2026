import ObraCard from './ObraCard';

export const Obras = () => {
  return (
    <>
      <div className='grid grid-cols1 md:grid-cols-2 mt-10 gap-2 md:gap-10 mb-10'>
        <ObraCard />

        <ObraCard />
        <ObraCard />
        <ObraCard />
      </div>
    </>
  );
};

export default Obras;
