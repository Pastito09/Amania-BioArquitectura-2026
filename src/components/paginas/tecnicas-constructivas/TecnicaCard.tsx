import Image from 'next/image';

export const TecnicaCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 '>
      <div className='mb-2 overflow:hidden flex items-center justify-center col-span-1'>
        <Image
          src={'/techoCasa.jpeg'}
          alt=''
          height={100}
          width={500}
          className='object-contain rounded-md '
        />
      </div>
      <div className='mx-1 md:mx-24 mt-8 flex-col text-sm col-span-2 text-gray-600'>
        <h1 className='text-lg ms-1'>
          <span>Técnica Constructiva </span>
        </h1>
        <p className='mt-1 mx-4'>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam voluptas, dolores beatae aliquid delectus rerum at
            dicta eum tenetur blanditiis maxime, sapiente officia
            dolorum libero! In ratione itaque optio quasi.
          </span>
        </p>
        <h2 className='ms-2 mt-3 text-sm font-semibold'>
          <span>Detalle de la técnica</span>
        </h2>
        <p className='mt-1 mx-4'>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas quaerat facere ab amet quisquam expedita dolorum
            qui provident error eaque, repudiandae veritatis! Hic
            sequi impedit reprehenderit nostrum tenetur praesentium
            molestias.
          </span>
        </p>
        <h2 className='ms-2 mt-3 text-sm font-semibold'>
          <span>Beneficios ambientales</span>
        </h2>
        <p className='mt-1 mx-4'>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas quaerat facere ab amet quisquam expedita dolorum
            qui provident error eaque, repudiandae veritatis! Hic
            sequi impedit reprehenderit nostrum tenetur praesentium
            molestias.
          </span>
        </p>
      </div>
    </div>
  );
};

export default TecnicaCard;
