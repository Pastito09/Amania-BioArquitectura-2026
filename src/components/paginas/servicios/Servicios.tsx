import { Servicio } from './servicio/Servicio';

const servicios = [
  {
    titulo: 'BIOARQUITECTURA',
    descripcion: [
      'Proyectos',
      'Documentación de obra',
      'Planos municipales',
      'Técnicas constructivas con materiales naturales',
    ],
    imagen: '/Umepay_Aldea/aldea10.jpg',
  },
  {
    titulo: 'BIOCLIMÁTICA',
    descripcion: [
      'Asesoramiento',
      'Sistemas de calefacción a leña',
      'Sistemas de calefacción solar pasiva',
      'Sistemas de refrigeración por convección',
    ],
    imagen: '/Umepay_Aldea/aldea9.jpg',
  },
  {
    titulo: 'CONSTRUCCIÓN',
    descripcion: [
      'Construcción “LLave en mano”',
      'Conducción técnica de obra',
      'Administración de obra',
    ],
    imagen: '/Umepay_Aldea/aldea22.jpg',
  },
  {
    titulo: 'RELEVAMIENTOS',
    descripcion: [
      'Relevamiento de obra construida',
      'Presentación de planos',
      'Gestiones en el municipio y en el colegio de arquitectos',
    ],
    imagen: '/Umepay_Aldea/aldea30.jpg',
  },
];

export const Servicios = () => {
  return (
    <div className='min-h-[50vh] grid grid-cols-1 md:grid-cols-2 gap-0.5'>
      {servicios.map(({ titulo, descripcion, imagen }, i) => (
        <Servicio
          title={titulo}
          description={descripcion}
          image={imagen}
          key={i}
        />
      ))}
    </div>
  );
};
export default Servicios;
