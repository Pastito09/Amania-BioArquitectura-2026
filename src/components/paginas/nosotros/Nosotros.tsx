import Image from 'next/image';

export const Nosotros = () => {
  return (
    <div className='md:h-[40vh] h-auto w-full flex flex-col md:flex-row ms-0.5 my-2 '>
      <div className='flex flex-col text-2xl gap-1 text-center text-gray-600 md:w-[60%]'>
        <h2 className='my-5 text-4xl'>
          QUE HACEMOS EN AMANIA BIOARQUITECTURA
        </h2>
        <p className='md:text-lg text-sm text-gray-600 p-1'>
          Soy <b>Ana Zienka Hogan</b>, arquitecta de la Universidad de
          Buenos Aires. Trabajo en la profesion hace 20 años,
          integrando estudios de primer nivel en Buenos Aires y desde
          hace 10 años, como arquitecta independiente, acompañando a
          mis clientes desde el inicio del proyecto, hasta el final de
          obra. Me especializo en BIOARQUITECTURA desarrollando
          proyectos, planos, construccion y relevamientos en todo el
          valle de Calamuchita, Cordoba. Mi forma de trabajar se basa
          en valores integrales, que incluyen la forma en la que vivo,
          me alimento y educo a mis hijos. Creo en un estilo de vida
          saludable y consciente que pone al medio ambiente y al
          bienestar de las personas como prioridad. Por eso elijo
          trabajar con materiales naturales, y diseño hogares usando
          los principios de la Bioclimatica, para generar viviendas
          confortables y saludables para el ser humano y de eficiencia
          energetica
        </p>
      </div>
      <div className='justify-center flex items-center w-full md:w-[40%]'>
        <Image
          src='/Umepay_Aldea/aldea15.jpg'
          alt=''
          width={500}
          height={500}
          className='object-cover h-full'
        />
      </div>
    </div>
  );
};
