import Image from 'next/image';

export const Nosotros = () => {
  return (
    <div className='md:h-[40vh] h-auto w-full flex flex-col-reverse md:flex-row ms-0.5 my-2 '>
      <div>
        <Image
          src='/Umepay_Aldea/aldea15.jpg'
          alt=''
          width={800}
          height={200}
        />
      </div>
      <div className='flex flex-col text-2xl gap-1 text-center text-gray-600'>
        <h2 className='my-5 text-5xl'>NOSOTROS</h2>
        <p className='text-lg text-gray-600 '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
          numquam a ipsum cum aperiam sequi asperiores fuga eaque
          magni! Repellat, natus enim! Voluptatum obcaecati possimus
          asperiores deleniti consequuntur a dolorem!
        </p>
        <p className='text-lg text-gray-700 '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
          aut dolore natus voluptatum voluptas? Maxime possimus, iste
          esse explicabo nulla earum soluta, magni sunt aliquid
          nesciunt eligendi qui eos id.{' '}
        </p>
        <p className='text-lg text-gray-700 '>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Hic maxime nihil veritatis velit fuga, repellat corrupti
          itaque impedit. Perspiciatis excepturi et sapiente cum
          eligendi praesentium alias qui doloribus voluptatum fugit?
        </p>
      </div>
    </div>
  );
};
