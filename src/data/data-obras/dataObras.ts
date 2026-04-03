interface Obra {
  id: number | string;
  title: string;
  description: string;
  imagenes: string[];
  href?: string;
}

export const dataObras: Obra[] = [
  {
    id: 1,
    title: 'SAN JOSÉ',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore sequi repudiandae dicta aliquam eligendi quas praesentium. Sequi, nulla velit repudiandae optio atque, ducimus, non nihil minima odio porr    o eos?',
    imagenes: [
      '/San_Jose/sanjose1.jpg',
      '/San_Jose/sanjose2.jpg',
      '/San_Jose/sanjose3.jpg',
      '/San_Jose/sanjose4.jpg',
    ],
    href: '/obra1',
  },
  {
    id: 2,
    title: 'ACACIAS',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore sequi repudiandae dicta aliquam eligendi quas praesentium. Sequi, nulla velit repudiandae optio atque, ducimus, non nihil minima odio porr    o eos?',
    imagenes: [
      '/Umepay_Acacias/acacias1.jpg',
      '/Umepay_Acacias/acacias2.jpg',
      '/Umepay_Acacias/acacias3.jpg',
      '/Umepay_Acacias/acacias4.jpg',
      '/Umepay_Acacias/acacias5.jpg',
      '/Umepay_Acacias/acacias6.jpg',
      '/Umepay_Acacias/acacias7.jpg',
      '/Umepay_Acacias/acacias8.jpg',
      '/Umepay_Acacias/acacias9.jpg',
    ],
    href: '/obras/obra2',
  },
  {
    id: 3,
    title: 'ALDEA',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore sequi repudiandae dicta aliquam eligendi quas praesentium. Sequi, nulla velit repudiandae optio atque, ducimus, non nihil minima odio porr    o eos?',
    imagenes: [
      '/Umepay_Aldea/aldea1.jpg',
      '/Umepay_Aldea/aldea2.jpg',
      '/Umepay_Aldea/aldea3.jpg',
      '/Umepay_Aldea/aldea4.jpg',
      '/Umepay_Aldea/aldea5.jpg',
      '/Umepay_Aldea/aldea6.jpg',
      '/Umepay_Aldea/aldea7.jpg',
      '/Umepay_Aldea/aldea8.jpg',
      '/Umepay_Aldea/aldea9.jpg',
      '/Umepay_Aldea/aldea10.jpg',
      '/Umepay_Aldea/aldea11.jpg',
      '/Umepay_Aldea/aldea12.jpg',
      '/Umepay_Aldea/aldea13.jpg',
      '/Umepay_Aldea/aldea14.jpg',
      '/Umepay_Aldea/aldea15.jpg',
      '/Umepay_Aldea/aldea16.jpg',
      '/Umepay_Aldea/aldea17.jpg',
      '/Umepay_Aldea/aldea18.jpg',
      '/Umepay_Aldea/aldea19.jpg',
      '/Umepay_Aldea/aldea20.jpg',
      '/Umepay_Aldea/aldea21.jpg',
      '/Umepay_Aldea/aldea22.jpg',
      '/Umepay_Aldea/aldea23.jpg',
      '/Umepay_Aldea/aldea24.jpg',
      '/Umepay_Aldea/aldea25.jpg',
      '/Umepay_Aldea/aldea26.jpg',
      '/Umepay_Aldea/aldea27.jpg',
      '/Umepay_Aldea/aldea28.jpg',
      '/Umepay_Aldea/aldea29.jpg',
      '/Umepay_Aldea/aldea30.jpg',
      '/Umepay_Aldea/aldea31.jpg',
      '/Umepay_Aldea/aldea32.jpg',
    ],

    href: '/obras/obra3',
  },
];

// {
//     title: "Título 1",
//     description: "Descripción 1",
//     imagenes: ["/obras/Obra1.jpeg"],
//     href: "/obras/obra1"
// }
