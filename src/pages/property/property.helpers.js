import React from "react";
import Prismic from "@prismicio/client";
import NoPhoto from "../../assets/no-photo.jpeg";

const apiEndpoint = "https://inmo.cdn.prismic.io/api/v2";
const Client = Prismic.client(apiEndpoint);

export const fetchData = async (endpoint) =>
  await Client.query(Prismic.Predicates.at("document.type", endpoint ), { pageSize: 1000 } );

export const photoConverter = (img) => {
  if (!img) return;
  const { url, alt } = img;
  return { src: url || NoPhoto, alt };
};

export const convertData = (obj) => {
  const {
    alquiler,
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
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    map,
    m2,
    number,
    orientation,
    price,
    rent_price,
    professional,
    title,
    tipo_de_cochera,
    street_name,
    rooms,
    description,
    venta,
  } = obj;

  const newTitle = title[0].text;

  const allPhotos = [
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
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
  ];

  return {
    title: newTitle,
    description: description && description.length ? description[0].text : '',
    m2,
    m2Covered: covered_surface,
    orientation,
    between_streets,
    building_side,
    cochera: cochera ? "SI" : "NO",
    price: venta ? `VENTA U$S ${price.toLocaleString()}` : price,
    rent_price: alquiler ? `ALQUILER ARS ${rent_price.toLocaleString()}` : rent_price,
    details: [
      [
        { key: "Ambientes", value: ambients },
        { key: "Antiguedad", value: `${antiquity} años` },
        { key: "Departamentos por piso", value: apartments_per_floor },
        { key: "Expensas", value: expenses === 0 ? 'No tiene' : `${expenses}` },
        { key: "Ascensores", value: elevators === 0 ? 'No tiene' : `${elevators}` },
        { key: "Superficie descubierta", value: `${free_backyard}m2` },
      ],
      [
        { key: "Piso", value: floor === 0 ? 'PB' : `${floor}` },
        { key: "Pisos", value: floors },
        { key: "Tipo de calefacción", value: heating && heating.length ? heating[0].text : '' },
        { key: "Tipo de garaje", value: tipo_de_cochera },
        { key: "Apto profesional", value: professional ? "SI" : "NO" },
        { key: "Disposición", value: building_side ? "Frente" : "Contrafrente" },
      ],
    ],
    photos: allPhotos,
    map,
    number,
    baths: bath,
    street_name: street_name && street_name.length ? street_name[0].text : '',
    rooms,
  };
};
