import { Servicio } from './servicio/Servicio';

const servicios = [
  {
    titulo: 'ARQUITECTURA',
    descripcion: 'Diseño de espacios únicos',
    imagen: '/Umepay_Aldea/aldea10.jpg',
  },
  {
    titulo: 'BIOCONSTRUCCIÓN',
    descripcion: 'Materiales sustentables',
    imagen: '/Umepay_Aldea/aldea9.jpg',
  },
  {
    titulo: 'PLANOS Y PROYECTOS',
    descripcion: 'Estética y funcionalidad',
    imagen: '/Umepay_Aldea/aldea22.jpg',
  },
  {
    titulo: 'PAISAJISMO',
    descripcion: 'Conexión con la naturaleza',
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
