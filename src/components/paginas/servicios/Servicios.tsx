import { Servicio } from './servicio/Servicio';

const servicios = [
  {
    titulo: 'Arquitectura',
    descripcion: 'Diseño de espacios únicos',
    imagen: '/techoCasa2.jpeg',
  },
  {
    titulo: 'BioConstrucción',
    descripcion: 'Materiales sustentables',
    imagen: '/techoCasa.jpeg',
  },
  {
    titulo: 'Interiorismo',
    descripcion: 'Estética y funcionalidad',
    imagen: '/interiorCasa.jpeg',
  },
  {
    titulo: 'Paisajismo',
    descripcion: 'Conexión con la naturaleza',
    imagen: '/mesaYTecho.png',
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
