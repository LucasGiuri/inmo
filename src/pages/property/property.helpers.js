import React from 'react';
import Prismic from '@prismicio/client';
import NoPhoto from '../../assets/no-photo.jpeg';

const apiEndpoint = 'https://inmo.cdn.prismic.io/api/v2';
const Client = Prismic.client(apiEndpoint);

export const fetchData = async (endpoint) => await Client.query(
  Prismic.Predicates.at('document.type', endpoint)
);

export const photoConverter = (img) => {
  if (!img) return;
  const { url, alt } = img;
  return { src: url || NoPhoto, alt };
};

export const convertData = (obj) => {
  const {
    ambients,
    antiquity,
    apartments_per_floor,
    bath,
    between_streets,
    building_side,
    cochera,
    covered_surface,
    expenses,
    elevators,
    floor,
    floors,
    free_backyard,
    heating,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    is_in_usd,
    map,
    m2,
    orientation,
    price,
    rent,
    professional,
    title,
    tipo_de_cochera,
    street,
    rooms,
  } = obj;

  const newTitle = title[0].text;

  const allPhotos = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
  ];

  return {
    title: newTitle,
    m2,
    m2Covered: covered_surface,
    orientation,
    between_streets,
    building_side,
    cochera,
    price: is_in_usd ? `U$S ${price.toLocaleString()}` : `$${price.toLocaleString()}`,
    rent,
    professional,
    details: [
      [
        { key: 'Alquiler mensual', value: rent },
        { key: 'Ambientes', value: ambients },
        { key: 'Antiguedad', value: `${antiquity} años` },
        { key: 'Departamentos por piso', value: apartments_per_floor },
        { key: 'Expensas', value: `$${expenses}` },
        { key: 'Ascensores', value: elevators }
      ],
      [
        { key: 'Piso', value: floor },
        { key: 'Pisos', value: floors },
        { key: 'Superficie descubierta', value: `${free_backyard}m2` },
        { key: 'Tipo de calefacción', value: heating },
        { key: 'Tipo de garaje', value: tipo_de_cochera },
        { key: 'Apto profesional', value: professional }
      ]
    ],
    photos: allPhotos,
    map,
    baths: bath,
    street,
    rooms,
  }
};
